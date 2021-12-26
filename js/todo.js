const toDo = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form__contents");
const toDoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const dBtn = document.createElement("button");

  li.id = newToDo.id;
  span.innerText = newToDo.text;
  dBtn.innerText = "X";
  dBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(dBtn);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };

  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

toDo.addEventListener("submit", handleToDoSubmit);
