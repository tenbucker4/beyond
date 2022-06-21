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
            slider.style.setProperty("--slider-index", 2);
        } else {
            slider.style.setProperty("--slider-index", sliderIndex - 1);
        }
    }

    if (handle.classList.contains("right-handle")) {
        if (sliderIndex >= 2) {
            slider.style.setProperty("--slider-index", 0);
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
        document.querySelector(".temp-text").textContent = e.target.textContent;
        document.querySelector(".dropdown-options").classList.toggle("active");
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JleW9uZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgaGFuZGxlO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmhhbmRsZVwiKSkge1xuICAgICAgICBoYW5kbGUgPSBlLnRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmhhbmRsZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlICE9IG51bGwpIHtcbiAgICAgICAgbW92ZVNsaWRlcihoYW5kbGUpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBtb3ZlU2xpZGVyKGhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWRlciA9IGhhbmRsZS5jbG9zZXN0KFwiI3NsaWRlci1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcIiNzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVySW5kZXggPSBwYXJzZUludChcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLXNsaWRlci1pbmRleFwiKVxuICAgICk7XG5cbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcImxlZnQtaGFuZGxlXCIpKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2xpZGVyLWluZGV4XCIsIHNsaWRlckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcInJpZ2h0LWhhbmRsZVwiKSkge1xuICAgICAgICBpZiAoc2xpZGVySW5kZXggPj0gMikge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zbGlkZXItaW5kZXhcIiwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNsaWRlci1pbmRleFwiLCBzbGlkZXJJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQcm9ncmVzcygpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb2dyZXNzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtYmxpcFwiKS5mb3JFYWNoKChibGlwKSA9PiB7XG4gICAgICAgIGJsaXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclwiKTtcbiAgICBjb25zdCBzbGlkZXJJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHNsaWRlcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2xpZGVyLWluZGV4XCIpXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlckluZGV4KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tYnV0dG9uXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tb3B0aW9uc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGVtcGVyYXR1cmVcIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXRleHRcIikudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1vcHRpb25zXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=