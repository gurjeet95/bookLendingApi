

const joi= require('joi');
const bookSchema = {
  title:joi.string().required().max(30),
  copies:joi.array().items(joi.object().keys({
    editionName:joi.string().required().max(20),
    editionDate:joi.date(),
    issued:joi.object().keys({
      isIssued:joi.boolean(),
      issuedTo:joi.string(),
      reserved:joi.boolean()
    })
  })),
  isbn:joi.string().required().max(20),
  author:joi.string().required().max(25),
  genre:joi.string().required().max(15),
  publication:joi.object().keys({
    date:joi.date(),
    publisher:joi.string().required(),
    cityPublished:joi.string()
  }),
}

const userSchema = {
  id:joi.string().alphanum().min(3).max(30).required(),
  name:joi.string().required().max(30),
  email:joi.string().required().email(),
  booksBorrowed:joi.array().items(joi.object().keys({
    borrowed:joi.string(),
     dueDate:joi.date()
  })),
  booksReserved:joi.string(),
  late_fees:joi.number()
}




module.exports={
    bookSchema:bookSchema,
    userSchema:userSchema,
}