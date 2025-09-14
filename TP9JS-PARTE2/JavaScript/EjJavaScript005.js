

function sumar(){
    var res= document.getElementById("resultado");
    var a=prompt("Ingrese el primer numero:");
    var b=prompt("Ingrese el segundo numero:");
    var suma= parseInt(a)+parseInt(b);
    res.value=suma;
}
function restar(){
    var res= document.getElementById("resultado");
    var a=prompt("Ingrese el primer numero:");
    var b=prompt("Ingrese el segundo numero:");
    var resta=parseInt(a)-parseInt(b);
    res.value=resta;
}
function multiplicar(){
    var res= document.getElementById("resultado");
    var a=prompt("Ingrese el primer numero:");
    var b=prompt("Ingrese el segundo numero:");
    var producto= parseInt(a)*parseInt(b);
    res.value=producto;
}
function dividir(){
    var res= document.getElementById("resultado");
    var a=prompt("Ingrese el primer numero:");
    var b=prompt("Ingrese el segundo numero:");
    var divicion=parseInt(a)/parseInt(b);
    res.value=divicion;
}  
function calcular(){
    var res= document.getElementById("resultado");
    var a=prompt("Ingrese el primer numero:");
    var potencia= a*2;
    res.value=potencia;
}