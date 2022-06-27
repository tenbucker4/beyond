import { getPlanetData } from "./fetchPlanetData";

const title = document.querySelector(".planet-title");
const avgTemp = document.getElementById("avgTempValue");
const surfaceGravity = document.getElementById("surfaceGravityValue");
const radius = document.getElementById("radiusValue");
const mass = document.getElementById("massValue");
const moons = document.getElementById("moonsValue");
const escape = document.getElementById("escapeValue");

function populateData(data) {
    console.log(data);

    title.textContent = data.englishName;
    avgTemp.textContent = data.avgTemp;
    surfaceGravity.textContent = data.gravity;
    radius.textContent = data.meanRadius;
    mass.textContent = `${data.mass.massValue} ^ ${data.mass.massExponent}`;
    if (data.moons == null) {
        moons.textContent = "0";
    } else {
        moons.textContent = data.moons.length;
    }
    escape.textContent = data.escape;
}

export { populateData };
