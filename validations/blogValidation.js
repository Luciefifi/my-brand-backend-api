
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
  
    // authorName: joi.string().required().label("Athor Name").regex(/^[A-Za-z ]+$/).messages({
    //     "string.pattern.base": "The title can not include numbers and special characters",
    //     "string.empty": "The name field can not be empty"
    // }),
    // category: joi.string().required().label("category").regex(/^[A-Za-z ]+$/).messages({
    //     "string.pattern.base": "The title can not include numbers and special characters",
    //     "string.empty": "The category field can not be empty"
    // }),
    // faculty: joi.string().required().label("category").regex(/^[A-Za-z ]+$/).messages({
    //     "string.pattern.base": "The title can not include numbers and special characters",
    //     "string.empty": "The faculty field can not be empty"
    // }),
    // authorImage: joi.string().label("author").messages({
    //     "string.empty": "Please add the author's picture"
    // }),
    // body: joi.string().required().messages({
    //     "string.empty": "The body field can not be empty"
    // }),
    // imgLink: joi.string().label("author").messages({
    //     "string.empty": "Please add the post's picture"
    // })

})

export default  blogValidationSChema;