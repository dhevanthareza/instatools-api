'use strict';
const moment = require('moment');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Role',
      [
        {
          code: 'admin',
          name: 'Admin',
          createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        },
        {
          code: 'user',
          name: 'User',
          createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Role', null, {});
  },
};
