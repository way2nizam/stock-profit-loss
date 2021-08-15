const initialPrice = document.querySelector("#initial-price");
const stocksCount = document.querySelector("#stocks-count");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const showOutput = document.querySelector("#show-output");

function outputMessage(message) {
  showOutput.innerHTML = message;
}

function calculateProfit() {
  const profit = (currentPrice.value - initialPrice.value) * stocksCount.value;
  const profitPercentage =
    (profit * 100) / (initialPrice.value * stocksCount.value);

  outputMessage(
    "Profit is " +
      profit +
      " and Profit percentage is " +
      profitPercentage +
      "%."
  );
}

function calculateLoss() {
  const loss = (initialPrice.value - currentPrice.value) * stocksCount.value;
  const lossPercentage =
    (loss * 100) / (initialPrice.value * stocksCount.value);

  outputMessage(
    "Loss is " + loss + " and Loss percentage is " + lossPercentage + "%."
  );
}

function clickHandler() {
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
    outputMessage("No Pain No Gain");
  }
}

checkButton.addEventListener("click", clickHandler);
