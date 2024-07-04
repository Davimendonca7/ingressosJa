-- 
drop database ingressosJa;

CREATE DATABASE ingressosJa;
USE ingressosja;

CREATE TABLE cinema(
idCinema INT PRIMARY KEY AUTO_INCREMENT,
endereco varchar(100),
nome varchar(100));

CREATE TABLE sala(
idSala INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(100),
capacidade int,
fkCinema int,
foreign key (fkCinema) references cinema(idCinema));

CREATE TABLE tipo(
idTipo INT PRIMARY KEY AUTO_INCREMENT,
descricao varchar(100)
);

CREATE TABLE assento(
idAssento INT PRIMARY KEY AUTO_INCREMENT,
fkSala int,
numero varchar(4),
fkTipo int,
fkCinema int,
foreign key (fkCinema) references cinema(idCinema),
foreign key (fkSala) references sala(idSala),
foreign key (fkTipo) references tipo(idTipo));

CREATE TABLE filme(
idFilme INT PRIMARY KEY AUTO_INCREMENT,
titulo varchar(100),
descricao text,
capa varchar(1000),
genero varchar(50),
duracaoMin int,
classificacao varchar(10),
exibicao varchar(10));

CREATE TABLE cliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	username VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    telefone char(11),
    cpf char(11));

CREATE TABLE sessao(
idSessao INT PRIMARY KEY AUTO_INCREMENT,
fkSala int,
fkFilme int,
dataHora datetime,	
tipoSessao varchar(50),	
foreign key (fkSala) references sala(idSala),
foreign key (fkFilme) references filme(idFilme));

select dataHora from sessao;

SELECT DATE(dataHora) AS data
FROM sessao
GROUP BY DATE(dataHora);

CREATE TABLE preco(
idPreco INT PRIMARY KEY AUTO_INCREMENT,
dia varchar(20),
preco decimal
);

CREATE TABLE ingresso(
idIngresso INT PRIMARY KEY AUTO_INCREMENT,
fkCliente int,
fkSessao int,
fkAssento int,
fkPreco int,
dataHora varchar(50),
foreign key (fkSessao) references sessao(idSessao),
foreign key (fkPreco) references preco(idPreco),
foreign key (fkCliente) references cliente(idCliente),
foreign key (fkAssento) references assento(idAssento)
);


INSERT INTO cinema (idCinema, endereco, nome) VALUES
(1, 'Avenida Paulista, 1000, São Paulo', 'Cinema Paulista'),
(2, 'Rua das Flores, 200, Rio de Janeiro', 'Cinema RJ'),
(3, 'Praça Sete, 300, Belo Horizonte', 'Cinema BH'),
(4, 'Avenida Beira Mar, 400, Salvador', 'Cinema Salvador'),
(5, 'Rua Augusta, 1500, São Paulo', 'Cinema Augusta'),
(6, 'Avenida Atlântica, 2100, Rio de Janeiro', 'Cinema Copacabana'),
(7, 'Rua da Bahia, 700, Belo Horizonte', 'Cinema Palace'),
(8, 'Avenida Paralela, 800, Salvador', 'Cinema Paralela'),
(9, 'Rua XV de Novembro, 900, Curitiba', 'Cinema Curitiba'),
(10, 'Avenida Brasil, 1100, Porto Alegre', 'Cinema Porto Alegre'),
(11, 'Rua Goiás, 1200, Goiânia', 'Cinema Goiânia'),
(12, 'Avenida Recife, 1300, Recife', 'Cinema Recife'),
(13, 'Rua das Palmeiras, 1400, Florianópolis', 'Cinema Florianópolis'),
(14, 'Avenida Amazonas, 1500, Manaus', 'Cinema Manaus');

