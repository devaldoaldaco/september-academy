function agregarTarea() {
    const inputValue = document.querySelector('input').value;
    const error = document.querySelector('p');
    const lista = document.getElementById("listaTareas")

    if (inputValue === "") {
        error.innerText = "Ingresa una tarea";
        setTimeout(() => {
            error.innerText = "";
        }, 2000)

    } else {
        const item = document.createElement("li");
        item.innerText = inputValue;
        
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar'
        botonEliminar.classList.add('botonEliminar');
        botonEliminar.onclick = function () {
            item.remove();
            listasVacias();
        }

        let buttonCheck = document.createElement("input");
        buttonCheck.setAttribute('type', 'checkbox');
        buttonCheck.classList.add('buttonCheck');
        buttonCheck.onclick = function () {
            if (buttonCheck.checked) {
                item.style.backgroundColor = "#a0ed0b";
            } else {
                item.style.backgroundColor = "";
            }
        }

        item.appendChild(buttonCheck);
        item.appendChild(botonEliminar);

        lista.appendChild(item);
        document.querySelector("input").value = "";
        listasVacias();
    }
}

function listasVacias() {
    const lista = document.getElementById("listaTareas")
    const mensajeLista = document.getElementById("mensajeVacio");
    if (lista.children.length === 0) {
        mensajeLista.style.display = 'block';
    } else {
        mensajeLista.style.display = 'none';
    }
}