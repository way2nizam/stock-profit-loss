const initialPrice = document.querySelector('#initial-price');
const stocksCount = document.querySelector('#stocks-count');
const currentPrice = document.querySelector('#current-price');
const checkButton = document.querySelector('#check-btn');
const showOutput = document.querySelector('#show-output');

function outputMessage(message) {
  showOutput.innerText = 'Result: ' + message;
}

function calculateProfit() {
  document.querySelector('body').style.backgroundColor = '#7FE5F0';
  const profit = (
    (currentPrice.value - initialPrice.value) *
    stocksCount.value
  ).toFixed(2);
  const profitPercentage = (
    (profit * 100) /
    (initialPrice.value * stocksCount.value)
  ).toFixed(2);

  outputMessage(
    'Profit = ₹ ' +
      profit +
      ' and Profit Percentage = ' +
      profitPercentage +
      '%.'
  );
}

function calculateLoss() {
  document.querySelector('body').style.backgroundColor = '#FF2E2E';
  const loss = (
    (initialPrice.value - currentPrice.value) *
    stocksCount.value
  ).toFixed(2);
  const lossPercentage = (
    (loss * 100) /
    (initialPrice.value * stocksCount.value)
  ).toFixed(2);
  outputMessage(
    'Loss = ₹ ' + loss + ' & Loss Percentage = ' + lossPercentage + '%.'
  );
}

function clickHandler() {
  if (
    stocksCount.value <= 0 ||
    stocksCount.value == '' ||
    initialPrice.value == '' ||
    initialPrice.value <= 0 ||
    currentPrice.value == '' ||
    currentPrice.value <= 0
  ) {
    alert(
      'Field can not be empty, zero or negative. Please enter the correct values.'
    );
  } else if (
    currentPrice.value * stocksCount.value >
    initialPrice.value * stocksCount.value
  ) {
    calculateProfit();
  } else if (
    initialPrice.value * stocksCount.value >
    currentPrice.value * stocksCount.value
  ) {
    calculateLoss();
  } else {
    document.querySelector('body').style.backgroundColor = '#FFFFFF';
    document.querySelector('#show-output').style.backgroundColor = '#D3D3D3';

    outputMessage('No Pain No Gain.');
  }
}

checkButton.addEventListener('click', clickHandler);
