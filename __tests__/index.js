// @flow
const {getMeta, getMetaFromHtml} = require('../src');

const url = 'https://github.com/zzarcon';

test('default', async () => {
  const metadata = await getMeta(url);

  console.log(metadata);
});

test.only('From HTML', async () => {
  const metadata = await getMetaFromHtml(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta content="demo" property="og:site_name" />
        <meta content="image.png" property="og:image:name" />
        <meta content="400" property="og:image:width" />
        <meta content="200" property="og:image:height" />
        <meta content="px" property="og:image:dimensions:unit" />
        <meta charset="UTF-8" />
        <title>Document</title>
      </head>
      <body></body>
    </html>
  `);

  /**
   * {
   *   image: {
   *     name: 'image.png',
   *     width: 400,
   *     height: 200,
   *     dimensions: {
   *       unit: 'px'
   *     }
   *   }
   * }
   */

  expect(metadata.site_name).toEqual('demo');
  expect(metadata.image.name).toEqual('image.png');
  expect(metadata.image.width).toEqual('400');
  expect(metadata.image.height).toEqual('200');
  // TODO: Fix this case
  // expect(metadata.image.dimensions.unit).toEqual('px');
});