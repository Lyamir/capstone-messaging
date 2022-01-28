const db = require('./db')

const User = function(username, password){
  this.username = username,
  this.password = password
}

User.register = (newUser, result) => {
  db.query("INSERT INTO users SET ?", [newUser.username, newUser.password], (err, res) => {
    if(err){
      console.log("error: ", err)
      result(err, null)
      return
    }
    result(null, {...newUser})
  })
}
//TODO: Fix login bug
User.login = (user, result) => {
  db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
    [-1, user[1]], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    result(null, res)
  })
}

User.getUser = (username, result) => {
  db.query("SELECT * FROM users WHERE username = ? LIMIT 1", username, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    result(null, res)
  })
}

module.exports = User