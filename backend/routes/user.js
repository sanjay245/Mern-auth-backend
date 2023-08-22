const express = require('express')
const {
  createUser,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  getProfileDetails,
  updateUser,
} = require('../controllers/user')
const { isValidPassResetToken } = require('../middleware/user')
const {
  validateUser,
  validate,
  validatePassword,
} = require('../middleware/validator')

const router = express.Router()

router.post('/signup', validateUser, validate, createUser)
router.post('/verify-email', verifyEmail)
router.post('/resend-email-verification-token', resendEmailVerificationToken)
router.post('/forgot-password', forgetPassword)
router.post(
  '/verify-pass-reset-token',
  isValidPassResetToken,
  sendResetPasswordTokenStatus
)
router.post(
  '/reset-password',
  validatePassword,
  validate,
  isValidPassResetToken,
  resetPassword
)

router.get('/profile', getProfileDetails)
router.put('/updateUser', updateUser)

module.exports = router
