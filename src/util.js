'use strict';

const crypto = require('crypto');

function md5(str, encoding) {
    return crypto.createHash('md5').update(str).digest(encoding || 'hex');
}

function getFileMd5(readStream, callback) {
    let md5 = crypto.createHash('md5');
    readStream.on('data', function(chunk) {
        md5.update(chunk);
    });
    readStream.on('error', function(err) {
        callback(err);
    });
    readStream.on('end', function() {
        let hash = md5.digest('hex');
        callback(null, hash);
    });
}

module.exports = {
    md5,
    getFileMd5
}
