# Minimal React Setup

Minimal React Setup to run suomifi-ui-components in strict CSP with the help of nonce.

## ⚡️ Quick Start

- To install required dependencies, build and serve it: `yarn start:fresh`
- Open your browser at `localhost:5000`.

## ✨ Features

- Strict Content-Security-Policy
- [suomifi-ui-components](https://github.com/vrk-kpa/suomifi-ui-components)
- [uuid](https://github.com/uuidjs/uuid), for generating nonce
- [react-helmet](https://github.com/nfl/react-helmet), adding meta-tag which does contains generated nonce

## 🚔 Content-Security-Policy

[Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) is set to be quite finicky and not allowing too much.

```
<meta
    http-equiv="Content-Security-Policy"
    content="default-src 'none'; base-uri 'self'; object-src 'none';
    script-src 'self' 'nonce-xxx'; style-src 'self' 'nonce-xxx';
    font-src 'self'; connect-src 'self'; img-src 'self';"
/>
```

### 🚪 nonce

In the meta-tag the _nonce-xxx_ has the **xxx** replaced with the generated value.

You should handle the **nonce** generation based on your own setup. The simple example of this project is not maybe the way-to-go.

If you serve your application with node.js, you can e.g use [helmet-csp](https://github.com/helmetjs/csp)
You can read more about the CSP from their docs: https://helmetjs.github.io/docs/csp/

## 📄 Licensing

MIT [LICENSE](/LICENSE)
