document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
  
    if (registerForm) {
      registerForm.addEventListener("submit", registerUser);
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", loginUser);
    }
  
    if (document.getElementById("userList")) {
      displayUsers();
    }
  });
  
  function registerUser(e) {
    e.preventDefault();
  
    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      dob: document.getElementById("dob").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      username: document.getElementById("regUsername").value,
      password: document.getElementById("regPassword").value,
    };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    document.getElementById("registerForm").reset();
  }
  
  function loginUser(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      alert("Login successful!");
      window.location.href = "data-list.html";
    } else {
      alert("Invalid username or password.");
    }
  }
  
  function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const list = document.getElementById("userList");
    users.forEach(user => {
      const li = document.createElement("li");
      li.innerText = `${user.name} (${user.username}) - ${user.email}, ${user.mobile}, ${user.city}`;
      list.appendChild(li);
    });
  }
  