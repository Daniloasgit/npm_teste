const db = require('../config/db'); // importar a conexão com o banco de dados

// função para obter todas as transaçoes

const getALLTransactions = (req,res) => {
    db.querry('select * from transactions', (err, results) =>{
        if (err){
            console.error('erro ao obter transações',err);
            res.status(500).send('Erro ao obter transações');
            return;
    
        }
        res.json(results);
    })
}






module.exports = {
    getALLTransactions

}