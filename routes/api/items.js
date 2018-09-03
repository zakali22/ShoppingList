const express = require('express');
const router = express.Router();

// Require the Item model
const Item = require('../../models/Item');

// @route GET
// @desc To get all the items

router.get('/', (req, res) => {
	Item.find().then((items) => {
		res.json(items);
	});
});


// @route POST
// @desc To add an item

router.post('/', (req, res) => {
	const newItem = {
		text: req.body.text
	};

	Item.create(newItem).then((item) => {
		res.json(item);
	})
});

// @route DELETE
// @desc To delete an Item

router.delete('/:id', (req, res) => {
	Item.findById(req.params.id).then((item) => {
		item.remove().then(() => res.json({success: true}))
	}).
	catch(err => res.status(404).json({success: false}))
});

// @route PUT
// @desc To edit an Item

router.put('/:id', (req, res) => {
	const queryItem = {
		text: req.body.name
	}
	Item.updateOne({_id: req.params.id}, {$set: queryItem}).then((item) => {
		res.json({success: true})
	}).catch(err => res.status(404).json({success: false}))
})

module.exports = router;