import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '~client/components';
import '~client/styles/Global.scss';

const { hot } = require('react-hot-loader');

const AppContainer = hot(module)(App);

ReactDOM.render(<AppContainer />, document.getElementById('app'));
