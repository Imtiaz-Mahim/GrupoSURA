document.addEventListener("DOMContentLoaded", function () {
    //drop down menu
    const pDropList = document.querySelectorAll(".menuParent");

    pDropList.forEach((pDrop) => {
        const dropDown = pDrop.querySelector(".dropDown");
        const svgIcon = pDrop.querySelector("img");

        if (!dropDown || !svgIcon) return;

        pDrop.addEventListener("click", function () {
            if (dropDown.classList.contains("hidden")) {
                dropDown.classList.remove("hidden");
                dropDown.classList.add("flex");
                dropDown.style.height = "0px";
                setTimeout(() => {
                    dropDown.style.height = dropDown.scrollHeight + "px";
                }, 10);
                svgIcon.classList.add("rotate-180");
            } else {
                hideDropdown();
            }
        });

        function hideDropdown() {
            dropDown.style.height = "0px";
            setTimeout(() => {
                dropDown.classList.add("hidden");
                dropDown.classList.remove("flex");
            }, 300);
            svgIcon.classList.remove("rotate-180");
        }

        document.addEventListener("click", function (event) {
            if (!pDrop.contains(event.target) && !dropDown.contains(event.target)) {
                hideDropdown();
            }
        });
    });

    //Medium Device Menu
    const bar = document.querySelector(".bar");
    const mainMenu = document.querySelector(".mainMenu");
    const overlay = document.querySelector(".overlay");
    const xmark = document.querySelector(".xmark");

    bar.addEventListener("click", () => {
        mainMenu.classList.remove("w-0");
        mainMenu.classList.add("w-80");
        overlay.classList.remove("invisible");
        overlay.classList.add("visible");
        overlay.classList.remove("opacity-0");
        overlay.classList.add("opacity-25");
        overlay.classList.remove("-z-10");
        overlay.classList.add("z-10");
    });
    overlay.addEventListener("click", () => {
        mainMenu.classList.remove("w-80");
        mainMenu.classList.add("w-0");
        overlay.classList.remove("visible");
        overlay.classList.add("invisible");
        overlay.classList.remove("opacity-25");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("z-10");
        overlay.classList.add("-z-10");
    });
    xmark.addEventListener("click", () => {
        mainMenu.classList.remove("w-80");
        mainMenu.classList.add("w-0");
        overlay.classList.remove("visible");
        overlay.classList.add("invisible");
        overlay.classList.remove("opacity-25");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("z-10");
        overlay.classList.add("-z-10");
    });
});
