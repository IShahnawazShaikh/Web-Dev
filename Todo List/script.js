let input=document.getElementById("input");
let taskList=document.getElementById("taskList");
let btnAdd=document.getElementById("btnAdd");
let clear=document.getElementById("clear");
let sort=document.getElementById("sort");

let task=[];

function saveTaskList(){
  localStorage.setItem("tasks",JSON.stringify(task));
}

function retrieveList(){
  let retrievedTasks=localStorage.getItem("tasks");
   if(retrievedTasks) 
       task=JSON.parse(retrievedTasks);
}

function addTask(){
  let text=input.value;
  task.push(text);
  input.value="";
  renderTask();
  saveTaskList();
}
function renderTask(){
  taskList.innerHTML="";
   for(let i=0;i<task.length;i++){
    let li=document.createElement("li");

    

    li.innerHTML=task[i];
    taskList.appendChild(li);
   }

}

/* Buttons click */
btnAdd.onclick=function(){
 addTask();
}
clear.onclick=function(){
  task=[];
  renderTask();
  saveTaskList();
}
sort.onclick=function(){
  createNodeContainer(); 
}

retrieveList();
renderTask();


function createNodeContainer(node){ // create the new div
  var newNodeContainer = "<div class='nodeContainer'>";
  var divContent = "text for created div...";
  newNodeContainer.appendChild(divContent);
  var divClose = "</div>";
   taskList.append(newNodeContainer+divClose);
}