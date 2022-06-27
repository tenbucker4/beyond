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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSwwREFBMEQsV0FBVztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pELG9DQUFvQztBQUNwQztBQUNBLE9BQU8sR0FBRyxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELDBCQUEwQixvQ0FBb0M7QUFDOUQsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQyxJQUFJLGFBQWE7QUFDN0U7O0FBRXdCOzs7Ozs7O1VDdEN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNTOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsSUFBSSxrRUFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkRBQVU7QUFDbEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvZmV0Y2hQbGFuZXREYXRhLmpzIiwid2VicGFjazovL2JleW9uZC8uL3NyYy9pbWFnZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvcG9wdWxhdGVEb20uanMiLCJ3ZWJwYWNrOi8vYmV5b25kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JleW9uZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmV5b25kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmV5b25kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvcHVsYXRlRGF0YSB9IGZyb20gXCIuL3BvcHVsYXRlRG9tLmpzXCI7XG5cbmNvbnN0IHBsYW5ldEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYm94ID4gaW1nXCIpO1xuY29uc3QgaW1hZ2VCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYm94XCIpO1xucGxhbmV0SW1hZ2VzLmZvckVhY2goKHBsYW5ldCkgPT4ge1xuICAgIHBsYW5ldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHBsYW5ldE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgZ2V0UGxhbmV0RGF0YShwbGFuZXROYW1lKTtcbiAgICAgICAgaGlnaGxpZ2h0UGxhbmV0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIH0pO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBsYW5ldERhdGEocGxhbmV0TmFtZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5sZS1zeXN0ZW1lLXNvbGFpcmUubmV0L3Jlc3QvYm9kaWVzLyR7cGxhbmV0TmFtZX1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgICk7XG4gICAgbGV0IHBsYW5ldERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcG9wdWxhdGVEYXRhKHBsYW5ldERhdGEpO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRQbGFuZXQodGFyZ2V0KSB7XG4gICAgaW1hZ2VCb3hlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBpbWFnZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICB0YXJnZXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgd2hpdGVzbW9rZVwiO1xufVxuXG5leHBvcnQgeyBnZXRQbGFuZXREYXRhLCBoaWdobGlnaHRQbGFuZXQgfTtcbiIsIi8vIE1vdmUgc2xpZGVyIGxlZnQgb3IgcmlnaHRcbmZ1bmN0aW9uIG1vdmVTbGlkZXIoaGFuZGxlKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gaGFuZGxlLmNsb3Nlc3QoXCIjc2xpZGVyLWNvbnRhaW5lclwiKS5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHNsaWRlcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2xpZGVyLWluZGV4XCIpXG4gICAgKTtcblxuICAgIC8vIFdoZW4gY2xpY2tpbmcgbGVmdCBhcnJvdyB3aGVuIGF0IGxlZnQgZW5kIG9mIGNhcm91c2VsLCBtb3ZlIHRvIHJpZ2h0IGVuZFxuICAgIGlmIChoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVmdC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4IDw9IDApIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgc2xpZGVySW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZW4gY2xpY2tpbmcgcmlnaHQgYXJyb3cgd2hlbiBhdCByaWdodCBlbmQgb2YgY2Fyb3VzZWwsIG1vdmUgdG8gbGVmdCBlbmRcbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcInJpZ2h0LWhhbmRsZVwiKSkge1xuICAgICAgICBpZiAoc2xpZGVySW5kZXggPj0gMikge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCBzbGlkZXJJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQcm9ncmVzcygpO1xufVxuXG4vLyBVcGRhdGUgcHJvZ3Jlc3MgYmFyIGhpZ2hsaWdodGluZ1xuZnVuY3Rpb24gY2hlY2tQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzLWJsaXBcIikuZm9yRWFjaCgoYmxpcCkgPT4ge1xuICAgICAgICBibGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJbmRleCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZXhwb3J0IHsgbW92ZVNsaWRlciwgY2hlY2tQcm9ncmVzcyB9O1xuIiwiaW1wb3J0IHsgZ2V0UGxhbmV0RGF0YSB9IGZyb20gXCIuL2ZldGNoUGxhbmV0RGF0YVwiO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhbmV0LXRpdGxlXCIpO1xuY29uc3QgYXZnVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXZnVGVtcFZhbHVlXCIpO1xuY29uc3Qgc3VyZmFjZUdyYXZpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cmZhY2VHcmF2aXR5VmFsdWVcIik7XG5jb25zdCByYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhZGl1c1ZhbHVlXCIpO1xuY29uc3QgbWFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFzc1ZhbHVlXCIpO1xuY29uc3QgbW9vbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vb25zVmFsdWVcIik7XG5jb25zdCBlc2NhcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVzY2FwZVZhbHVlXCIpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZURhdGEoZGF0YSkge1xuICAgIGNvbnN0IGZvcndhcmRTbGFzaCA9IFwiL1wiO1xuICAgIGNvbnN0IHN1cGVyc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNVUFwiKTtcbiAgICBjb25zdCBrZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHNxdWFyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1VQXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmVuZ2xpc2hOYW1lO1xuICAgIGF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLmF2Z1RlbXAgLSAyNzN9IFxcdTAwQjBDYDtcbiAgICBzdXJmYWNlR3Jhdml0eS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIChkYXRhLmdyYXZpdHkgLyAxMCkgKiAxMFxuICAgICl9IG0ke2ZvcndhcmRTbGFzaH1zYDtcbiAgICBzcXVhcmVkLnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgc3VyZmFjZUdyYXZpdHkuYXBwZW5kQ2hpbGQoc3F1YXJlZCk7XG4gICAgcmFkaXVzLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1lYW5SYWRpdXMpfSBrbWA7XG4gICAgbWFzcy50ZXh0Q29udGVudCA9IGAke2RhdGEubWFzcy5tYXNzVmFsdWUudG9QcmVjaXNpb24oMil9IHggMTBgO1xuICAgIHN1cGVyc2NyaXB0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYXNzLm1hc3NFeHBvbmVudH0gYDtcbiAgICBrZy50ZXh0Q29udGVudCA9IFwia2dcIjtcbiAgICBtYXNzLmFwcGVuZENoaWxkKHN1cGVyc2NyaXB0KTtcbiAgICBtYXNzLmFwcGVuZENoaWxkKGtnKTtcblxuICAgIGlmIChkYXRhLm1vb25zID09IG51bGwpIHtcbiAgICAgICAgbW9vbnMudGV4dENvbnRlbnQgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb29ucy50ZXh0Q29udGVudCA9IGRhdGEubW9vbnMubGVuZ3RoO1xuICAgIH1cbiAgICBlc2NhcGUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZXNjYXBlIC8gMTAwMCl9IGttJHtmb3J3YXJkU2xhc2h9c2A7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtb3ZlU2xpZGVyLCBjaGVja1Byb2dyZXNzIH0gZnJvbSBcIi4vaW1hZ2VTbGlkZXIuanNcIjtcbmltcG9ydCB7IGdldFBsYW5ldERhdGEsIGhpZ2hsaWdodFBsYW5ldCB9IGZyb20gXCIuL2ZldGNoUGxhbmV0RGF0YS5qc1wiO1xuXG4vLyBJbnRybyBhbmltYXRpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuc3R5bGUudG9wID0gXCIxcmVtXCI7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvXCIpO1xuICAgICAgICBpbnRyby5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBjb25zdCBlYXJ0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyIDpudGgtY2hpbGQoMylcIik7XG4gICAgZWFydGguc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgd2hpdGVzbW9rZVwiO1xuXG4gICAgZ2V0UGxhbmV0RGF0YShcImVhcnRoXCIpO1xufSk7XG5cbi8vIExpc3RlbiBmb3IgY2xpY2sgb24gaW1hZ2UgY2Fyb3VzZWwgaGFuZGxlcywgdHJpZ2dlciBzbGlkZXIgbW92ZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGhhbmRsZTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5oYW5kbGVcIikpIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQuY2xvc2VzdChcIi5oYW5kbGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZSAhPSBudWxsKSB7XG4gICAgICAgIG1vdmVTbGlkZXIoaGFuZGxlKTtcbiAgICB9XG59KTtcblxuLy8gU2hvdy9oaWRlIGRyb3Bkb3duIG1lbnUgZm9yIHRlbXBlcmF0dXJlIHVuaXRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tYnV0dG9uXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuXG4vLyBIaWRlIGRyb3Bkb3duIG9wdGlvbnMgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlIGFuZCBkaXNwbGF5IHRoZSBzZWxlY3RlZCB0ZW1wZXJhdHVyZSB1bml0c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBlcmF0dXJlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC10ZXh0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9