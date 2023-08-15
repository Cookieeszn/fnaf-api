const express = require('express');
const router = express.Router();

const {
  getAllAnimatronics,
  getAnimatronic,
  createAnimatronic,
  deleteAnimatronic,
  updateAllAnimatronics,
  updateAnimatronic,
} = require('../controllers/anima');

router
  .route('/')
  .get(getAllAnimatronics)
  .post(createAnimatronic)
  .patch(updateAllAnimatronics);

router
  .route('/:id')
  .get(getAnimatronic)
  .delete(deleteAnimatronic)
  .patch(updateAnimatronic);

module.exports = router;
