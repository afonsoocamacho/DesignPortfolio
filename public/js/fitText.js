function fitText(element, maxFontSize = 1000) {
    const parent = element.parentElement;

    function adjustFontSize() {
        let fontSize = maxFontSize;
        element.style.fontSize = `${fontSize}px`;

        while (
            element.scrollWidth > parent.clientWidth ||
            element.scrollHeight > parent.clientHeight
        ) {
            fontSize -= 1;
            element.style.fontSize = `${fontSize}px`;
            if (fontSize <= 1) break; // Prevent infinite loop
        }
    }

    // Initial adjustment
    adjustFontSize();

    // Resize listener for responsive behavior
    window.addEventListener("resize", adjustFontSize);
}

// Call the function for each element with class "big":
const elements = document.getElementsByClassName("big");
for (let i = 0; i < elements.length; i++) {
    fitText(elements[i]);
}
