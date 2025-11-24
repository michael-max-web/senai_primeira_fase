//busca

const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keywdown",(e)=>{  /* evento do input collbeck */
  console.log(e.key)
})

inputForm.addEventListener("focus",(e)=>{   /* focus quando click e muda de cor*/
  inputForm.style.backgroundColor = "#FF0"

})

inputForm.addEventListener("blur",(e)=>{   /* blur desfocos*/
  inputForm.style.backgroundColor = ""

})

//get (pegar) e set  
function searchResultado(){
  const valorBusca = inputForm.value.trim()
  if(valorBusca){
   resultadoDiv.textContent = `Você buscou por ${valorBusca}`
   
  } else {
    resultadoDiv.textContent = `Por favor, insira algo na busca`
  }
}

botaoBusca.addEventListener("click",(e)=>{
searchResultado()
})


//botão de troca de tema

const botaoTrocaTema = document.querySelector("#tema")

function alternarTema(){
  document.body.classList.toggle("escuro") // togger adiciona e tira
  document.body.classList.toggle("claro")
}

botaoTrocaTema.addEventListener("click", (e)=>{
  alternarTema()

})