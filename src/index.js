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
        console.log("click");
    }
});
