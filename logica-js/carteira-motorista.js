const prompt = require("prompt-sync")()

const idade = parseFloat(prompt("Digite sua idade? "))

const cnh = prompt("Tem CNH? " )

if(idade >= 18 && cnh == "Sim"){
    console.log("Pode dirigir!")
} else{
    console.log("Não pode dirigir!")
}