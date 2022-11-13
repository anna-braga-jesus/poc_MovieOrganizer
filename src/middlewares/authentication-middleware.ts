import express, { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/user-repository";

class Middleware {
    async verifyUserByEmail(req: Request, res:Response, next:NextFunction) {
        const email: string = String(req.headers.email);
        const saved = await userRepository.getUserByEmail(email);
        if(saved){
            res.locals.saved = saved;
            next();
        }else{
            return false;
        }
    }
    
     /*if(saved){
        if (saved) return res.status(409).send({message:"E-mail already registered!"}); 
        Verifica se já tem esse email no banco
        E se tiver: retorna que o email já foi registrado
        */
    
}

export const middleware = new Middleware()