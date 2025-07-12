function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <button class="delete-btn" onclick="deleteTodo(this)">Hapus</button>
  `;

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
  filterTodos(); // update tampilan jika filter aktif
}

function deleteTodo(button) {
  const li = button.parentElement;
  li.remove();
}

function filterTodos() {
  const filterValue = document.getElementById("filter-input").value.toLowerCase();
  const todos = document.querySelectorAll("#todo-list li");

  todos.forEach((todo) => {
    const text = todo.querySelector(".todo-text").textContent.toLowerCase();
    todo.style.display = text.includes(filterValue) ? "flex" : "none";
  });
}
