const { release } = require('os');
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


const pool = new Pool(config)

Pool.connect(async(error_conexion, client, release) => {
    if (error_conexion)
        return console.error(error_conexion.code)

    const agregar = {

        //name: 'agregarEstudiante',
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) values ()$1, $2, $3, $4) RETURNING * ;'
        values:
    }
}

release(); console.log("ultimo registro agregado: ", res.rows[0]); pool.end();

})