const express = require('express');
const router = express.Router();

const specialtyController = require('../controllers/specialty');

router.get('/', specialtyController.getAll);

router.get('/:specialtyName', specialtyController.getSpecialty);

router.post('/', specialtyController.createSpecialty);

router.put('/:specialtyName', specialtyController.updateSpecialty);

router.delete('/:specialtyName', specialtyController.deleteSpecialty);

module.exports = router;