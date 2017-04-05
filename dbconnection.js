const mysql = require('mysql')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'company1299',
    database:'mean_demo'
})

module.exports = connection