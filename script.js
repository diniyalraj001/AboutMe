// JavaScript for animations

// Function to add fade-in effect to elements
function fadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        element.classList.add('visible');
    });
}

// Add event listener for page load
window.addEventListener('load', fadeIn);
