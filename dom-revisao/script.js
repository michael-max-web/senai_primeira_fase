let usuario
function cadastrarUsuario(){
usuario = document.getElementById("inputUsuario").value

document.getElementById("inputUsuario").value = ''

document.getElementById("resultado").innerHTML = "Usuário cadastrado com sucesso: " + usuario
}