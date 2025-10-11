// Function to show a simple welcome message when the page loads
function showWelcomeMessage() {
    console.log("Blog loaded successfully! Ready for interaction.");
    // An actual alert you could use:
    // alert("Welcome to the blog! We're glad you're here.");
}

// Function to handle the "Read More" button click
function handleReadMoreClick(event) {
    // Prevent the default action of the link (which is usually navigating to a new page)
    event.preventDefault();

    // Check if the clicked element has the 'read-more' class
    if (event.target.classList.contains('read-more')) {
        const postTitle = event.target.closest('.post-card').querySelector('h3').textContent;

        // Use an alert to simulate navigating to the full post
        alert(`You clicked 'Read More' for the post: "${postTitle}"\n\n(In a real blog, this would take you to the full article page.)`);
    }
}

// Wait until the entire HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Show the initial welcome message
    showWelcomeMessage();

    // 2. Attach an event listener to the main content area (using event delegation)
    const mainContent = document.querySelector('.container');
    mainContent.addEventListener('click', handleReadMoreClick);
});