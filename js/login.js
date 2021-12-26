const greeting = document.querySelector("#greeting");
const login = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__username");
const logout = document.querySelector(".logout-btn");
const toDoHidden = document.querySelector(".todo-form__contents");
const toDoListHidden = document.querySelector(".todo-list");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Welcome! ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
  toDoHidden.classList.remove(HIDDEN_CLASS);
  logout.classList.remove(HIDDEN_CLASS);
  toDoListHidden.classList.remove(HIDDEN_CLASS);
}
function bye() {
  logout.classList.add(HIDDEN_CLASS);
  localStorage.clear();
}

const nameCheck = localStorage.getItem(USERNAME_KEY);
if (nameCheck === null) {
  login.classList.remove(HIDDEN_CLASS);
  login.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(nameCheck);
}

logout.addEventListener("click", bye);
