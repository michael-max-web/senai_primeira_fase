// setTimeout(()=>{
//     console.log("Executei depois de 3 seg")
// },3000)

const soma = () => {console.log("O resultado é: " + (3 + 5))}  

function saudacao(){
    console.log("Olá")
}

function imprimeDado(){
    console.log("Imprimir")
}
setTimeout(imprimeDado,5000)
saudacao()
setTimeout(soma,1000)
