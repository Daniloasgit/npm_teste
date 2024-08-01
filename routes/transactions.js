const express = require ('express') // importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); // importa o controlador das transaçoes

// definir uma rota para obter todas as transações
router.get('/',transactionsController.getALLTransactions);

// definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransactions);

//defnir uma rota para atualizar uma transação existente (substituição completa)

router.put('/:id',transactionsController.updateTransactionPut);

// definindo uma rota para atualizar uma transação existente (substituição parcial)

router.patch('/:id',transactionsController.updateTransactionPatch);

// definindo uma rota para deletar uma transação

router.delete('/:id',transactionsController.deleteTransaction);

// exportando o roteador
module.exports = router;

