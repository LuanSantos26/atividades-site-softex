const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database:'conexao',
    password:'202',
    port:5432,
});

client.connect(function(err){
    if (err){
        console.log('Erro na conexão com o banco de dados')
    }else{
        console.log('Conexão bem sucedida com o banco')
        client.end();
    }
});