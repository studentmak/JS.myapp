
const {port} = require('./config.js')
const express = require('express')
const req = require('express/lib/request')
const app = express()
const {users} = require('../catalog/users.js')
const {permissions} = require('../catalog/permissions.js')
const {post_users} = require('../catalog/post_users.js')
const {postpermissions} = require('../catalog/postpermissions.js')
const {post_FT, post_CPD, over_30_years_old, salary_more_than_150k, list_users, color_background} = require('../catalog/script.js')
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'my_app',
    password: '1973',
    port: 5432,
  })
  client.connect().then(() => {
 
 
    dropTable(() => {
        createTable(() => {
            insertUsers()
        })
    })
})

  
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
            console.log("users deleted table  successfully")
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
            console.log("users create table successfully")
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
            console.log("User inserted successfully")
            if (callback){
            callback()}
        }
    })
   }
    
app.use('/', express.static('./client'))

app.get('/postFT', (req, res) => {
    res.send(post_FT())
})

app.get('/postCPD', (req, res) => {
    res.send(post_CPD())
})

app.get('/users', (req, res) => {
    client.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
        }
    })
})
    


app.get('/age30', (req, res) => {
    res.send(over_30_years_old())
})

app.get('/permissions', (req, res) => {
    res.send(permissions)
})

app.get('/salary150k', (req, res)=> {
    res.send(salary_more_than_150k())
})

app.get('/post_users', (req, res) => {
    res.send(post_users)
})

app.get('/postpermissions', (req, res) => {
    res.send(postpermissions)
})

app.get('/color_background', (req, res) => {
    res.send(color_background)
})











app.listen(port, () =>{
    console.log(`Listen port: ${port}`)
})