import React from 'react';
import './IngredientList.css';

const IngredientList = () => {
    return ( 
        <div className='mv4 ml2 ba w-20 paperPattern'>
            <div>
                <h5 className='f4 mb0'>Ingredient List</h5>
                <hr className='w-80 b--black mv0'/> 
                <ul className='tl mr3'>
                    <li>eggs</li>
                    <li>chickens</li>
                    <li>beef</li>
                    <li>rice</li>
                    <li>Ice Cream</li>
                    <li>Bread</li>
                    <li>Noodles</li>
                    <li>Bacon</li>
                    <li>Lamb</li>
                    <li>eggs</li>
                    <li>Bacon</li>
                    <li>Pork</li>
                    <li>Corn</li>
                    <li>Cheese</li>
                    <li>Carrots</li>
                    <li>Peas</li>
                    <li>Spinach</li>
                    <li>Banana</li>
                </ul>
            </div>
            <div className='center pa2 pb3'>
                <input className='w-60 ml3' type='text' placeholder='ingredient'/>
                <button className='w-30 grow link br1'>Add</button>
            </div>
        </div>
    );
}

export default IngredientList;
