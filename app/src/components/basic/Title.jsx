import React from 'react';

export default function Title() {
    const text = 'Oi, me chamo Rafael Oliveira.';
    const subText = 'Seja bem vindo ao meu Portfólio.';

    return (
        <div>
            <h1>{ text }</h1>
            <h2>{ subText }</h2>
        </div>
    );
}