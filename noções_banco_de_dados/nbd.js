-- Criação do banco de dados
CREATE DATABASE BlogDB;

-- Uso do banco de dados criado
USE BlogDB;

-- Criação da tabela Autor
CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    NomeAutor VARCHAR(100),
    Email VARCHAR(100)
);

-- Criação da tabela Post
CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

-- Criação da tabela Comentario
CREATE TABLE Comentario (
    ComentarioID INT PRIMARY KEY,
    TextoComentario TEXT,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);
