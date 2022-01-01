const User = require('../model/user')
const Email = require('../model/email')

const routerFunctions = {
  index: (req, res) => {
    const username = req.cookies.user
    if(req.cookies.user == null)
      res.redirect('/login')
    else {
      Email.getInbox(username, (err, data) => {
        res.render('index', {
          mail: data
        })
      })
    }
  },

  postSend: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    const newEmail = new Email({
      sender: req.cookies.user,
      receiver: req.body.receiver,
      message: req.body.message,
      datetime: new Date()
    })

    Email.send(newEmail, (err, data) => {
      if (err)
      res.sendStatus(500).send({
        message: err.message || "An Error Occurred"
      })
      else {
        res.redirect('/inbox')
      }
    })
  }
}

module.exports = routerFunctions