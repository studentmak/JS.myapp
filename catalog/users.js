let {post_users} = require ('./post_users.js')

module.exports.users = [
    {
        name: "Alex",
        age: 21,
        post: post_users.Developer,
        salary: 200000 
    },
    
    {
        name: "Mari",
        age: 31,
        post: post_users.Accountant,
        salary: 150000
    },
    
    {
        name: "Ivan",
        age: 25,
        post: post_users.Administrator,
        salary:100000
    },
    
    {
        name: "Nikolay",
        age: 35,
        post: post_users.Developer,
        salary: 250000
    }

    
]