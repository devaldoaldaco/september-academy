const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
var idIncremental = 0;

addBtn.addEventListener("click", (e) => {
    idIncremental++
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        p.className = 'task-danger';


        p.id = "p-" + idIncremental;
        li.appendChild(p);
        li.appendChild(addEditBtn(idIncremental));
        li.appendChild(addDeleteBtn());
        li.appendChild(addEstatus(idIncremental));
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});


function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn btn-danger";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
         Contador();
    });
    
      

    return deleteBtn;
}


function addEditBtn(id) {
    const editBtn = document.createElement("button");

    editBtn.textContent = "Editar";
    editBtn.className = "btn btn-primary";
    editBtn.setAttribute("onclick", `editTask('${id}')`);

    editBtn.id = 'tarea' + id;

    return editBtn;
}

function addEstatus(id) {
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";         
    checkbox.id = 'estatus-' + id;       
    checkbox.style = "margin : 20px"; 

    
    checkbox.addEventListener("change", function() {
        console.log(`Tarea ${id} marcada:`, this.checked);
        Contador();
    });

    return checkbox;
}

function editTask(idTask) {
    console.log('vas a editar tarea ' + idTask);
    const elemento = $("#p-" + idTask);

    const texto = elemento.text();

    const input = $('<input>', {
        type: 'text',
        id: 'p-' + idTask,
        value: texto,
        class: 'form-control'
    });

    elemento.replaceWith(input);

    const editBtn = $("#tarea" + idTask);

  
    const saveBtn = $('<button>', {
        text: 'Guardar',
        id: 'save-btn-' + idTask,
        class: 'btn btn-success'

    });
    saveBtn.on('click', function () {
        saveTask(idTask);
    });

   
    editBtn.replaceWith(saveBtn);
}


function deleteNodo() {
   

}
function saveTask(idTask) {
    console.log('Vas a guardar la tarea ' + idTask);

 
    const input = $("#p-" + idTask);

  
    const texto = input.val();
    console.log(texto);

   
    const parrafo = $('<p>', {
        id: 'p-' + idTask,
        text: texto
    });


    input.replaceWith(parrafo);

    
    const saveBtn = $("#save-btn-" + idTask);

   
    const editBtn = $('<button>', {
        text: 'Editar',
        id: 'tarea' + idTask,
        class: 'btn btn-primary'
    });

    
    editBtn.on('click', function () {
        editTask(idTask);
    });

    
    saveBtn.replaceWith(editBtn);
}
function Contador(){
    const checkboxes = $("input[type='checkbox']");
    let completadas = 0;

    checkboxes.each(function(){
        if($(this).is(":checked")){
            completadas++;
        }
    });
    const total = checkboxes.length;
    const incompletas = total - completadas;

    $("#contador").text("Completadas: "+ completadas +" Incompletas: "+ incompletas);
}
