const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Doctor Portfolio Builder',
    description: 'This is an api server for a doctor portfolio builder website.\n'
  },
  host: 'cse341-project2-0lcr.onrender.com',
  schemes: ['https']
};

const outputFile = './swaggerDoc.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);