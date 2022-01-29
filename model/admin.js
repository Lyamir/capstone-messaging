const db = require('./db')
const fs = require('fs')

const Admin = function(){}

Admin.resetData = result => {
  db.query("USE capstone_messaging; DELETE FROM users; DELETE FROM emails; " + seedQuery, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }
    result(null, res)
  })
}

const seedQuery = fs.readFileSync('model/seed.sql', {
  encoding: 'utf-8',
})

module.exports = Admin