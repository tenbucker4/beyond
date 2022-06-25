import { populateData } from "./populateDom.js";

const planetImages = document.querySelectorAll("#box > img");
planetImages.forEach((planet) => {
    planet.addEventListener("click", function (e) {
        let planetName = e.target.id;
        getPlanetData(planetName);
    });
});

async function getPlanetData(planetName) {
    const response = await fetch(
        `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`,
        {
            mode: "cors",
        }
    );
    let planetData = await response.json();
    populateData(planetData);
}

export { getPlanetData };
