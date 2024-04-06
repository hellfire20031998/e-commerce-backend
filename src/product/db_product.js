const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"product_gender",
    password:"qwerty",
    port:5432,
});

module.exports=pool;