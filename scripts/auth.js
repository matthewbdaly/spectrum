'use strict';

const id = process.env.BITBALLOON_CLIENT_ID;
const secret = process.env.BITBALLOON_CLIENT_SECRET;

const bitballoon = require('bitballoon');
let client = bitballoon.createClient({
  client_id: id,
  client_secret: secret
});
client.authorizeFromCredentials(function(err, access_token) {
  if (err) return console.log(err);
  console.log(access_token);
});
