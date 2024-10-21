const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
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
    cart:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"productDetails"
    },
    favorites:
    {
        type:[mongoose.Schema.Types.ObjectId],
        ref:"product"
    },

    promoCodes:
    {
        type:[mongoose.Schema.Types.ObjectId],
        ref:"promoCode"
    }
},
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('user', userSchema);