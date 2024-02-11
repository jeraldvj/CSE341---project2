module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
      username: {
        type: String
      },
      password: {
        type: String
      },
      displayName: {
        type: String
      },
      email: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      theme_name: {
        type: String
      },
      profile: {
        experience: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        education: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        references: {
          type: [mongoose.SchemaTypes.Mixed]
        }
      }
    });
  
    return mongoose.model('users', userSchema);
  };