const db = require('../models');
const Specialty = db.specialty;

exports.getSpecialty = (req, res) => {
  try {
    const specialtyName = req.params.specialtyName;
    Specialty.find({ specialtyName: specialtyName })
      .then((data) => {
        if (data.length> 0){
          res.status(200).send(data);
        } else{
          res.status(404).send({ message: 'Specialty not found.' });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = (req, res) => {
  try {
    Specialty.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createSpecialty = (req, res) => {
  try {
    if (!req.body.specialtyName) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    const specialty = new Specialty(req.body);
    specialty
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the specialty.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateSpecialty = async (req, res) => {
  try{
    const specialtyName = req.params.specialtyName;
    if (!specialtyName) {
      res.status(400).send({ message: 'Invalid specialtyName Supplied' });
      return;
    }
    const update = {
      specialtyName: req.params.specialtyName,
      fontSize: req.body.fontSize,
      fontFamily: req.body.fontFamily,
      inspiration: req.body.inspiration,
      colors: req.body.colors
    }
    const doc = await Specialty.findOneAndUpdate({ specialtyName: specialtyName },update , {new: true, upsert: true, includeResultMetadata: true});
    if (doc.value instanceof Specialty){
      res.status(204).send(doc);
    } else {
      res.status(404).json(err || 'Specialty not found.');
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while updating the specialty data.');
  }
};


exports.deleteSpecialty = async (req, res) => {
  try {
    const specialtyName = req.params.specialtyName;
    if (!specialtyName) {
      res.status(400).send({ message: 'Invalid Specialty Supplied' });
      return;
    }
    const doc = await Specialty.deleteOne({ specialtyName: specialtyName })
    .then((result) => {
      if (result.deletedCount> 0){
        res.status(200).send(result);
      } else{
        res.status(404).send({ message: 'Specialty not found.' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the specialty.'
      });
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the specialty.');
  }
};