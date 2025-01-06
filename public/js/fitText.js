// Function to dynamically adjust the font size of an element to fit within its parent
function fitText(element, maxFontSize = 1000) {
    const parent = element.parentElement; // Get the parent element of the target element

    function adjustFontSize() {
        let fontSize = maxFontSize; // Start with the maximum font size
        element.style.fontSize = `${fontSize}px`; // Set the initial font size

        // Decrease font size until the element fits within the parent
        while (
            element.scrollWidth > parent.clientWidth || // Check if the element's width overflows the parent
            element.scrollHeight > parent.clientHeight // Check if the element's height overflows the parent
        ) {
            fontSize -= 1; // Reduce font size by 1px
            element.style.fontSize = `${fontSize}px`; // Apply the reduced font size

            if (fontSize <= 1) break; // Prevent infinite loop by stopping at a minimum font size of 1px
        }
    }

    adjustFontSize(); // Initial adjustment of the font size
    window.addEventListener("resize", adjustFontSize); // Re-adjust font size on window resize for responsiveness
}

// Apply the `fitText` function to all elements with the class "big"
const bigElements = document.getElementsByClassName("big");
for (let i = 0; i < bigElements.length; i++) {
    fitText(bigElements[i]); // Apply fitText to each element
}

// Function to dynamically adjust the height of a container
function adjustContainerHeight() {
    const bigElements = document.getElementsByClassName("big"); // Get all elements with the class "big"
    const container = document.querySelector(".image-entrance"); // Select the target container
    const navbar = document.getElementById("nav-bar");

    const navbarHeight = navbar.offsetHeight; // Get the height of the navbar

    if (!container) {
        console.error("No element with class 'image-entrance' found.");
        return; // Stop execution if the container doesn't exist
    }

    let totalBigHeight = 0; // Variable to store the total height of "big" elements
    for (let i = 0; i < bigElements.length; i++) {
        totalBigHeight += bigElements[i].offsetHeight; // Sum up the height of each "big" element
    }

    // Set the container's height to the viewport height minus the total height of "big" elements
    container.style.height = `calc(100vh - ${totalBigHeight}px - ${navbarHeight}px)`;
}

// Perform the initial adjustment of the container height
adjustContainerHeight();

// Adjust container height on window resize and load events
window.addEventListener("resize", adjustContainerHeight);
window.addEventListener("load", adjustContainerHeight);

// cursor

const customCursor = document.querySelector(".custom-cursor");

// Move the custom cursor with the mouse
document.addEventListener("mousemove", (event) => {
    customCursor.style.top = `${event.clientY}px`;
    customCursor.style.left = `${event.clientX}px`;
});

// Show the cursor after the page has loaded
window.addEventListener("load", () => {
    customCursor.style.transform = "scale(1)"; // Show the cursor after the page has loaded
});

// Shrink the cursor on hover for links and buttons
document.querySelectorAll("a, button, .hamburger-menu").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        customCursor.style.transform = "translate(-50%, -50%) scale(0.6)"; // Shrink the cursor
    });
    element.addEventListener("mouseleave", () => {
        customCursor.style.transform = "translate(-50%, -50%) scale(1)"; // Restore the size
    });
});

// sticky navbar
document.addEventListener("scroll", () => {
    const navbar = document.getElementById("nav-bar");
    const logoText = document.querySelector(".logo-text");

    const startHeight = 164; // Initial height of the navbar
    const endHeight = 80; // Final height of the navbar
    const viewportHeight = window.innerHeight; // 100vh
    const scrollEnd = viewportHeight - startHeight; // Calculate scrollEnd dynamically

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate the current height based on scroll position
    const progress = Math.min(Math.max(scrollTop / scrollEnd, 0), 1);

    // Display hamburger menu
    const hamburger = document.getElementById("hamburger");

    if (progress === 1) {
        hamburger.style.opacity = 1;
        hamburger.style.visibility = "visible";
    } else {
        hamburger.style.opacity = 0;
        hamburger.style.visibility = "hidden";
    }

    // Update navbar height
    const currentHeight = startHeight - progress * (startHeight - endHeight);
    navbar.style.height = `${currentHeight}px`;

    // Update logo font size
    const startFontSize = 64; // Initial font size
    const endFontSize = 36; // Final font size
    const currentFontSize =
        startFontSize - progress * (startFontSize - endFontSize);
    logoText.style.fontSize = `${currentFontSize}px`;
});