INSERT INTO sala (nome, capacidade, fkCinema) VALUES
('Sala 1', 100, 1),
('Sala 2', 150, 1),
('Sala 1', 120, 2),
('Sala 2', 200, 2),
('Sala 1', 80, 3),
('Sala 2', 110, 3),
('Sala 1', 90, 4),
('Sala 2', 130, 4),
('Sala 3', 200, 1),
('Sala 4', 250, 1),
('Sala 3', 180, 2),
('Sala 4', 220, 2),
('Sala 3', 150, 3),
('Sala 4', 170, 3),
('Sala 3', 140, 4),
('Sala 4', 160, 4),
('Sala 1', 100, 5),
('Sala 2', 150, 5),
('Sala 1', 120, 6),
('Sala 2', 200, 6),
('Sala 1', 80, 7),
('Sala 2', 110, 7),
('Sala 1', 90, 8),
('Sala 2', 130, 8),
('Sala 1', 100, 9),
('Sala 2', 150, 9),
('Sala 1', 120, 10),
('Sala 2', 200, 10),
('Sala 1', 80, 11),
('Sala 2', 110, 11),
('Sala 1', 90, 12),
('Sala 2', 130, 12),
('Sala 1', 100, 13),
('Sala 2', 150, 13),
('Sala 1', 120, 14),
('Sala 2', 200, 14);
select * from sala;

INSERT INTO tipo (descricao) VALUES
('VIP'),
('Normal');

