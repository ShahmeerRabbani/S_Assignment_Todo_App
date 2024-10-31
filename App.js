// function AddTodo(){
//     var input = document.getElementById('task-input')
//     var error = document.getElementById('error')
//     var orderList = document.getElementById('task-list')

//     if(input.value == ""){
//         error.innerHTML = "Please Enter value";
        
//     }
//     else{
//         var listItem = document.createElement('li');
//         listItem.className = "list-item";

//         var removeItem = document.createElement('a');
//         // removeItem.href = "javascript:void(0)";
//         removeItem.innerText = "❌";

//         var textNode = document.createTextNode(input.value)

//         listItem.append( textNode,removeItem);
        
//         orderList.appendChild(listItem);
//         error.innerHTML = "";
//         input.value = "";
        
//         removeItem.addEventListener('click', function() {
//             orderList.removeChild(listItem);
//         })
//     }
    
// }


// script.js
// document.getElementById("add-task-btn").addEventListener("click", addTask);

function AddTodo() {
  var taskInput = document.getElementById("task-input");
  var error = document.getElementById("error");
  var taskText = taskInput.value.trim();

  if (taskText == "") {
    error.innerHTML = "Please enter a task";
    error.style.color = "red";
    return;
}
error.innerHTML = "";
    var taskList = document.getElementById("task-list");

    // Create a new task item
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task text
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create task buttons (complete and delete)
    var taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    var update = document.createElement("button");
    update.className = "Update-btn";
    update.textContent = "update";

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    update.addEventListener("click", () => {
    var updateValue = prompt('Enter Value to update')
    taskSpan.textContent = updateValue;
    });

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(update);
    taskButtons.appendChild(deleteBtn);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  
}
