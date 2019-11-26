var mysql = require('mysql');

var pool;
const sqlOptions = {
    connectionLimit: 20,
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    multipleStatements: true,
    supportBigNumbers: true,
    bigNumberStrings: true,
    debug: true
}

try {
    pool = mysql.createPool(sqlOptions);
} catch (error) {
    console.log("Connection Pool Error : ", error);
}

// Faz a conexão
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('A conexão com o banco de dados foi finalizada.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('O banco de dados tem muitas conexões.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('A conexão com o banco de dados foi recusada')
        }
    } else {
		console.error('A conexão com o banco de dados foi estabelecida')
	}
	

    if (connection) connection.release()

    return
});

module.exports = pool;