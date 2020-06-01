let conn = require('../connection/mysqlconnection');
let Films = {};

Films.insert = (film,cb)=>{
    if(!conn) return cb("No se ha podido crear la conexión");
    conn.query('INSERT INTO film SET ?', [film], (error, result)=>{
    if (error) return cb(error);
    return cb(null, result.insertId);
    });
}
Films.fetchAll = (cb) => {
    if (!conn) return cb("No se ha podido crear la conexión");
    const SQL = "SELECT * FROM film LIMIT 5;";
    conn.query(SQL, (error, rows) => {
        if (error) return cb(error);
        else return cb(null, rows);
    })
}
module.exports = Films;