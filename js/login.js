const users = [
  { email_id: "sample@gmail.com", password: "1234" },
  { email_id: "sample1@gmail.com", password: "9876" },
];

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = users.find(
      (u) => u.email_id === email && u.password === password
    );

    if (user) {
      sessionStorage.setItem("userEmail", email);
      window.location.href = "page2.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
