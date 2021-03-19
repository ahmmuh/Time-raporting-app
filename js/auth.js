const userName = document.querySelector("#username");
const password = document.querySelector("#password");

const loginBtn = document.querySelector("#login-btn");

const user = {
  username: "test",
  password: 123456,
};

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (userName.value == user.username && password.value == user.password) {
    localStorage.setItem("key", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Fel, ta kontakt med admin");
  }
});
