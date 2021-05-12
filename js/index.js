const pedidoListo = [];
const cargarTabla = () =>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i = 0; i <pedidoListo.length; ++i){
        let p = pedidoListo[i];
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = p.nombre;
        let tdTotal = document.createElement("td");
        tdTotal.innerText = p.total;
        let tdMenu = document.createElement("td");
        let icono = document.createElement("i");
        if (p.menu == "Combo"){
            icono.classList.add("fas","fa-utensils","fa-3x");
        }else{
            icono.classList.add("fas","fa-hamburger","fa-3x");
        }
        tdMenu.appendChild(icono);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTotal);
        tr.appendChild(tdMenu);
        tbody.appendChild(tr);
    }
};


//Boton Agregar
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let total = document.querySelector("#total-int").value;
    let menu = document.querySelector("#menu-select").value; 
    console.log("Hola mundo!");

    //crear objeto 
    let pedido = {};
    pedido.nombre = nombre;
    pedido.total = total;
    pedido.menu = menu;

    //guardar en una lista de elementos
    pedidoListo.push(pedido);
    //cargo la tabla
    cargarTabla();
    //SweetAlert
    Swal.fire("Perfecto!","Pedido Agregado", "success");
} );