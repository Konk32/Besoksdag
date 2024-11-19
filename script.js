// Definer variabler for lagring av penger osv
startingCash = 0;
startingClickerPower = 1;
startingClickerPowerCost = 10;
startingClickersCost = 25;
startingClickers = 0;

cash = startingCash;
clickerPower = startingClickerPower;
clickerPowerCost = startingClickerPowerCost;
clickersCost = startingClickersCost;
clickers = startingClickers;

// Setter visning av variabler

document.getElementById("moneyCounter").innerText = cash;
document.getElementById("clickerPowerCost-display").innerText =
  clickerPowerCost;

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

    // Rund opp til nærmeste 2 desimaler for prisen
    clickerPowerCost = Math.ceil(clickerPowerCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = cash;
    document.getElementById("clickerPowerCost-display").innerText =
      clickerPowerCost;
  } else {
    console.log("Not enough cash");
  }
}

function buyClickers() {
  // Sjekk om du har nok penger
  if (cash >= clickersCost) {
    // Kjøp clickers
    clickers += 1;

    // Fjern pengene det kostet
    cash -= Math.ceil(clickersCost * 10) / 10;

    // øk prisen på oppgraderingen
    clickersCost *= 1.2;

    // Rund opp til nærmeste 2 desimaler for prisen
    clickersCost = Math.ceil(clickersCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = cash;
    document.getElementById("clickersCost-display").innerText = clickersCost;
  }
}
