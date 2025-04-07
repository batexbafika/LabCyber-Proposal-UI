// Display a message when the user interacts with the login button
const loginButton = document.querySelector(".button");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    console.log("Redirecting to GitHub for authentication...");
  });
}
