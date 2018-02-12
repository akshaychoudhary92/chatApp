import * as React from 'react';
import { hot } from 'react-hot-loader';

import * as styles from '~client/styles/App.scss';

class App extends React.Component {
    render () {
        return (
            <h1 className={styles.main}>Hello, World!</h1>
        );
    }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App);
