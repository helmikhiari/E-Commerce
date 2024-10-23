
const {body,check}=require('express-validator');

exports.loginDto=[
    body('email')
    .isEmail(),

    body('password')
    .isLength({min:8})
,
    check().custom((value, { req }) => {
        const allowedProps = ["email", "password"];
        const unallowedProps = Object.keys(req.body).filter(prop => !allowedProps.includes(prop))
        if (unallowedProps.length > 0) {
            throw new Error(`Unexpected Fields : ${unallowedProps.join(',')}`);

        }
        return true;
    })
]