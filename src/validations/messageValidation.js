import Joi from "joi";

const messageValidationSchema = Joi.object({
    fname: Joi.string().required().min(2).label("Name").regex(/^[A-Za-z]+$/).messages({
        "string.pattern.base": "The name field can not include numbers and special characters",
        "string.empty": "The name field can not be empty"
    }),

    lname: Joi.string().required().min(2).label("Name").regex(/^[A-Za-z]+$/).messages({
        "string.pattern.base": "The name field can not include numbers and special characters",
        "string.empty": "The name field can not be empty"
    }),

    email: Joi.string().required().email().messages({
        "string.email": "Invalid email",
        "string.empty": "The email field can not be empty"
    }),

    message: Joi.string().required().messages({
        "string.empty": "The message field can not be empty"
    })
})


export default messageValidationSchema