const Admin = require('../model/admin')

const routerFunctions = {
  resetData: (req, res) => {
    Admin.resetData((err, data) => {
      if (err)
      res.sendStatus(500).send({
        message: err.message || "An Error Occurred"
      })
      else {
        res.render('login', {
          message: "Data Deleted. Seed Completed."
        })
      }
    })
  }
}

module.exports = routerFunctions
