import * as React from 'react';

import * as styles from '~client/styles/MessageForm.scss';

export const MessageForm = ({ handleChange, handleSubmit, message, username }) => (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
        <input className={styles.messageInput} value={message} onChange={handleChange} autoComplete='off' />
        <input className={styles.messageSend} type='submit' value={username ? 'Send Message' : 'Set Username'} />
    </form>
);
