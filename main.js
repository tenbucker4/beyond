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
    document.querySelectorAll(".progress-blip").forEach((blip) => {
        blip.classList.remove("active");
    });
    const slider = document.getElementById("slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    document.getElementById(sliderIndex).classList.add("active");
}

document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("dropdown-button")) {
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("temperature")) {
        console.log("click");
        document.querySelector(".temp-text").textContent = e.target.textContent;
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV5b25kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBoYW5kbGU7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuaGFuZGxlXCIpKSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGFuZGxlXCIpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGUgIT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2xpZGVyKGhhbmRsZSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIG1vdmVTbGlkZXIoaGFuZGxlKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gaGFuZGxlLmNsb3Nlc3QoXCIjc2xpZGVyLWNvbnRhaW5lclwiKS5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHNsaWRlcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2xpZGVyLWluZGV4XCIpXG4gICAgKTtcblxuICAgIGlmIChoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVmdC1oYW5kbGVcIikpIHtcbiAgICAgICAgaWYgKHNsaWRlckluZGV4IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcInJpZ2h0LWhhbmRsZVwiKSkge1xuICAgICAgICBpZiAoc2xpZGVySW5kZXggPj0gMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgc2xpZGVySW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrUHJvZ3Jlc3MoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzLWJsaXBcIikuZm9yRWFjaCgoYmxpcCkgPT4ge1xuICAgICAgICBibGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJbmRleCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWJ1dHRvblwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW9wdGlvbnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBlcmF0dXJlXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC10ZXh0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9