const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:
    {
        type: String,
        required: true,
    },
    lastName:
    {
        type: String,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    cart: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "productVariant",
        required: false
    },
    favorites:
    {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "product",
        required: false
    },

    promoCodes:
    {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "promoCode",
        required: false
    },
    code:
    {
        type:String,
    }
},
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('user', userSchema);


