// Add a new Task to list based on user Input
function addTask() {
  let userInput = document.getElementById('newTask').value
  let li = document.createElement('LI');
  let text = document.createTextNode(userInput);
  li.appendChild(text);

  if (userInput.length > 1) {
    document.getElementById('tasks').appendChild(li);
    let span = document.createElement('span');
    let text = document.createTextNode("x");
    span.appendChild(text);
    document.getElementById('tasks').lastElementChild.appendChild(span);
}
  else {
    alert('Please write a task')
  }
  document.getElementById("newTask").value = "";
}

document.getElementById('button').addEventListener('click', addTask)



// Add Delete Button to predefined list of Tasks
const allLi = document.getElementsByTagName('li');
function addDelete() {
  [...allLi].forEach(function(element) {
    let span = document.createElement('span');
    let text = document.createTextNode("x");
    span.appendChild(text);
    element.appendChild(span);
  })
}
addDelete();
