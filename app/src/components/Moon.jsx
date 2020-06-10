import React, { useState, forwardRef, useImperativeHandle } from 'react';
import moonImage from '../assets/img/moon-2.png';

const Moon = forwardRef ((props, ref) => {
    const [style, setStyle] = useState({ transform: "scale(0.2)", opacity: 0.3 });
    const limiar = 300;

    useImperativeHandle(ref, () => ({
        onScroll(delta) {
            let size, transparent, top;
            if(window.scrollY <= (limiar * 0.8)) {
                top = 150 - (window.scrollY * 1.5);
                size = (window.scrollY / limiar) + 0.2;
                transparent = (window.scrollY / limiar) + 0.3;
            }else{
                size = (limiar / window.scrollY) - 0.2;
                transparent = (limiar / window.scrollY) - 0.3;
            }
            size = size > 0.8 ? 0.8 : size;
            transparent = transparent > 1 ? 1 : transparent;
            setStyle({ top: top+"px", transform: `scale(${size})`, opacity: transparent});
        }
    })); 

    return ( 
        <div className="moon">
            <h1 style={{color : 'white'}}>{props.scroll}</h1>
            <div className="moon__image" style={style}>
                <img src={moonImage} alt="lua"/>
            </div>
        </div>
    );
});

export default Moon;