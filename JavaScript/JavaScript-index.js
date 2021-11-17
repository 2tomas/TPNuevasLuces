var botonCrear= true;
var botonborrar= true;
var cont=0;
cont= parseInt(cont);
var a=1;

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
        tabla.innerHTML+="<tr><td>"+ producto+"</td><td>"+cantidad+"</td><td>"+proveedor+"</td><td>$"+costo+"</td><td> $" +CostoUnitario+"</td><td> $"+ precioVenta +"</td><td><img class='iconEliminar' src='../Imagenes/Eliminar.png'> </td></tr>";
        cont= cont+1;
    }   

    var i=document.querySelectorAll("tbody:nth-child(n)");
    if(a %2==0){
        i[a].style.backgroundColor="white";
    } else{
        i[a].style.backgroundColor="#c0bdbd";
    }
    a++;
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
   if(botonborrar== true){
        for (var x=0; x<cont; x++){
            c[x].style.display="block";
        }
        document.querySelector("th:nth-child(7)").style.display="block";
        document.querySelector("th:nth-child(7)").style.height= "26px";
        botonborrar= false;
   } else {
    for (var x=0; x<cont; x++){
        c[x].style.display="none";
    }
    document.querySelector("th:nth-child(7)").style.display="none";
    botonborrar= true;
   } 
}

$(function () {
    $(document).on('click', '.iconEliminar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
        cont=cont-1;
    });
});

