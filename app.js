// selectors
const todoInput = document.querySelector(".todo-input");
const inputButton = document.querySelector(".input-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listeners
inputButton.addEventListener('click', addTodo);
filterOption.addEventListener('click', filterTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event) {

    event.preventDefault();

    // creating div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>"
    todoDiv.appendChild(trashButton);

    if (todoInput.value != ""){
        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }


}

function deleteCheck(e) {
    const item = e.target;
    console.log('hi');

    if (item.classList[0] === "completed-button") {
        const todo = item.parentElement;
        todo.classList.toggle('check');
    }

    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('check')){
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = "none";
                }
                break
            case 'uncompleted':
                if (todo.classList.contains('check')){
                    todo.style.display = 'none'
                }
                else {
                    todo.style.display = "flex";
                }
                break
        }
        
    })
}
