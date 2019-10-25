"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.simpleHttp = functions.https.onRequest((req, res) => {
    res.send({ msg: 'simpleHttp' });
});
//# sourceMappingURL=index.js.map