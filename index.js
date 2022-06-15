//1. Realizar la conexión con PostgreSQL, utilizando la clase Pool y definiendo un
//máximo de 20 clientes, 5 segundos como tiempo máximo de inactividad de un
//cliente y 2 segundos de espera de un nuevo cliente.

const { Pool } = require('pg');
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: '1234',
    port: 5432,
    max: 20,
    min: 0, // consultar dejar en 0 o eliminar
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000, //consultar valor
}

//2. Hacer todas las consultas con un JSON como argumento definiendo la propiedad
//name para el Prepared Statement.
const Pool = new Pool(config)
pool.connect((error_conexion, client, release) => {


})