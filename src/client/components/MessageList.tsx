import * as React from 'react';

import * as styles from '~client/styles/MessageList.scss';

export const MessageList = ({ messages }) => (
    <ul className={styles.messages}>{messages.map((msg, i) => <li key={i}>{msg}</li>)}</ul>
);
