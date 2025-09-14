/*-1 si Valor < 0;
0 si Valor >=0 y Valor <10;
1 si Valor >= 10 y Valor <50;
2 si Valor >=50 y Valor <100;
3 si Valor >=100.*/
function valorSeleccionado(valor) {
    if(valor<0){
        document.write("-1");
    }
    else if(valor>=0 && valor<10){
        document.write("0");
    }
    else if(valor>=10 && valor<50){
        document.write("1");
    }
    else if(valor>=50 && valor<100){
        document.write("2");
    }
    else if(valor>=100){
        document.write("3");
    }


}