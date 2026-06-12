const filmes = [{
    titulo: "Vingadores",
    imagem: "https://image.tmdb.org/t/p/original/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg",
    descricao: "Os maiores heróis da terra unidos.",
},
{
    titulo: "Batman",
    imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas,"
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança",
},
{
    titulo: "Castelo Infinito",
    imagem: "https://image.tmdb.org/t/p/w500/c55sXCaQBj3vuHqZe62tv90xCQS.jpg",
    descricao: "Os caçadores de oni",
},
{
    titulo: "SuperMan",
    imagem: "https://i.pinimg.com/originals/53/92/7d/53927d1964baa4b034f76399f08f3f34.jpg",
    descricao: "O Homem de Aço",
},
{
    titulo: "Super Mario",
    imagem: "https://www.querofilme.com.br/images/posters/t2x/2969-super-mario-galaxy-o-filme-4.jpg",
    descricao: "O Encanador",
},
]

const listaFilmes = document.getElementById ("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
            <h3>${filme.titulo}</h3>
            <p>${filme.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    }) 
}