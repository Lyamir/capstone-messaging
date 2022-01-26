const db = require('./db')

const Email = function(sender, receiver, message, datetime){
  this.sender = sender,
  this.receiver = receiver
  this.message = message
  this.datetime = datetime
}

Email.send = (newEmail, result) => {
  db.query("INSERT INTO emails SET ?", [newEmail.sender, newEmail.receiver, newEmail.message, newEmail.datetime], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err,null)
      return
    }
    result(null, {...newEmail})
  })
}

Email.getEmail = (id, result) => {
  db.query("SELECT * FROM emails WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    result(null, res)
  })
}

  // TODO: Insert Email.getInbox and Email.getSent

module.exports = Email