import React, { useState } from 'react';
import rocket from '../assets/img/rocket.png';

export default function Navigation() {
    const [vector, setVector] = useState(1);
    const [className, setClassName] = useState(["rocket"]);
    const [index, setIndex] = useState(0);
    const [top, setTop] = useState({ top: 0 });

    function updateRocketPosition(val) {
        let oldVector = vector;
        if(val >= index) {
            setVector(1);
            setClassName(["rocket"]);
        }else{
            setVector(-1);
            setClassName(["rocket", "inv"]);
        }
        setIndex(val);
        if(vector !== oldVector) {
            setTimeout(() => {
                setTop({ top: val * 24 });
            }, 600);
        }else{
            setTop({ top: val * 24 });
        }
    }

    // function move(val) {
    //     console.log(className);
    //     if(className.includes("inv")) {
    //         setTimeout(() => {
    //             setTop({ top: val * 24 });
    //         }, 600);
    //     }else{
    //         setTop({ top: val * 24 });
    //     }
    // }

    return ( 
        <nav>
            <div className={className.join(" ")} style={top}>
                <img src={rocket} alt="foguete" />
            </div>
            <ul>
                <li onClick={() => { updateRocketPosition(0) }}><a href="#home">Bem Vindo!</a></li>
                <li onClick={() => { updateRocketPosition(1) }}><a href="#sobre-mim">Sobre Mim</a></li>
                <li onClick={() => { updateRocketPosition(2) }}><a href="#habilidades">Habilidades</a></li>
                <li onClick={() => { updateRocketPosition(3) }}><a href="#projetos">Projetos</a></li>
                <li onClick={() => { updateRocketPosition(4) }}><a href="#redes-sociais">Redes Sociais</a></li>
                <li onClick={() => { updateRocketPosition(5) }}><a href="#conatos">Contato</a></li>
            </ul>
        </nav>
    );
}