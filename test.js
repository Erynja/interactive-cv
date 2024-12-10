document.addEventListener("DOMContentLoaded", function () {
    const panda = document.getElementById("spacepanda");
    const scrollContainer = document.getElementById("scrollContainer");
    const rocket = document.getElementById("rocket");
    const subSection = document.querySelector(".sub-section.section-1-3");
    const flagpole = document.querySelector(".flagpole");
    const flag = document.querySelector(".flag");
    const bosnia = document.querySelector(".bosnia");
    const bosniaTriangle = document.querySelector(".bosnia__triangle");
    const bosniaStarWrapper = document.querySelector(".bosnia__star__wrapper");
    const star = document.querySelector(".star");

    let isRocketSequenceActive = false;
    let hasTriggeredFlagAnimation = false;
    let scrollOffset = 0;
    const controls = { a: false, d: false };
    let animationFrame = null;

    // Function to handle resizing
    const updateLayout = () => {
        const isMobile = window.innerWidth < 768;
        scrollContainer.style.flexDirection = isMobile ? "column" : "row";
    };

    // Adjust layout on window resize
    window.addEventListener("resize", updateLayout);
    updateLayout(); // Initial layout adjustment

    // Scroll and Panda movement logic
    const updateScroll = () => {
        if (isRocketSequenceActive) {
            console.warn("Rocket sequence active, skipping Panda controls.");
            return;
        }

        if (controls.a) {
            scrollOffset = Math.max(0, scrollOffset - 5);
            panda.style.transform = "scaleX(-1)";
        }
        if (controls.d) {
            scrollOffset = Math.min(
                scrollContainer.scrollWidth - window.innerWidth,
                scrollOffset + 5
            );
            panda.style.transform = "scaleX(1)";
        }

        scrollContainer.style.transform = `translateX(${-scrollOffset}px)`;

        if (!hasTriggeredFlagAnimation && scrollOffset >= 370) {
            triggerFlagAnimation();
        }

        if (scrollOffset >= 1700) {
            revealFlowers();
        }

        if (!isRocketSequenceActive) {
            animationFrame = requestAnimationFrame(updateScroll);
        }
    };

    const triggerFlagAnimation = () => {
        if (!flagpole || !flag) {
            console.error("Flagpole or flag element not found!");
            return;
        }
        console.log("Triggering flag animation.");
        flagpole.style.transition = "height 2s ease-in-out";
        flagpole.style.height = "400px";

        setTimeout(() => {
            console.log("Flagpole animation complete. Rolling out flag.");
            flag.style.transition = "width 2s ease-in-out";
            flag.style.width = "300px";
        }, 1000);

        hasTriggeredFlagAnimation = true;
    };

    const revealFlowers = () => {
        const flowers = document.querySelectorAll(".daffodil-flower");
        flowers.forEach((flower, index) => {
            flower.style.bottom = "20%";
            flower.style.opacity = "1";
            if (index % 2 === 1) {
                flower.classList.add("mirrored");
            }
        });
    };

    const triggerRocketSequence = () => {
        if (isRocketSequenceActive) {
            console.warn("Rocket already launched. Ignoring further attempts.");
            return;
        }
        console.log("Rocket Launch Initiated!");
        isRocketSequenceActive = true;

        if (panda) {
            panda.style.transition = "opacity 0.1s ease-out";
            panda.style.opacity = "0";
        }

        if (rocket) {
            rocket.style.transition = "transform 1s ease-in-out";
            rocket.style.transform = "rotate(90deg)";

            setTimeout(() => {
                rocket.style.transition = "transform 5s ease-in-out";
                rocket.style.transform += " translateY(-120vh)";

                setTimeout(() => {
                    console.log("Rocket has exited the screen.");
                }, 5000);
            }, 1000);
        }
    };

    window.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        if (key === "a" || key === "d") {
            controls[key] = true;
            if (!animationFrame) {
                animationFrame = requestAnimationFrame(updateScroll);
            }
        }
    });

    window.addEventListener("keyup", (event) => {
        const key = event.key.toLowerCase();
        if (key === "a" || key === "d") {
            controls[key] = false;
            if (!Object.values(controls).includes(true)) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        }
    });

    // Start initial update
    updateScroll();
});
