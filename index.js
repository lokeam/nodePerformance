const express = require('express');
const crypto = require('crypto');
const app = express();

/* Testing cluster Manager, will always set to true. Once cluster.fork() is called, will return false */

/* Child mode use case, will act like a server */

app.get('/', (request, response) => {
  /* Handled inside event loop, we're stuck here doing the things until this fn completes */

  /* Test work function. Calculate hash then send response back */
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Finished doing work');
  });
});

app.get('/fast', (request, response) => {
  response.send('This loaded *fast*');
});

app.listen(3000);


