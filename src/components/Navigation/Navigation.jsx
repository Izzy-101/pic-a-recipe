import React from 'react';

const Navigation = () => {
    return (
        <nav style={{display:'flex', justifyContent:'flex-end', overflow:'hidden'}}>
            <div className='br--left br4 shadow-5 bg-dark-green mt2 grow'>
                <p className='f3 washed-green link dim pa3 ma0 pointer'>Sign Out</p>
            </div>
        </nav>
    );
}

export default Navigation;