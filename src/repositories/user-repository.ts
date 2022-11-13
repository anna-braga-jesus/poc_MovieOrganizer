import { connection } from "../database/database.js"
import { IUser } from "../protocols/User.js";

class UserRepository {
    async getUserByEmail(email: string): Promise<IUser | null>{
        const query = await connection.query(`SELECT * FROM users WHERE email = $1;`, [email]);
        const variable = query.rows[0];
        const userInfo: IUser = {...variable};
        if(query.rowCount === 0 ){
            return null;
        }else{
            return userInfo;

        }
    }
    async createNewUser(name: string, email: string): Promise<void> {
        await connection.query('INSERT INTO users (name, email) VALUES ($1, $2);', [name, email]);
    }
    async getUsers():Promise<IUser[]>{
        const query = await connection.query('SELECT * FROM users;');
        const allUsers: IUser[] = [...query.rows]
        return allUsers;
    }
    async getDuplicatedEmail (){

    }
    
}

export const userRepository = new UserRepository();