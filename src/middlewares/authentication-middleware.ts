import express, { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/user-repository";

class Middleware {
    async verifyUserByEmail(req: Request, res:Response, next:NextFunction) {
        const email: string = String(req.body.email);
        const saved = await userRepository.getUserByEmail(email);
        if(!saved){
            res.locals.saved = saved;
            next();
        }else{
            return res.status(409).send({message:"E-mail already registered!"});
        }
    }
}

export const middleware = new Middleware()