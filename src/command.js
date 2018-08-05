'use strict';

const packageInfo = require('../package.json');
const cosImgConfig = require('./config');
const cosSync = require('./deployer');

const cosCommandOptions = {
    desc: packageInfo.description,
    usage: ' <argument>',
    "arguments": [{
            "name": 'sync | s',
            "desc": "Sync your static files to Tencent Cloud Object Storage (COS)."
        },
        {
            "name": 'info | i',
            "desc": "Displays plugin version, aurthor or GitHub links"
        }
    ]
};

function cosCommand(args, callback) {
    console.log('\n<<--------------------------------------------------------->>'.blue);
    console.log('Tencent Cloud Object Storage (COS) sync plugin running ...\n'.blue);
    // console.log(args);
    var opt = args._[0] || null; // Option
    switch (opt) {
        case 'sync':
        case 's':
            console.log('sync files now ...')
            cosSync.sync(cosImgConfig, args);
            break;
        case 'info':
        case 'i':
            console.log('Plugin name'.bold + ': ' + packageInfo.name);
            console.log('Version'.bold + ': ' + packageInfo.version);
            console.log('Author'.bold + ':  ' + packageInfo.author.name);
            console.log('Github'.bold + ':  ' + packageInfo.repository.url);
            console.log('Bugs'.bold + ':    ' + packageInfo.bugs.url);
            break;
        default:
            return hexo.call('help', {
                _: ['tencent_cos']
            }, callback);
    }
    console.log('\nTencent Cloud Object Storage (COS) sync plugin run complete'.blue);
    console.log('<<--------------------------------------------------------->>'.blue);
};

module.exports = {
    cosCommandOptions,
    cosCommand
}