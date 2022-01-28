const User = require('../model/user')
const Email = require('../model/email')

const routerFunctions = {
  postRegister: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    })

    User.register(newUser, (err, data) => {
      if (err)
      res.sendStatus(500).send({
        message: err.message || "An Error Occurred"
      })
      else {
        res.redirect('/login')
      }
    })
  },

  getLogin: (req, res) => {
    if(req.cookie != null)
      res.redirect('/')
    else
      res.render('login')
  },

  
  getRegister: (req, res) => {
    if(req.cookie != null)
      res.redirect('/')
    else
      res.render('register')
  },

  logout: (req, res) => {
    res.clearCookie("user")
    res.redirect('/login')
  },

  postLogin: (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    User.login([req.body.username, req.body.password], (err, data) => {
      console.log(data)
      res.cookie('user', data[0].username)
      if (data){
        res.redirect('/inbox')
      }
    })

  }
}

module.exports = routerFunctions