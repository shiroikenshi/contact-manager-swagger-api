const { Sequelize } = require ('sequelize');

// configure your mysql_user | password
const sequelize = new Sequelize('agenda', 'mysql_user', 'password',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(() =>{
    console.log('Conectado ao banco com sucesso!')
    sequelize.sync()
}).catch( err =>{
    console.error('Erro ao conectar ao banco', err)
});

module.exports = sequelize;
