const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.login = async (email, password) => {
    try {
        const user = await userModel.findOne({ email });
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch)
        return (passwordMatch ? user._id : null);
    }
    catch (error) {
        console.log(error);
    }
}