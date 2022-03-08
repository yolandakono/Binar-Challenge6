'use strict';

const { DATE } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      const data =[
        {
          Username: 'Jezil Edji',
          Password: 'TonyStark',
          createdAt: new DATE(),
          updatedAt: new DATE()
        },
  
        {
          Username: 'Rhena Djami',
          Password: 'LeeMinHoo',
          createdAt: new DATE(),
          updatedAt: new DATE()
        },
  
        {
          Username: 'Febry Pety',
          Password: 'HarleyQuinn',
          createdAt: new DATE(),
          updatedAt: new DATE()
        },
  
        {
          Username: 'Tasya Emilia',
          Password: 'CaptainAmerica',
          createdAt: new DATE(),
          updatedAt: new DATE()
        },
  
        {
          Username: 'Christin',
          Password: 'DongWook',
          createdAt: new DATE(),
          updatedAt: new DATE()
        }
      
      ]
     await queryInterface.bulkInsert('Usernames', data, {});



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Usernames', null, {});

  }
};
