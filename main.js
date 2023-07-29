
function calcular(){
    let nota1 = document.getElementById("nota-1").value;
    let nota2 = document.getElementById("nota-2").value;
    let nota3 = document.getElementById("nota-3").value;
    let nota4 = document.getElementById("nota-4").value;
    let suma = 0;
    suma = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4);
    var promedio = Number(suma)/ 4;

    if(promedio>=61){
        document.getElementById("resultado").textContent = promedio;
        document.getElementById("aprobo").textContent = "SI";
        document.getElementById("xd").style.backgroundColor ="rgb(0, 255, 34)";
    } else{
        document.getElementById("resultado").textContent = promedio;
        document.getElementById("aprobo").textContent = "NO";
        document.getElementById("xd").style.backgroundColor ="rgb(255, 0, 0)";
    }
}

function limpiar(){
    
    document.getElementById("resultado").textContent = "";
    document.getElementById("aprobo").textContent = "";
    document.getElementById("xd").style.backgroundColor ="rgb(0, 34, 255)";
    document.getElementById("nota-1").value ="";
    document.getElementById("nota-2").value ="";
    document.getElementById("nota-3").value ="";
    document.getElementById("nota-4").value ="";
    document.getElementById("nota-5").value ="";
}
