let lap = document.querySelector(".nb_Laps");
let LPS = document.querySelector(".nb_LPS");
let parsedLap = parseFloat(lap.innerHTML);

let boostCost = document.querySelector(".boost-cost");
let parsedBoostCost = parseFloat(boostCost.innerHTML);

let boostLevel = document.querySelector(".boost-level");

let engineCost = document.querySelector(".engine-cost");
let parsedEngineCost = parseFloat(engineCost.innerHTML);

let engineLevel = document.querySelector(".engine-level");

let pitstopCost = document.querySelector(".pitstop-cost");
let parsedPitstopCost = parseFloat(pitstopCost.innerHTML);

let pitstopLevel = document.querySelector(".pitstop-level");

let lap_per_click = 1;
let lap_per_second = 0;

// Fonction ajouter des laps automatiquement chaque seconde
setInterval(() => {
    parsedLap += lap_per_second;
    lap.innerHTML = Math.round(parsedLap);
}, 1000);

// Fonction ajouter un lap au clic
function addLap() {
    lap.innerHTML = Math.round(parsedLap += lap_per_click);
}

// Fonction acheter un boost
function upgradeBoost() {
    if (parsedLap >= parsedBoostCost) {
        lap.innerHTML = Math.round(parsedLap -= parsedBoostCost);

        // Augmenter le niveau du boost
        boostLevel.innerHTML ++

        // Augmenter le coût du boost
        parsedBoostCost *= 1.14
        boostCost.innerHTML = Math.round(parsedBoostCost)

        // Augmenter le laps par seconde de +0.1
        lap_per_second += 0.1

        LPS.innerHTML = lap_per_second.toFixed(1)
    }
}

function upgradeEngine() {
    if (parsedLap >= parsedEngineCost) {
        lap.innerHTML = Math.round(parsedLap -= parsedEngineCost);

        // Augmenter le niveau du moteur
        engineLevel.innerHTML ++

        // Augmenter le coût du moteur
        parsedEngineCost *= 1.154
        engineCost.innerHTML = Math.round(parsedEngineCost)

        // Augmenter le laps par seconde de +1
        lap_per_second += 1

        LPS.innerHTML = lap_per_second.toFixed(1)
    }
}

function upgradePitstop() {
    if (parsedLap >= parsedPitstopCost) {
        lap.innerHTML = Math.round(parsedLap -= parsedPitstopCost);

        // Augmenter le niveau du pit stop
        pitstopLevel.innerHTML ++

        // Augmenter le coût du pit stop
        parsedPitstopCost *= 1.173
        pitstopCost.innerHTML = Math.round(parsedPitstopCost)

        // Augmenter le laps par seconde de +3
        lap_per_second += 3

        LPS.innerHTML = lap_per_second.toFixed(1)
    }
}