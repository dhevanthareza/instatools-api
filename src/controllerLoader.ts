import express from 'express';
import 'reflect-metadata';
import { authController } from './modules/core/controllers/auth.controller';
import { userController } from './modules/management/user/user.controller';

const controllerLoader = (app: express.Application) => {
  app.use(authController);
  app.use(userController)
};

export = controllerLoader;
