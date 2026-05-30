let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("welcome").innerText =
"Welcome Kurra Jagadeesh Nadh";

displayTasks();

function addTask() {

let input = document.getElementById("taskInput");

if(input.value==="") return;

tasks.push(input.value);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

input.value="";
}

function displayTasks() {

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML += `
<li>
${task}
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
</li>
`;
});

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index]);

if(newTask){

tasks[index]=newTask;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}
}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

  }
