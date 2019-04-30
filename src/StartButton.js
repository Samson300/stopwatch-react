import React from 'react';

function StartButton(props) {
    return (
        <button
            onClick={() => {
                props.startTime();
            }}
        >Start</button>
    )
}

export default StartButton;