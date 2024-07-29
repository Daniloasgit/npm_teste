//importar a biblioteca mysql2 e criar a conexao com banco de dados

const mysql = require('mysql2') //importando o pacote mysql para conectar ao banco de dados

 const db = mysql.createConnection({
host:process.env.DB_HOST,// endereço do servidor de banco de dados
  user:process.env.DB_USER, //nome do usuario para acessar o banco de dados
  password:process.env.DB_PASS, //senha do usuario para acessar o banco de dados
  database:process.env.DB_NAME, //Nome do banco de dados

});

db.connect((err)=>{
    if (err){
        console.error('Erro ao conectar ao banco de dados:', err) // Exibe mensagem de erro
    return;}
console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`); // exibe mensagem de acesso

});

module.exports=db; //exporta a conexão para ser usada m outros arquivos

