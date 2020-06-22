import mysql from 'mysql'
import {promisify} from 'util'

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME
})

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexion a la base de datos ha sido cerrada')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Demasiadas conexiones a la base da datos')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Conexion a la base de datos rechazada')
        }
    }
    if(connection) connection.release();
    console.log('Base de datos conectada')
    return
});

pool.query = promisify(pool.query);

module.exports = pool;