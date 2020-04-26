import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import { Dialect } from 'sequelize/types'
import { config } from './config'
dotenv.config()


const sequelize = new Sequelize(config[process.env.NODE_ENV].database, config[process.env.NODE_ENV].username, config[process.env.NODE_ENV].password, {
  dialect: config[process.env.NODE_ENV].dialect as Dialect,
  logging: false,
  host: '127.0.0.1',
  port: config[process.env.NODE_ENV].port,
})

export { sequelize }

