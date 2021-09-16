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
  const profit = (currentPrice.value - initialPrice.value) * stocksCount.value;
  const profitPercentage =
    (profit * 100) / (initialPrice.value * stocksCount.value);

  outputMessage(
    'Profit value is ₹ ' +
      profit +
      ' and Profit percentage is ' +
      profitPercentage +
      '%.'
  );
}

function calculateLoss() {
  document.querySelector('body').style.backgroundColor = '#FF2E2E';

  const loss = (initialPrice.value - currentPrice.value) * stocksCount.value;
  const lossPercentage =
    (loss * 100) / (initialPrice.value * stocksCount.value);
  outputMessage(
    'Loss is ' + loss + ' and Loss percentage is ' + lossPercentage + '%.'
  );
}

function clickHandler() {
  if (stocksCount.value < 0) {
  } else {
    if (
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
      outputMessage('No Pain No Gain');
    }
  }
}

checkButton.addEventListener('click', clickHandler);
