const Complaint = require('../models/Complaint');

exports.createComplaint = async (req, res) => {
    try {
        const { description, image } = req.body;
        const complaint = await Complaint.create({ user: req.user.id, description, image });
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('user', 'name email');
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComplaintStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const complaint = await Complaint.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
