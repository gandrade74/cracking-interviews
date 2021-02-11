let findBuySellStockPrices = (arr) => {
  if (!arr || arr.length < 2) {
    return;
  }

  let currentBuy = arr[0];
  let globalSell = arr[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    currentProfit = arr[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = arr[i];
    }

    if (currentBuy > arr[i]) {
      currentBuy = arr[i];
    }
  }

  return [globalSell - globalProfit, globalSell];
};

console.log(findBuySellStockPrices([8, 5, 12, 9, 19, 1]));
console.log(findBuySellStockPrices([21, 12, 11, 9, 6, 3]));
