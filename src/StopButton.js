import React from 'react';

function StopButton(props) {
    return (
        <button
            onClick={() => {
                props.stopTime();
            }}
        >Stop</button>
    )
}

export default StopButton;