import Navigation from './components/Navigation/Navigation.jsx';
import ImageLink from './components/ImageLink/ImageLink.jsx';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import CreateRecipeButton from './components/CreateRecipeButton/CreateRecipeButton.jsx';

import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='container1'>
        <div className='container2'>
          <CreateRecipeButton/>        
          <ImageLink/>
        </div>
        <IngredientList/>
      </div>
      {/*
      <ItemRecognition/>
      <Recipe/>
       */}
    </div>
  )
}

export default App
