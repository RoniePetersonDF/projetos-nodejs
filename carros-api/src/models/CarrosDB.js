const mysql = require("mysql");

class CarroDB {
  static connect() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user:  'root',
      password: '',
      database: 'nodejs_crud'
    });
    connection.connect();
    return connection;
  }

  static getCarros(callback) {
    const connection = CarroDB.connect();
    return { msg: 'nada'};
    // console.log(connection.state);
    // const sql = `SELECT * FROM carro`;
    // connection.query(query, (error, results, fields) => {
    //   if (error) throw error;

    //   callback(results);
    // });

    // console.log(query.sql);

    // connection.end();

  }

  static getCarrosByTipo(tipo, callback) {
    const connection = CarroDB.connect();

    const sql = `SELECT id, nome, tipo FROM carro WHERE tipo = '${tipo}'`;
    const query = connection.query(query, (error, results, fields) => {
      if (error) throw error;

      callback(results);
    });

    console.log(query.sql);

    connection.end();
  }

  static getCarroById(id, callback) {
    const connection = CarroDB.connect();

    const sql = `SELECT * FROM carro WHERE id = ?`;

    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error;

      if(results.length == 0) {
        console.log("Nenhum carro encontrado.");
        return;
      }

      const carro = results[0];

      callback(carro);
    });

    console.log(query.sql);

    connection.end();
  }

  static save(carro, callback) {
    const connection = CarroDB.connect();

    const sql = `INSERT INTO carro WHERE id = ?`;

    const query = connection.query(sql, carro, (error, results, fields) => {
      if (error) throw error;

      carro.id = results.insertId;

      callback(carro);
    });

    console.log(query.sql);

    connection.end();
  }

  static update(carro, callback) {
    const connection = CarroDB.connect();

    const sql = `UPDATE carro SET ? WHERE id = ?`;

    const id = carro.id;

    const query = connection.query(sql, [carro.id], (error, results, fields) => {
      if (error) throw error;

      carro.id = results.insertId;

      callback(carro);
    });

    console.log(query.sql);

    connection.end();
  }

  static delete(carro, callback) {
    const connection = CarroDB.connect();

    const sql = `DELETE FROM carro WHERE id = ?`;

    const id = carro.id;

    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error;

      carro.id = results.insertId;

      callback(carro);
    });

    console.log(query.sql);

    connection.end();
  }

  static deleteById(id, callback) {
    const connection = CarroDB.connect();

    const sql = `DELETE FROM carro WHERE id = ?`;

    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error;

      carro.id = results.insertId;

      callback(results.affectedRows);
    });

    console.log(query.sql);

    connection.end();
  }
}

module.exports = CarroDB;
