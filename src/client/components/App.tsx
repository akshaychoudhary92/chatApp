import * as React from 'react';
import * as io from 'socket.io-client';

// import * as styles from '~/client/styles/App.scss';
import { MessageForm, MessageList } from '~client/components';

const socket = io();

export class App extends React.Component {
    state = {
        message: '',
        messages: [],
        username: ''
    };

    _handleChange = (e) => this.setState({ message: e.target.value });

    _handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.message) return;
        if (!this.state.username) {
            this.setState({ username: this.state.message, message: '' });

            return;
        } else {
            socket.emit('chat message', { username: this.state.username, message: this.state.message });
            this.setState({ message: '' });
        }
    };

    _socketSetup = () => {
        socket.on('chat message', (msg) => this.setState({ messages: [...this.state.messages, msg] }));
    };

    componentDidMount () {
        this._socketSetup();
    }

    render () {
        const childProps = {
            MessageForm: {
                handleChange: this._handleChange,
                handleSubmit: this._handleSubmit,
                message: this.state.message,
                username: this.state.username
            },
            MessageList: {
                messages: this.state.messages
            }
        };

        return (
            <React.Fragment>
                <MessageList {...childProps.MessageList} />
                <MessageForm {...childProps.MessageForm} />
            </React.Fragment>
        );
    }
}
