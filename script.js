//your JS code here. If required.
// ── Calculator Logic ──────────────────────────────────────────
document.getElementById('calculate').addEventListener('click', () => {
  const num1     = parseFloat(document.getElementById('num1').value);
  const num2     = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultEl = document.getElementById('result');

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    resultEl.textContent = '⚠️ Please enter both numbers!';
    return;
  }

  let result;

  switch (operator) {
    case '+': result = num1 + num2;               break;
    case '-': result = num1 - num2;               break;
    case '*': result = num1 * num2;               break;
    case '/':
      if (num2 === 0) {
        resultEl.textContent = '⚠️ Cannot divide by zero!';
        return;
      }
      result = num1 / num2;
      break;
  }

  resultEl.textContent = `${num1} ${operator} ${num2} = ${result}`;
});


// ── Text Toggle Logic ─────────────────────────────────────────
const originalTexts = ['Hello', 'Welcome', 'To', 'My',  'Class'];
const changedTexts  = ['Bye',   'Good Bye','To', 'Your', 'Class'];

let isChanged = false;

document.getElementById('change_text').addEventListener('click', () => {
  const divisions = document.querySelectorAll('.division');
  const textSet   = isChanged ? originalTexts : changedTexts;

  divisions.forEach((div, i) => {
    div.textContent = textSet[i];
  });

  // Toggle button label to reflect next action
  document.getElementById('change_text').textContent
    = isChanged ? 'Change Text' : 'Reset Text';

  isChanged = !isChanged;
});