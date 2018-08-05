'use strict';

const htmlTag = require('hexo-util').htmlTag;
const cosImgConfig = require('./config');

/**
 * 将 Markdown 里的 tag 数组解析成对象
 *
 * 如标签: {% tencent_cos_img test/demo.png title:图片标题 alt:图片说明 'class:class1 class2' %}，
 * 则传入参数为: ['test/demo.png', 'title:图片标题', 'alt:图片说明', 'class:class1 class2']，
 * 解析结果为: { title: '图片标题',  alt: '图片说明', class: 'class1 class2'}，
 * 注意：参数值有空格的需要用引号将整个配置项括起来。
 *
 * @param {Array} argArray tag 数组对象
 */
function parseTagAttrs (argArray) {
    var attrs = {};
    for (var i = 1; i < argArray.length; i++) {
        var txt = argArray[i];
        if (txt.length > 2) {
            if (txt[0] === '\'' || txt[0] === '"') {
                txt = txt.substring(1, txt.length - 1);
            }
        }
        var parseAttr = txt.split(':');
        attrs[parseAttr[0]] = parseAttr[1];
    }
    return attrs;
}

/**
 * 腾讯云对象存储 "tencent_cos_img"(图片) 标签
 *
 * @param {Array} args 标签插件传入的参数
 * @param {string} content 标签插件所覆盖的内容
 */
function cosImgTag (args, content) {
    // 支持使用文章标题作为目录文件夹
    var imageName = args[0].replace('${assert_title}', this.title);
    var imgAttr = parseTagAttrs(args);
    delete imgAttr.normal;
    let relativePath = '';
    if (imgAttr.normal || !cosImgConfig.useCos) {
        // 如果设置了 normal 标志或者不使用"对象存储"，需要计算 path 的相对路径
        let count = this.path.split('/').length - 1;
        relativePath = '../'.repeat(count < 1 ? 0 : count);
    }
    imgAttr.src = [relativePath, cosImgConfig.imgPrefix, '/', imageName].join('');
    return htmlTag('img', imgAttr);
};

module.exports = {
    cosImgTag,
    parseTagAttrs
}
