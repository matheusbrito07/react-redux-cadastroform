const mysql = require('mysql')


const connect = mysql.createConnection({
    host:"bvtpwrjzojm3twmkszf3-mysql.services.clever-cloud.com",
    user:"uiizd8glwnx15m8h",
    password:"WhXUVXzofH25fbUtCgAu",
    database:"bvtpwrjzojm3twmkszf3"
})

module.exports = connect