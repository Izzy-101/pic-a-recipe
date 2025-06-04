import {useEffect} from 'react';
import './IngredientList.css';

const IngredientList = ({dataIngredient}) => {
    let ul = document.querySelector("ul");

    const createInitialList = () => {
        dataIngredient.map(ing => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(ing + " "));
            ul.appendChild(li);
        });
    }
    //run createInitialList when dataIngredient is updated 
    useEffect(() =>{
        createInitialList();
    },[dataIngredient]);

    return ( 
        <div className='mv4 ml2 ba w-20 paperPattern'>
            <div className='length'>
                <h5 className='f4 mb0'>Ingredient List</h5>
                <hr className='w-80 b--black mv0'/> 
                <ul className='tl mr3'>
                    {/* list is created here */}
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
