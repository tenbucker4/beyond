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
    (0,_populateDom_js__WEBPACK_IMPORTED_MODULE_0__.populateData)(planetData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMERBQTBELFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVk7QUFDaEI7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNhOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQixJQUFJLHVCQUF1QjtBQUMxRTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7OztVQzFCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDUjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyREFBVTtBQUNsQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JleW9uZC8uL3NyYy9mZXRjaFBsYW5ldERhdGEuanMiLCJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2ltYWdlU2xpZGVyLmpzIiwid2VicGFjazovL2JleW9uZC8uL3NyYy9wb3B1bGF0ZURvbS5qcyIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmV5b25kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iZXlvbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZXlvbmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9wdWxhdGVEYXRhIH0gZnJvbSBcIi4vcG9wdWxhdGVEb20uanNcIjtcblxuY29uc3QgcGxhbmV0SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNib3ggPiBpbWdcIik7XG5wbGFuZXRJbWFnZXMuZm9yRWFjaCgocGxhbmV0KSA9PiB7XG4gICAgcGxhbmV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgcGxhbmV0TmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgICBnZXRQbGFuZXREYXRhKHBsYW5ldE5hbWUpO1xuICAgIH0pO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBsYW5ldERhdGEocGxhbmV0TmFtZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5sZS1zeXN0ZW1lLXNvbGFpcmUubmV0L3Jlc3QvYm9kaWVzLyR7cGxhbmV0TmFtZX1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgICk7XG4gICAgbGV0IHBsYW5ldERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcG9wdWxhdGVEYXRhKHBsYW5ldERhdGEpO1xufVxuXG5leHBvcnQgeyBnZXRQbGFuZXREYXRhIH07XG4iLCIvLyBNb3ZlIHNsaWRlciBsZWZ0IG9yIHJpZ2h0XG5mdW5jdGlvbiBtb3ZlU2xpZGVyKGhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWRlciA9IGhhbmRsZS5jbG9zZXN0KFwiI3NsaWRlci1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcIiNzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIGxlZnQgYXJyb3cgd2hlbiBhdCBsZWZ0IGVuZCBvZiBjYXJvdXNlbCwgbW92ZSB0byByaWdodCBlbmRcbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcImxlZnQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIGNsaWNraW5nIHJpZ2h0IGFycm93IHdoZW4gYXQgcmlnaHQgZW5kIG9mIGNhcm91c2VsLCBtb3ZlIHRvIGxlZnQgZW5kXG4gICAgaWYgKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyaWdodC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgc2xpZGVySW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUHJvZ3Jlc3MoKTtcbn1cblxuLy8gVXBkYXRlIHByb2dyZXNzIGJhciBoaWdobGlnaHRpbmdcbmZ1bmN0aW9uIGNoZWNrUHJvZ3Jlc3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1ibGlwXCIpLmZvckVhY2goKGJsaXApID0+IHtcbiAgICAgICAgYmxpcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuICAgIGNvbnN0IHNsaWRlckluZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2xpZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zbGlkZXItaW5kZXhcIilcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySW5kZXgpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IG1vdmVTbGlkZXIsIGNoZWNrUHJvZ3Jlc3MgfTtcbiIsImltcG9ydCB7IGdldFBsYW5ldERhdGEgfSBmcm9tIFwiLi9mZXRjaFBsYW5ldERhdGFcIjtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYW5ldC10aXRsZVwiKTtcbmNvbnN0IGF2Z1RlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF2Z1RlbXBWYWx1ZVwiKTtcbmNvbnN0IHN1cmZhY2VHcmF2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJmYWNlR3Jhdml0eVZhbHVlXCIpO1xuY29uc3QgcmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWRpdXNWYWx1ZVwiKTtcbmNvbnN0IG1hc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc3NWYWx1ZVwiKTtcbmNvbnN0IG1vb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uc1ZhbHVlXCIpO1xuY29uc3QgZXNjYXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc2NhcGVWYWx1ZVwiKTtcblxuZnVuY3Rpb24gcG9wdWxhdGVEYXRhKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YS5lbmdsaXNoTmFtZTtcbiAgICBhdmdUZW1wLnRleHRDb250ZW50ID0gZGF0YS5hdmdUZW1wO1xuICAgIHN1cmZhY2VHcmF2aXR5LnRleHRDb250ZW50ID0gZGF0YS5ncmF2aXR5O1xuICAgIHJhZGl1cy50ZXh0Q29udGVudCA9IGRhdGEubWVhblJhZGl1cztcbiAgICBtYXNzLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYXNzLm1hc3NWYWx1ZX0gXiAke2RhdGEubWFzcy5tYXNzRXhwb25lbnR9YDtcbiAgICBpZiAoZGF0YS5tb29ucyA9PSBudWxsKSB7XG4gICAgICAgIG1vb25zLnRleHRDb250ZW50ID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9vbnMudGV4dENvbnRlbnQgPSBkYXRhLm1vb25zLmxlbmd0aDtcbiAgICB9XG4gICAgZXNjYXBlLnRleHRDb250ZW50ID0gZGF0YS5lc2NhcGU7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtb3ZlU2xpZGVyLCBjaGVja1Byb2dyZXNzIH0gZnJvbSBcIi4vaW1hZ2VTbGlkZXIuanNcIjtcbmltcG9ydCB7IGdldFBsYW5ldERhdGEgfSBmcm9tIFwiLi9mZXRjaFBsYW5ldERhdGEuanNcIjtcblxuLy8gSW50cm8gYW5pbWF0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRvcCA9IFwiMXJlbVwiO1xuICAgIH0sIDIwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb1wiKTtcbiAgICAgICAgaW50cm8uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIH0sIDIwMDApO1xufSk7XG5cbi8vIExpc3RlbiBmb3IgY2xpY2sgb24gaW1hZ2UgY2Fyb3VzZWwgaGFuZGxlcywgdHJpZ2dlciBzbGlkZXIgbW92ZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGhhbmRsZTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5oYW5kbGVcIikpIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlID0gZS50YXJnZXQuY2xvc2VzdChcIi5oYW5kbGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZSAhPSBudWxsKSB7XG4gICAgICAgIG1vdmVTbGlkZXIoaGFuZGxlKTtcbiAgICB9XG59KTtcblxuLy8gU2hvdy9oaWRlIGRyb3Bkb3duIG1lbnUgZm9yIHRlbXBlcmF0dXJlIHVuaXRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tYnV0dG9uXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuXG4vLyBIaWRlIGRyb3Bkb3duIG9wdGlvbnMgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlIGFuZCBkaXNwbGF5IHRoZSBzZWxlY3RlZCB0ZW1wZXJhdHVyZSB1bml0c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBlcmF0dXJlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC10ZXh0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9