let numeroA, numeroB

alert("Olá. Digite dois números e descubra qual é o maior!")

numeroA = prompt("Digite o primeiro número: ")
numeroB = prompt("Digite o segundo número: ")

if(numeroA > numeroB){
    alert("O número maior é: " + numeroA)
}else if(numeroA == numeroB){
    alert("Números iguais!")
}else{
    alert("O número maior é: " + numeroB)
}