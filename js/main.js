import { Todo } from '../services/todo.js'
import { Service } from '../services/service.js'

const service = new Service;

const getID = id => document.getElementById(id)

// Render task in progress
const renderTaskInProgress = () => {
   const content = service.filterTaskInComp().reduce((total, value) => {
      total += `
            <li class="d-flex">
               <p>${value.taskName}</p>
               <div class="buttons">
                  <span class="far fa-trash-alt remove" style="cursor: pointer" onclick="removeTask('${value.taskName}')"></span>
                  <span class="fas fa-check-circle complete" style="cursor: pointer" onclick="completeTask('${value.taskName}')"></span>
               </div>
            </li>   
      `
      return total
   }, "");
   getID("todo").innerHTML = content;
}

// Render task complete
const renderTaskComplete = () => {
   const content = service.filterTaskComplete().reduce((total, value) => {
      total += `
            <li class="d-flex">
               <p>${value.taskName}</p>
               <div class="buttons">
                  <span class="far fa-trash-alt remove" style="cursor: pointer" onclick="removeTask('${value.taskName}')"></span>
                  <span class="fas fa-check-circle complete"></span>
               </div>
            </li>   
      `
      return total
   }, "");
   getID("completed").innerHTML = content;
}

// Add item
getID("addItem").onclick = () => {
   const nameTask = getID("newTask").value;
   if (nameTask == "") {
      getID("alert").innerHTML = "Please add your todo";
      getID("alert").style.color = "red"
      return;
   }

   getID("alert").style.display = "none";
   const task = new Todo(nameTask, "inProgress");
   service.addTask(task);
   renderTaskInProgress();
   renderTaskComplete();
   getID("newTask").value = "";
}

window.removeTask = (task) => {
   service.deleteTask(task);
   renderTaskInProgress();
   renderTaskComplete();
}

window.completeTask = (task) => {
   service.arr.forEach((ele) => {
      if (ele.taskName === task) {
         ele.status = "complete";
      }
   })
   renderTaskInProgress();
   renderTaskComplete();
}


getID("two").onclick = () => {
   service.sortTaskIncre();
   renderTaskInProgress();
}

getID("three").onclick = () => {
   service.sortTaskDecre();
   renderTaskInProgress();
}