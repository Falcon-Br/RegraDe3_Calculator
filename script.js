
function verifica(valor1, valor2, valor3){
    if(valor1 == ""){
        console.log("está vazio");
        return false;
    } else if (valor2 == ""){
        console.log("está vazio 2");
        return false;
    } else if (valor3 == ""){
        console.log("Está vazio 3");
        return false;
    }else{
        console.log("Tudo certo!")
        return true;
    }
}

function texto(valorFinal){

    let variavel_1 = document.getElementById("variavel_1").value;
    console.log(variavel_1);

    let variavel_2 = document.getElementById("variavel_2").value;
    console.log(variavel_2);

    let resultadoTexto = document.getElementById("resultadoTexto");
    
    resultadoTexto.innerHTML = `${variavel_1}(s) equivale a ${valorFinal}`;
}

function calcula(){

    let valor1 = document.getElementById("dado1").value;
    let valor2 = document.getElementById("dado2").value;
    let valor3 = document.getElementById("dado3").value;
    let resultado = document.getElementById("resultado");

    if(verifica(valor1, valor2, valor3)){
        let valorFinal = (valor2 * valor3)/valor1;
        console.log(valorFinal);

        resultado.innerText = valorFinal;
        texto(valorFinal);
    }else{
        resultado.innerText = "X"; 
        console.log("Falta preenxer campo");
    } 
}