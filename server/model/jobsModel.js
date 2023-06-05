const { Pool } = require('pg');
require('dotenv').config();
const PG_URI = process.env.ELEPHANT_URL;

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('Executed query', text);
        return poo
    }
}

