const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const blogSchema = Joi.object({
  title: Joi.string().min(5).max(10).required(),
 description: Joi.string().min(10).max(15).required(),
 image:Joi.any().required,
 blogBody: Joi.string().min(10).max(15).required(),

});

exports.validateBlog = validator(blogSchema);