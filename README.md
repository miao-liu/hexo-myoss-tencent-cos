# hexo-myoss-tencent-cos

Tencent Cloud Object Storage (COS) sync plugin for Hexo (使用 "腾讯云象存储服务" 同步静态资源文件)

## Introduce

COS is one of the best static blog hosting platforms, you can enable CDN and configure Https.

allows you to publish your Hexo blog resource directly using commands `hexo tencent-cos sync`.

## Installation

>$ npm install hexo-myoss-tencent-cos --save

## Configure

You must configure in _config.yml as follows:

```yaml
tencent_cos:
  secretId: yourSecretId
  secretKey: yourSecretKey
  bucket: yourBucketName
  region: yourBucketRegion
  bucketPrefix: static
  bucketDomainUrl: https://yourBucketName.cos.yourBucketRegion.myqcloud.com
#  sync: alway | manual | disable
  sync: manual
  resourceDirectory:
    localDirectory: source/static
    image: images
    js: js
    css: css
```

You can get the SecretId, SecretKey on your [Tencent Cloud Console](https://console.cloud.tencent.com/cos5).

## Usage

### Tencent COS Tag

Perfect for adding `Tencent Cloud Object Storage` image to your post

```
{% tencent_cos_img test/demo.png title:图片标题 alt:图片说明 'class:class1 class2' %}
```

### Tencent COS sync

```bash
hexo tencent-cos sync
```

## License

Released under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0.txt)

## Related Projects

- cos-nodejs-sdk-v5 (https://github.com/tencentyun/cos-nodejs-sdk-v5)
- hexo-deployer-cos (https://github.com/sdlzhd/hexo-deployer-cos)
- hexo-qiniu-sync (https://github.com/gyk001/hexo-qiniu-sync)
