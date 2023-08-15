// const { Model, Ghost } = require('../models/animaModel');
const Model = require('../models/animaModel');
const Ghost = require('../models/animaModel');

// Functions
const getAnimatronic = (req, res) => {
  const id = req.params.id;

  const selectAnima = anima.find(obj => obj.id === parseInt(id));

  if (selectAnima) {
    res.status(200).json(selectAnima);
  } else {
    res.status(404).json({ error: 'Animatronic not found' });
  }
};
const getAllAnimatronics = (req, res) => {
  res.json({
    length: anima.length,
    anima,
  });
};

const createAnimatronic = async (req, res) => {
  try {
    if (req.body.ghost === true) {
      const newGhost = await Ghost.create(req.body);

      res.status(201).send({
        status: 'succes, ghost created',
        animatronic: {
          newGhost,
        },
      });
    } else {
      const newAnimatronic = await Model.create(req.body);

      res.status(201).send({
        status: 'success',
        animatronic: {
          newAnimatronic,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

const updateAnimatronic = (req, res) => {
  res.status(200).send('Updated animatronic here...');
};

const updateAllAnimatronics = (req, res) => {
  res.status(200).send('Updated all animatronics');
};

const deleteAnimatronic = (req, res) => {
  const id = parseInt(req.params.id);

  const index = anima.findIndex(obj => obj.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Animatronic not found' });
  } else {
    anima.splice(index, 1);
    res
      .status(204)
      .json({ status: `Success! Animatronic number ${id} has been deleted` })
      .end();
  }
};

module.exports = {
  getAllAnimatronics,
  getAnimatronic,
  createAnimatronic,
  updateAllAnimatronics,
  updateAnimatronic,
  deleteAnimatronic,
};
