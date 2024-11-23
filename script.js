// Definer variabler for lagring av penger osv
cash = 0;
clickerPower = 10;
clickerPowerCost = 10;
clickersCost = 25;
clickers = 0;
grandmas = 0;
grandmasCost = 100;
grandmaPower = 0.05;
farms = 0;
farmCost = 2000;
farmPower = 1;
clickersUpgradeCost = 50;
clickersPower = 0.005;


// Setter visning av variabler

document.getElementById("moneyCounter").innerText = cash;
document.getElementById("clickerPowerCostDisplay").innerText = clickerPowerCost;
document.getElementById("clickersCostDisplay").innerText = clickersCost;
document.getElementById("upgradeAutoClickersCostDisplay").innerText = clickersUpgradeCost;
document.getElementById("grandmasCostDisplay").innerText = grandmasCost;
document.getElementById("farmCostDisplay").innerText = farmCost;

// Funksjon for trykking på knappen

function clickButton() {
  // Legg til penger
  cash += clickerPower;
  document.getElementById("clickButton").classList.add('bounce');
  setTimeout(() => {
    document.getElementById("clickButton").classList.remove('bounce');
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

// Funksjon for å oppgradere Clickers

function upgradeClickers() {
  // sjekk om du har nok penger
   if (cash >= clickersUpgradeCost) {
     // Oppgradere clickers
     clickersPower *= 2.3;
 
     // Fjern pengene det kostet
     cash = Math.ceil((cash - clickersUpgradeCost) * 10) / 10;
 
     // øk prisen på oppgraderingen
     clickersUpgradeCost *= 9;
 
     // Rund opp til nærmeste 2 desimaler for prisen
     clickersUpgradeCost = Math.ceil(clickersUpgradeCost * 100) / 100;
 
     document.getElementById("moneyCounter").innerText = formatInt(1, cash);
     document.getElementById("upgradeAutoClickersCostDisplay").innerText = " " + formatInt(1, clickersUpgradeCost);
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
    clickersCost *= 1.3;

    // Rund opp til nærmeste 2 desimaler for prisen
    clickersCost = Math.ceil(clickersCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("clickersCostDisplay").innerText = " " + formatInt(1, clickersCost);
  } else {
    console.log("Not enough cash");
  }
}

// Funksjon for å kjøpe clickers
function buyGrandmas() {
  // Sjekk om du har nok penger
  if (cash >= grandmasCost) {
    // Kjøp clickers
    grandmas += 1;

    // Fjern pengene det kostet
    cash = Math.ceil((cash - grandmasCost) * 10) / 10;

    // øk prisen på oppgraderingen
    grandmasCost *= 1.3;

    // Rund opp til nærmeste 2 desimaler for prisen
    grandmasCost = Math.ceil(grandmasCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("grandmasCostDisplay").innerText = " " + formatInt(1, grandmasCost);
  } else {
    console.log("Not enough cash");
  }
}

// Funksjon for å kjøpe clickers
function buyFarms() {
  // Sjekk om du har nok penger
  if (cash >= farmCost) {
    // Kjøp clickers
    farms += 1;

    // Fjern pengene det kostet
    cash = Math.ceil((cash - farmCost) * 10) / 10;

    // øk prisen på oppgraderingen
    farmCost *= 1.3;

    // Rund opp til nærmeste 2 desimaler for prisen
    farmCost = Math.ceil(farmCost * 100) / 100;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);
    document.getElementById("farmCostDisplay").innerText = " " + formatInt(1, farmCost);
  } else {
    console.log("Not enough cash");
  }
}


// Funksjon for å automatisk gi penger basert på hvor mange clickers

function gameTick(){
  const clickersIncome = clickers * clickersPower;
  const grandmasIncome = grandmas * grandmaPower;
  const farmsIncome = farms * farmPower;

  // Add the total income to cash
  cash += clickersIncome + grandmasIncome + farmsIncome;

    document.getElementById("moneyCounter").innerText = formatInt(1, cash);

    // Update cash per second display

    const totalIncomePerSecond = (clickersIncome + grandmasIncome + farmsIncome) * 100; // Multiply by 100 to convert ticks to seconds
    document.getElementById("cashPerSecondDisplay").innerText = formatInt(2, totalIncomePerSecond) + " Cash per second";
}

setInterval(gameTick, 10);


// Formatering av Pengene
function formatInt(decimals, value) {
  if (value < 1000) {
    return value.toFixed(decimals - 1);
  }
// Suffixes for large numbers:
// " "   -> No suffix (numbers less than 1,000)
// "K"   -> Thousand (10^3)
// "M"   -> Million (10^6)
// "B"   -> Billion (10^9)
// "T"   -> Trillion (10^12)
// "Qa"  -> Quadrillion (10^15)
// "Qi"  -> Quintillion (10^18)
// "Sx"  -> Sextillion (10^21)
// "Sp"  -> Septillion (10^24)
// "Oc"  -> Octillion (10^27)
// "No"  -> Nonillion (10^30)
// "Dc"  -> Decillion (10^33)
// "Ud"  -> Undecillion (10^36)
// "Dd"  -> Duodecillion (10^39)
// "Td"  -> Tredecillion (10^42)
// "Qad" -> Quattuordecillion (10^45)
// "Qid" -> Quindecillion (10^48)
// "Sd"  -> Sexdecillion (10^51)
// "Spd" -> Septendecillion (10^54)
// "Ocd" -> Octodecillion (10^57)
// "Nod" -> Novemdecillion (10^60)
// "Vg"  -> Vigintillion (10^63)
  const suffixes = [
    " ", "K", "M", "B", "T", "Qa", "Qi",
    "Sx", "Sp", "Oc", "No", "Dc",
    "Ud", "Dd", "Td", "Qad", "Qid",
    "Sd", "Spd", "Ocd", "Nod", "Vg"
  ];

  let tier = Math.floor(Math.log10(Math.abs(value)) / 3);
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaledValue = value / scale;
  return scaledValue.toFixed(decimals) + suffix;
};