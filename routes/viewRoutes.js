const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');
const bookingController = require('./../controllers/bookingController');

const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getRegisterForm,
  getMyTours,
  getForgetPassword,
} = viewController;
const { protect, isLoggedIn } = authController;
const { createBookingCheckout } = bookingController;
const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/forget-password', getForgetPassword);
router.get('/signup', getRegisterForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);
router.post('/submit-user-data', protect, updateUserData);
module.exports = router;
