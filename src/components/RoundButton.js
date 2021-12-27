import React from 'react';

function RoundButton({children}) {
    return (
        <div className='w-max p-1 px-3 bg-white hover:bg-stone-200 focus:outline-none focus:ring focus:ring-2 focus:ring-p-gray rounded-full text-black text-middle font-roboto-mono font-normal text-xs transition ease-in-out duration-300'>
            {children}
        </div>
    );
}

export default RoundButton;