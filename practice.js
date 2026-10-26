import { traceLoop } from "./loop.mjs";
const form = document.querySelector("form");
const status = document.querySelector("#status");
const rows = document.querySelector("#rows");
const download = document.querySelector("#download");
let current = null;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  rows.replaceChildren();
  download.hidden = true;
  current = null;
  document.querySelector("#summary").textContent = "";
  document.querySelector("#condition").textContent = "";
  try {
    const values = ["start", "end", "step"].map((id) => {
      const raw = document.getElementById(id).value.trim();
      if (!raw) throw new Error("Fill in start, end and step.");
      return Number(raw);
    });
    current = traceLoop(...values);
    document.querySelector("#condition").textContent =
      `for (let i = ${values[0]}; i ${values[2] > 0 ? "<=" : ">="} ${values[1]}; i += ${values[2]})`;
    for (const row of current.rows.slice(0, 100)) {
      const tr = document.createElement("tr");
      for (const value of [row.iteration, row.value, row.total]) {
        const td = document.createElement("td");
        td.textContent = String(value);
        tr.append(td);
      }
      rows.append(tr);
    }
    status.textContent = current.completed
      ? `Finished after ${current.rows.length} iterations.`
      : "Stopped at the 1,000-iteration trace limit. The loop would continue.";
    document.querySelector("#summary").textContent =
      `Next counter: ${current.nextValue}. Showing ${Math.min(100, current.rows.length)} of ${current.rows.length} traced iterations.`;
    download.hidden = false;
  } catch (error) {
    status.textContent =
      error instanceof Error ? error.message : "Could not trace this loop.";
  }
});
download.addEventListener("click", () => {
  if (!current) return;
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(current, null, 2)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "loop-trace.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
