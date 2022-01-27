'use strict';

// import packages and dependencies
const index = require('../controllers/index');
const express = require('express');
const router = express();

router.get('/', index.getAll);
 
router.post('/:id', index.postOne);

router.put('/', index.updateOne);
 
router.get('/:id', index.getOne);
 
router.delete('/:id', index.deleteOne);
 
module.exports = router;