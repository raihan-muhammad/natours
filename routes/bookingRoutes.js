const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');
const router = express.Router();

const { protect, restrictTo } = authController;
const {
  getBookingSession,
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  getBooking,
} = bookingController;

router.use(protect);

router.get('/checkout-session/:tourID', getBookingSession);

router.use(restrictTo('admin', 'lead-guide'));

router.route('/').get(getAllBookings).post(createBooking);
router.route('/:id').get(getBooking).patch(updateBooking).delete(deleteBooking);

module.exports = router;
