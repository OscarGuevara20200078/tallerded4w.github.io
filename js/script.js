function funciones() {
    document.getElementById("guardar").addEventListener("click", function () {
        GuardarCarro();
        })

document.getElementById("borrar").addEventListener("click", function () {
        BorrarTabla();
})

let clientes = document.getElementById("clientes");
viewDates();
}

function GuardarCarro() {
    let nombre = document.getElementById("nombre").value;
    let dui = document.getElementById("dui").value;
    let nit = document.getElementById("nit").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    let placa = document.getElementById("placa").value;
    let fallas = document.getElementById("fallas").value;
    let expDui = /^[0-9]\d{7}-\d{1}$/;
    let expNit = /^[0-9]\d{3}-\d{6}-\d{3}-\d{1}$/;

    clientesCarros = new Object();
    clientesCarros.nombre = nombre;
    clientesCarros.dui = dui;
    clientesCarros.nit = nit;
    clientesCarros.marca = marca;
    clientesCarros.modelo = modelo;
    clientesCarros.year = year;
    clientesCarros.color = color;
    clientesCarros.placa = placa;
    clientesCarros.fallas = fallas ;
    if(!ExpVal(dui, nit, expDui, expNit)){
        return 0;
    }


    var client={
        nombre : nombre,
        dui : dui,
        nit:  nit,
        marca: marca,
        modelo: modelo,
        year: year,
        color: color,
        placa: placa,
        fallas: fallas

}
/*
*/

var datosClient=JSON.stringify(client);
localStorage.setItem(clientesCarros.nombre, datosClient);
console.log("cliente agregado");

viewDates();
}

function BorrarTabla(){
    localStorage.clear();
    alert("Se limpió la tabla");
    viewDates();
}

function ExpVal(dui, nit, expDui, expNit) {
    if (!expDui.test(dui) || dui == "") {
        alert("Error no ha ingresado un dui válido");
        return false;
    }else if (!expNit.test(nit) || nit == "")  {
        alert("Error no ha ingresado un nit válido");
        return false;
    }
    return true;
}

function viewDates() {
    let clientes = document.getElementById("clientes");
    clientes.innerHTML = "<table id='Clientes'><tr><td class='cabeza'>Nombre</td><td class='cabeza'>DUI</td><td class='cabeza'>NIT</td><td class='cabeza'>Marca</td><td class='cabeza'>Año</td><td class='cabeza'>Placa</td><td class='cabeza'>Fallas</td></tr>";
    clientes = document.getElementById("clientes");
    if (localStorage.length === 0) {
        return 0;
    } else {
        for (let index = 0; index < localStorage.length; index++){
            console.log(localStorage.key(index).toString());
            var key = localStorage.key(index);
            let Name = localStorage.key(index).toString();
            let duiTb = localStorage.getItem(key).toString();
            let nitTb = localStorage.getItem(key).toString();
                clientes.innerHTML += "<tr class='estiloTabla'><td class='estiloBody'>"+Name+"</td><td class='estiloBody'>"+duiTb+"</td><td class='estiloBody'>"+nitTb+"</td></tr>"
        }
        clientes.innerHTML += "</table>";
    }
}   

window.onload = funciones;