import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {
    return (
        <div>
            <Navbar />
            
            <div>
                {children}
            </div>
            
            <footer>Copyright 2022 Jason Keung</footer>
        </div>
    );
}

export default Layout;