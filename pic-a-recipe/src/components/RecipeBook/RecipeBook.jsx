import './RecipeBook.css';
import HTMLFlipBook from 'react-pageflip';
import RecipePage from '../RecipePage/RecipePage';
import CoverPage from '../CoverPage/CoverPage';
import 'tachyons';

const RecipeBook = ({dataRecipe}) => {
    return (
        <div className="center ma4">
            <HTMLFlipBook showCover={true} width={450} height={650} maxShadowOpacity={0.5}>
                <CoverPage title="My Recipe Book"></CoverPage>
                {dataRecipe.map((recipe, i) => {
                    return <RecipePage key={recipe.id} recipe={recipe} number={i+1}>Page text</RecipePage>
                })}
            </HTMLFlipBook>
        </div>
    );
}

export default RecipeBook;