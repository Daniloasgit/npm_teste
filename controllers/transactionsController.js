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

//função para atualizar uma transação existente (substituição completa)
const updateTransactionPut = (req, res) => {
    const {id} = req.params;
    const {date, amount, description, category, account, user_id} = req.body
    db.query(
        'update transactions SET date = ?, amount = ?, description = ?, category = ?, account = ?, user_id = ? where id = ?',
        [date, amount, description, category, account, user_id, id],
    (err, results) => {
        if(err) {
          console.error('erro ao atualizar trasação',err);
            res.status(500).send('erro ao atualizar transação');
            return;
        
       }
       res.send('transação atualizada com sucesso');
    }
);
};



// função para atualizar uma transação existente (substituição parcial)
const updateTransactionPatch = (req, res) => {
    const {id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

   for (const[key,value] of Object.entries(fields)) {
    query.push( `${key}= ?`);
    values.push(value);

   }

   values.push(id);

db.query(
    `update transactions SET ${query.join(',')} where id = ?`,
    values,
    (err, results) => {
        if(err) {
          console.error('erro ao atualizar trasação',err);
            res.status(500).send('erro ao atualizar transação');
            return;
        
       }
       res.send('transação atualizada com sucesso');
    }

);
};

// função para deletar uma transação
const deleteTransaction = (req, res) =>{
    const {id} = req.params;
db.query('delete from transactions where id = ?',[id],
    (err, results) => {
        if(err) {
          console.error('erro ao deletar trasação',err);
            res.status(500).send('erro ao deletar transação');
            return;
        
       }
       res.send('transação deletada com sucesso');
    }

);
}

module.exports = {
    getALLTransactions,
    addTransactions,
    updateTransactionPut,
    updateTransactionPatch,
    deleteTransaction 
};