const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const raw = document.querySelector('#values').value.trim();
  const tokens = raw.split(/[\s,]+/).filter(Boolean);
  const numbers = tokens.map(Number);
  const status = document.querySelector('#status');
  const result = document.querySelector('#result');
  if (!tokens.length || tokens.length > 1000 || numbers.some(value => !Number.isFinite(value))) {
    status.textContent = 'Enter 1 to 1,000 finite numbers, separated by commas or spaces.';
    result.textContent = '';
    return;
  }
  let output;
  switch (document.querySelector('#operation').value) {
    case 'unique': output = [...new Set(numbers)]; break;
    case 'sort': output = [...numbers].sort((a, b) => a - b); break;
    case 'double': output = numbers.map(value => value * 2); break;
    default: {
      const sum = numbers.reduce((total, value) => total + value, 0);
      output = { count: numbers.length, sum, mean: sum / numbers.length };
    }
  }
  const numericValues = Array.isArray(output) ? output : Object.values(output);
  if (numericValues.some(value => !Number.isFinite(value))) {
    status.textContent = 'These values overflow JavaScript arithmetic. Try smaller numbers.';
    result.textContent = '';
    return;
  }
  status.textContent = `Processed ${numbers.length} values.`;
  result.textContent = JSON.stringify(output, null, 2);
});
