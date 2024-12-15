const express = require('express');
const { createComplaint, getComplaints, updateComplaintStatus } = require('../controllers/complaintController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createComplaint).get(getComplaints);
router.route('/:id').patch(protect, admin, updateComplaintStatus);

module.exports = router;
