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
          username: req.cookies.user,
          mail: data
        })
      })
    }
  },

  sentbox: (req, res) => {
    const username = req.cookies.user
    if(req.cookies.user == null)
      res.redirect('/login')
    else {
      Email.getSent(username, (err, data) => {
        res.render('sentbox', {
          username: req.cookies.user,
          mail: data
        })
      })
    }
  },

  getSend: (req, res) => {
    if(req.cookies.user == null)
      res.redirect('/login')
    else {
      res.render('create', {
        username: req.cookies.user
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

    User.getUser(req.cookies.user, (err, userData) => {
      if (err)
        res.render('create', {
          message: err
        })
      else {
        Email.send(newEmail, (err, emailData) => {
          if (err)
          res.render('create', {
            message: err
          })
          else {
            res.redirect('/inbox')
          }
        })
      }
    })
  }
}

module.exports = routerFunctions