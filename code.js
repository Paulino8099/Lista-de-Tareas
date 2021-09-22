var input_tareas = document.getElementById("input_tareas");
var btn_agregar_tareas = document.getElementById("btn_agregar_tareas");
var Vista_Tareas = document.getElementById("Vista_Tareas");

btn_agregar_tareas.addEventListener("click", function () {
  // Agregar tareas al localStorage
  let input_tareas05 = input_tareas.value;
  const tareas01 = { input_tareas05 };
  //ojdadoj

  if (input_tareas05 === "") {
    input_tareas.classList.toggle("error_input");
    input_tareas.setAttribute("placeholder", "¡Agregue algún valor!");
  } else if (localStorage.getItem("task") === null) {
    let tasks1 = [];
    tasks1.push(tareas01);
    localStorage.setItem("task", JSON.stringify(tasks1));
  } else {
    let task = JSON.parse(localStorage.getItem("task"));
    task.push(tareas01);
    localStorage.setItem("task", JSON.stringify(task));

    input_tareas.value = "";
  }
  // Fin del agregado de tareas al localStorage
  gestorTareas();
});

//Agregando tareas a la lista de tareas desde los valores extraido desde el localStororage
function gestorTareas() {
  let task = JSON.parse(localStorage.getItem("task"));

  Vista_Tareas.innerHTML = ``;

  for (let i = 0; i < task.length; i++) {
    let descripcion = task[i].input_tareas05;
    Vista_Tareas.innerHTML += `<div class="cards" onclick="borrar('${descripcion}')">
                                        <h1 class="descripcion"> ${descripcion} </h1>
                                    </div>`;
  }
}
//Fin del agregado de tareas a la lista de tareas desde los valores extraido desde el localStororage
// BORRANDO TAREAS DEL localStorage
function borrar(descripcion) {
  let tasks = JSON.parse(localStorage.getItem("task"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].input_tareas05 == descripcion) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("task", JSON.stringify(tasks));
  gestorTareas();
}

// Lipiar el input de tareas
input_tareas.addEventListener("click", function () {
  input_tareas.classList.remove("error_input");
  input_tareas.setAttribute("placeholder", "Nueva Tarea");
});
gestorTareas();
// //Eliminar elementos
// for (let w = 0; w < lista_tareas.children.length; w++) {
//     lista_tareas.children[w].addEventListener("click", function() {
//         this.parentNode.removeChild(this);

//     })

// // Agregar tareas del localStorage a la lista de tareas
//     let datos_localStorage = JSON.parse(localStorage.getItem("task"));

//     for (let i = 0; i < datos_localStorage.length; i++) {
//         if (lista_tareas == null) {
//             lista_tareas.innerHTML =
//         }else {
//             var datos = datos_localStorage[i].input_tareas05;

//             var elemento = document.createElement("li");
//             var contenido = document.createTextNode(datos);

//             elemento.append(contenido);

//     // agregar tareas desde el localStorage a la lista de tareas
// let datos_localStorage = JSON.parse(localStorage.getItem("task"));

// for (let i = 0; i < datos_localStorage.length; i++) {
//     var datos = datos_localStorage[i].input_tareas05;
// }

// let elemento = document.createElement("li");
// let contenido = document.createTextNode(datos);

// elemento.append(contenido);
// lista_tareas.appendChild(elemento);
// }
//             lista_tareas.appendChild(elemento);

//             //Eliminar elementos
//             for (let w = 0; w < lista_tareas.children.length; w++) {
//                 lista_tareas.children[w].addEventListener("click", function() {
//                     this.parentNode.removeChild(this);
//                 });
//             }
//         }
//     }

// let tareas = JSON.parse(localStorage.getItem("task"))

// for (i = 0; i < tareas.length; i++) {
//     if (tareas[i].input_tareas05 == lista_tareas) {
//         tareas.splice(i, 1);
//     }else {
//         alert(this.parentNode(lista_tareas))
//     }
//     localStorage.setItem(JSON.stringify("task", tareas))
// }
// }
