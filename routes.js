const express = require("express");

const router = express.Router();

const Contato = require('./models/Contatos')

// Inserir contato

/**
 * @swagger
 * /contatos:
 *   post:
 *     summary: Inserir um novo contato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contato'
 *     responses:
 *       200:
 *         description: Contato inserido com sucesso
 *       400:
 *         description: Erro ao inserir o contato
 */
router.post('/contatos', async (req, res) =>{
    try{
        const contatos = await Contato.create(req.body);
        res.status(200).json({contatos});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

// Buscar contatos

/**
 * @swagger
 * /contatos:
 *   get:
 *     summary: Buscar todos os contatos
 *     responses:
 *       200:
 *         description: Lista de contatos
 *       400:
 *         description: Erro ao buscar os contatos
 */
router.get('/contatos', async (req, res) =>{
    try{
        const contatos = await Contato.findAll();
        res.json(contatos);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

// Buscar um contato por ID

/**
 * @swagger
 * /contatos/{id}:
 *   get:
 *     summary: Buscar um contato por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contato encontrado
 *       404:
 *         description: Contato não encontrado
 *       400:
 *         description: Erro ao buscar o contato
 */
router.get('/contatos/:id', async (req, res) =>{
    try{
        const contatos = await Contato.findByPk(req.params.id);
        if(!contatos){
            return res.status(404).json({error: "Contato não encontrado!"});
        }
        res.status(200).json({mensagem: "Contato encontrado!", contatos});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

// Atualizar contato

/**
 * @swagger
 * /contatos/{id}:
 *   put:
 *     summary: Atualizar contato
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contato'
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso
 *       404:
 *         description: Contato não encontrado
 *       400:
 *         description: Erro ao atualizar o contato
 */
router.put('/contatos/:id', async (req, res) =>{
    try{
        const contatos = await Contato.findByPk(req.params.id);
        if(!contatos){
            return res.status(404).json({error: "Contato não encontrado!"});
        }
        await contatos.update(req.body);
        res.status(200).json({mensagem: "Contato atualizado com sucesso!", contatos});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

// Deletar contato

/**
 * @swagger
 * /contatos/{id}:
 *   delete:
 *     summary: Deletar contato
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contato deletado com sucesso
 *       404:
 *         description: Contato não encontrado
 *       400:
 *         description: Erro ao deletar o contato
 */
router.delete('/contatos/:id', async (req, res) =>{
    try{
        const contatos = await Contato.findByPk(req.params.id);
        if(!contatos){
            return res.status(404).json({error: "Contato não encontrado!"});
        }
        await contatos.destroy();
        res.status(200).json({mensagem: "Contato deletado com sucesso!", contatos});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

// Exportar router
module.exports = router;