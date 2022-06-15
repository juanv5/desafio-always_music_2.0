const { Pool } = require('pg');
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_dbs',
    password: '1234',
    port: 5432,
    max: 20,
    min: 0, // consultar dejar en 0 o eliminar
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000, //consultar valor
}




const Pool = new Pool(config)
pool.connect((error_conexion, client, release) => {


})