import React from 'react';
import { useState, useEffect } from 'react';
import './ImageLink.css'

const API_URL = import.meta.env.VITE_API_URL;

const ImageLink = () => { 
    //local state
    const [imgUrl, setImgUrl] = useState('');
    const [dataIngredient, setDataIng] = useState('')
    //state changes       
    useEffect(() => {
        console.log('imgUrl updated: ', imgUrl);
    }, [imgUrl]);
    useEffect(() => {
        console.log('dataIngredient updated: ', dataIngredient);
    }, [dataIngredient]);

    //set img url value 
    const handleImgUrl = (event) => {
        setImgUrl(event.target.value);
    }

    //fetch clarafai through backend server
    const onButtonSubmit = () => {  
        const handleClarifaiRequest = async (imgUrl) => {
        try {
            const response = await fetch(`${API_URL}/clarifai`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imgUrl })
            });
            const data = await response.json();
            console.log('Clarifai API Response:', data);
            //iterate and store ingredients in a state of an object or an array 
            setDataIng(data.outputs[0].data.concepts[0]);
        } catch (error) {
            console.error('Error calling Clarifai API:', error);
        }
        };
        handleClarifaiRequest(imgUrl);
    }
    return (
        <div>
            <p className='f4 black mt2'>
                {'This will detect ingredients in your picture. Give it a try.'}
            </p>
            <div className='center'> 
                <div className='center pa3 br3 shadow-5 box'>
                    <input onInput={handleImgUrl} type='text' placeholder='URL' className='f5 pa1 w-80 ' />
                    <button onClick={onButtonSubmit}  className='w-20 grow f5 link ph2 pv1 white br1 bg-green b--dark-green'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;