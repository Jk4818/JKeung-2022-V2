import React from 'react';
import { Link } from "gatsby";

function SquareButton(props) {
    return (
        <button className='border-white border-4 p-2 px-4 tracking-widest font-roboto font-bold text-white text-xs hover:bg-stone-800 transition-all'>
           <Link to="/">{props.children}</Link>
        </button>
    );
}

export default SquareButton;