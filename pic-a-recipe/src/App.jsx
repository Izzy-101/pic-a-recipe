import Navigation from './components/Navigation/Navigation.jsx';
import ImageLink from './components/ImageLink/ImageLink.jsx';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import CreateRecipeButton from './components/CreateRecipeButton/CreateRecipeButton.jsx';
import FoodImage from './components/FoodImage/FoodImage.jsx';

import {useState, useEffect} from 'react';

import './App.css';
import 'tachyons';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [dataIngredient, setDataIng] = useState([]);
  
  return (
    <div className="App">
      <Navigation/>
      <div className='container1'>
        <div className='container2'>
          <CreateRecipeButton/>        
          <ImageLink setImgUrl={setImgUrl} imgUrl={imgUrl} setDataIng={setDataIng} dataIngredient={dataIngredient}/>
        </div>
        <div className='size-shift'>
          <IngredientList dataIngredient={dataIngredient}/>
        </div>
        <FoodImage className='food-image' imgUrl={imgUrl} />
      </div>
    </div>
  )
}

export default App
