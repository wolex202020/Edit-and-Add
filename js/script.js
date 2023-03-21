const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', createPost);
todoList.addEventListener('click', editPost);

function createPost(e) {
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo-item');

  //todo text input
  const todoText = document.createElement("input");
  todoText.value = todoInput.value;
  todoText.classList.add('todo-text');
  todoText.readOnly = true;
  todoDiv.appendChild(todoText);

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.classList.add("edit-btn");
  todoDiv.appendChild(editBtn);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear value
  todoInput.value = "";
}

function editPost(evt) {
  const item = evt.target.closest(".edit-btn");
  if (!item) return; // Do nothing
  const todo = item.closest(".todo-item");
  const input = todo.querySelector(".todo-text");
  input.readOnly = false;
  input.focus();
  todo.classList.toggle('editing');
}

