# <div align="center"><a href="/README.md">Portuguese</a> | <a href="/README_EN.md">English</a></div>
<br><br>
# Contact Agenda API with Automated Swagger Documentation
This project implements a RESTful API to manage contacts using Node.js, Express, and Sequelize. The API documentation is automatically generated by Swagger, providing an easy and interactive way to understand and interact with the API endpoints.

### Author
* Felipe Pinto da Silva

### Features
* **View API Documentation:** The API documentation can be viewed by accessing the route `/api-docs`. This provides an interactive interface generated automatically by Swagger UI, where users can explore all available endpoints, parameters, requests, and responses in the API.
  
* **Save API Documentation Locally:** Users have the option to save the API documentation locally in JSON format. This is useful for having a copy of the documentation or for sharing it with other team members. To do this, simply access the route `/salvar-swagger`, which generates a `swagger.json` file in the root of the project containing all API specifications.
  
* **Define and Manipulate API Routes:** The `routes.js` file defines the API routes and the logic for manipulating data. It contains definitions for inserting, searching, updating, and deleting contacts.
  
* **Connect to MySQL Database:** The `db.js` file configures and connects to the MySQL database using Sequelize. It also defines the data model for contacts in the application.
  
* **Initialize Express Server:** The `index.js` file is the entry point of the application. It configures and starts the Express server, defines the API routes, configures Swagger documentation, and sets the port on which the server will run.

### API Documentation
The API documentation is automatically generated by Swagger, using the route and model definitions specified in the project files. To view the documentation, access `http://localhost:3001/api-docs/`.

### Save Documentation Locally
In addition to viewing the online documentation, users have the option to save the documentation locally in JSON format. To do this, access `http://localhost:3001/salvar-swagger/`, which will generate a `swagger.json` file in the project's root directory.

### Requirements
* Node.js
* npm or yarn
* MySQL

### Installation and Server Execution
Clone this repository:
```
git clone https://github.com/seu-usuario/projeto-node.git
```
Navigate to the project directory and run the server:
```
cd projeto-node
npm run dev
```

After starting the server, you can access the following routes:

* **View API Documentation:** To view the API documentation, access `http://localhost:3001/api-docs/`.

* **Save Documentation Locally:** To save the API documentation locally in JSON format, access `http://localhost:3001/salvar-swagger/`. This will generate a `swagger.json` file in the project's root directory.

* **Insert a New Contact:**
  - Method: POST
  - Route: `http://localhost:3001/contatos`
  - Description: Inserts a new contact into the database.
  
* **Get All Contacts:**
  - Method: GET
  - Route: `http://localhost:3001/contatos`
  - Description: Returns a list of all registered contacts.
  
* **Get a Contact by ID:**
  - Method: GET
  - Route: `http://localhost:3001/contatos/:id`
  - Description: Returns a specific contact based on the provided ID.
  
* **Update a Contact:**
  - Method: PUT
  - Route: `http://localhost:3001/contatos/:id`
  - Description: Updates the information of an existing contact based on the provided ID.
  
* **Delete a Contact:**
  - Method: DELETE
  - Route: `http://localhost:3001/contatos/:id`
  - Description: Removes a contact from the database based on the provided ID.

### Technologies Used
* Node.js
* Express
* Sequelize
* MySQL
* Nodemon
* Swagger (Swagger-JSDoc)
* Swagger UI Express

### Project Files
* **models/Contatos.js:** Defines the data model for contacts in the application, using Sequelize to interact with the MySQL database.
  
* **node_modules/:** Folder containing project dependencies, managed by npm or yarn.
  
* **notas/:** Support folder, not essential for the project.
  
* **db.js:** Configures and connects to the MySQL database using Sequelize. It also defines the data model for contacts in the application.
  
* **index.html:** Empty HTML file.
  
* **index.js:** Entry point of the application. Configures and starts the Express server, defines the API routes, configures Swagger documentation, and sets the port on which the server will run.
  
* **package-lock.json:** Automatically generated file by npm to ensure consistency of installed dependencies. It locks specific versions of dependencies to ensure that all developers are using the same versions.
    
* **package.json:** Manifest file of the Node.js project containing project configurations and dependencies.
  
* **routes.js:** Defines the API routes and logic for manipulating data. Contains definitions for inserting, searching, updating, and deleting contacts.
  
* **swagger.json:** File containing API specifications in JSON format. It can be automatically generated and saved locally using the route `/salvar-swagger`.
