"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreate = exports.userIndex = void 0;
const user_schema_js_1 = require("../schemas/user-schema.js");
const user_repository_1 = require("../repositories/user-repository");
const userIndex = async (req, res) => {
    const everyUser = await user_repository_1.userRepository.getUsers();
    res.send(everyUser);
};
exports.userIndex = userIndex;
const userCreate = async (req, res) => {
    const { name, email } = req.body;
    const user = {
        name: name,
        email: email
    };
    const { error } = user_schema_js_1.UserSchema.validate({ name, email });
    if (error) {
        return res.status(400).send({
            message: error.message
        });
    }
    await user_repository_1.userRepository.createNewUser(name, email);
    res.send("User created successfully!");
};
exports.userCreate = userCreate;
