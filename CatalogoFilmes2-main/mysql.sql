create database catalogo;
use catalogo;

create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
 id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table jogos (
 id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;

insert into filmes (titulo, imagem, descricao)
values
("Vingadores", "https://image.tmdb.org/t/p/original/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg", "Os maiores heróis da terra unidos"),
("Batmam", "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", "O cavaleiro das trevas"),
("Homem-Aranha",  "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg", "O amigo da vizinhança"),
("Castelo Infinito", "https://image.tmdb.org/t/p/w500/c55sXCaQBj3vuHqZe62tv90xCQS.jpg", "Os caçadores de oni"),
("SuperMan", "https://i.pinimg.com/originals/53/92/7d/53927d1964baa4b034f76399f08f3f34.jpg", "O Homem de Aço"),
("Super Mario", "https://www.querofilme.com.br/images/posters/t2x/2969-super-mario-galaxy-o-filme-4.jpg", "O Encanador");

select * from series;

insert into series (titulo, imagem, descricao)
values
("Stranger Things", "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg","Mistérios sobrenaturais em Hawkins"),
("Breaking Bad", "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg","Um professor de química vira traficante"),
("The Walking Dead", "https://image.tmdb.org/t/p/w500/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg","Sobreviventes enfrentam um apocalipse zumbi"),
("Bleach", "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/bleach-poster.jpeg","Seifador de alma"),
("Dragon Ball Z", "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/dragon-ball-z-kakarot.jpg","Bolas do Dragão"),
("Pennywise", "https://www.filmofilia.com/wp-content/uploads/2025/05/IT-Welcome-to-Derry-Poster.jpg","O palhaço imortal");

select * from jogos;

insert into jogos (titulo, imagem, descricao)
values
("Minecraft", "https://www.bluestacks.com/pt-br/apps/arcade/minecraft-on-pc.html","Jogo de construção e sobrevivência"),
("GTA V", "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg","Kratos e Atreus enfrentam os deuses nórdicos"),
("Spider-Man 2", "https://www.gutogames.com.br/marveleapos-s-spider-man-2-ps4-ps5-primaria/","Aventura do Homem-Aranha em Nova York"),
("EA Sports FC 25", "https://www.amazon.com.br/EA-SPORTS-FC-26-PlayStation/dp/B0FH132GYR","Simulador de futebol com clubes do mundo inteiro"),
("The Legend of Zelda", "https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild","Uma jornada épica pelo reino de Hyrule");

