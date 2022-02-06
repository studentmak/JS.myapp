
const { permissions } = require("../catalog/permissions.js")



function insertPermissions(callback) {
    for (let prop in permissions) {
        insertPermission (prop, callback)
    }
}

function dropTable(callback) {
    return client.query('DROP TABLE IF EXISTS permissions', (err, res) =>{
     if (err) {
         console.log(err)
     }   else {
         console.log('Permissions table deleted successfully')
         if (callback){
         callback()
         }
        }
    })
}

function createTable(callback) {
    return client.query('CREATE TABLE permissions (name VARCHAR, id SERIAL)', (err, res) => {
        if (err){
            console.log(err)
        } else {
            console.log('Permissions the table was created successfully')
         if (callback) {
            callback()
        } 
    }
    })
}

function insertPermission(name, id, callback) {
    return client.query('INSERT INTO permissions VALUES($1)', [name], (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('The values were added to the (permissions) table successfully')
         if (callback) {
            callback()
        }
    }
    })
}

let client
module.exports.seedPermissions = function(c) {
    client = c
    dropTable(() =>{
        createTable(() =>{
            insertPermissions()
        })
    })
}
