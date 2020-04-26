'use strict';
const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'User',
      [
        {
          username: 'admin',
          firstname: 'Admin',
          lastname: 'Ganteng',
          password: bcrypt.hashSync('secret', 10),
          roleId: 1,
          createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  },
};
