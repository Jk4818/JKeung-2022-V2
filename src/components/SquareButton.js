import React from 'react';

function SquareButton(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <button className={`w-max ${props.border} border-4 p-1 px-4 tracking-widest font-roboto font-bold ${props.text} text-xs hover:bg-stone-800 transition-all`}>
                {props.children}
            </button>
        </a>
    );
}

export default SquareButton;