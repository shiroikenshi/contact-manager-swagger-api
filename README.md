# <div align="center"><a href="/README.md">Português</a> | <a href="/README_EN.md">Inglês</a></div>
<br><br>
# API de Agenda com Documentação Swagger Automatizada Swagger
Este projeto implementa uma API RESTful para gerenciar contatos, utilizando Node.js, Express e Sequelize. A documentação da API é gerada automaticamente pelo Swagger, proporcionando uma maneira fácil e interativa de entender e interagir com os endpoints da API.

### Autor
* Felipe Pinto da Silva

### Funcionalidades
* **Visualizar a Documentação da API:** A documentação da API pode ser visualizada acessando a rota `/api-docs`. Isso proporciona uma interface interativa gerada automaticamente pelo Swagger UI, onde os usuários podem explorar todos os endpoints, parâmetros, solicitações e respostas disponíveis na API.
  
* **Salvar a Documentação da API Localmente:** Os usuários têm a opção de salvar a documentação da API localmente em formato JSON. Isso é útil para ter uma cópia da documentação ou para compartilhá-la com outros membros da equipe. Para isso, basta acessar a rota `/salvar-swagger`, que gera um arquivo swagger.json na raiz do projeto contendo todas as especificações da API.
  
* **Definir e Manipular Rotas da API:** O arquivo `routes.js` define as rotas da API e a lógica de manipulação dos dados. Ele contém definições para a inserção, busca, atualização e remoção de contatos.
  
* **Conectar-se ao Banco de Dados MySQL:** O arquivo `db.js` configura e conecta-se ao banco de dados MySQL utilizando o Sequelize. Ele também define o modelo de dados para os contatos na aplicação.
  
* **Inicializar o Servidor Express:** O arquivo `index.js` é o ponto de entrada da aplicação. Ele configura e inicia o servidor Express, define as rotas da API, configura a documentação Swagger e define a porta em que o servidor irá executar.

### Documentação da API
A documentação da API é gerada automaticamente pelo Swagger, utilizando as definições de rotas e modelos especificadas nos arquivos do projeto. Para visualizar a documentação, acesse `http://localhost:3001/api-docs/`.

### Salvar a Documentação Localmente
Além de visualizar a documentação online, os usuários têm a opção de salvar a documentação localmente em formato JSON. Para isso, acesse `http://localhost:3001/salvar-swagger/`, que irá gerar um arquivo `swagger.json` na raiz do projeto.

### Requisitos
* Node.js
* npm ou yarn
* MySQL

### Instalação e Execução do Servidor
Clone este repositório:
```
git clone https://github.com/seu-usuario/projeto-node.git
```
Navegue até o diretório do projeto e execute o servidor:
```
cd projeto-node
npm run dev
```

Após iniciar o servidor, você pode acessar as seguintes rotas:

* **Visualizar a Documentação da API:** Para visualizar a documentação da API, acesse `http://localhost:3001/api-docs/`.

* **Salvar a Documentação Localmente:** Para salvar a documentação da API localmente em formato JSON, acesse `http://localhost:3001/salvar-swagger/`. Isso irá gerar um arquivo `swagger.json` na raiz do projeto.

* **Inserir um Novo Contato:**
  - Método: POST
  - Rota: `http://localhost:3001/contatos`
  - Descrição: Insere um novo contato na base de dados.
  
* **Buscar Todos os Contatos:**
  - Método: GET
  - Rota: `http://localhost:3001/contatos`
  - Descrição: Retorna uma lista com todos os contatos cadastrados.
  
* **Buscar um Contato por ID:**
  - Método: GET
  - Rota: `http://localhost:3001/contatos/:id`
  - Descrição: Retorna um contato específico com base no ID fornecido.
  
* **Atualizar um Contato:**
  - Método: PUT
  - Rota: `http://localhost:3001/contatos/:id`
  - Descrição: Atualiza as informações de um contato existente com base no ID fornecido.
  
* **Deletar um Contato:**
  - Método: DELETE
  - Rota: `http://localhost:3001/contatos/:id`
  - Descrição: Remove um contato da base de dados com base no ID fornecido.

### Tecnologias Utilizadas
* Node.js
* Express
* Sequelize
* MySQL
* Nodemon
* Swagger (Swagger-JSDoc)
* Swagger UI Express

### Arquivos do Projeto
* **models/Contatos.js:** Define o modelo de dados para os contatos na aplicação, utilizando Sequelize para interagir com o banco de dados MySQL.
  
* **node_modules/:** Pasta que contém as dependências do projeto, gerenciadas pelo npm ou yarn.
  
* **notas/:** Pasta de suporte, não é essencial para o projeto.
  
* **db.js:** Configura e conecta-se ao banco de dados MySQL utilizando Sequelize. Também define o modelo de dados para os contatos na aplicação.
  
* **index.html:** Arquivo HTML vazio.
  
* **index.js:** Ponto de entrada da aplicação. Configura e inicia o servidor Express, define as rotas da API, configura a documentação Swagger e define a porta em que o servidor irá executar.
  
* **package-lock.json:** Arquivo gerado automaticamente pelo npm para garantir a consistência das dependências instaladas. Ele bloqueia as versões específicas das dependências para garantir que todos os desenvolvedores estejam usando as mesmas versões.
    
* **package.json:** Arquivo de manifesto do projeto Node.js que contém as configurações e dependências do projeto.
  
* **routes.js:** Define as rotas da API e a lógica de manipulação dos dados. Contém definições para a inserção, busca, atualização e remoção de contatos.
  
* **swagger.json:** Arquivo que contém as especificações da API no formato JSON. Pode ser gerado automaticamente e salvo localmente utilizando a rota ```/salvar-swagger```.
