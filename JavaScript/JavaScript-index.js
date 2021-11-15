var botonCrear= true;
var botonborrar= true;

function abrir(){
    if(botonCrear== true){
        document.getElementById("ventana").style.display="block";
        document.getElementById("ventana").style.position="fixed";
        botonCrear= false;
    } else{
        document.getElementById("ventana").style.display="none";
        botonCrear= true;
    }
}

function cerrar(){
    document.getElementById("ventana").style.display="none";
    botonCrear= true;
}

function agregar(){
    var inputProducto = document.getElementById("idProducto");
    var inputCantidad = document.getElementById("idCantidad");
    var inputProveedor = document.getElementById("idProveedor");
    var inputCosto = document.getElementById("idCosto");

    var producto = inputProducto.value;
    var cantidad= inputCantidad.value;
    var proveedor = inputProveedor.value;
    var costo = inputCosto.value;

    var resultado = validar(producto,cantidad,proveedor,costo);


    var CostoUnitario = costo/cantidad;
    var precioVenta= (145*CostoUnitario)/100;
    if (resultado){
        var tabla = document.getElementById("idTabla");
        tabla.innerHTML+="<tr id='idTr'><td>"+ producto+"</td><td>"+cantidad+"</td><td>"+proveedor+"</td><td>$"+costo+"</td><td> $" +CostoUnitario+"</td><td> $"+ precioVenta +"</td></tr>";
    }    
}

function validar(producto, cantidad, proveedor, costo){
    if(producto == ""){
        document.getElementById("productoMostrar").style.display="block";
        document.getElementById("idProducto").style.border="2px solid red";
    } else{
        document.getElementById("productoMostrar").style.display="none";
        document.getElementById("idProducto").style.border="2px solid #ccc";
    } 

    if(cantidad == ""){
        document.getElementById("cantidadMostrar").style.display="block";
        document.getElementById("idCantidad").style.border="2px solid red";
    } else {
        document.getElementById("cantidadMostrar").style.display="none";
        document.getElementById("idCantidad").style.border="2px solid #ccc";
    }

    if(proveedor== ""){
        document.getElementById("proveedorMostrar").style.display="block";
        document.getElementById("idProveedor").style.border="2px solid red";
    } else {
        document.getElementById("proveedorMostrar").style.display="none";
        document.getElementById("idProveedor").style.border="2px solid #ccc";
    }

    if(costo == ""){
        document.getElementById("costoMostrar").style.display="block";
        document.getElementById("idCosto").style.border="2px solid red";
    } else {
        document.getElementById("costoMostrar").style.display="none";
        document.getElementById("idCosto").style.border="2px solid #ccc";
    }

    if(producto == "" || cantidad == "" || proveedor== "" || costo == ""){
        return false;
    } else{
        return true;
    }
}

var iconoMas = true;

function onclicMas(){
    if(iconoMas== true){
        document.getElementById("boton").style.display="none";
        document.getElementById("boton2").style.display="block";
        iconoMas= false;
    } else {
        document.getElementById("boton").style.display="block";
        document.getElementById("boton2").style.display="none";
        iconoMas= true;
    }
}

function mostrarborrar(){
   var c= document.querySelectorAll('td:nth-child(7)');
   document.querySelector("th:nth-child(7)").style.display="block";
   document.querySelector("th:nth-child(7)").style.height= "26px";

   if(botonborrar== true){
    c[0].style.display="block";
    c[1].style.display="block";
    c[2].style.display="block";
    c[3].style.display="block";
    c[4].style.display="block";
    botonborrar= false;
   } else{
    document.querySelector("th:nth-child(7)").style.display="none";
    c[0].style.display="none";
    c[1].style.display="none";
    c[2].style.display="none";
    c[3].style.display="none";
    c[4].style.display="none";
    botonborrar= true;
   }    
}

$(function () {
    $(document).on('click', '.iconEliminar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
});