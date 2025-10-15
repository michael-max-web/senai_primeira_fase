// setInterval(()=>{
//     console.log("Executei")
// },2000)

const prompt = require('prompt-sync')()

let contadorInicial = Number(prompt("Digite um valor inicial: "))
let contadorFinal = Number(prompt("Digite o valor final: "))

let intervalo = setInterval(()=>{
    contadorInicial++
    console.log(contadorInicial)
    if(contadorInicial >= contadorFinal){
        clearInterval(intervalo)
    }
},1000)