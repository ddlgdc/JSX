import React from 'react';

const tweet = (props) => {
    const { username, name, date, message } = props;

    return (
        <div className='tweet'>
            <strong>{name}</strong> (@{username}) - {date}
            <p>{message}</p>
        </div>
    );
};

export default tweet;