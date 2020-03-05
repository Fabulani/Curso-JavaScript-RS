var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];  // Load local storage data.

buttonElement.onclick = addTodo;
inputElement.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {  // "Enter" key was pressed.
        event.preventDefault();
        buttonElement.click();
    }
});
renderAll();

function renderAll(){
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
        var linkText = document.createTextNode("Delete");

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function addTodo(){  // Add an item to the todo list.
    var todoText = inputElement.value + " ";  // The " " was added to separate the list item from the "Delete" button.
    todos.push(todoText);
    inputElement.value = '';
    renderAll();
    saveToStorage();
}

function deleteTodo(pos){  // Delete a todo item.
    todos.splice(pos, 1);
    renderAll();
    saveToStorage();
}

function saveToStorage(){  // Save todo list in local machine storage.
    localStorage.setItem('list_todos', JSON.stringify(todos));
}