// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the toggleButton and menu elements
    const toggleButton = document.getElementById('js-navbar-toggle');
    const menu = document.getElementById('js-menu');

    // Check if the elements were found
    if (toggleButton && menu) {
        // Add click event listener to toggleButton
        toggleButton.addEventListener('click', function() {
            // Toggle the 'active' class on menu
            menu.classList.toggle('active');
        });
    } else {
        console.error("One or both of the elements (toggleButton or menu) not found.");
    }
});
