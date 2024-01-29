SELECT * FROM Transacoes;

SELECT TransacaoID AS ID_Transacao, DataTransacao AS Data, ValorTransacao AS Valor FROM Transacoes;

SELECT * FROM Transacoes WHERE ValorTransacao > 100;

SELECT * FROM Transacoes ORDER BY ValorTransacao DESC;

SELECT AVG(ValorTransacao) AS MediaValor, MAX(ValorTransacao) AS ValorMaximo, MIN(ValorTransacao) AS ValorMinimo, COUNT(*) AS TotalTransacoes FROM Transacoes;

SELECT ProdutoID, AVG(ValorTransacao) AS MediaValor FROM Transacoes GROUP BY ProdutoID;

