'use strict';

const config = hexo.config;
const envArgs = hexo.env.args;

const defaultConfig = {
    secretId: '账户API密钥: SecretId',
    secretKey: '账户API密钥: SecretKey',
    bucket: '对象存储: 空间名称',
    region: '对象存储: 所属地域',
    bucketPrefix: '对象存储: 文件夹名称',
    bucketDomainUrl: '对象存储: 访问域名',
    sync: 'alway | manual | disable',
    resourceDirectory: {
        localDirectory: 'source/static',
        image: 'images',
        js: 'js',
        css: 'css'
    }
}
const cosImgConfig = {
    ...defaultConfig,
    ...config.tencent_cos
};

const useCos = (envArgs['tencent_cos'] === 'sync' || envArgs['tencentCos'] === 'sync') || (cosImgConfig.sync === 'alway');
const cosUrlPrefix = (useCos ? cosImgConfig.bucketDomainUrl + '/' : '') + cosImgConfig.bucketPrefix;
// 图片文件夹路径
const imgPrefix = [cosUrlPrefix, '/', cosImgConfig.resourceDirectory.image].join('').replace(/\/$/, '');
// 脚本文件夹路径
const jsPrefix = [cosUrlPrefix, '/', cosImgConfig.resourceDirectory.js].join('').replace(/\/$/, '');
// 样式表文件夹路径
const cssPrefix = [cosUrlPrefix, '/', cosImgConfig.resourceDirectory.css].join('').replace(/\/$/, '');

module.exports = {
    ...cosImgConfig,
    useCos,
    cosUrlPrefix,
    imgPrefix,
    jsPrefix,
    cssPrefix
}