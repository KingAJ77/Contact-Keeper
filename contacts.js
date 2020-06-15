const express = require('express');
const router = express.Router();

// @route     GET  api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res => {
    res.send('Get all contacts');
}));ncoding

modules.exports = router;

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res => {
    res.send('Add contacts');
}));ncoding

modules.exports = router;

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res => {
    res.send('Update contact');
}));ncoding

modules.exports = router;

// @route     DELETE api/contacts/:id
// @desc      Deelet contact
// @access    Private
router.delete('/:id', (req, res => {
    res.send('Delete contact');
}));ncoding

modules.exports = router;