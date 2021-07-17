import Sequelize, { DataTypes } from 'sequelize'
import * as models from './models'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
})

const User = models.User(sequelize, DataTypes)

function createTables() {
    
    return sequelize.sync({ force: true })
}

createTables()

export default {
    User
}