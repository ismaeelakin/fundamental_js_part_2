export function traceLoop(start, end, step, maxSteps = 1000) {
  if (![start, end, step].every(Number.isSafeInteger)) {
    throw new Error("Start, end and step must be safe whole numbers.");
  }
  if (step === 0) throw new Error("A zero step never advances the loop.");
  if (start !== end && Math.sign(end - start) !== Math.sign(step)) {
    throw new Error("The step must move from the start toward the end.");
  }
  if (!Number.isInteger(maxSteps) || maxSteps < 1 || maxSteps > 1000) {
    throw new Error("The trace limit must be between 1 and 1,000 iterations.");
  }
  let value = BigInt(start);
  const bound = BigInt(end);
  const increment = BigInt(step);
  const continues = (current) =>
    step > 0 ? current <= bound : current >= bound;
  const rows = [];
  let total = 0n;
  while (continues(value) && rows.length < maxSteps) {
    total += value;
    rows.push({
      iteration: rows.length + 1,
      value: value.toString(),
      total: total.toString(),
    });
    value += increment;
  }
  return {
    rows,
    completed: !continues(value),
    nextValue: value.toString(),
    limit: maxSteps,
  };
}
