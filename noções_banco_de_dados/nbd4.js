INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES
(1, 'Autor 1', 'Brasil'),
(2, 'Autor 2', 'Portugal'),
(3, 'Autor 3', 'Espanha');

INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES
(1, 'Livro 1', 2000, 1),
(2, 'Livro 2', 2005, 1),
(3, 'Livro 3', 2010, 2),
(4, 'Livro 4', 2015, 2),
(5, 'Livro 5', 2020, 3);

SELECT a.Nome, l.Titulo
FROM Autores a
JOIN Livros l ON a.AutorID = l.AutorID;

SELECT l.LivroID, l.Titulo, l.AnoPublicacao, a.Nome
FROM Livros l
INNER JOIN Autores a ON l.AutorID = a.AutorID;

SELECT a.Nome, l.Titulo
FROM Autores a
LEFT JOIN Livros l ON a.AutorID = l.AutorID;

SELECT a.Nome, l.Titulo
FROM Autores a
JOIN Livros l ON a.AutorID = l.AutorID
WHERE a.Nacionalidade = 'Brasil';
