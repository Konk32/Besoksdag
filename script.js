// Definer variabler for lagring av penger osv
cash = 0;
clickerPower = 10;
clickerPowerCost = 10;
clickersCost = 25;
clickers = 0;
clickersUpgradeCost = 50;
clickersPower = 0.005;


// Setter visning av variabler

document.getElementById("moneyCounter").innerText = cash;
document.getElementById("clickerPowerCostDisplay").innerText = clickerPowerCost;
document.getElementById("clickersCostDisplay").innerText = clickersCost;
document.getElementById("upgradeClickersCostDisplay").innerText = clickersUpgradeCost;


// Funksjon for trykking på knappen

function clickButton() {
  // Legg til penger
  cash += clickerPower;
  document.getElementById("moneyCounter").classList.add('bounce');
  setTimeout(() => {
    document.getElementById("moneyCounter").classList.remove('bounce');
}, 150); // 1000ms = 1 second
  // Oppdater visningen
  document.getElementById("moneyCounter").innerText = formatInt(1, cash);
}

// Funksjon for å øke hvor mye du får av å trykke på knappen
function increaseClickPower() {
  if (cash >= clickerPowerCost) {
    // øke clickerpower
    clickerPower += 1;

    // Fjern pengene det kostet
    cash = Math.ceil((cash - clickerPowerCost) * 10) / 10;

    // Øk prisen på oppgraderingen
    clickerPowerCost *= 1.1;

    // Rund opp til nærmeste 2 desimaler for prisen
    clickerPowerCost = Math.ceil(clickerPowerCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("clickerPowerCostDisplay").innerText =
    " " + formatInt(1, clickerPowerCost)
  } else {
    console.log("Not enough cash");
  }
}

// Funksjon for å kjøpe clickers
function buyClickers() {
  // Sjekk om du har nok penger
  if (cash >= clickersCost) {
    // Kjøp clickers
    clickers += 1;

    // Fjern pengene det kostet
    cash = Math.ceil((cash - clickersCost) * 10) / 10;

    // øk prisen på oppgraderingen
    clickersCost *= 1.2;

    // Rund opp til nærmeste 2 desimaler for prisen
    clickersCost = Math.ceil(clickersCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("clickersCostDisplay").innerText = " " + formatInt(1, clickersCost);
  } else {
    console.log("Not enough cash");
  }
}

// Funksjon for å oppgradere Clickers

function upgradeClickers() {
 // sjekk om du har nok penger
  if (cash >= clickersUpgradeCost) {
    // Oppgradere clickers
    clickersPower *= 1.13;

    // Fjern pengene det kostet
    cash = Math.ceil((cash - clickersUpgradeCost) * 10) / 10;

    // øk prisen på oppgraderingen
    clickersUpgradeCost *= 1.3;

    // Rund opp til nærmeste 2 desimaler for prisen
    clickersUpgradeCost = Math.ceil(clickersUpgradeCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("upgradeClickersCostDisplay").innerText = " " + formatInt(1, clickersUpgradeCost);
  } else {
    console.log("Not enough cash");
  }
}

// Funksjon for å automatisk gi penger basert på hvor mange clickers

function gameTick(){
    cash += clickers * clickersPower
    document.getElementById("moneyCounter").innerText = formatInt(1, cash);

    // Update cash per second display

    document.getElementById("cashPerSecondDisplay").innerText = formatInt(2, clickers * clickersPower * 100) + " Cash per second";
}

setInterval(gameTick, 10);


// Formatering av Pengene
function formatInt(decimals, value) {
  if (value < 1000) {
    return value.toFixed(decimals - 1);
  }

  const suffixes = [" ", "K", "M", "B", "T", "Qa", "Qi"];
  let tier = Math.floor(Math.log10(Math.abs(value)) / 3);
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaledValue = value / scale;
  return scaledValue.toFixed(decimals) + suffix;
};