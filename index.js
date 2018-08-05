'use strict';

global.hexo = hexo;
const tencentCosTag = require('./src/tag');
const tencentCosCommand = require('./src/command');

hexo.extend.tag.register('tencent_cos_img', tencentCosTag.cosImgTag);

hexo.extend.console.register(
    'tencent_cos',
    'Tencent Cloud Object Storage (COS) sync plugin (使用 "腾讯云象存储服务" 同步静态资源文件)',
    tencentCosCommand.cosCommandOptions,
    tencentCosCommand.cosCommand
);
hexo.extend.console.register(
    'tencent-cos',
    'Tencent Cloud Object Storage (COS) sync plugin (使用 "腾讯云象存储服务" 同步静态资源文件)',
    tencentCosCommand.cosCommandOptions,
    tencentCosCommand.cosCommand
);
