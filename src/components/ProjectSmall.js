import React from 'react';
import {FiExternalLink} from 'react-icons/fi'
import RoundButton from './RoundButton';

function ProjectSmall({title, content}) {
    return (
        <div className='w-1/4 h-max flex flex-col gap-4 p-6 bg-dark-gray rounded-xl shadow-container '>
            <div className='flex justify-between'>
                <RoundButton>Learn More</RoundButton>
                <FiExternalLink size='20' className='text-blue-gray hover:stroke-stone-200 transition ease-in-out duration-300'/>
            </div>
            <h1 className='font-bold text-lg text-center'>{title}</h1>
            <p  className='text-xs text-p-gray'>{content}</p>
            <ul className='font-roboto-mono text-xs text-blue-gray'>
                <li>1</li>
            </ul>
        </div>
    );
}

export default ProjectSmall;