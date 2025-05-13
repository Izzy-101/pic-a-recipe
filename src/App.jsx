import Navigation from './components/Navigation/Navigation.jsx';
import ImageLink from './components/ImageLink/ImageLink.jsx';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ImageLink />
      <IngredientList />
      {/* 
      <ItemRecognition />
      <Recipe />
      <CreateButton /> */}
    </div>
  )
}

export default App
