
const {post_users} = require('../catalog/post_users.js')



function insertPost_usersTable(callback) {
    for (let prop in post_users){
        insertTable(prop, null, null, callback)
    }
}



function dropTable(callback) {
    return client.query('DROP TABLE IF EXISTS roles', (err, res) => {
        if (err) {
            console.log(err)
        } else  {
            console.log("role table deleted successfully")
            if (callback){
            callback()
           }
          }
        })
    }

    function createTable(callback) {
        return client.query('CREATE TABLE roles(name VARCHAR, id INTEGER, permission INTEGER)', (err, res) => {
           if (err){
               console.log(err)
           } else {
               console.log("role the table was created successfully")
               if (callback) {
                   callback()
               }
           }
        })
    }

    function insertTable(id, name, permission, callback) {
        return client.query('INSERT INTO roles VALUES($1, $2, $3)', [id, name, permission], (err, res) => {
            if (err){
                console.log(err)
            } else {
                console.log("The values were added to the (role) table successfully")
                if (callback) {
                    callback()
                }
            } 
        })
    }

let client
    module.exports.seedPost_users = function(c) {
    client = c
    dropTable(() =>{
        createTable(() =>{
            insertPost_usersTable()
        })
    })
}

