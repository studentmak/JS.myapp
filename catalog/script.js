let {permissions} = require('./permissions.js')

let {post_users} = require('./post_users.js')

let {postpermissions} = require('./postpermissions.js')

let {users} = require('./users.js');


function salary_more_than_150k (){
    let data = [];
    console.log ("----------------------------------------------------------------------")
    console.log ("Users with higher salaries 150000")
    for (let i = 0; i < users.length; i++ ) {
            if (users[i].salary > 150000) {
             data.push(`${users[i].name}, salary = ${users[i].salary}`)
         }
    }
    return data
}
module.exports.salary_more_than_150k = salary_more_than_150k

function over_30_years_old (){
    let data = []
    console.log("----------------------------------------------------------------------")
    console.log ("Users over 30 years old")
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 30) {
             data.push(`${users[i].name}, age = ${users[i].age}`)
        }

    }
    return data
}
module.exports.over_30_years_old = over_30_years_old

function post_FT (){
    let data = []
    console.log("----------------------------------------------------------------------")
    console.log ("Users who have access to financial transactions")
    for (let i = 0; i < users.length; i++) {
        if (postpermissions[users[i].post].includes(permissions.Financial_operations)) {
            data.push(`${users[i].name}, jobe = ${(users[i]).post}`)
        }
    }
    return data
}
module.exports.post_FT = post_FT

function post_CPD () {
    let data = []
    console.log ("----------------------------------------------------------------------")
    console.log ("Users who have access to editing other users personal data")
    for (let i = 0; i < users.length; i++) {
        if (postpermissions[users[i].post].includes(permissions.Manage_others_users)) {
            data.push(`${users[i].name}, job = ${(users[i]).post}`)
        }
    }
    return data
}
module.exports.post_CPD = post_CPD



