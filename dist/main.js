/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }
    if (handle != null) {
        moveSlider(handle);
    }
});

function moveSlider(handle) {
    const slider = handle.closest("#slider-container").querySelector("#slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    if (handle.classList.contains("left-handle")) {
        if (sliderIndex <= 0) {
            return;
        } else {
            slider.style.setProperty("--slider-index", sliderIndex - 1);
        }
    }

    if (handle.classList.contains("right-handle")) {
        if (sliderIndex >= 2) {
            return;
        } else {
            slider.style.setProperty("--slider-index", sliderIndex + 1);
        }
    }

    checkProgress();
}

function checkProgress() {
    document.getElementById("0").classList.remove("active");
    document.getElementById("1").classList.remove("active");
    document.getElementById("2").classList.remove("active");
    const slider = document.getElementById("slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    document.getElementById(sliderIndex).classList.add("active");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBoYW5kbGU7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuaGFuZGxlXCIpKSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGFuZGxlXCIpO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlICE9IG51bGwpIHtcbiAgICAgICAgbW92ZVNsaWRlcihoYW5kbGUpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBtb3ZlU2xpZGVyKGhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWRlciA9IGhhbmRsZS5jbG9zZXN0KFwiI3NsaWRlci1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcIiNzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcImxlZnQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCBzbGlkZXJJbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyaWdodC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Byb2dyZXNzKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvZ3Jlc3MoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIxXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJbmRleCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==