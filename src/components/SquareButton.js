import React from 'react';
import { Link } from "gatsby";

function SquareButton(props) {
    return (
        <button className={`${props.border} border-4 p-1 px-4 tracking-widest font-roboto font-bold ${props.text} text-xs hover:bg-stone-800 transition-all`}>
           <Link to="/">{props.children}</Link>
        </button>
    );
}

export default SquareButton;