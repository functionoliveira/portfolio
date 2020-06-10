import React from 'react';

export default function Meteor(props) {
    const x = props.x;
    const y = props.y;
    const style = { top: y + 'px', left: x + 'px' };

    return <div className="meteor" style={style}></div>;
}