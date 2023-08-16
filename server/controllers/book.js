import Book from '../models/Book.js'

export const makeBooking = async (req, res, next) => {
    const newBooking = new Book(req.body);
  
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
    } catch (err) {
      next(err);
    }
}

export const getBooking = async (req, res, next) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };

  export const getBookings = async (req, res, next) => {
    try {
      const bookings = await Book.find();
      res.status(200).json(bookings);
    } catch (err) {
      next(err);
    }
  };

  export const updateBooking = async (req, res, next) => {
    try {
      const updatedBooking = await Book.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedBooking);
    } catch (err) {
      next(err);
    }
  };
  
  
  export const deleteBooking = async (req, res, next) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Booking has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  
 