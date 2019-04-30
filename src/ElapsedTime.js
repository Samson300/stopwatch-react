import React from 'react';

function ElapsedTime(props) {
    return (
        <ul>
            {
                <p>{props.timer}</p>
            }
        </ul>
    )
}

export default ElapsedTime;