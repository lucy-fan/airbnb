const mySqlConn = require('../database/database');

User = function(user) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
}

User.findAllUsers = (result) => {
    mySqlConn.query("select * from user", (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            console.log(res);
            result(res, null);
        }
    })
};

User.findUserById = (userId, result) => {
    mySqlConn.query("select * from user where id = ?", userId, (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            
            console.log(res);
            result(res, null);
        }
    })
};

User.findUserByRole = (role, result) => {
  mySqlConn.query("select * from user where role = ?", role, (res, err) => {
      if (err) {
          console.log(err);
          result(null, err);
      }
      else {
          
          console.log(res);
          result(res, null);
      }
  })
};

User.findUserByEmail = (email, result) => {
    mySqlConn.query("select * from user where email = ?", email, (res, err) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            // console.log(res);
            result(res, null);
        }
    })
};

User.authenticate = (email, password, result) => {
  mySqlConn.query("select * from user where (email = ? AND password = ?)", [email, password], (res, err) => {
      if (err) {
          console.log(err);
          result(null, err);
      }
      else {
          console.log("model success");
          result(res, null);
      }
  })
};

User.createUser = (newUser, result) => {
    mySqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.updateUserById = (userId, user, result) => {
    mySqlConn.query(
      "UPDATE user SET ? WHERE id = ?",
      [user, userId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  };

User.removeUser = (userId, result) => {
    mySqlConn.query("DELETE FROM user WHERE id = ?", userId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

module.exports = User;