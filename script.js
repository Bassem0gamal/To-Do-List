const inputBox = document.getElementById('newTask');
const tasksField = document.getElementById('tasksField');

// Function to add a new task to the list
function addTask() {
  const newTask = inputBox.value;
  if (newTask === '') {
    alert("You must write somthing!");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = newTask;
    tasksField.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
  }
    inputBox.value = '';
    saveTasks();
}

// Event listener for clicks on the tasks field
tasksField.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveTasks();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveTasks();
  }
}, false);

// Function to save the tasks to local storage
function saveTasks() {
  localStorage.setItem('data', tasksField.innerHTML);
}

// Function to load the tasks from local storage
function loadTasks() {
  tasksField.innerHTML = localStorage.getItem('data');
}
loadTasks();