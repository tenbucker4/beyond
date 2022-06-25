import { getPlanetData } from "./fetchPlanetData";

const title = document.querySelector(".planet-title");

function populateData(data) {
    title.textContent = data.englishName;
}

export { populateData };
