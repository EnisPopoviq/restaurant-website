const menuItems = document.querySelectorAll('.menu-item');

// Function to check the scroll position and apply the fade-in effect
function fadeInOnScroll() {
    const scrollPosition = window.scrollY + window.innerHeight; // The current position + viewport height

    menuItems.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top + window.scrollY; // Position of the menu item

        // Check if the item is within the viewport and trigger the fade-in effect
        if (scrollPosition > itemPosition + 100) { // 100 is a small buffer to trigger the effect slightly before it's fully visible
            item.classList.add('visible'); // Add 'visible' class to make the item fade in
            // Add a delay based on the index of the item
            item.style.animationDelay = `${index * 0.2}s`; // 0.2s delay for each subsequent item
        }
    });
}

// Add an event listener for the scroll event to trigger the fade-in effect
window.addEventListener('scroll', fadeInOnScroll);

// Call the function once in case the page loads already at a scroll position
fadeInOnScroll();