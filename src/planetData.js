function test() {
    const text = document.querySelector(".test");
    fetch("https://api.le-systeme-solaire.net/rest/bodies/Earth", {
        mode: "cors",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            text.textContent = response.name;
        });
}

export { test };
