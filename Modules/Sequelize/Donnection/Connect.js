import {Sequelize} from 'sequelize';

export const sequlize = new Sequelize('week5', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

export const createTable = () => {
    return sequlize.sync({alter:true}).then((result) => {
        console.log("Connection Succeded");
    }).catch(err => {
        console.log(err);
    })
}