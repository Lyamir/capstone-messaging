const db = require('./db')

const User = function(username, password){
  this.username = username,
  this.password = password
}

User.register = (newUser, result) => {
  db.query("INSERT INTO users SET ?", [newUser.username, newUser.password], (err, result) => {
    if(err){
      console.log("error: ", err)
      result(err, null)
      return
    }
    result(null, {...newUsername})
  })
}

User.login = (user, result) => {
  db.query("SELECT * FROM users WHERE username=? AND password=? LIMIT 1", 
    [user.username, user.password], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    result(null, res)
  })
}