const { Sequelize } = require ('sequelize');

// root @Onepieceélegal2021
// mysql_user semsenha
const sequelize = new Sequelize('agenda', 'root', '@Onepieceélegal2021',{
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