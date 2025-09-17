function add_task() {

  const inputcheckbox = document.createElement("input");
  inputcheckbox.type = "checkbox";
  inputcheckbox.style.marginRight = "1rem";

  const container = document.getElementById("btn_add").value;

if (container_2.innerText === "No tienes tareas pendientes"){
  container_2.innerHTML = "";
} 

  const newInput = document.createElement("input");
  newInput.style.backgroundColor = "rgba(0, 149, 255, 0.602)";
  newInput.style.border = "2px solid gray";
  newInput.type = "text";
  newInput.value = container;

  const agrupar = document.createElement("div");

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Eliminar";
  deletebtn.style.marginLeft = "1rem";
  deletebtn.style.backgroundColor = "blue";
  deletebtn.style.color = "white";
  deletebtn.style.border = "none";
  deletebtn.style.padding = "0.7rem 1rem";
  deletebtn.style.borderRadius = "0.5rem";
  deletebtn.onclick = function () {
    agrupar.remove();
  };

inputcheckbox.addEventListener("change", function() {
if (inputcheckbox.checked){
  newInput.style.backgroundColor = "lightgreen";
} else {
  newInput.style.backgroundColor = "rgba(0, 149, 255, 0.602)"
}
});

  agrupar.appendChild(inputcheckbox);
  agrupar.appendChild(newInput);
  agrupar.appendChild(deletebtn);

  document.getElementById("container_2").appendChild(agrupar);
}

