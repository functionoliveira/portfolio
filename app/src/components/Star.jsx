import React from 'react';

function randomSize() {
    return Math.ceil(Math.random() * 5) + 5; 
}

function randomPosition() {
    return Math.ceil(Math.random() * 1200) + 50; 
}

function delay() {
    return Math.ceil(Math.random() * 10) + 10; 
}

export default function Star(props) {
    const count = props.count;
    return Array(count).fill('').map(() => {
        const size = randomSize();
        const style = {
            top: randomPosition(), 
            left: randomPosition(),
            width: size+'px',
            height: size+'px', 
            animationDuration: delay()+'s' 
        }
        return (
            <div className="star" style={style}></div>
        );
    });
}