



const {users} = require('../catalog/users.js')



function insertUsers(callback) {
    for (let i = 0; i < users.length; i++) {
        insertUser(users[i].name, users[i].age, callback)
        
    }
}

  function  dropTable(callback){
    return client.query('DROP TABLE IF EXISTS users', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log("users table deleted successfully")
            if (callback){
            callback()
            }
        
        }
    })
}

   function createTable(callback) {
    client.query('CREATE TABLE users(name VARCHAR, age INTEGER)', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log("users the table was created successfully")
            if (callback){
            callback()
            }
        }
    }) 
   }

   function insertUser(name, age, callback) {
    client.query('INSERT INTO users VALUES($1, $2)', [name, age],  (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log("The values were added to the (users) table successfully")
            if (callback){
            callback()}
        }
    })
   }

let client
   module.exports.seedUsers =  function(c){
       client = c
   dropTable(() => {
    createTable(() => {
        insertUsers()
    })
})
}