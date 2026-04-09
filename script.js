let queue = [];
let token = 1;

function validateName(input) {
  input.value = input.value.replace(/[^A-Za-z ]/g, '');
}

function validateAge(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

function addPatient() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let problem = document.getElementById("problem").value.trim();

  if (name === "" || age === "") return;

  queue.push({
    name: name,
    age: age,
    problem: problem,
    token: token++
  });

  clearInputs();
  display();
}

function servePatient() {
  if (queue.length === 0) {
    alert("No patients!");
    return;
  }

  let patient = queue.shift();

  document.getElementById("serving").textContent =
    "Now Serving: Token " + patient.token + " - " + patient.name;

  display();
}

function clearQueue() {
  queue = [];
  token = 1;
  display();
  document.getElementById("serving").textContent = "Now Serving: None";
}

function display() {
  let table = document.getElementById("queueTable");
  table.innerHTML = "";

  queue.forEach(p => {
    let row = `
      <tr>
        <td>${p.token}</td>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.problem}</td>
      </tr>
    `;
    table.innerHTML += row;
  });

  document.getElementById("count").textContent = queue.length;
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("problem").value = "";
}