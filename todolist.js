// Selectors
const todoInput = document.querySelector('.todo-input');
//const todoButton = document.getElementsByClassName('todo-button');
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")



//Event Listeners
todoButton.addEventListener("click", addtodo); 
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions

function addtodo(event) {
	//prevent form from submittion
	event.preventDefault();
	//todo Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	// Create Li
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // check Mark Button
      const completedButton = document.createElement("button")
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
    // trash Button
      const trashButton = document.createElement("button")
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      //Apend to list
      todoList.appendChild(todoDiv);
      todoInput.value = "";
      todoInput.focus();
}  

function deleteCheck(e) {
	const item = e.target;
	//delete todo
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		//animation
		/*todo.classList.add("fall");
		todo.addEventListener("transitionend", function() {
			todo.remove();
		});*/
		 todo.remove();
	}
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed"); }

};

function filterTodo(e) {
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
      switch(e.target.value){
      	case "all":
      	   break;
      	case "completed":
      	  	console.log(classList); 
      	  	 


      }	
    });
    
   /*todos.forEach(function(todo) {
   	switch (e.target.value) {
   		case "all":
   		  todo.style.display = "flex";
   		  break;
        case "completed":
        if (todo.classList.contains("completed")){
        	todo.style.display = "flex";
        }
        else { 
        	todo.style.display = "none";}
   	}
   });*/
}