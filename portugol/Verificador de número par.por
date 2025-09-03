programa {

  funcao cadeia verificaPar(inteiro valor){
    se(valor % 2 == 0){
      retorne "Número par"
    } senao {
      retorne "Número ímpar"
    }
  }

  funcao inicio() {
  escreva("Primeira divisão:\n", verificaPar(10))
  escreva("\nSegunda divisão:\n", verificaPar(15))  
  }
}