// menu
const navbar = document.getElementById("nav-bar");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const body = document.body;

// Toggle hamburger menu and show/hide menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("active");

    // Disable scrolling when the menu is open
    if (menu.classList.contains("active")) {
        body.style.overflow = "hidden"; // Disable scrolling
    } else {
        body.style.overflow = ""; // Enable scrolling
    }
});

// Handle scroll to toggle navbar at-top class
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.classList.add("at-top");
    } else {
        navbar.classList.remove("at-top");
    }
});

// adds a token to the local storage to determine if the user has visited the site before or not and scrolls the page accordingly
document.addEventListener("DOMContentLoaded", function () {
    const lastVisitKey = "last-visit-timestamp";
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        console.log("First visit: Starting from the top");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (now - lastVisit < oneDay) {
        console.log("Returning visitor: Scrolling 100vh deep");
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    } else {
        console.log(
            "More than 24 hours since last visit: Starting from the top"
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    localStorage.setItem(lastVisitKey, now);
});

// fit to parent for the projects
function fitTextToParent(className, maxFontSize = 1000, minFontSize = 1) {
    const elements = document.querySelectorAll(`.${className}`);

    function adjustFontSize(element) {
        const parent = element.parentElement;

        let fontSize = minFontSize;
        element.style.fontSize = `${fontSize}px`;
        element.style.lineHeight = "0.75"; // Maintain desired line-height

        // Increase font size until it overflows
        while (
            element.scrollWidth <=
                parent.clientWidth -
                    parseFloat(getComputedStyle(parent).paddingLeft) -
                    parseFloat(getComputedStyle(parent).paddingRight) &&
            element.scrollHeight <=
                parent.clientHeight -
                    parseFloat(getComputedStyle(parent).paddingTop) -
                    parseFloat(getComputedStyle(parent).paddingBottom) &&
            fontSize < maxFontSize
        ) {
            fontSize += 1;
            element.style.fontSize = `${fontSize}px`;
        }

        // Reduce font size if it overflows
        while (
            element.scrollWidth >
                parent.clientWidth -
                    parseFloat(getComputedStyle(parent).paddingLeft) -
                    parseFloat(getComputedStyle(parent).paddingRight) ||
            element.scrollHeight >
                parent.clientHeight -
                    parseFloat(getComputedStyle(parent).paddingTop) -
                    parseFloat(getComputedStyle(parent).paddingBottom)
        ) {
            fontSize -= 1;
            element.style.fontSize = `${fontSize}px`;
            if (fontSize <= minFontSize) break; // Prevent infinite loop
        }

        // Ensure the element is aligned within the parent
        element.style.width = "100%";
        element.style.height = "100%";
    }

    // Apply initial adjustments to all elements
    elements.forEach((element) => adjustFontSize(element));

    // Recalculate on window resize
    window.addEventListener("resize", () => {
        elements.forEach((element) => adjustFontSize(element));
    });
}

// Apply to project type titles
fitTextToParent("project-type-title", 1000); // Max font size

/*
document.querySelectorAll(".project").forEach((project) => {
    // Mouse enter event to change background
    project.addEventListener("mouseenter", () => {
        const bgImage = project.getAttribute("data-bg");
        project.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${bgImage})`;
        project.style.backgroundSize = "cover";
        project.style.backgroundPosition = "center";
    });

    // Mouse leave event to reset background
    project.addEventListener("mouseleave", () => {
        project.style.backgroundImage = ""; // Reset to no image or default
    });
});
*/

// function to handle the project split scroll
function splitScroll() {
    const controller = new ScrollMagic.Controller();

    const navHeight = 80; // Height of your sticky navbar
    const triggerHookValue = navHeight / window.innerHeight;

    new ScrollMagic.Scene({
        duration: "300%",
        triggerElement: ".project-title",
        triggerHook: triggerHookValue, // Dynamic adjustment
    })
        .setPin(".project-title")
        //.addIndicators()
        .addTo(controller);
}

splitScroll();
