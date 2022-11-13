import { connection } from "../database/database.js"
import { IUser } from "../protocols/User.js";

class UserRepository {
    async getUserByEmail(email: string): Promise<IUser>{
        const myEmail = (acc: any) => acc.email === email;
        const query = await connection.query(`SELECT * FROM users;`);
        const queryFiltered = query.rows.find(myEmail)
        const userInfo: IUser = {...queryFiltered}
        return userInfo;
    }
    async createNewUser(name: string, email: string): Promise<void> {
        await connection.query('INSERT INTO users (name, email) VALUES ($1, $2);', [name, email]);
    }
    async getUsers():Promise<IUser[]>{
        const query = await connection.query('SELECT * FROM users;');
        const allUsers: IUser[] = [...query.rows]
        return allUsers;
    }
    
}

export const userRepository = new UserRepository();