import './CreateRecipeButton.css';
import {useEffect} from 'react';

const CreateRecipeButton = ({dataIngredient, dataRecipe, setDataRecipe}) => {
    const KEY = import.meta.env.VITE_KEY;
    const ingredients = dataIngredient.join(',');

    useEffect(() => {
        console.log('Updated dataRecipe:', dataRecipe);
    }, [dataRecipe]); 

    //fetch recipe by ingredients and setDataRecipe
    const handleButtonClick = async () => {
        try { 
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1&ignorePantry=true&apiKey=${KEY}`)
            const recipes = await response.json();
            const response2 = await fetch(`https://api.spoonacular.com/recipes/${recipes[0].id}/information?includeNutrition=true&apiKey=${KEY}`)
            const recipeData = await response2.json();

            const finalDataRecipe = [];

            finalDataRecipe.push({
                id: recipeData.id,
                title: recipeData.title,
                image: recipeData.image,
                info: {
                    prep: recipeData.preparationMinutes === null ? '' : recipeData.preparationMinutes,
                    total: recipeData.readyInMinutes === null ? '' : recipeData.readyInMinutes,
                    cook: recipeData.cookingMinutes === null ? '' : recipeData.cookingMinutes,
                    serving: recipeData.servings === null ? '' : recipeData.servings
                },
                nutrition: {
                    calories: recipeData.nutrition.nutrients[0].amount,
                    fat: recipeData.nutrition.nutrients[1].amount,
                    carbohydrates: recipeData.nutrition.nutrients[3].amount,
                    sugar: recipeData.nutrition.nutrients[5].amount,
                    protein: recipeData.nutrition.nutrients[10].amount,
                    fiber: recipeData.nutrition.nutrients[18].amount
                },
                ingredients: {
                    ing: recipeData.extendedIngredients.map(ing => {
                        return ing.original;
                    })
                },
                instructions: { 
                    steps: recipeData.instructions === null ? '' : recipeData.instructions
                },
                summary: recipeData.summary
            });
        
            setDataRecipe(finalDataRecipe);
        } catch(error) {
            console.log('Error handleButtonClick:', error);
        }
    }
    return (
        <div className='h-20'>
            <button onClick={handleButtonClick} className='button-84 grow link'>Create Recipes</button>
        </div>
    );
}

export default CreateRecipeButton;