import * as React from 'react';

import * as styles from '~client/styles/MessageList.scss';

export const MessageList = ({ messages }) => (
    <ul className={styles.messages}>
        {messages.map(({ message, username }, i) => (
            <li key={i}>
                <span className={styles.username}>{username}:</span>
                {message}
            </li>
        ))}
    </ul>
);
