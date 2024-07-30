const db = require('../config/db'); // importar a conexão com o banco de dados

// função para obter todas as transaçoes

const getALLTransactions = (req,res) => {
    db.query('select * from transactions', (err, results) =>{
        if (err){
            console.error('erro ao obter transações',err)
            res.status(500).send('Erro ao obter transações');
            return;
    
        }
        res.json(results);
    });
};

// função para adicionar uma nova transação
const addTransactions = (req, res) => {
    const { date, amount, description, category, account, user_id } = req.body;

    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?, ?, ?, ?, ?, ?)',
        [date, amount, description, category, account, user_id],
        (err, results) => {
            if (err) {
                console.error('Erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }
            res.status(201).send('Transação adicionada com sucesso');
        }
    );
};



module.exports = {
    getALLTransactions,
    addTransactions
};