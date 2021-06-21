class DbModel {
    db = require("../db");

    publicFields = '*';

    selectAll(callback, fields) {
        if (fields == null) {
            fields = this.publicFields;
        }
        this.db.query(`SELECT ${fields} FROM ${this.tableName}`, callback);
    }
    selectOneById(id, callback) {
        this.db.query(`SELECT ${this.publicFields} FROM ${this.tableName} WHERE id = ?`, [id], callback);
    }
    deleteOneById(id, callback) {
        this.db.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id], callback);
    }
}

class CarModel extends DbModel {
    tableName = 'car';
}

class UserModel extends DbModel {
    tableName = 'user';
    publicFields = 'id, email';
}

module.exports = UserModel;
