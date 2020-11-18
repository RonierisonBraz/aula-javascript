function clicou(){
    document.getElementById("agradecimento").innerHTML = "obrigador por Clicar" ;
     
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/")//outra aba
    //window.location.href = "https://www.google.com.br/"// mesma aba 

}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
   elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function soma (n1, n2){
    return n1 + n2;
}


//var validar global
function validaIdade(idade){
    var validar; //local
    if(idade >= 18){
      validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));


//var lista = ["maça", "pera", "laranja"]/
//lista.push("uva");

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Ronierison Braz";
//var idade = 28;
//var idade2 = 10;
//var frase = "japão é o melhor time do mundo "

//alert(nome + " tem " + idade + " anos");

//alert(idade + idade2);

//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());

