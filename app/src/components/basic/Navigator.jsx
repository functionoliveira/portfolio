import React from 'react';

export default function(props) {
    return (
        <ul>
            <li>{ props.list[0] }</li>
            <li>{ props.list[1] }</li>
            <li>{ props.list[2] }</li>
            <li>{ props.list[3] }</li>
            <li>{ props.list[4] }</li>
        </ul>
    );
}