const title = document.querySelector(".planet-title");

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
    const planetData = await response.json();

    console.log(planetData);
}

export { getPlanetData };
