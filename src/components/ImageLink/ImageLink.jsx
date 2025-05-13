import React from 'react';
import './ImageLink.css'

const ImageLink = () => {
    return (
        <div className='container'>
            <p className='f4 black mt5'>
                {'This will detect ingredients in your picture. Give it a try.'}
            </p>
            <div className='center'> 
                <div className='center pa3 br3 shadow-5 box'>
                    <input type='text' placeholder='URL' className='f5 pa1 w-80 ' />
                    <button className='w-20 grow f5 link ph2 pv1 white br1 bg-green b--dark-green'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;