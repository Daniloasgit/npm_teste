const dotenv = require('dotenv');//  Importa o pacote dotenv para gerenciar variáveis de ambiente

dotenv.config();  // Carrega as variáveis definidas no arquivo .env para process.env

const express = require('express'); // Importa o framework Express
const cors = require('cors'); // Importa o pacote cors para permiƟr requisições de diferentes origens 
const bodyparser = require('body-parser')  // Importa o pacote body-parser para analisar o corpo das requisições HTTP


const db = require('./config/db'); // Importar a conexão com o banco de dados

const transactionsRoutes = require('./routes/transactions'); // Import
 

const app = express();  // Inicializa uma nova aplicação Express
app.use(cors());  // Habilita o CORS para todas as rotas
app.use(bodyparser.json());  // Configura o body-parser para analisar requisições JSON

app.use('/api/transactions',transactionsRoutes);

app.get('/',(req, res)=> {
    res.send('servidor está rodando')
}); // Define uma rota inicial para testar o servidor 

const port = process.env.port || 3000
app.listen(port,()=>{
   console.log(`servidor rodando na porta ${port}`)
}); 
