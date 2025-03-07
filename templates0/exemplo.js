// alert("Olá Mundo")
//
// var test= prompt("Digite qualquer coisa")
//
// alert(test)
//
// function testTexto() {
//     document.getElementById("titulo").innerHTML += " Boa tarde "
// }
//
// function testColor() {
//    const titulo = document.getElementById("titulo")
//
//     titulo.style.color = "red"
//     titulo.style.fontSize = "48px"
// }
//
// function reset() {
//     document.getElementById("titulo").innerHTML = " Bem-vindo(a) ao Notícias de Hoje "
// }
//
// function testInput() {
//     document.getElementById("input").value = "Tarde"
// }

function LimparInput(){
    var warning = ("Vc realmente quer apagar?")
    if (confirm(warning)) {
        document.getElementById("basic-addon").value = ""
        document.getElementById("email").value = ""
        document.getElementById("information").value = ""
        document.getElementById("username").value = ""
        document.getElementById("basic-addon9").value = ""
    }
}

function trocaCor() {
   const element = document.getElementById("basic-addon1").style
    element.color = "blue"
}

function trocaCor2() {
   const element = document.getElementById("basic-addon2").style
    element.color = "blue"
}

function trocaCor3() {
   const element = document.getElementById("basic-addon3").style
    element.color = "blue"
}

function trocaCor4() {
   const element = document.getElementById("basic-addon5").style
    element.color = "blue"
}

function preencher_nome() {
    const nome = document.getElementById("basic-addon")
    nome.value = "Digite seu Nome Completo"
}

function preencher_email() {
    const nome = document.getElementById("email")
    nome.value = "Digite seu E-mail"
}

function preencher_senha() {
    const nome = document.getElementById("information")
    nome.value = "Digite sua senha"
}