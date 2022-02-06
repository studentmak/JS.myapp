
const { postpermissions } = require('../catalog/postpermissions.js')
const {post_users} = require('../catalog/post_users.js')



function insertPost_usersTable(callback) {
    for (let prop in post_users){
        insertTable(prop, callback)
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
        return client.query('CREATE TABLE roles(name VARCHAR, id SERIAL, permission INTEGER)', (err, res) => {
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

    function insertTable(name, permission, callback) {
        client.query('SELECT * FROM permissions WHERE name in ($1)', [postpermissions[name]], function(err, res) {
            if (err) {
                console.log(err)
            }

        })
        return client.query('INSERT INTO roles (name, permission) VALUES($1, $2)', [name, permission], (err, res) => {
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

