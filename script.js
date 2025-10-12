// Function to show a simple welcome message when the page loads
function showWelcomeMessage() {
    console.log("Welcome to the blog! Your interactive features are ready.");
    // You can uncomment the line below if you want an actual pop-up alert again,
    // but typically for a live site, console messages are preferred.
    // alert("Welcome to My Awesome Blog!");
}

// When the entire HTML document is fully loaded, execute this function
document.addEventListener('DOMContentLoaded', () => {
    // Call the function to display the welcome message
    showWelcomeMessage();

    // *******************************************************************
    // IMPORTANT: The previous JavaScript to handle "Read More" clicks
    // and show an alert has been REMOVED.
    //
    // Now that you have actual HTML files for your blog posts (e.g.,
    // 'the-first-step-to-coding.html', 'my-favorite-tools.html'),
    // the browser will naturally navigate to those pages when you click
    // the <a href="..."> links. This is the desired behavior for a blog.
    // *******************************************************************
});
