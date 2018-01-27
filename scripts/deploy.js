'use strict';

const token = process.env.BITBALLOON_ACCESS_TOKEN;
const site = process.env.BITBALLOON_SITE_ID;
const bitballoon = require('bitballoon');

bitballoon.deploy({access_token: token, site_id: site, dir: "build/"}, function(err, deploy) {
    if (err) { return console.log(err); }
    console.log("New deploy is live");
});
