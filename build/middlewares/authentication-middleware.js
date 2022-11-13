"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const user_repository_1 = require("../repositories/user-repository");
class Middleware {
    async verifyUserByEmail(req, res, next) {
        const email = String(req.headers.email);
        const saved = await user_repository_1.userRepository.getUserByEmail(email);
        if (saved) {
            res.locals.saved = saved;
            next();
        }
        else {
            return false;
        }
    }
}
exports.middleware = new Middleware();
