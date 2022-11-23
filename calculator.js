function insert (num){
    let numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('Resultado').innerHTML =""
}

function back(){
            var resultado = document.getElementById('Resultado').innerHTML;
            document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('Resultado').innerHTML;
    if(resultado){
        document.getElementById('Resultado').innerHTML = eval(resultado);

    }
    else{
        window.alert('[ERRO] : Digite algum valor.')
    }
}