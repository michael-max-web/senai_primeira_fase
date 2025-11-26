// teste crud

// const dinossauro = {
//     nome: 'Rex',
//     altura: '6'
// }

const dinossauros = []
// let dinossauros = []

// dinossauros.push(dinossauro)

// document.getElementById('dino').innerHTML = `Nome: ${dinossauros[0].nome}; Altura: ${dinossauros[0].altura}`

function cadastrarDino(){
    let nomeLido = document.getElementById('inputNome').value
    let alturaLida = Number(document.getElementById('inputAltura').value)

    const dino = {
        nome: nomeLido,
        altura: alturaLida
    }
    dinossauros.push(dino)

    console.log(dinossauros);

    let dinossaurosTexto = JSON.stringify(dinossauros)
    localStorage.setItem("dinossauros", dinossaurosTexto ) // salvar os dados do cadastro//
    
     localStorage.setItem("dinossauros", JSON   dinossaurosTexto )


    limparForm()
    alert("Dino cadastrado com sucesso!")

    mostrarTodosDinos()
    
}

function limparForm(){
    document.getElementById('inputNome').value = ''
    document.getElementById('inputAltura').value = ''
    // document.getElementById('inputPesoOuMassa').value = ''
    
    document.getElementById('inputNome').focus()
}

function mostrarTodosDinos(){
    document.getElementById('listaDinos').innerHTML = '' 
    for(let i=0; i<dinossauros.length ; i++){
        // console.log(i);
        document.getElementById('listaDinos').innerHTML += `
            <div class='card'>
                <h3>${dinossauros[i].nome} </h3>
                <p>Altura: ${dinossauros[i].altura}</p>
            </div>
        `
        
    }
}

function lancarMeteoro(){
    dinossauros.length = 0
    mostrarTodosDinos()
}

function navegarParaDois(){
    // alert('Tchau')

    let nome = prompt("User:")
    let senha = prompt("Senha: ")

    if(nome == "admin" && senha == "admin"){
        window.location.href = 'dois.html'
    }else{
        alert("Você está tentando invadir, a polícia tá chegando!!")
    }

}