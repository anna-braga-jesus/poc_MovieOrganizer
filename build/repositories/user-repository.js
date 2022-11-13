"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const database_js_1 = require("../database/database.js");
class UserRepository {
    async getUserByEmail(email) {
        const query = await database_js_1.connection.query(`SELECT * FROM users WHERE email = $1;`, [email]);
        const variable = query.rows[0];
        const userInfo = { ...variable };
        if (query.rowCount === 0) {
            return null;
        }
        else {
            return userInfo;
        }
    }
    async createNewUser(name, email) {
        await database_js_1.connection.query('INSERT INTO users (name, email) VALUES ($1, $2);', [name, email]);
    }
    async getUsers() {
        const query = await database_js_1.connection.query('SELECT * FROM users;');
        const allUsers = [...query.rows];
        return allUsers;
    }
    async getDuplicatedEmail() {
    }
}
exports.userRepository = new UserRepository();
