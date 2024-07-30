const express = require ('express') // importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); // importa o controlador das transaçoes

// definir uma rota para obter todas as transações
router.get('/',transactionsController.getALLTransactions);

// definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransactions);



// exportando o roteador
module.exports = router;

