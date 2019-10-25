import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.simpleHttp = functions.https.onRequest((req, res) => {
    res.send({ msg: 'simpleHttp' });
  });
