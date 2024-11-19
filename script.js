// Definer variabler for lagring av penger osv
startingCash = 0;
startingClickerPower = 1;
startingItems = [];

cash = startingCash;
clickerPower = startingClickerPower;
items = startingItems;

// Funksjon for klikking på knappen

function clickButton() {
  // Legg til penger
  cash += clickerPower;

  // Oppdater visningen
  document.getElementById("money-counter").innerText = cash;
}

