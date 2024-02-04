const Book = require("../models/book");
const mongoSanitize = require("mongo-sanitize");

exports.createBook = (req, res) => {
  let bookObject = JSON.parse(mongoSanitize(req.body.book));
  delete bookObject._id;
  delete bookObject._userId;

  const book = new Book({
    ...bookObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  book
    .save()
    .then(() => res.status(201).json({ message: "creating succes book" }))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};
