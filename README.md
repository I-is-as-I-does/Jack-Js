# Jack Js

Minimal sets of utilities.

Jack of all trades is now in Javascript flavour!  
PHP counterpart over [here](https://github.com/I-is-as-I-does/Jack).

This is a work in progress.  
Cherrypick anything.

## Notable mentions 

- easy dynamic CSS/JS loading
- easy oembed request
- pretty url shorteners
- element-in-dom promise
- template CSS stylesheet generator
- easy local storage handling

Just take a look at those files already!

## How to

Install

```bash
npm install @i-is-as-i-does/jack-js
```

Use

```js
import Jack from '@i-is-as-i-does/jack-js';

console.log(Jack.ucFirst('bob'))
```

## Overview

### Check

```js
isEmpty(it)
isElement(obj)
seemsLikeValidDate(string)
isNonEmptyStr(it)
isNonEmptyObj(it)
isNonEmptyArr(it)
```

### Help

```js
ucFirst(string)
randomInt(min, max)
charCut(string, limit)
randomString(length = 10)
waitForElmInDOM(elmSelector, parentElm = null)
replaceDiacritics(text)
escapeRegExp(string)
deepCopy (obj) 
splitOnLineBreaks (string)
```

### Stock

```js
getSessionStorage()
getLocalStorage()
sizeInBytes(s)
jsonSize(obj, inKb = true)
clearPartialStorage(store, threshold = 2000)
isStorageAvailable(type)
copyToClipboard(content, callback)
```

### Style

```js
nonRenderedElmHeight(elm)
elmHasStyle(elm, property)
cssExtract(strength = 2)
autoScrollToBottom(elm)
autoScrollToTop(elm)
```

### Web

```js
loadJs(signatureVar, url)
isValidHttpUrl(string)
loadJson(url)
oembedLink(url, provider, maxwidth = null, maxheight = null)
oembedResponse(oembedLink)
oembedIframe(oembedResponse)
pathBasename(path)
pageHasSheet(signatureRule, url)
loadCss(signatureRule, url, shadowRootElm = null)
loadPagePreviewImg(url, useCache = true)
conciseUrl(string, withPath = true)
miniUrl(string)
searchUrlParam(name)
toLastSlash(url)
displayUrl (url)
stripHttp (url)
stripLastSlash (url)
```


## Contributing

Sure! You can take a loot at [CONTRIBUTING](CONTRIBUTING.md).

## License

This project is under the MIT License; cf. [LICENSE](LICENSE) for details.

![All The Trades!](https://github.com/I-is-as-I-does/Jack/raw/main/Jack-of-all-Trades-Lynn-Fisher_Hyperbole-and-a-half.jpg)
