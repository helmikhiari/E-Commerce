
const userService = require("../services/userService");

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (await userService.checkUserExists(email)) {
            return res.status(409).json({ message: "User with this email already exists" })
        }

        const registered = await userService.register(firstName, lastName, email, password);
        if (!registered) {
            return res.status(400).json({ message: "Registration error" });
        }

        return res.status(201).json({ message: "User Registered Successfully" });
    }
    catch (error) {
        console.log(error);
    }
}


exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUserbyID(req.userID);
        return res.status(200).send(user);
    }
    catch (error) {
        console.log('controller error : ' + error);
    }
}