import React from 'react';
import {Link} from 'gatsby';

import Logo from './Logo';
import SquareButton from './SquareButton';

function Navbar(props) {
    return (
      <nav className="fixed w-full h-24 px-14 flex items-center bg-dark-gray/30 font-roboto font-medium backdrop-blur-tea z-50">
        <Logo />
        <div className="w-full flex items-center justify-end">
            <ul className="w-max h-max flex items-center gap-6 tracking-widest">
              <Link to="/#about">
                  <il before="0.1 -" className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange hover:text-vibrant-orange transition-all">
                        {' '}About.
                  </il>
              </Link>
              <il before="0.2 -" className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange">
                    {' '}Experience.
              </il>
              <il before="0.3 -" className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange">
                    {' '}Projects.
              </il>
              <il before="0.4 -" className="before:content-[attr(before)] before:inline-block before:text-vibrant-orange">
                    {' '}Contact.
              </il>
                <SquareButton color="white"> Resume </SquareButton>
            </ul>
        </div>
      </nav>
    );
}

export default Navbar;