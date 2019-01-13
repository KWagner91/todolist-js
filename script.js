// Add a new Task to list based on user Input
function addTask() {
  let userInput = document.getElementById('newTask').value
  let li = document.createElement('LI');
  let text = document.createTextNode(userInput);
  li.appendChild(text);
  if (userInput.length > 1) {
    document.getElementById('tasks').appendChild(li);
}
  else {
    alert('Please write a task')
  }
  document.getElementById("newTask").value = "";
}

document.getElementById('button').addEventListener('click', addTask)
