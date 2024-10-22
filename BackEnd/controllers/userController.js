const { validationResult } = require("express-validator");
const userService = require("../services/userService");

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (await userService.checkUserExists(email)) {
            res.status(409).json({ message: "User with this email already exists" })
            return;
        }

        const registered = await userService.register(firstName, lastName, email, password);
        if (!registered) {
            res.status(400).json({ message: "Registration error" });
            return;
        }
        res.status(201).json({ message: "User Registered Successfully" });
    }
    catch (error) {
        console.log(error);
    }
}