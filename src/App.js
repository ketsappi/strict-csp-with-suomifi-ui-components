import React from 'react';
import '../create-nonce';
import Foo from './components/Foo';
import { Helmet } from 'react-helmet';

import 'suomifi-ui-components/dist/main.css';
import { Button } from 'suomifi-ui-components';

const App = () => {
  return (
    <div>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content={`default-src 'none'; base-uri 'self'; object-src 'none'; script-src 'self' 'nonce-${__webpack_nonce__}'; style-src 'self' 'nonce-${__webpack_nonce__}'; font-src 'self'; connect-src 'self'; img-src 'self';`}
        />
      </Helmet>
      <Foo />
      <Button>suomifi-ui-button</Button>
    </div>
  );
};

export default App;
