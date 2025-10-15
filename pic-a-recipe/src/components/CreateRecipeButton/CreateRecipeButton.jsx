import './CreateRecipeButton.css';

const CreateRecipeButton = ({dataIngredient}) => {
    const KEY = import.meta.env.VITE_KEY;
    const ingredients = dataIngredient.join(',');

    const handleButtonClick = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1&ignorePantry=true&apiKey=${KEY}`)
            const data = await response.json();
            console.log('API Response:', data, 'ingredients:', ingredients);
        } catch(error) {
            console.log('Error calling the API:', error);
        }
    }
    return (
        <div className='h-20'>
            <button onClick={handleButtonClick} className='button-84 grow link'>Create Recipes</button>
        </div>
    );
}

export default CreateRecipeButton;