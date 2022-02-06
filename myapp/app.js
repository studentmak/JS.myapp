
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
const { seedUsers, insertUser } = require('../seeds/users.js')
const { seedPermissions } = require('../seeds/permissions.js')
const { seedPost_users } = require('../seeds/post_users.js')
const bodyParser = require('body-parser')


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'my_app',
    password: '1973',
    port: 5432,
  })
  client.connect().then(() => {
    seedPermissions(client)  
    seedPost_users(client)
    seedUsers(client)
      
      
})

  
  

app.use(bodyParser.json());
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
    client.query('SELECT * FROM permissions', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/salary150k', (req, res)=> {
    res.send(salary_more_than_150k())
})

app.get('/post_users', (req, res) => {
    client.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/postpermissions', (req, res) => {
    res.send(postpermissions)
})

app.get('/color_background', (req, res) => {
    res.send(color_background)
})

app.post('/user', (req, res) =>{
    
    insertUser(req.body.name, req.body.age)
    res.send()
})









app.listen(port, () =>{
    console.log(`Listen port: ${port}`)
})