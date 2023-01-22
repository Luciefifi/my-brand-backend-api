
import Joi from 'joi';

const blogValidationSChema = Joi.object ({

    title: Joi.string().required().label("Title").regex(/^[A-Za-z ]+$/).messages({
        "string.pattern.base": "The titles can not include numbers and special characters",
        "any.required": "The title field can not be empty"
    }),
    description: Joi.string().required().label("description").messages({
      "any.required": "The  description field can not be empty"
  }),

  image: Joi.string().messages({
    "any.required": "The image field can not be empty"
}),
blogBody: Joi.string().required().messages({
  "any.required": "The  blog body field can not be empty"
}),
  

})

export default  blogValidationSChema;