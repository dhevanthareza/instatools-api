import chalk from 'chalk'
import dotenv, { config } from 'dotenv'
import express from 'express'
import moment from 'moment'
import { resolve } from 'path'
import 'reflect-metadata'
import controllerLoader from './controllerLoader'
import middlewareLoader from './middlewareLoader'
import modelLoader from './modelLoader'
import { sequelize } from './modules/core/config/database'
import { ResponseService } from './modules/core/service/response.service'

config({ path: resolve(__dirname, '../../.env.example') })

dotenv.config()
moment.locale('id')

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.settings()
    middlewareLoader(this.app)
    controllerLoader(this.app)
    this.app.use((error: any, req: any, res: any, next: any) => {
      const message = error.message || 'Internal Server Error'
      const code = error.code || 500
      ResponseService.error({ res, message, code })
    })
  }

  public async listen() {
    modelLoader(sequelize)
    this.app.listen(this.app.get('port'), () => {
      console.log(`${chalk.green('✓')} server started at http://localhost:${this.app.get('port')}`)
    })
  }

  private settings() {
    this.app.set('host', '0.0.0.0')
    this.app.set('port', process.env.PORT || 8080)
  }
}
const server = new App()
server.listen()
