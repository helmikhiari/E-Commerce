const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
exports.checkUserExists = async (email) => {
    try {
        const user = await userModel.findOne({ email: email })

        return (!!user);
    }
    catch (error) {
        console.log(error);
    }
}

exports.register = async (firstName, lastName, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({ firstName, lastName, email, password:hashedPassword })
        await newUser.save();
        return true;

    }
    catch (error) {
        console.log(error);
    }
}

