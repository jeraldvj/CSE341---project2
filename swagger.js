const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Portfolio Builder',
    description: 'This is an api server for a portfolio builder website.\n'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swaggerDoc.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);