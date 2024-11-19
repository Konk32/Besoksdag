// Definer variabler for lagring av penger osv
startingCash = 0;
startingClickerPower = 1;
startingItems = [];
startingclickerPowerCost = 10;

cash = startingCash;
clickerPower = startingClickerPower;
items = startingItems;
clickerPowerCost = startingclickerPowerCost;

// Funksjon for trykking på knappen

function clickButton() {
  // Legg til penger
  cash += clickerPower;

  // Oppdater visningen
  document.getElementById("moneyCounter").innerText = cash;
}

// Funksjon for å øke hvor mye du får av å trykke på knappen
function increaseClickPower() {
  if (cash >= clickerPowerCost) {
    // øke clickerpower
    clickerPower += 1;

    // Fjern pengene det kostet
    cash -= Math.ceil(clickerPowerCost * 10) / 10;

    // Øk prisen på oppgraderingen
    clickerPowerCost *= 1.1;

    // Rund opp til nærmeste 2 desimaler
    clickerPowerCost = Math.ceil(clickerPowerCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = cash;
    document.getElementById("clickerPowerCost-display").innerText = clickerPowerCost;
  } else {
    console.log("Not enough cash");
  }
}
