class Livro{
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciar(){
        console.log("O livro " + this.nome + " é um sucesso!")
    }
}

const igor = new Livro("Developer", "Acedemia de Código", 300)

igor.anunciar()