import User from '../models/user.model.js';

// @desc    Get user addresses
// @route   GET /api/users/addresses
// @access  Private
const getAddresses = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json(user.addresses || []);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add a new address
// @route   POST /api/users/addresses
// @access  Private
const addAddress = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newAddress = req.body;

        // If this is the first address, make it default
        if (user.addresses.length === 0) {
            newAddress.isDefault = true;
        }

        user.addresses.push(newAddress);
        await user.save();

        res.status(201).json(user.addresses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete an address
// @route   DELETE /api/users/addresses/:id
// @access  Private
const deleteAddress = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.addresses.pull({ _id: req.params.id }); // Mongoose .pull() to remove from array
        await user.save();

        res.json(user.addresses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getAddresses, addAddress, deleteAddress };