INSERT INTO filme (titulo, descricao, capa, genero, duracaoMin, classificacao, exibicao) VALUES
('O Poderoso Chefão', 'A saga de uma família de mafiosos italo-americanos e suas lutas pelo poder.', 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg', 'Drama', 175, '18+', 'Em cartaz'),
('Vingadores: Ultimato', 'Os Vingadores precisam unir forças para derrotar Thanos e salvar o universo.', 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg', 'Ação', 181, '12+', 'Em cartaz'),
('Interestelar', 'Um grupo de exploradores viaja através de um buraco de minhoca no espaço para salvar a humanidade.', 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg', 'Ficção Científica', 169, '10+', 'Em cartaz'),
('Parasita', 'Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas.', 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png', 'Thriller', 132, '16+', 'Em cartaz'),
('Inception', 'Um ladrão que invade os sonhos das pessoas para roubar segredos corporativos.', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg', 'Ficção Científica', 148, '14+', 'Em cartaz'),
('O Senhor dos Anéis: A Sociedade do Anel', 'Um hobbit embarca em uma jornada para destruir um poderoso anel.', 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_Of_The_Ring.jpg', 'Fantasia', 178, '12+', 'Em cartaz'),
('Matrix', 'Um hacker descobre a verdade sobre a realidade e luta contra seus controladores.', 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg', 'Ficção Científica', 136, '14+', 'Em cartaz'),
('Clube da Luta', 'Um homem deprimido forma um clube de luta clandestino como forma de terapia.', 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg', 'Drama', 139, '18+', 'Em cartaz'),
('Forrest Gump', 'A história de um homem simples que tem uma vida extraordinária.', 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg', 'Drama', 142, '12+', 'Em breve'),
('O Cavaleiro das Trevas', 'Batman enfrenta o Coringa, um vilão anárquico que ameaça Gotham.', 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg', 'Ação', 152, '14+', 'Em cartaz'),
('A Origem dos Guardiões', 'Um grupo de guardiões mágicos se une para proteger a esperança das crianças.', 'https://upload.wikimedia.org/wikipedia/en/7/7e/Rise_of_the_Guardians_poster.jpg', 'Animação', 97, 'Livre', 'Em breve'),
('Gladiador', 'Um general romano busca vingança contra o imperador corrupto que matou sua família.', 'https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg', 'Ação', 155, '16+', 'Em breve');


-- Cinema 1, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(1, 'A1', 1),
(1, 'A2', 2),
(1, 'A3', 2),
(1, 'A4', 1),
(1, 'A5', 1),
(1, 'A6', 2),
(1, 'A7', 2),
(1, 'A8', 1);

-- Cinema 1, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(2, 'B1', 1),
(2, 'B2', 2),
(2, 'B3', 2),
(2, 'B4', 1),
(2, 'B5', 1),
(2, 'B6', 2),
(2, 'B7', 2),
(2, 'B8', 1);

-- Cinema 2, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(3, 'A1', 1),
(3, 'A2', 2),
(3, 'A3', 2),
(3, 'A4', 1),
(3, 'A5', 1),
(3, 'A6', 2),
(3, 'A7', 2),
(3, 'A8', 1);

-- Cinema 2, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(4, 'B1', 1),
(4, 'B2', 2),
(4, 'B3', 2),
(4, 'B4', 1),
(4, 'B5', 1),
(4, 'B6', 2),
(4, 'B7', 2),
(4, 'B8', 1);

-- Cinema 3, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(5, 'A1', 1),
(5, 'A2', 2),
(5, 'A3', 2),
(5, 'A4', 1),
(5, 'A5', 1),
(5, 'A6', 2),
(5, 'A7', 2),
(5, 'A8', 1);

-- Cinema 3, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(6, 'B1', 1),
(6, 'B2', 2),
(6, 'B3', 2),
(6, 'B4', 1),
(6, 'B5', 1),
(6, 'B6', 2),
(6, 'B7', 2),
(6, 'B8', 1);

-- Cinema 4, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(7, 'A1', 1),
(7, 'A2', 2),
(7, 'A3', 2),
(7, 'A4', 1),
(7, 'A5', 1),
(7, 'A6', 2),
(7, 'A7', 2),
(7, 'A8', 1);

-- Cinema 4, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(8, 'B1', 1),
(8, 'B2', 2),
(8, 'B3', 2),
(8, 'B4', 1),
(8, 'B5', 1),
(8, 'B6', 2),
(8, 'B7', 2),
(8, 'B8', 1);

-- Cinema 5, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(9, 'A1', 1),
(9, 'A2', 2),
(9, 'A3', 2),
(9, 'A4', 1),
(9, 'A4', 1),
(9, 'A5', 1),
(9, 'A6', 2),
(9, 'A7', 2),
(9, 'A8', 1);

-- Cinema 5, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(10, 'B1', 1),
(10, 'B2', 2),
(10, 'B3', 2),
(10, 'B4', 1),
(10, 'B5', 1),
(10, 'B6', 2),
(10, 'B7', 2),
(10, 'B8', 1);

-- Cinema 6, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(11, 'A1', 1),
(11, 'A2', 2),
(11, 'A3', 2),
(11, 'A4', 1),
(11, 'A5', 1),
(11, 'A6', 2),
(11, 'A7', 2),
(11, 'A8', 1);

-- Cinema 6, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(12, 'B1', 1),
(12, 'B2', 2),
(12, 'B3', 2),
(12, 'B4', 1),
(12, 'B5', 1),
(12, 'B6', 2),
(12, 'B7', 2),
(12, 'B8', 1);

-- Cinema 7, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(13, 'A1', 1),
(13, 'A2', 2),
(13, 'A3', 2),
(13, 'A4', 1),
(13, 'A5', 1),
(13, 'A6', 2),
(13, 'A7', 2),
(13, 'A8', 1);

-- Cinema 7, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(14, 'B1', 1),
(14, 'B2', 2),
(14, 'B3', 2),
(14, 'B4', 1),
(14, 'B5', 1),
(14, 'B6', 2),
(14, 'B7', 2),
(14, 'B8', 1);

-- Cinema 8, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(15, 'A1', 1),
(15, 'A2', 2),
(15, 'A3', 2),
(15, 'A4', 1),
(15, 'A5', 1),
(15, 'A6', 2),
(15, 'A7', 2),
(15, 'A8', 1);

-- Cinema 8, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(16, 'B1', 1),
(16, 'B2', 2),
(16, 'B3', 2),
(16, 'B4', 1),
(16, 'B5', 1),
(16, 'B6', 2),
(16, 'B7', 2),
(16, 'B8', 1);

-- Cinema 9, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(17, 'A1', 1),
(17, 'A2', 2),
(17, 'A3', 2),
(17, 'A4', 1),
(17, 'A5', 1),
(17, 'A6', 2),
(17, 'A7', 2),
(17, 'A8', 1);

-- Cinema 9, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(18, 'B1', 1),
(18, 'B2', 2),
(18, 'B3', 2),
(18, 'B4', 1),
(18, 'B5', 1),
(18, 'B6', 2),
(18, 'B7', 2),
(18, 'B8', 1);

-- Cinema 10, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(19, 'A1', 1),
(19, 'A2', 2),
(19, 'A3', 2),
(19, 'A4', 1),
(19, 'A5', 1),
(19, 'A6', 2),
(19, 'A7', 2),
(19, 'A8', 1);

-- Cinema 10, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(20, 'B1', 1),
(20, 'B2', 2),
(20, 'B3', 2),
(20, 'B4', 1),
(20, 'B5', 1),
(20, 'B6', 2),
(20, 'B7', 2),
(20, 'B8', 1);

-- Cinema 11, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(21, 'A1', 1),
(21, 'A2', 2),
(21, 'A3', 2),
(21, 'A4', 1),
(21, 'A5', 1),
(21, 'A6', 2),
(21, 'A7', 2),
(21, 'A8', 1);

-- Cinema 11, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(22, 'B1', 1),
(22, 'B2', 2),
(22, 'B3', 2),
(22, 'B4', 1),
(22, 'B5', 1),
(22, 'B6', 2),
(22, 'B7', 2),
(22, 'B8', 1);

-- Cinema 12, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(23, 'A1', 1),
(23, 'A2', 2),
(23, 'A3', 2),
(23, 'A4', 1),
(23, 'A5', 1),
(23, 'A6', 2),
(23, 'A7', 2),
(23, 'A8', 1);

-- Cinema 12, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(24, 'B1', 1),
(24, 'B2', 2),
(24, 'B3', 2),
(24, 'B4', 1),
(24, 'B5', 1),
(24, 'B6', 2),
(24, 'B7', 2),
(24, 'B8', 1);

-- Cinema 13, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(25, 'A1', 1),
(25, 'A2', 2),
(25, 'A3', 2),
(25, 'A4', 1),
(25, 'A5', 1),
(25, 'A6', 2),
(25, 'A7', 2),
(25, 'A8', 1);

-- Cinema 13, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(26, 'B1', 1),
(26, 'B2', 2),
(26, 'B3', 2),
(26, 'B4', 1),
(26, 'B5', 1),
(26, 'B6', 2),
(26, 'B7', 2),
(26, 'B8', 1);

-- Cinema 14, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(27, 'A1', 1),
(27, 'A2', 2),
(27, 'A3', 2),
(27, 'A4', 1),
(27, 'A5', 1),
(27, 'A6', 2),
(27, 'A7', 2),
(27, 'A8', 1);

-- Cinema 14, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(28, 'B1', 1),
(28, 'B2', 2),
(28, 'B3', 2),
(28, 'B4', 1),
(28, 'B5', 1),
(28, 'B6', 2),
(28, 'B7', 2),
(28, 'B8', 1);

-- Cinema 1, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(1, 5, '2024-07-05 14:00:00', '2D'),
(1, 6, '2024-07-05 17:00:00', '3D'),
(1, 7, '2024-07-06 14:00:00', '2D'),
(1, 8, '2024-07-06 17:00:00', '3D');

-- Cinema 1, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(2, 5, '2024-07-07 14:00:00', '2D'),
(2, 6, '2024-07-07 17:00:00', '3D'),
(2, 7, '2024-07-08 14:00:00', '2D'),
(2, 8, '2024-07-08 17:00:00', '3D');

-- Cinema 2, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(3, 5, '2024-07-09 14:00:00', '2D'),
(3, 6, '2024-07-09 17:00:00', '3D'),
(3, 7, '2024-07-10 14:00:00', '2D'),
(3, 8, '2024-07-10 17:00:00', '3D');

-- Cinema 2, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(4, 5, '2024-07-11 14:00:00', '2D'),
(4, 6, '2024-07-11 17:00:00', '3D'),
(4, 7, '2024-07-12 14:00:00', '2D'),
(4, 8, '2024-07-12 17:00:00', '3D');

-- Cinema 3, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(5, 1, '2024-07-13 14:00:00', '2D'),
(5, 2, '2024-07-13 17:00:00', '3D'),
(5, 3, '2024-07-14 14:00:00', '2D'),
(5, 4, '2024-07-14 17:00:00', '3D');

-- Cinema 3, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(6, 1, '2024-07-15 14:00:00', '2D'),
(6, 2, '2024-07-15 17:00:00', '3D'),
(6, 3, '2024-07-16 14:00:00', '2D'),
(6, 4, '2024-07-16 17:00:00', '3D');

-- Cinema 4, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(7, 1, '2024-07-17 14:00:00', '2D'),
(7, 2, '2024-07-17 17:00:00', '3D'),
(7, 3, '2024-07-18 14:00:00', '2D'),
(7, 4, '2024-07-18 17:00:00', '3D');

-- Cinema 4, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(8, 1, '2024-07-19 14:00:00', '2D'),
(8, 2, '2024-07-19 17:00:00', '3D'),
(8, 3, '2024-07-20 14:00:00', '2D'),
(8, 4, '2024-07-20 17:00:00', '3D');

-- Cinema 5, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(9, 1, '2024-07-21 14:00:00', '2D'),
(9, 2, '2024-07-21 17:00:00', '3D'),
(9, 3, '2024-07-22 14:00:00', '2D'),
(9, 4, '2024-07-22 17:00:00', '3D');

-- Cinema 5, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(10, 1, '2024-07-23 14:00:00', '2D'),
(10, 2, '2024-07-23 17:00:00', '3D'),
(10, 3, '2024-07-24 14:00:00', '2D'),
(10, 4, '2024-07-24 17:00:00', '3D');

-- Cinema 6, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(11, 1, '2024-07-25 14:00:00', '2D'),
(11, 2, '2024-07-25 17:00:00', '3D'),
(11, 3, '2024-07-26 14:00:00', '2D'),
(11, 4, '2024-07-26 17:00:00', '3D');

-- Cinema 6, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(12, 1, '2024-07-27 14:00:00', '2D'),
(12, 2, '2024-07-27 17:00:00', '3D'),
(12, 3, '2024-07-28 14:00:00', '2D'),
(12, 4, '2024-07-28 17:00:00', '3D');

-- Cinema 7, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(13, 1, '2024-07-29 14:00:00', '2D'),
(13, 2, '2024-07-29 17:00:00', '3D'),
(13, 3, '2024-07-30 14:00:00', '2D'),
(13, 4, '2024-07-30 17:00:00', '3D');

-- Cinema 7, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(14, 1, '2024-07-31 14:00:00', '2D'),
(14, 2, '2024-07-31 17:00:00', '3D'),
(14, 3, '2024-08-01 14:00:00', '2D'),
(14, 4, '2024-08-01 17:00:00', '3D');

-- Cinema 8, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(15, 1, '2024-08-02 14:00:00', '2D'),
(15, 2, '2024-08-02 17:00:00', '3D'),
(15, 3, '2024-08-03 14:00:00', '2D'),
(15, 4, '2024-08-03 17:00:00', '3D');

-- Cinema 8, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(16, 1, '2024-08-04 14:00:00', '2D'),
(16, 2, '2024-08-04 17:00:00', '3D'),
(16, 3, '2024-08-05 14:00:00', '2D'),
(16, 4, '2024-08-05 17:00:00', '3D');

-- Cinema 9, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(17, 1, '2024-08-06 14:00:00', '2D'),
(17, 2, '2024-08-06 17:00:00', '3D'),
(17, 3, '2024-08-07 14:00:00', '2D'),
(17, 4, '2024-08-07 17:00:00', '3D');

-- Cinema 9, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(18, 1, '2024-08-08 14:00:00', '2D'),
(18, 2, '2024-08-08 17:00:00', '3D'),
(18, 3, '2024-08-09 14:00:00', '2D'),
(18, 4, '2024-08-09 17:00:00', '3D');

-- Cinema 10, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(19, 1, '2024-08-10 14:00:00', '2D'),
(19, 2, '2024-08-10 17:00:00', '3D'),
(19, 3, '2024-08-11 14:00:00', '2D'),
(19, 4, '2024-08-11 17:00:00', '3D');

-- Cinema 10, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(20, 1, '2024-08-12 14:00:00', '2D'),
(20, 2, '2024-08-12 17:00:00', '3D'),
(20, 3, '2024-08-13 14:00:00', '2D'),
(20, 4, '2024-08-13 17:00:00', '3D');

-- Cinema 11, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(21, 1, '2024-08-14 14:00:00', '2D'),
(21, 2, '2024-08-14 17:00:00', '3D'),
(21, 3, '2024-08-15 14:00:00', '2D'),
(21, 4, '2024-08-15 17:00:00', '3D');

-- Cinema 11, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(22, 1, '2024-08-16 14:00:00', '2D'),
(22, 2, '2024-08-16 17:00:00', '3D'),
(22, 3, '2024-08-17 14:00:00', '2D'),
(22, 4, '2024-08-17 17:00:00', '3D');

-- Cinema 12, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(23, 1, '2024-08-18 14:00:00', '2D'),
(23, 2, '2024-08-18 17:00:00', '3D'),
(23, 3, '2024-08-19 14:00:00', '2D'),
(23, 4, '2024-08-19 17:00:00', '3D');

-- Cinema 12, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(24, 1, '2024-08-20 14:00:00', '2D'),
(24, 2, '2024-08-20 17:00:00', '3D'),
(24, 3, '2024-08-21 14:00:00', '2D'),
(24, 4, '2024-08-21 17:00:00', '3D');

-- Cinema 13, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(25, 1, '2024-08-22 14:00:00', '2D'),
(25, 2, '2024-08-22 17:00:00', '3D'),
(25, 3, '2024-08-23 14:00:00', '2D'),
(25, 4, '2024-08-23 17:00:00', '3D');

-- Cinema 13, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(26, 1, '2024-08-24 14:00:00', '2D'),
(26, 2, '2024-08-24 17:00:00', '3D'),
(26, 3, '2024-08-25 14:00:00', '2D'),
(26, 4, '2024-08-25 17:00:00', '3D');

-- Cinema 14, Sala 1
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(27, 1, '2024-08-26 14:00:00', '2D'),
(27, 2, '2024-08-26 17:00:00', '3D'),
(27, 3, '2024-08-27 14:00:00', '2D'),
(27, 4, '2024-08-27 17:00:00', '3D');

-- Cinema 14, Sala 2
INSERT INTO sessao (fkSala, fkFilme, dataHora, tipoSessao) VALUES
(28, 1, '2024-08-28 14:00:00', '2D'),
(28, 2, '2024-08-28 17:00:00', '3D'),
(28, 3, '2024-08-29 14:00:00', '2D'),
(28, 4, '2024-08-29 17:00:00', '3D');


SELECT * FROM sessao WHERE DATE(dataHora) = '2024-07-01' AND tipoSessao = '2D';
SELECT DATE(dataHora) AS data FROM sessao where fkFilme = 1 GROUP BY DATE(dataHora);
SELECT DATE(dataHora) AS data FROM sessao GROUP BY DATE(dataHora);
select * from sala join cinema on fkCinema = idCinema;
select f.idFilme, f.titulo, s.idSessao, s.tipoSessao from filme as f join sessao as s on fkFilme= idFilme;


INSERT INTO preco (dia, preco) VALUES
('Segunda-feira', 20.00),
('Terça-feira', 20.00),
('Quarta-feira', 15.00),
('Quinta-feira', 20.00),
('Sexta-feira', 25.00),
('Sábado', 30.00),
('Domingo', 30.00);

INSERT INTO cliente (nome, username, email, senha, telefone, cpf) VALUES
('João da Silva', 'joao123', 'joao.silva@example.com', 'senha123', '11987654321', '12345678901');

select * from cliente;
select * from ingresso;
select * from filme;
select * from sessao;

-- Inserindo dados na tabela ingresso

INSERT INTO ingresso (fkCliente, fkSessao, fkAssento, fkPreco, dataHora) VALUES
(1, 1, 1, 1, '2024-06-28 12:00:00');