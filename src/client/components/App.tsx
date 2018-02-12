import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as io from 'socket.io-client';

import * as styles from '~/client/styles/App.scss';

const socket = io();

class App extends React.Component {
    state = {
        message: '',
        messages: []
    };

    _handleChange = (e) => this.setState({ message: e.target.value });

    _handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.message) return;
        socket.emit('chat message', this.state.message);
        this.setState({ message: '' });
    };

    _socketSetup = () => {
        socket.on('chat message', (msg) => this.setState({ messages: [...this.state.messages, msg ] }));
    };

    componentDidMount () {
        this._socketSetup();
    }

    render () {
        const messages = this.state.messages.map((msg, i) => <li key={i}>{msg}</li>);

        return (
            <div>
                <ul className={styles.messages}>{messages}</ul>
                <form className={styles.messageForm} onSubmit={this._handleSubmit}>
                    <input
                        className={styles.messageInput}
                        value={this.state.message}
                        onChange={this._handleChange}
                        autoComplete='off'
                    />
                    <input className={styles.messageSend} type='submit' value='Send' />
                </form>
            </div>
        );
    }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App);
