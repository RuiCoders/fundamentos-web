/* javascript  Case Sensitie = reconhece letra maiusculas e minusculas
 
podemos acessar por varios tipos
Tag: getElementByTagName()
Id: getElementeById()
Nome: getElementeByName
Classe:getElementeByClassName()
Seletor: querySelector() ulitiza a # para utilzar ex: '#email'
*/

let nome = window.document.getElementById('nome')
let email =document.querySelector ('#email')
let assunto =document.querySelector ('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa =document.querySelector('#mapa')

nome.style.width = '77%'
email.style.width = '77%'


function validaNome () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <=2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red' 
        let nomeOk = false 
     }else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'blue'
        nomeOk = true
     }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = 'red'
        let emailOk = false
    }else {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = 'blue'
        emailOk = true
     }

    }
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto está muito grande, ditige no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display= 'block'
        let asssuntoOk = false
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso!')
    }else {
        alert ('Preencha todos os campos (Nome,E-mail e Assunto) conforme soliciado clique em enviar')
    }
        
}

function mapaZoom () {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

