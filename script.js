// Handle login form submission
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    window.location.href = "page.html";
    //alert(`Username: ${username}\nPassword: ${password}`);

    // You can replace the alert with your actual login logic.
});

// Initialize Google Sign-In
gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: '1065806393030-5l9rb4o7n2q8iobr13qav76em98rkl75.apps.googleusercontent.com'
    }).then(function(auth2) {
        // You can attach the click handler for your Google Sign-In button here
        var options = new gapi.auth2.SigninOptionsBuilder();
        options.setLoginHint('user@example.com'); // Replace with the user's email
        auth2.attachClickHandler('google-signin', options, onSignIn, onFailure);
    });
});
function onSignIn(googleUser) {
    window.location.href = "page.html";
    var profile = googleUser.getBasicProfile();
    var userEmail = profile.getEmail();
    var userDisplayName = profile.getName(); // Optionally, you can also get the user's name

    // Display the logged-in Gmail email
    var userEmailDisplay = document.getElementById("user-email");
    userEmailDisplay.textContent = "Logged in as: " + userEmail;

    // You can also display the user's name if needed
    var userNameDisplay = document.getElementById("user-name");
    userNameDisplay.textContent = "Hello, " + userDisplayName;
}
function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}

