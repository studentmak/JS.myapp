
const {port} = require('./config.js')
const express = require('express')
const req = require('express/lib/request')
const app = express()
const {users} = require('../catalog/users.js')
const {permissions} = require('../catalog/permissions.js')
const {post_users} = require('../catalog/post_users.js')
const {postpermissions} = require('../catalog/postpermissions.js')
const {post_FT, post_CPD, over_30_years_old, salary_more_than_150k, list_users, color_background} = require('../catalog/script.js')



app.use('/', express.static('./client'))

app.get('/postFT', (req, res) => {
    res.send(post_FT().join('; '))
})

app.get('/postCPD', (req, res) => {
    res.send(post_CPD().join('; '))
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/age30', (req, res) => {
    res.send(over_30_years_old().join('; '))
})

app.get('/permissions', (req, res) => {
    res.send(permissions)
})

app.get('/salary150k', (req, res)=> {
    res.send(salary_more_than_150k().join('; '))
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