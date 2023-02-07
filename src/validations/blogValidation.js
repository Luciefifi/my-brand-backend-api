
import Joi from 'joi';

const blogValidationSChema = Joi.object ({

    title: Joi.string().required().label("Title").regex(/^[A-Za-z ]+$/).messages({
        "string.pattern.base": "The titles can not include numbers and special characters",
        "string.empty": "The title field can not be empty"
    }),
    description: Joi.string().required().label("description").messages({
      "string.empty": "The  description field can not be empty"
  }),

  image: Joi.string(),

  blogBody: Joi.string().required().messages({
    "string.empty": "The  blog body field can not be empty"
  }),
  

})

export default  blogValidationSChema;