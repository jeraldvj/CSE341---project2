module.exports = (mongoose) => {
    const Specialty = mongoose.model(
      'specialties',
      mongoose.Schema({
        specialtyName: {
          type: String
        },
        fontSize: {
          type: Number
        },
        fontFamily: {
          type: String
        },
        inspiration: {
          type: String
        },
        colors: {
          type: [String]
        }
      })
    );
  
    return Specialty;
  };