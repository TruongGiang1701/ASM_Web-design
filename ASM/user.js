// Load user info on page load
document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        document.getElementById("user-name").value = loggedInUser.name || "";
        document.getElementById("user-email").value = loggedInUser.email || "";
        document.getElementById("user-phone").value = loggedInUser.phone || "";
        document.getElementById("user-address").value = loggedInUser.address || "";
    } else {
        alert("No user is logged in. Redirecting to login page.");
        window.location.href = "Login.html";
    }
});

// Update user info
function updateUserInfo(event) {
    event.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    // Update user information
    loggedInUser.phone = document.getElementById("user-phone").value;
    loggedInUser.address = document.getElementById("user-address").value;

    // Update Local Storage
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    // Update global users list
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === loggedInUser.email);
    if (userIndex !== -1) {
        users[userIndex] = loggedInUser;
        localStorage.setItem("users", JSON.stringify(users));
    }

    alert("User information updated successfully!");
}

// Redirect to a specific page
function redirectTo(page) {
    window.location.href = page;
}
