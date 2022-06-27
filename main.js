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
/* harmony export */   "getPlanetData": () => (/* binding */ getPlanetData)
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

function populateData(data) {
    const forwardSlash = "/";
    const superscript = document.createElement("SUP");
    const kg = document.createElement("span");
    const squared = document.createElement("SUP");

    title.textContent = data.englishName;
    avgTemp.textContent = `${data.avgTemp} K`;
    surfaceGravity.textContent = `${Math.round(
        (data.gravity / 10) * 10
    )} m${forwardSlash}s`;
    squared.textContent = "2";
    surfaceGravity.appendChild(squared);
    radius.textContent = `${Math.round(data.meanRadius)} km`;
    mass.textContent = `${data.mass.massValue.toPrecision(2)} x 10`;
    superscript.textContent = data.mass.massExponent;
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

// Show/hide dropdown menu for temperature units
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("dropdown-button")) {
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

// Hide dropdown options when a selection is made and display the selected temperature units
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("temperature")) {
        document.querySelector(".temp-text").textContent = e.target.textContent;
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBEQUEwRCxXQUFXO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzlCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVxQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDYTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9DQUFvQztBQUNwQztBQUNBLE9BQU8sR0FBRyxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQyxJQUFJLGFBQWE7QUFDN0U7O0FBRXdCOzs7Ozs7O1VDdEN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNSOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFVO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2ZldGNoUGxhbmV0RGF0YS5qcyIsIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvaW1hZ2VTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL3BvcHVsYXRlRG9tLmpzIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JleW9uZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3B1bGF0ZURhdGEgfSBmcm9tIFwiLi9wb3B1bGF0ZURvbS5qc1wiO1xuXG5jb25zdCBwbGFuZXRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JveCA+IGltZ1wiKTtcbmNvbnN0IGltYWdlQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JveFwiKTtcbnBsYW5ldEltYWdlcy5mb3JFYWNoKChwbGFuZXQpID0+IHtcbiAgICBwbGFuZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBwbGFuZXROYW1lID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGdldFBsYW5ldERhdGEocGxhbmV0TmFtZSk7XG4gICAgICAgIGhpZ2hsaWdodFBsYW5ldChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICB9KTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRQbGFuZXREYXRhKHBsYW5ldE5hbWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkubGUtc3lzdGVtZS1zb2xhaXJlLm5ldC9yZXN0L2JvZGllcy8ke3BsYW5ldE5hbWV9YCxcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICApO1xuICAgIGxldCBwbGFuZXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHBvcHVsYXRlRGF0YShwbGFuZXREYXRhKTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0UGxhbmV0KHRhcmdldCkge1xuICAgIGltYWdlQm94ZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlc21va2VcIjtcbn1cblxuZXhwb3J0IHsgZ2V0UGxhbmV0RGF0YSB9O1xuIiwiLy8gTW92ZSBzbGlkZXIgbGVmdCBvciByaWdodFxuZnVuY3Rpb24gbW92ZVNsaWRlcihoYW5kbGUpIHtcbiAgICBjb25zdCBzbGlkZXIgPSBoYW5kbGUuY2xvc2VzdChcIiNzbGlkZXItY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyXCIpO1xuICAgIGNvbnN0IHNsaWRlckluZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2xpZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zbGlkZXItaW5kZXhcIilcbiAgICApO1xuXG4gICAgLy8gV2hlbiBjbGlja2luZyBsZWZ0IGFycm93IHdoZW4gYXQgbGVmdCBlbmQgb2YgY2Fyb3VzZWwsIG1vdmUgdG8gcmlnaHQgZW5kXG4gICAgaWYgKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsZWZ0LWhhbmRsZVwiKSkge1xuICAgICAgICBpZiAoc2xpZGVySW5kZXggPD0gMCkge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCBzbGlkZXJJbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hlbiBjbGlja2luZyByaWdodCBhcnJvdyB3aGVuIGF0IHJpZ2h0IGVuZCBvZiBjYXJvdXNlbCwgbW92ZSB0byBsZWZ0IGVuZFxuICAgIGlmIChoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmlnaHQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA+PSAyKSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Byb2dyZXNzKCk7XG59XG5cbi8vIFVwZGF0ZSBwcm9ncmVzcyBiYXIgaGlnaGxpZ2h0aW5nXG5mdW5jdGlvbiBjaGVja1Byb2dyZXNzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtYmxpcFwiKS5mb3JFYWNoKChibGlwKSA9PiB7XG4gICAgICAgIGJsaXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHNsaWRlcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2xpZGVyLWluZGV4XCIpXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlckluZGV4KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgeyBtb3ZlU2xpZGVyLCBjaGVja1Byb2dyZXNzIH07XG4iLCJpbXBvcnQgeyBnZXRQbGFuZXREYXRhIH0gZnJvbSBcIi4vZmV0Y2hQbGFuZXREYXRhXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFuZXQtdGl0bGVcIik7XG5jb25zdCBhdmdUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmdUZW1wVmFsdWVcIik7XG5jb25zdCBzdXJmYWNlR3Jhdml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VyZmFjZUdyYXZpdHlWYWx1ZVwiKTtcbmNvbnN0IHJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFkaXVzVmFsdWVcIik7XG5jb25zdCBtYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXNzVmFsdWVcIik7XG5jb25zdCBtb29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbnNWYWx1ZVwiKTtcbmNvbnN0IGVzY2FwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXNjYXBlVmFsdWVcIik7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGF0YShkYXRhKSB7XG4gICAgY29uc3QgZm9yd2FyZFNsYXNoID0gXCIvXCI7XG4gICAgY29uc3Qgc3VwZXJzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1VQXCIpO1xuICAgIGNvbnN0IGtnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3Qgc3F1YXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTVVBcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRhdGEuZW5nbGlzaE5hbWU7XG4gICAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEuYXZnVGVtcH0gS2A7XG4gICAgc3VyZmFjZUdyYXZpdHkudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAoZGF0YS5ncmF2aXR5IC8gMTApICogMTBcbiAgICApfSBtJHtmb3J3YXJkU2xhc2h9c2A7XG4gICAgc3F1YXJlZC50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgIHN1cmZhY2VHcmF2aXR5LmFwcGVuZENoaWxkKHNxdWFyZWQpO1xuICAgIHJhZGl1cy50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5tZWFuUmFkaXVzKX0ga21gO1xuICAgIG1hc3MudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1hc3MubWFzc1ZhbHVlLnRvUHJlY2lzaW9uKDIpfSB4IDEwYDtcbiAgICBzdXBlcnNjcmlwdC50ZXh0Q29udGVudCA9IGRhdGEubWFzcy5tYXNzRXhwb25lbnQ7XG4gICAga2cudGV4dENvbnRlbnQgPSBcImtnXCI7XG4gICAgbWFzcy5hcHBlbmRDaGlsZChzdXBlcnNjcmlwdCk7XG4gICAgbWFzcy5hcHBlbmRDaGlsZChrZyk7XG5cbiAgICBpZiAoZGF0YS5tb29ucyA9PSBudWxsKSB7XG4gICAgICAgIG1vb25zLnRleHRDb250ZW50ID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9vbnMudGV4dENvbnRlbnQgPSBkYXRhLm1vb25zLmxlbmd0aDtcbiAgICB9XG4gICAgZXNjYXBlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmVzY2FwZSAvIDEwMDApfSBrbSR7Zm9yd2FyZFNsYXNofXNgO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZURhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbW92ZVNsaWRlciwgY2hlY2tQcm9ncmVzcyB9IGZyb20gXCIuL2ltYWdlU2xpZGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRQbGFuZXREYXRhIH0gZnJvbSBcIi4vZmV0Y2hQbGFuZXREYXRhLmpzXCI7XG5cbi8vIEludHJvIGFuaW1hdGlvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICB0aXRsZS5zdHlsZS50b3AgPSBcIjFyZW1cIjtcbiAgICB9LCAyMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9cIik7XG4gICAgICAgIGludHJvLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICB9LCAyMDAwKTtcbn0pO1xuXG4vLyBMaXN0ZW4gZm9yIGNsaWNrIG9uIGltYWdlIGNhcm91c2VsIGhhbmRsZXMsIHRyaWdnZXIgc2xpZGVyIG1vdmVcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBoYW5kbGU7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuaGFuZGxlXCIpKSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGFuZGxlXCIpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGUgIT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2xpZGVyKGhhbmRsZSk7XG4gICAgfVxufSk7XG5cbi8vIFNob3cvaGlkZSBkcm9wZG93biBtZW51IGZvciB0ZW1wZXJhdHVyZSB1bml0c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWJ1dHRvblwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW9wdGlvbnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG59KTtcblxuLy8gSGlkZSBkcm9wZG93biBvcHRpb25zIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZSBhbmQgZGlzcGxheSB0aGUgc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdW5pdHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wZXJhdHVyZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtdGV4dFwiKS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW9wdGlvbnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==