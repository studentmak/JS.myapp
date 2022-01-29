

const http = require('http');
const {salary_more_than_150k, over_30_years_old, post_FT, post_CPD} = require('./catalog/script2.js');
const {users} = require('../catalog/users.js');

let server = http.createServer(function(request, response) {
    let salaryData = salary_more_than_150k();
    console.log(request.url)
    if (request.url =='/salary'){
    response.end(JSON.stringify(salaryData))
    } else if (request.url == '/users'){
        let usersData = users;
        response.end(JSON.stringify(usersData))
    } else if (request.url == '/age'){
        let age_fullData = over_30_years_old ();
        response.end(JSON.stringify(age_fullData))
    } else if (request.url == '/post_f'){
        let post_fData = post_FT ();
        response.end(JSON.stringify(post_fData))
    } else if (request.url == '/post_CPD'){
        let post_CPDData = post_CPD ();
        response.end(JSON.stringify(post_CPDData))
    }
})
server.listen('2525')
