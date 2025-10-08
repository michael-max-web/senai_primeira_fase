const numeros = [3,5,8,10]

const usuarios = [
    {nome:"João",idade:32},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21}
]

// const valoresDobrados = numeros.map((valor) => valor*2)
// console.log(numeros)
// console.log(valoresDobrados)

const nomesUsuarios = usuarios.map(usuario => usuario.nome)

for(let nomeUsuario of nomesUsuarios){
        console.log(nomeUsuario)
    }

const idadesUsuarios = usuarios.map(usuario => usuario.idade)

    for(let idadeUsuario of idadesUsuarios){
        console.log(idadeUsuario)
    }