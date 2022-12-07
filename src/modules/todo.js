class ToDo{
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let todoArray;
if(!localStorage.getItem("todos")) {
  todoArray = [];
  localStorage.setItem("todos", JSON.stringify(todoArray));
}
else {
  todoArray = JSON.parse(localStorage.getItem("todos"));
}

function createToDoPage() {
  console.log(todoArray);
  let mainDiv = document.getElementById("main");
  mainDiv.innerHTML = `<div id="newTodoForm">
  <label for="newTodoTitle">Title:<input type="text" name="newTodoTitle" id="newTodoTitle"></label>
  <label for="newTodoDes">Description:<input type="text" name="newTodoDes" id="newTodoDes"></label>
  <label for="newTodoDate">Due date:<input type="date" name="newTodoDate" id="newTodoDate"></label>
  <button id="add-todo">Add</button>
  </div>
  
  <div id="todo-container">
  </div>`;

  let todoContainer = document.querySelector("#todo-container");

  for (let i = 0; i <= todoArray.length; i++) {
    if (!(todoArray[i]==undefined)){
    let newTodoElement = document.createElement("div");
    newTodoElement.setAttribute("id", `todo${i}`)
    newTodoElement.innerHTML = `
    <div class="todoTitle">Title: ${todoArray[i].title}</div>
    <div class="todoDescription">Description: ${todoArray[i].description}</div>
    <div class="todoDate">Due date: ${todoArray[i].dueDate}</div>
    <div class="todoPriority">Priority: ${todoArray[i].priority}</div>
    <button id="delete${i}">Delete</button>`;
    todoContainer.appendChild(newTodoElement);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    let deleteTodoBtn = document.getElementById(`delete${i}`);
    deleteTodoBtn.addEventListener("click", () => {
      newTodoElement.remove();
      todoArray[i] = undefined;
      localStorage.setItem("todos", JSON.stringify(todoArray));
    }
    )
    localStorage.setItem("todos", JSON.stringify(todoArray));
    }
  }
  
  let addTodoBtn = document.getElementById("add-todo");
  addTodoBtn.addEventListener("click", () =>
  {
    todoContainer.innerHTML = "";
    let newTodoTitle = document.getElementById("newTodoTitle").value;
    let newTodoDes = document.getElementById("newTodoDes").value;
    let newTodoDate = document.getElementById("newTodoDate").value;
    document.getElementById("newTodoTitle").value = "";
    document.getElementById("newTodoDes").value = "";
    document.getElementById("newTodoDate").value = "";
    let newTodo = new ToDo(newTodoTitle, newTodoDes, newTodoDate, "normal");
    todoArray.push(newTodo);
    for (let i = 0; i <= todoArray.length; i++) {
      if (!(todoArray[i]==undefined)){
      let newTodoElement = document.createElement("div");
      newTodoElement.setAttribute("id", `todo${i}`)
      newTodoElement.innerHTML = `
      <div class="todoTitle">Title: ${todoArray[i].title}</div>
      <div class="todoDescription">Description: ${todoArray[i].description}</div>
      <div class="todoDate">Due date: ${todoArray[i].dueDate}</div>
      <div class="todoPriority">Priority: ${todoArray[i].priority}</div>
      <button id="delete${i}">Delete</button>`;
      todoContainer.appendChild(newTodoElement);
      localStorage.setItem("todos", JSON.stringify(todoArray));
      let deleteTodoBtn = document.getElementById(`delete${i}`);
      deleteTodoBtn.addEventListener("click", () => {
        newTodoElement.remove();
        todoArray[i] = undefined;
        localStorage.setItem("todos", JSON.stringify(todoArray));
      }
      )
      localStorage.setItem("todos", JSON.stringify(todoArray));
      }
    }
    todoArray = todoArray.filter((e) => e!=undefined);
    localStorage.setItem("todos", JSON.stringify(todoArray));
  }
  )
}

export {createToDoPage};
