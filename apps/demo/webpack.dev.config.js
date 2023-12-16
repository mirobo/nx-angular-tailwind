const path = require('path');
module.exports = {
    //...
    watchOptions: {
      ignored: ['**/node_modules','**/*.cy.ts'],
      poll: 5000, // Check for changes every second
    },
  }; 