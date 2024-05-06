const express = require('express');

// Importanto módulo swagger-ui para configurar interface do swagger
const swaggerUi = require('swagger-ui-express');

// Importanto módulo swwager-jsdoc para gerar as especificações swagger
const swaggerJsdoc = require('swagger-jsdoc');

// Importando o módulo fs para operar sistemas de arquivos
const fs = require('fs');

// Criando uma instância do app express
const app = express();

// Importa as rotas definidas em routes.js
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

// Definindo as opções do swagger-jsdoc
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentação da API',
            version: '1.0.0',
            description: 'Documentação automática da API utilizando Swagger'
        },
        components: {
            schemas: {
                Contato: {
                    type: 'object',
                    properties: {
                        nome: {
                            type: 'string'
                        },
                        telefone: {
                            type: 'string'
                        },
                        email: {
                            type: 'string',
                            format: 'email'
                        },
                    },
                    required: ['nome', 'telefone', 'email']
                }
            }
        }
    },
    apis: ['./routes.js']
};

// Gera as especificações do Swagger com o options
const specs = swaggerJsdoc(options);

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Rota para salvar a documentação do Swagger
app.get('/salvar-swagger', (req, res) =>{
    // Converte as especificações do Swagger para JSON
    const swaggerJson = JSON.stringify(specs, null, 2);

    // Cominho onde o arquivo será salvo
    const filePath = './swagger.json';

    // Escreve o conteúdo no arquivo 'swagger.json'
    fs.writeFileSync(filePath, swaggerJson);

    // Indica o caminho onde a documentação foi salva
    res.send('Documentação Swagger salva em ' + filePath);
});

// Define a porta em que o servidor irá executar
const PORT = 3001;

// Inicia o servidor na porta especificada
app.listen(PORT, () =>{
    console.log("Servidor rodando na porta " + PORT);
});