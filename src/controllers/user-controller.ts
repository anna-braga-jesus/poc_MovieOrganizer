import { Request, Response } from "express";
import { IUser } from "../protocols/User";
import { UserSchema } from "../schemas/user-schema.js";
import { userRepository } from "../repositories/user-repository";
import { middleware } from "../middlewares/authentication-middleware";



export const userIndex = async (req: Request, res: Response) => {
    const everyUser = await userRepository.getUsers()
    res.send(everyUser);
};
export const userCreate = async (req: Request, res: Response) =>{
    const {name, email} = req.body as IUser;
    const user:IUser = {
        name: name, 
        email: email
    }
    const {error} = UserSchema.validate({name, email});
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }
    
    
    await userRepository.createNewUser(name,email)
    res.send("User created successfully!")
};
