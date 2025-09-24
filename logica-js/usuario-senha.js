const prompt = require("prompt-sync")()

const usuario = (prompt("Digite o usuário: "))

const senha = prompt("Digite a senha: ")

if(usuario == "Admin" && senha == "12345"){
    console.log("Acesso liberado!")
} else{
    console.log("Acesso negado!")
}