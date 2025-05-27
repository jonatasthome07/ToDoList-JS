//Seleção de Elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-lisr")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")


//Funções
const saveToDo = (text) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo")
    
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'
    
}

//Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Form enviado!")

    const inputValue = todoInput.value
    if(inputValue){
        saveToDo(inputValue)
    }
})