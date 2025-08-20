programa {
  funcao inicio() {
  cadeia nome
  real nota1, nota2, nota3, media, frequencia
  nota1 = 7
  nota2 = 8
  nota3 = 7
  media = (nota1 + nota2 + nota3) / 3
  frequencia = 0.2
  escreva(media , "\n")
  se(media >= 7 e frequencia >= 0.7) {
    escreva("Aprovado") 
  } senao {
    escreva("Reprovado")
  } 
  }
}
