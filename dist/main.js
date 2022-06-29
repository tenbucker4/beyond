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
        let planetName = e.target.id;
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
    } else {
        return;
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSwwREFBMEQsV0FBVztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVztBQUNYO0FBQ0EsTUFBTTtBQUNOLGlDQUFpQztBQUNqQztBQUNBLFdBQVc7QUFDWDtBQUNBLE1BQU07QUFDTixpQ0FBaUM7QUFDakM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxNQUFNO0FBQ04saUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVztBQUNYO0FBQ0EsTUFBTTtBQUNOLGlDQUFpQztBQUNqQztBQUNBLFdBQVc7QUFDWDtBQUNBLE1BQU07QUFDTixpQ0FBaUM7QUFDakM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxpQkFBaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE2QixvQkFBb0I7O0FBRWpELG9DQUFvQztBQUNwQztBQUNBLE9BQU8sR0FBRyxhQUFhO0FBQ3ZCO0FBQ0E7O0FBRUEsNEJBQTRCLDZCQUE2Qjs7QUFFekQsMEJBQTBCLG9DQUFvQztBQUM5RCxpQ0FBaUMsd0JBQXdCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQWdDLElBQUksYUFBYTtBQUM3RTs7QUFFd0I7Ozs7Ozs7VUN2R3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ1M7O0FBRXRFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsSUFBSSxrRUFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkRBQVU7QUFDbEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2ZldGNoUGxhbmV0RGF0YS5qcyIsIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvaW1hZ2VTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL3BvcHVsYXRlRG9tLmpzIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JleW9uZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3B1bGF0ZURhdGEgfSBmcm9tIFwiLi9wb3B1bGF0ZURvbS5qc1wiO1xuXG5jb25zdCBwbGFuZXRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JveCA+IGltZ1wiKTtcbmNvbnN0IGltYWdlQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JveFwiKTtcbnBsYW5ldEltYWdlcy5mb3JFYWNoKChwbGFuZXQpID0+IHtcbiAgICBwbGFuZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBwbGFuZXROYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGdldFBsYW5ldERhdGEocGxhbmV0TmFtZSk7XG4gICAgICAgIGhpZ2hsaWdodFBsYW5ldChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICB9KTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRQbGFuZXREYXRhKHBsYW5ldE5hbWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkubGUtc3lzdGVtZS1zb2xhaXJlLm5ldC9yZXN0L2JvZGllcy8ke3BsYW5ldE5hbWV9YCxcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICApO1xuICAgIGxldCBwbGFuZXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHBvcHVsYXRlRGF0YShwbGFuZXREYXRhKTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0UGxhbmV0KHRhcmdldCkge1xuICAgIGltYWdlQm94ZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlc21va2VcIjtcbn1cblxuZXhwb3J0IHsgZ2V0UGxhbmV0RGF0YSwgaGlnaGxpZ2h0UGxhbmV0IH07XG4iLCIvLyBNb3ZlIHNsaWRlciBsZWZ0IG9yIHJpZ2h0XG5mdW5jdGlvbiBtb3ZlU2xpZGVyKGhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWRlciA9IGhhbmRsZS5jbG9zZXN0KFwiI3NsaWRlci1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcIiNzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIGxlZnQgYXJyb3cgd2hlbiBhdCBsZWZ0IGVuZCBvZiBjYXJvdXNlbCwgbW92ZSB0byByaWdodCBlbmRcbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcImxlZnQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIHJpZ2h0IGFycm93IHdoZW4gYXQgcmlnaHQgZW5kIG9mIGNhcm91c2VsLCBtb3ZlIHRvIGxlZnQgZW5kXG4gICAgaWYgKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyaWdodC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgc2xpZGVySW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUHJvZ3Jlc3MoKTtcbn1cblxuLy8gVXBkYXRlIHByb2dyZXNzIGJhciBoaWdobGlnaHRpbmdcbmZ1bmN0aW9uIGNoZWNrUHJvZ3Jlc3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1ibGlwXCIpLmZvckVhY2goKGJsaXApID0+IHtcbiAgICAgICAgYmxpcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuICAgIGNvbnN0IHNsaWRlckluZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2xpZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zbGlkZXItaW5kZXhcIilcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySW5kZXgpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IG1vdmVTbGlkZXIsIGNoZWNrUHJvZ3Jlc3MgfTtcbiIsImltcG9ydCB7IGdldFBsYW5ldERhdGEgfSBmcm9tIFwiLi9mZXRjaFBsYW5ldERhdGFcIjtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYW5ldC10aXRsZVwiKTtcbmNvbnN0IGF2Z1RlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF2Z1RlbXBWYWx1ZVwiKTtcbmNvbnN0IHN1cmZhY2VHcmF2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJmYWNlR3Jhdml0eVZhbHVlXCIpO1xuY29uc3QgcmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWRpdXNWYWx1ZVwiKTtcbmNvbnN0IG1hc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc3NWYWx1ZVwiKTtcbmNvbnN0IG1vb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uc1ZhbHVlXCIpO1xuY29uc3QgZXNjYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc2NhcGVWYWx1ZVwiKTtcblxuLy8gU2hvdy9oaWRlIGRyb3Bkb3duIG1lbnUgZm9yIHRlbXBlcmF0dXJlIHVuaXRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tYnV0dG9uXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuXG4vLyBIaWRlIGRyb3Bkb3duIG9wdGlvbnMgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlIGFuZCBkaXNwbGF5IHRoZSBzZWxlY3RlZCB0ZW1wZXJhdHVyZSB1bml0c1xubGV0IGN1cnJlbnRUZW1wID0gXCJDZWxzaXVzXCI7XG5sZXQgc2VsZWN0ZWRUZW1wO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBlcmF0dXJlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC10ZXh0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBzZWxlY3RlZFRlbXAgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlVGVtcChjdXJyZW50VGVtcCwgc2VsZWN0ZWRUZW1wKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlVGVtcChjdXJyZW50LCBzZWxlY3RlZCkge1xuICAgIGlmIChjdXJyZW50ID09IFwiQ2Vsc2l1c1wiICYmIHNlbGVjdGVkID09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICAgIGF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgcGFyc2VJbnQoYXZnVGVtcC50ZXh0Q29udGVudCkgKiAoOSAvIDUpICsgMzJcbiAgICAgICAgKX0gXFx1MDBCMEZgO1xuICAgICAgICBjdXJyZW50VGVtcCA9IFwiRmFocmVuaGVpdFwiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PSBcIkNlbHNpdXNcIiAmJiBzZWxlY3RlZCA9PSBcIktlbHZpblwiKSB7XG4gICAgICAgIGF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgcGFyc2VJbnQoYXZnVGVtcC50ZXh0Q29udGVudCkgKyAyNzNcbiAgICAgICAgKX0gS2A7XG4gICAgICAgIGN1cnJlbnRUZW1wID0gXCJLZWx2aW5cIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gXCJGYWhyZW5oZWl0XCIgJiYgc2VsZWN0ZWQgPT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAocGFyc2VJbnQoYXZnVGVtcC50ZXh0Q29udGVudCkgLSAzMikgKiAoNSAvIDkpXG4gICAgICAgICl9IFxcdTAwQjBDYDtcbiAgICAgICAgY3VycmVudFRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gXCJGYWhyZW5oZWl0XCIgJiYgc2VsZWN0ZWQgPT0gXCJLZWx2aW5cIikge1xuICAgICAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIChwYXJzZUludChhdmdUZW1wLnRleHRDb250ZW50KSAtIDMyKSAqICg1IC8gOSkgKyAyNzNcbiAgICAgICAgKX0gS2A7XG4gICAgICAgIGN1cnJlbnRUZW1wID0gXCJLZWx2aW5cIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gXCJLZWx2aW5cIiAmJiBzZWxlY3RlZCA9PSBcIkNlbHNpdXNcIikge1xuICAgICAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIHBhcnNlSW50KGF2Z1RlbXAudGV4dENvbnRlbnQpIC0gMjczXG4gICAgICAgICl9IFxcdTAwQjBDYDtcbiAgICAgICAgY3VycmVudFRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gXCJLZWx2aW5cIiAmJiBzZWxlY3RlZCA9PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIChwYXJzZUludChhdmdUZW1wLnRleHRDb250ZW50KSAtIDI3MykgKiAoOSAvIDUpICsgMzJcbiAgICAgICAgKX0gXFx1MDBCMEZgO1xuICAgICAgICBjdXJyZW50VGVtcCA9IFwiRmFocmVuaGVpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGF0YShkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXRleHRcIikudGV4dENvbnRlbnQgPSBcIkNlbHNpdXNcIjtcbiAgICBjdXJyZW50VGVtcCA9IFwiQ2Vsc2l1c1wiO1xuXG4gICAgY29uc3QgZGlzcGxheUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5SW1hZ2VcIik7XG4gICAgZGlzcGxheUltYWdlLnNyYyA9IGAuLi9zcmMvaW1hZ2VzLyR7ZGF0YS5lbmdsaXNoTmFtZX0ucG5nYDtcblxuICAgIGNvbnN0IGZvcndhcmRTbGFzaCA9IFwiL1wiO1xuICAgIGNvbnN0IHN1cGVyc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNVUFwiKTtcbiAgICBjb25zdCBrZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHNxdWFyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1VQXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmVuZ2xpc2hOYW1lO1xuXG4gICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEuYXZnVGVtcCAtIDI3M30gXFx1MDBCMENgO1xuXG4gICAgc3VyZmFjZUdyYXZpdHkudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAoZGF0YS5ncmF2aXR5IC8gMTApICogMTBcbiAgICApfSBtJHtmb3J3YXJkU2xhc2h9c2A7XG4gICAgc3F1YXJlZC50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgIHN1cmZhY2VHcmF2aXR5LmFwcGVuZENoaWxkKHNxdWFyZWQpO1xuXG4gICAgcmFkaXVzLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1lYW5SYWRpdXMpfSBrbWA7XG5cbiAgICBtYXNzLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYXNzLm1hc3NWYWx1ZS50b1ByZWNpc2lvbigyKX0geCAxMGA7XG4gICAgc3VwZXJzY3JpcHQudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1hc3MubWFzc0V4cG9uZW50fSBgO1xuICAgIGtnLnRleHRDb250ZW50ID0gXCJrZ1wiO1xuICAgIG1hc3MuYXBwZW5kQ2hpbGQoc3VwZXJzY3JpcHQpO1xuICAgIG1hc3MuYXBwZW5kQ2hpbGQoa2cpO1xuXG4gICAgaWYgKGRhdGEubW9vbnMgPT0gbnVsbCkge1xuICAgICAgICBtb29ucy50ZXh0Q29udGVudCA9IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vb25zLnRleHRDb250ZW50ID0gZGF0YS5tb29ucy5sZW5ndGg7XG4gICAgfVxuICAgIGVzY2FwZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5lc2NhcGUgLyAxMDAwKX0ga20ke2ZvcndhcmRTbGFzaH1zYDtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVEYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG1vdmVTbGlkZXIsIGNoZWNrUHJvZ3Jlc3MgfSBmcm9tIFwiLi9pbWFnZVNsaWRlci5qc1wiO1xuaW1wb3J0IHsgZ2V0UGxhbmV0RGF0YSwgaGlnaGxpZ2h0UGxhbmV0IH0gZnJvbSBcIi4vZmV0Y2hQbGFuZXREYXRhLmpzXCI7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufTtcblxuLy8gSW50cm8gYW5pbWF0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRvcCA9IFwiMXJlbVwiO1xuICAgIH0sIDIwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb1wiKTtcbiAgICAgICAgaW50cm8uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIH0sIDIwMDApO1xuXG4gICAgY29uc3QgZWFydGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlciA6bnRoLWNoaWxkKDMpXCIpO1xuICAgIGVhcnRoLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlc21va2VcIjtcblxuICAgIGdldFBsYW5ldERhdGEoXCJlYXJ0aFwiKTtcbn0pO1xuXG4vLyBMaXN0ZW4gZm9yIGNsaWNrIG9uIGltYWdlIGNhcm91c2VsIGhhbmRsZXMsIHRyaWdnZXIgc2xpZGVyIG1vdmVcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBoYW5kbGU7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuaGFuZGxlXCIpKSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGFuZGxlXCIpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGUgIT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2xpZGVyKGhhbmRsZSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=