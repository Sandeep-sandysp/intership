import React from 'react';

export function Component2(props) {

    return (

        <div className="list" >
            <span style={{ backgroundColor: 'blue' }}>Hi the prop text are{props.text}</span>
        </div>
    );

}