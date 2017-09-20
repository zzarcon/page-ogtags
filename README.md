# page-ogtags
> Get OG tags with ease

# Usage

```javascript
import getMeta from 'page-ogtags';

const {title, description, url, locale, image} = await getMeta('https://www.atlassian.com/');

console.log(
  title,
  description,
  url,
  locale.alternate,
  image.url,
  image.type,
  image.width,
);
```

# Features

* Meta property serialization

```html
<meta property="og:url" content="https://www.atlassian.com" />
<meta property="og:site_name" content="Atlassian" />
<meta property="og:full_site_name" content="Atlassian | 2017" />
```

```json
{
  "url": "https://www.atlassian.com",
  "siteName": "Atlassian",
  "fullSiteName": "Atlassian | 2017"
}
```

* Recursive mapping of tags into nested objects:

```html
<meta property="og:image" content="https://wac-cdn.atlassian.com/dam/jcr:c20cf6d1-9568-4aba-9a16-dba24e1495de/Atlassian-blue-onecolor@2x-rgb.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630">
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video:width" content="400" />
<meta property="og:video:height" content="300" />
```

```json
{
  "image": {
    "value": "https://wac-cdn.atlassian.com/dam/jcr:c20cf6d1-9568-4aba-9a16-dba24e1495de/Atlassian-blue-onecolor@2x-rgb.png",
    "width": "1200",
    "height": "630"
  },
  "video": {
    "type": "application/x-shockwave-flash",
    "width": "400",
    "height": "300"
  }
}
```

* Array support

```html
<meta property="og:image" content="http://example.com/rock.jpg" />
<meta property="og:image" content="http://example.com/rock2.jpg" />
```

```json
{
  "image": [
    "http://example.com/rock.jpg",
    "http://example.com/rock2.jpg"
  ]
}
```

* Retrieve all ```og:``` tags from the page, officials or not.

# TODO

- [ ] babel-plugin-transform-flow-strip-types