import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';

const modelLoader = (sequelize: Sequelize) => {
  const models = [__dirname + '/**/*.model.ts']
  // sequelize.addModels([User])
}

export = modelLoader
