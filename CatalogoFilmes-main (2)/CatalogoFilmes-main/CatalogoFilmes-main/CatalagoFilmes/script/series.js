const series = [
{
    titulo: "Stranger Things",
    imagem: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    descricao: "Mistérios sobrenaturais em Hawkins."
},
{
    titulo: "Breaking Bad",
    imagem: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    descricao: "Um professor de química vira traficante."
},
{
    titulo: "The Walking Dead",
    imagem: "https://image.tmdb.org/t/p/w500/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg",
    descricao: "Sobreviventes enfrentam um apocalipse zumbi."
},
{
    titulo: "Bleach",
    imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/bleach-poster.jpeg",
    descricao: "Seifador de alma"
},
{
    titulo: "Dragon Ball Z",
    imagem: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/dragon-ball-z-kakarot.jpg",
    descricao: "Bolas do Dragão."
},
{
    titulo: "Pennywise",
    imagem: "https://www.filmofilia.com/wp-content/uploads/2025/05/IT-Welcome-to-Derry-Poster.jpg",
    descricao: "O palhaço imortal."
}
];

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML = "";

    lista.forEach(serie => {
        listaSeries.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${serie.imagem}" class="card-img-top" alt="${serie.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${serie.titulo}</h5>
                    <p class="card-text">${serie.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

mostrarSeries(series);

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da série",
        icon: "info"
    });
}