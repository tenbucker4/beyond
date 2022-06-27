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


const planetImages = document.querySelectorAll("#box > img");
const imageBoxes = document.querySelectorAll("#box");
planetImages.forEach((planet) => {
    planet.addEventListener("click", function (e) {
        planetName = e.target.id;
        getPlanetData(planetName);
        highlightPlanet(e.target.parentElement);
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
    (0,_populateDom_js__WEBPACK_IMPORTED_MODULE_0__.populateData)(planetData);
}

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

function populateData(data) {
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSwwREFBMEQsV0FBVztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCLG9CQUFvQjs7QUFFakQsb0NBQW9DO0FBQ3BDO0FBQ0EsT0FBTyxHQUFHLGFBQWE7QUFDdkI7QUFDQTs7QUFFQSw0QkFBNEIsNkJBQTZCOztBQUV6RCwwQkFBMEIsb0NBQW9DO0FBQzlELGlDQUFpQyx3QkFBd0I7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0MsSUFBSSxhQUFhO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVztBQUNYO0FBQ0EsTUFBTTtBQUNOLGlDQUFpQztBQUNqQztBQUNBLFdBQVc7QUFDWDtBQUNBLE1BQU07QUFDTixpQ0FBaUM7QUFDakM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxNQUFNO0FBQ04saUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVztBQUNYO0FBQ0EsTUFBTTtBQUNOLGlDQUFpQztBQUNqQztBQUNBLFdBQVc7QUFDWDtBQUNBLE1BQU07QUFDTixpQ0FBaUM7QUFDakM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7OztVQy9GeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDUzs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLElBQUksa0VBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFVO0FBQ2xCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JleW9uZC8uL3NyYy9mZXRjaFBsYW5ldERhdGEuanMiLCJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2ltYWdlU2xpZGVyLmpzIiwid2VicGFjazovL2JleW9uZC8uL3NyYy9wb3B1bGF0ZURvbS5qcyIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmV5b25kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9wdWxhdGVEYXRhIH0gZnJvbSBcIi4vcG9wdWxhdGVEb20uanNcIjtcblxuY29uc3QgcGxhbmV0SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNib3ggPiBpbWdcIik7XG5jb25zdCBpbWFnZUJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNib3hcIik7XG5wbGFuZXRJbWFnZXMuZm9yRWFjaCgocGxhbmV0KSA9PiB7XG4gICAgcGxhbmV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwbGFuZXROYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGdldFBsYW5ldERhdGEocGxhbmV0TmFtZSk7XG4gICAgICAgIGhpZ2hsaWdodFBsYW5ldChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICB9KTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRQbGFuZXREYXRhKHBsYW5ldE5hbWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkubGUtc3lzdGVtZS1zb2xhaXJlLm5ldC9yZXN0L2JvZGllcy8ke3BsYW5ldE5hbWV9YCxcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICApO1xuICAgIGxldCBwbGFuZXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHBvcHVsYXRlRGF0YShwbGFuZXREYXRhKTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0UGxhbmV0KHRhcmdldCkge1xuICAgIGltYWdlQm94ZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlc21va2VcIjtcbn1cblxuZXhwb3J0IHsgZ2V0UGxhbmV0RGF0YSwgaGlnaGxpZ2h0UGxhbmV0IH07XG4iLCIvLyBNb3ZlIHNsaWRlciBsZWZ0IG9yIHJpZ2h0XG5mdW5jdGlvbiBtb3ZlU2xpZGVyKGhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWRlciA9IGhhbmRsZS5jbG9zZXN0KFwiI3NsaWRlci1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcIiNzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIGxlZnQgYXJyb3cgd2hlbiBhdCBsZWZ0IGVuZCBvZiBjYXJvdXNlbCwgbW92ZSB0byByaWdodCBlbmRcbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcImxlZnQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIHJpZ2h0IGFycm93IHdoZW4gYXQgcmlnaHQgZW5kIG9mIGNhcm91c2VsLCBtb3ZlIHRvIGxlZnQgZW5kXG4gICAgaWYgKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyaWdodC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgc2xpZGVySW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUHJvZ3Jlc3MoKTtcbn1cblxuLy8gVXBkYXRlIHByb2dyZXNzIGJhciBoaWdobGlnaHRpbmdcbmZ1bmN0aW9uIGNoZWNrUHJvZ3Jlc3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1ibGlwXCIpLmZvckVhY2goKGJsaXApID0+IHtcbiAgICAgICAgYmxpcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuICAgIGNvbnN0IHNsaWRlckluZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2xpZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zbGlkZXItaW5kZXhcIilcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySW5kZXgpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IG1vdmVTbGlkZXIsIGNoZWNrUHJvZ3Jlc3MgfTtcbiIsImltcG9ydCB7IGdldFBsYW5ldERhdGEgfSBmcm9tIFwiLi9mZXRjaFBsYW5ldERhdGFcIjtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYW5ldC10aXRsZVwiKTtcbmNvbnN0IGF2Z1RlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF2Z1RlbXBWYWx1ZVwiKTtcbmNvbnN0IHN1cmZhY2VHcmF2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJmYWNlR3Jhdml0eVZhbHVlXCIpO1xuY29uc3QgcmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWRpdXNWYWx1ZVwiKTtcbmNvbnN0IG1hc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc3NWYWx1ZVwiKTtcbmNvbnN0IG1vb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uc1ZhbHVlXCIpO1xuY29uc3QgZXNjYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc2NhcGVWYWx1ZVwiKTtcblxuZnVuY3Rpb24gcG9wdWxhdGVEYXRhKGRhdGEpIHtcbiAgICBjb25zdCBmb3J3YXJkU2xhc2ggPSBcIi9cIjtcbiAgICBjb25zdCBzdXBlcnNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTVVBcIik7XG4gICAgY29uc3Qga2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBzcXVhcmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNVUFwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YS5lbmdsaXNoTmFtZTtcblxuICAgIGF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLmF2Z1RlbXAgLSAyNzN9IFxcdTAwQjBDYDtcblxuICAgIHN1cmZhY2VHcmF2aXR5LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgKGRhdGEuZ3Jhdml0eSAvIDEwKSAqIDEwXG4gICAgKX0gbSR7Zm9yd2FyZFNsYXNofXNgO1xuICAgIHNxdWFyZWQudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICBzdXJmYWNlR3Jhdml0eS5hcHBlbmRDaGlsZChzcXVhcmVkKTtcblxuICAgIHJhZGl1cy50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5tZWFuUmFkaXVzKX0ga21gO1xuXG4gICAgbWFzcy50ZXh0Q29udGVudCA9IGAke2RhdGEubWFzcy5tYXNzVmFsdWUudG9QcmVjaXNpb24oMil9IHggMTBgO1xuICAgIHN1cGVyc2NyaXB0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYXNzLm1hc3NFeHBvbmVudH0gYDtcbiAgICBrZy50ZXh0Q29udGVudCA9IFwia2dcIjtcbiAgICBtYXNzLmFwcGVuZENoaWxkKHN1cGVyc2NyaXB0KTtcbiAgICBtYXNzLmFwcGVuZENoaWxkKGtnKTtcblxuICAgIGlmIChkYXRhLm1vb25zID09IG51bGwpIHtcbiAgICAgICAgbW9vbnMudGV4dENvbnRlbnQgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb29ucy50ZXh0Q29udGVudCA9IGRhdGEubW9vbnMubGVuZ3RoO1xuICAgIH1cbiAgICBlc2NhcGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZXNjYXBlIC8gMTAwMCl9IGttJHtmb3J3YXJkU2xhc2h9c2A7XG59XG5cbi8vIFNob3cvaGlkZSBkcm9wZG93biBtZW51IGZvciB0ZW1wZXJhdHVyZSB1bml0c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWJ1dHRvblwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW9wdGlvbnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG59KTtcblxuLy8gSGlkZSBkcm9wZG93biBvcHRpb25zIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZSBhbmQgZGlzcGxheSB0aGUgc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdW5pdHNcbmxldCBjdXJyZW50VGVtcCA9IFwiQ2Vsc2l1c1wiO1xubGV0IHNlbGVjdGVkVGVtcDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wZXJhdHVyZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtdGV4dFwiKS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW9wdGlvbnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgc2VsZWN0ZWRUZW1wID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNoYW5nZVRlbXAoY3VycmVudFRlbXAsIHNlbGVjdGVkVGVtcCk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZVRlbXAoY3VycmVudCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoY3VycmVudCA9PSBcIkNlbHNpdXNcIiAmJiBzZWxlY3RlZCA9PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIHBhcnNlSW50KGF2Z1RlbXAudGV4dENvbnRlbnQpICogKDkgLyA1KSArIDMyXG4gICAgICAgICl9IFxcdTAwQjBGYDtcbiAgICAgICAgY3VycmVudFRlbXAgPSBcIkZhaHJlbmhlaXRcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gXCJDZWxzaXVzXCIgJiYgc2VsZWN0ZWQgPT0gXCJLZWx2aW5cIikge1xuICAgICAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIHBhcnNlSW50KGF2Z1RlbXAudGV4dENvbnRlbnQpICsgMjczXG4gICAgICAgICl9IEtgO1xuICAgICAgICBjdXJyZW50VGVtcCA9IFwiS2VsdmluXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09IFwiRmFocmVuaGVpdFwiICYmIHNlbGVjdGVkID09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICAgIGF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHBhcnNlSW50KGF2Z1RlbXAudGV4dENvbnRlbnQpIC0gMzIpICogKDUgLyA5KVxuICAgICAgICApfSBcXHUwMEIwQ2A7XG4gICAgICAgIGN1cnJlbnRUZW1wID0gXCJDZWxzaXVzXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09IFwiRmFocmVuaGVpdFwiICYmIHNlbGVjdGVkID09IFwiS2VsdmluXCIpIHtcbiAgICAgICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAocGFyc2VJbnQoYXZnVGVtcC50ZXh0Q29udGVudCkgLSAzMikgKiAoNSAvIDkpICsgMjczXG4gICAgICAgICl9IEtgO1xuICAgICAgICBjdXJyZW50VGVtcCA9IFwiS2VsdmluXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09IFwiS2VsdmluXCIgJiYgc2VsZWN0ZWQgPT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICBwYXJzZUludChhdmdUZW1wLnRleHRDb250ZW50KSAtIDI3M1xuICAgICAgICApfSBcXHUwMEIwQ2A7XG4gICAgICAgIGN1cnJlbnRUZW1wID0gXCJDZWxzaXVzXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09IFwiS2VsdmluXCIgJiYgc2VsZWN0ZWQgPT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICAgICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAocGFyc2VJbnQoYXZnVGVtcC50ZXh0Q29udGVudCkgLSAyNzMpICogKDkgLyA1KSArIDMyXG4gICAgICAgICl9IFxcdTAwQjBGYDtcbiAgICAgICAgY3VycmVudFRlbXAgPSBcIkZhaHJlbmhlaXRcIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtb3ZlU2xpZGVyLCBjaGVja1Byb2dyZXNzIH0gZnJvbSBcIi4vaW1hZ2VTbGlkZXIuanNcIjtcbmltcG9ydCB7IGdldFBsYW5ldERhdGEsIGhpZ2hsaWdodFBsYW5ldCB9IGZyb20gXCIuL2ZldGNoUGxhbmV0RGF0YS5qc1wiO1xuXG4vLyBJbnRybyBhbmltYXRpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuc3R5bGUudG9wID0gXCIxcmVtXCI7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvXCIpO1xuICAgICAgICBpbnRyby5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBjb25zdCBlYXJ0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyIDpudGgtY2hpbGQoMylcIik7XG4gICAgZWFydGguc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgd2hpdGVzbW9rZVwiO1xuXG4gICAgZ2V0UGxhbmV0RGF0YShcImVhcnRoXCIpO1xufSk7XG5cbi8vIExpc3RlbiBmb3IgY2xpY2sgb24gaW1hZ2UgY2Fyb3VzZWwgaGFuZGxlcywgdHJpZ2dlciBzbGlkZXIgbW92ZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGhhbmRsZTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5oYW5kbGVcIikpIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQuY2xvc2VzdChcIi5oYW5kbGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZSAhPSBudWxsKSB7XG4gICAgICAgIG1vdmVTbGlkZXIoaGFuZGxlKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==