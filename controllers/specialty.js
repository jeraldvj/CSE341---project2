const db = require('../models');
const Specialty = db.specialty;

exports.getSpecialty = (req, res) => {
  const specialtyName = req.params.specialtyName;
  Specialty.find({ specialtyName: specialtyName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found specialty with name: ' + specialtyName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving specialty with specialtyName=' + specialtyName,
        error: err
      });
    });
};