import test from "node:test";
import assert from "node:assert/strict";
import { traceLoop } from "../starter/loop.mjs";

test("ascending trace uses an inclusive bound and exact running totals", () => {
  const trace = traceLoop(0, 5, 2);
  assert.deepEqual(
    trace.rows.map((row) => row.value),
    ["0", "2", "4"],
  );
  assert.equal(trace.rows.at(-1).total, "6");
  assert.equal(trace.nextValue, "6");
  assert.equal(trace.completed, true);
});
test("descending traces use the same contract", () => {
  assert.deepEqual(
    traceLoop(5, 0, -2).rows.map((row) => row.value),
    ["5", "3", "1"],
  );
});
test("equal endpoints produce one iteration for either step direction", () => {
  assert.equal(traceLoop(4, 4, 1).rows.length, 1);
  assert.equal(traceLoop(4, 4, -1).rows.length, 1);
});
test("zero and incorrect step directions are rejected", () => {
  assert.throws(() => traceLoop(0, 10, 0), /zero step/);
  assert.throws(() => traceLoop(0, 10, -1), /toward/);
  assert.throws(() => traceLoop(10, 0, 1), /toward/);
});
test("large traces stop at the stated bound and report truncation", () => {
  const trace = traceLoop(0, 5000, 1);
  assert.equal(trace.rows.length, 1000);
  assert.equal(trace.completed, false);
  assert.equal(trace.nextValue, "1000");
  assert.throws(() => traceLoop(0, 5, 1, 1001), /trace limit/);
});
test("invalid and unsafe integer inputs are rejected", () => {
  for (const value of [NaN, Infinity, 1.2, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => traceLoop(value, 10, 1), /safe whole/);
  }
});
test("totals remain exact beyond the Number safe integer range", () => {
  const trace = traceLoop(
    Number.MAX_SAFE_INTEGER - 1,
    Number.MAX_SAFE_INTEGER,
    1,
  );
  assert.equal(trace.rows.at(-1).total, "18014398509481981");
  assert.equal(trace.completed, true);
});
