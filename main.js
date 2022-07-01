/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetchPlanetData.js":
/*!********************************!*\
  !*** ./src/fetchPlanetData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlanetData": () => (/* binding */ getPlanetData),
/* harmony export */   "highlightPlanet": () => (/* binding */ highlightPlanet)
/* harmony export */ });
/* harmony import */ var _populateDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateDom.js */ "./src/populateDom.js");


// Listen for click on planet images
const planetImages = document.querySelectorAll("#box > img");
const imageBoxes = document.querySelectorAll("#box");
planetImages.forEach((planet) => {
    planet.addEventListener("click", function (e) {
        window.scrollTo(0, 0);
        let planetName = e.target.id;
        getPlanetData(planetName);
        highlightPlanet(e.target.parentElement);
    });
});

// Fetch planet data from Solar System OpenData API
async function getPlanetData(planetName) {
    const response = await fetch(
        `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`,
        {
            mode: "cors",
        }
    );
    let planetData = await response.json();
    (0,_populateDom_js__WEBPACK_IMPORTED_MODULE_0__.populateData)(planetData);
}

// Highlight current planet
function highlightPlanet(target) {
    imageBoxes.forEach((image) => {
        image.style.border = "none";
    });
    target.style.border = "1px solid whitesmoke";
}




/***/ }),

/***/ "./src/imageSlider.js":
/*!****************************!*\
  !*** ./src/imageSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProgress": () => (/* binding */ checkProgress),
/* harmony export */   "moveSlider": () => (/* binding */ moveSlider)
/* harmony export */ });
// Move slider left or right
function moveSlider(handle) {
    const slider = handle.closest("#slider-container").querySelector("#slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    // When clicking left arrow when at left end of carousel, move to right end
    if (handle.classList.contains("left-handle")) {
        if (sliderIndex <= 0) {
            slider.style.setProperty("--slider-index", 2);
        } else {
            slider.style.setProperty("--slider-index", sliderIndex - 1);
        }
    }

    // When clicking right arrow when at right end of carousel, move to left end
    if (handle.classList.contains("right-handle")) {
        if (sliderIndex >= 2) {
            slider.style.setProperty("--slider-index", 0);
        } else {
            slider.style.setProperty("--slider-index", sliderIndex + 1);
        }
    }

    checkProgress();
}

// Update progress bar highlighting
function checkProgress() {
    document.querySelectorAll(".progress-blip").forEach((blip) => {
        blip.classList.remove("active");
    });
    const slider = document.getElementById("slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    document.getElementById(sliderIndex).classList.add("active");
}




/***/ }),

/***/ "./src/populateDom.js":
/*!****************************!*\
  !*** ./src/populateDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateData": () => (/* binding */ populateData)
/* harmony export */ });
/* harmony import */ var _fetchPlanetData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchPlanetData */ "./src/fetchPlanetData.js");


const title = document.querySelector(".planet-title");
const avgTemp = document.getElementById("avgTempValue");
const surfaceGravity = document.getElementById("surfaceGravityValue");
const radius = document.getElementById("radiusValue");
const mass = document.getElementById("massValue");
const moons = document.getElementById("moonsValue");
const escape = document.getElementById("escapeValue");

// Show/hide dropdown menu for temperature units
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("dropdown-button")) {
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

// Hide dropdown options when a selection is made and display the selected temperature units
let currentTemp = "Celsius";
let selectedTemp;
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("temperature")) {
        document.querySelector(".temp-text").textContent = e.target.textContent;
        document.querySelector(".dropdown-options").classList.toggle("active");
        selectedTemp = e.target.textContent;
        changeTemp(currentTemp, selectedTemp);
    }
});

// Toggle displayed temp units between Celsius, Fahrenheit or Kelvin
function changeTemp(current, selected) {
    if (current == "Celsius" && selected == "Fahrenheit") {
        avgTemp.textContent = `${Math.round(
            parseInt(avgTemp.textContent) * (9 / 5) + 32
        )} \u00B0F`;
        currentTemp = "Fahrenheit";
    } else if (current == "Celsius" && selected == "Kelvin") {
        avgTemp.textContent = `${Math.round(
            parseInt(avgTemp.textContent) + 273
        )} K`;
        currentTemp = "Kelvin";
    } else if (current == "Fahrenheit" && selected == "Celsius") {
        avgTemp.textContent = `${Math.round(
            (parseInt(avgTemp.textContent) - 32) * (5 / 9)
        )} \u00B0C`;
        currentTemp = "Celsius";
    } else if (current == "Fahrenheit" && selected == "Kelvin") {
        avgTemp.textContent = `${Math.round(
            (parseInt(avgTemp.textContent) - 32) * (5 / 9) + 273
        )} K`;
        currentTemp = "Kelvin";
    } else if (current == "Kelvin" && selected == "Celsius") {
        avgTemp.textContent = `${Math.round(
            parseInt(avgTemp.textContent) - 273
        )} \u00B0C`;
        currentTemp = "Celsius";
    } else if (current == "Kelvin" && selected == "Fahrenheit") {
        avgTemp.textContent = `${Math.round(
            (parseInt(avgTemp.textContent) - 273) * (9 / 5) + 32
        )} \u00B0F`;
        currentTemp = "Fahrenheit";
    } else {
        return;
    }
}

// Display content for selected planet
function populateData(data) {
    document.querySelector(".temp-text").textContent = "Celsius";
    currentTemp = "Celsius";

    const displayImage = document.getElementById("displayImage");
    displayImage.src = `../src/images/${data.englishName}.png`;

    const forwardSlash = "/";
    const superscript = document.createElement("SUP");
    const kg = document.createElement("span");
    const squared = document.createElement("SUP");

    title.textContent = data.englishName;

    avgTemp.textContent = `${data.avgTemp - 273} \u00B0C`;

    surfaceGravity.textContent = `${Math.round(
        (data.gravity / 10) * 10
    )} m${forwardSlash}s`;
    squared.textContent = "2";
    surfaceGravity.appendChild(squared);

    radius.textContent = `${Math.round(data.meanRadius)} km`;

    mass.textContent = `${data.mass.massValue.toPrecision(2)} x 10`;
    superscript.textContent = `${data.mass.massExponent} `;
    kg.textContent = "kg";
    mass.appendChild(superscript);
    mass.appendChild(kg);

    if (data.moons == null) {
        moons.textContent = "0";
    } else {
        moons.textContent = data.moons.length;
    }
    escape.textContent = `${Math.round(data.escape / 1000)} km${forwardSlash}s`;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageSlider.js */ "./src/imageSlider.js");
/* harmony import */ var _fetchPlanetData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchPlanetData.js */ "./src/fetchPlanetData.js");



// Scroll to top of page on load
window.onload = function () {
    window.scrollTo(0, 0);
};

// Intro animation
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const title = document.querySelector(".title");
        title.style.top = "1rem";
    }, 2000);

    setTimeout(() => {
        const intro = document.querySelector(".intro");
        intro.style.opacity = "0";
    }, 2000);

    const earth = document.querySelector("#slider :nth-child(3)");
    earth.style.border = "1px solid whitesmoke";

    (0,_fetchPlanetData_js__WEBPACK_IMPORTED_MODULE_1__.getPlanetData)("earth");
});

// Listen for click on image carousel handles, trigger slider move
document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }

    if (handle != null) {
        (0,_imageSlider_js__WEBPACK_IMPORTED_MODULE_0__.moveSlider)(handle);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map