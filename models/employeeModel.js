const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employees = new Schema(
    {
      name: {
        type: String,  
      },
      position: {
          type: String,
      },
      email: {
          type: String,
      },
      phone: {
          type: String,
      },
      timestamp: {
          type: Date,
          default: Date.now
     }
    },
  {
    collection: 'employees'
  }
);

module.exports = mongoose.model('employees', Employees);