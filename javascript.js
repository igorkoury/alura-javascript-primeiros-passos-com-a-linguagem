//array

const listaDeFamiliares = new Array(
    "Igor", 
    "Rosi", 
    "Tavares"
)

listaDeFamiliares.push("Ruth") //adiciona o elemento à ultima posição do array
listaDeFamiliares.splice(0, 2) //remove os elementos Igor e Rosi do array

console.log(listaDeFamiliares)

//loops

const listaDeDestinos = new Array(
    "Salvador", 
    "São Paulo", 
    "Rio de Janeiro"
);

//loops: While

const destino = "Rio de Janeiro"

let contador = 0;
while(contador<3) {
    if(listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
    }else{
        console.log("Destino não existe")
    }
    contador++
}

//loops: For

for(let cont = 0 ; cont < 3 ; cont++){
    if(listaDeDestinos[cont] == destino){
        console.log(`Destino existe: ` + destino)
    }else{
        console.log("Destino não existe")
    }
}