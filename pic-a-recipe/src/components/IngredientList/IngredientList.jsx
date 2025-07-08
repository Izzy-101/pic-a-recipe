import {useEffect, useState} from 'react';
import './IngredientList.css';

const IngredientList = ({dataIngredient, setDataIng}) => {
    const [inputValue, setInputValue] = useState('');
    //for development purposes 
    useEffect(() => {
        console.log('inputValue updated: ', inputValue);
    }, [inputValue]);
    //bind the value of the input field to react state inputValue (controlled component)
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    //update and add new ingredient to list
    const addList = () => {
        setDataIng([...dataIngredient, inputValue]);
        setInputValue('');
    }
    const  addListAfterClick = () => {
        if(inputValue.length > 0) {
            addList();
        }
    }
    const  addListAfterEnter = (event) => {
        if(inputValue.length > 0 && event.key === 'Enter') {
            addList();
        }
    }
    //update and filter out the ingredient to be deleted 
    const deleteListAfterClick = (event) => {
        setDataIng(dataIngredient.filter(ing => ing !== event.currentTarget.textContent));
    }
    return ( 
        <div className='mv4 ml2 ba w-20 paperPattern'>
            <div className='minHeight'>
                <h5 className='f4 mb0'>Ingredient List</h5>
                <hr className='w-80 b--black mv0'/> 
                <ul className='tl mr3'>
                    {dataIngredient.map((ing, i) => {
                        return (
                        <li key={i} onClick={deleteListAfterClick}>
                            {ing}
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div className='center pa2 pb3'>
                <input  value={inputValue} onChange={handleInputChange} onKeyDown={addListAfterEnter} className='w-60 ml3' type='text' placeholder='ingredient'/>
                <button  onClick={addListAfterClick} className='w-30 grow link br1 add-bttn'>Add</button>
            </div>
        </div>
    );
}

export default IngredientList;
