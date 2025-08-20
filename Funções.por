programa {
  funcao inteiro soma(inteiro valor1, inteiro valor2) {
    retorne valor1 + valor2
  }

  funcao inteiro multiplicacao(inteiro valor1, inteiro valor2){
    retorne valor1 * valor2
  }

  funcao inteiro divisao(inteiro valor1, inteiro valor2){
    retorne valor1 / valor2
  }

  funcao inicio() {
  escreva("Continhas \nResultado da soma:")
  escreva("\n", soma(5,2))
  escreva("\n")
  escreva(soma(10,8))
  escreva("\n")

  escreva("Resultado da multiplicação:")
  escreva("\n", multiplicacao(5,2), "\n")
  escreva(multiplicacao(10,8), "\n")

  escreva("Resultado da divisão:")
  escreva("\n", divisao(10,2))
  escreva("\n", divisao(40,4))  
  }
}
