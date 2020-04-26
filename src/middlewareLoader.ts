import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import expressStatusMonitor from 'express-status-monitor'
import morgan from 'morgan'
import 'reflect-metadata'
import { logger } from './modules/core/helpers/logger'
// const config = require('./../config/config.json')[process.env.NODE_ENV]

const middlewareLoader = (app: express.Application) => {
  app.use(expressStatusMonitor())
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('tiny', {
    stream: {
      write: (message) => {
        logger.info(message)
      },
    },
  }))
}

export = middlewareLoader
