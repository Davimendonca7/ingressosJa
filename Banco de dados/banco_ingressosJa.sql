CREATE DATABASE ingressosJa;
-- drop database ingressosJa;
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
tipo varchar(100)
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
capa varchar(1000),
genero varchar(50),
duracaoMin int,
classificacao varchar(10));

CREATE TABLE cliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    telefone char(11),
    cpf char(11));

CREATE TABLE sessao(
idSessao INT PRIMARY KEY AUTO_INCREMENT,
fkSala int,
fkFilme int,
dataHora datetime,
foreign key (fkSala) references sala(idSala),
foreign key (fkFilme) references filme(idFilme));

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
dataHora datetime,
foreign key (fkSessao) references sessao(idSessao),
foreign key (fkPreco) references preco(idPreco),
foreign key (fkCliente) references cliente(idCliente)
);


-- Inserindo dados na tabela cinema
INSERT INTO cinema (idCinema, endereco, nome) VALUES
(1, 'Avenida Paulista, 1000, São Paulo', 'Cinema Paulista'),
(2, 'Rua das Flores, 200, Rio de Janeiro', 'Cinema RJ'),
(3, 'Praça Sete, 300, Belo Horizonte', 'Cinema BH'),
(4, 'Avenida Beira Mar, 400, Salvador', 'Cinema Salvador');

-- Inserindo dados na tabela sala
INSERT INTO sala (nome, capacidade, fkCinema) VALUES
('Sala 1', 100, 1),
('Sala 2', 150, 1),
('Sala 1', 120, 2),
('Sala 2', 200, 2),
('Sala 1', 80, 3),
('Sala 2', 110, 3),
('Sala 1', 90, 4),
('Sala 2', 130, 4);

-- Inserindo dados na tabela tipo
INSERT INTO tipo (tipo) VALUES
('VIP'),
('Normal');

-- Inserindo dados na tabela filme com URLs reais
INSERT INTO filme (titulo, capa, genero, duracaoMin, classificacao) VALUES
('O Poderoso Chefão', 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg', 'Drama', 175, '18+'),
('Vingadores: Ultimato', 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg', 'Ação', 181, '12+'),
('Interestelar', 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg', 'Ficção Científica', 169, '10+'),
('Parasita', 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png', 'Thriller', 132, '16+');

-- Inserindo dados na tabela assento
-- Cinema 1, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(1, 'A1', 1),
(1, 'A2', 2),
(1, 'A3', 2),
(1, 'A4', 1);

-- Cinema 1, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(2, 'B1', 1),
(2, 'B2', 2),
(2, 'B3', 2),
(2, 'B4', 1);

-- Cinema 2, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(3, 'A1', 1),
(3, 'A2', 2),
(3, 'A3', 2),
(3, 'A4', 1);

-- Cinema 2, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(4, 'B1', 1),
(4, 'B2', 2),
(4, 'B3', 2),
(4, 'B4', 1);

-- Cinema 3, Sala 1
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(5, 'A1', 1),
(5, 'A2', 2),
(5, 'A3', 2),
(5, 'A4', 1);

-- Cinema 3, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(6, 'B1', 1),
(6, 'B2', 2),
(6, 'B3', 2),
(6, 'B4', 1);

-- Cinema 4, Sala 1
-- Inserindo dados na tabela assento
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(7, 'A1', 1),
(7, 'A2', 2),
(7, 'A3', 2),
(7, 'A4', 1);

-- Cinema 4, Sala 2
INSERT INTO assento (fkSala, numero, fkTipo) VALUES
(8, 'B1', 1),
(8, 'B2', 2),
(8, 'B3', 2),
(8, 'B4', 1);

-- Inserindo dados na tabela sessao
INSERT INTO sessao (fkSala, fkFilme, dataHora) VALUES
(1, 1, '2024-07-01 14:00:00'),
(2, 2, '2024-07-01 17:00:00'),
(3, 3, '2024-07-02 14:00:00'),
(4, 4, '2024-07-02 17:00:00'),
(5, 1, '2024-07-03 14:00:00'),
(6, 2, '2024-07-03 17:00:00'),
(7, 3, '2024-07-04 14:00:00'),
(8, 4, '2024-07-04 17:00:00');

-- Inserindo dados na tabela preco
INSERT INTO preco (dia, preco) VALUES
('Segunda-feira', 20.00),
('Terça-feira', 20.00),
('Quarta-feira', 15.00),
('Quinta-feira', 20.00),
('Sexta-feira', 25.00),
('Sábado', 30.00),
('Domingo', 30.00);

-- Inserindo dados na tabela cliente
INSERT INTO cliente (nome, email, senha, telefone, cpf) VALUES
('João da Silva', 'joao.silva@example.com', 'senha123', '11987654321', '12345678901'),
('Maria Oliveira', 'maria.oliveira@example.com', 'senha456', '21987654321', '10987654321');

-- Inserindo dados na tabela ingresso
INSERT INTO ingresso (fkCliente, fkSessao, fkAssento, fkPreco, dataHora) VALUES
(1, 1, 1, 1, '2024-06-28 12:00:00'),
(2, 2, 2, 2, '2024-06-28 15:00:00');
