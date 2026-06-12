const jogos = [
{
    titulo: "Minecraft",
    imagem: "https://www.bluestacks.com/pt-br/apps/arcade/minecraft-on-pc.html",
    descricao: "Jogo de construção e sobrevivência."
},
{
    titulo: "GTA V",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    descricao: "Mundo aberto cheio de ação e aventuras."
},
{
    titulo: "God of War Ragnarök",
    imagem: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
    descricao: "Kratos e Atreus enfrentam os deuses nórdicos."
},
{
    titulo: "Spider-Man 2",
    imagem: "https://www.gutogames.com.br/marveleapos-s-spider-man-2-ps4-ps5-primaria/",
    descricao: "Aventura do Homem-Aranha em Nova York."
},
{
    titulo: "EA Sports FC 25",
    imagem: "https://www.amazon.com.br/EA-SPORTS-FC-26-PlayStation/dp/B0FH132GYR",
    descricao: "Simulador de futebol com clubes do mundo inteiro."
},
{
    titulo: "The Legend of Zelda",
    imagem: "https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild",
    descricao: "Uma jornada épica pelo reino de Hyrule."
}
];

const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML = "";

    lista.forEach(jogo => {
        listaJogos.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${jogo.imagem}" class="card-img-top" alt="${jogo.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${jogo.titulo}</h5>
                    <p class="card-text">${jogo.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}')">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

mostrarJogos(jogos);

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do jogo",
        icon: "info"
    });
}