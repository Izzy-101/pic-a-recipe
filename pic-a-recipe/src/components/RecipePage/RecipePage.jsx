import React from 'react';
import './RecipePage.css';
import parse from 'html-react-parser';

const RecipePage = React.forwardRef(({recipe, number}, ref) => {
  
  return (
    <div className='page page-shaddow' ref={ref}> 
      {/* HEADER */}
      <div className='food-header'>
        {/* TITLE, SUMMARY, DETAILS */}
        <div>
          <h2 className='mb0 mt2 tl recipe-title'  id='long'>{recipe.title}</h2>
          <p className='mv2 tl lh-copy paragraph'>{parse(recipe.summary.join(' '))}</p>
          <div className='recipe-details'>
            <span>
              <span>Prep: </span>
              <span>{recipe.info.prep}</span>
            </span>
            <span>
              <span>Total: </span>
              <span>{recipe.info.total}</span>
            </span>
            <span>            
              <span>Cook: </span>
              <span>{recipe.info.cook}</span>
            </span>
            <span>
              <span>Servings: </span>
              <span>{recipe.info.serving}</span>
            </span>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <div className='mh2 mv1'>
            <img src={recipe.image} />
          </div>
        </div>
      </div>
      {/* INGREDIENTS */}
      <div>
        <h3 className='mv2 tl sub-title'>Ingredients</h3>
        <ul className='tl mv2 ingredients'>
            <li>{...recipe.ingredients.ing}</li> 
        </ul>
      </div>
      {/* INSTRUCTIONS */}
      <div>
        <h3 className='mv2 tl sub-title'>Instructions</h3>
        <div className='tl mv2 instructions'>
          {parse(recipe.instructions.steps)}
        </div>
      </div>
      {/* NUTRITION */}
      <div className='nutrition mr4'>
        <span>
            <span>Calories: </span>
            <span>{recipe.nutrition.calories}</span>
        </span>
        <span>
            <span>Carbohydrates: </span>
            <span>{recipe.nutrition.carbohydrates}</span>
        </span>
        <span>            
            <span>Protein: </span>
            <span>{recipe.nutrition.protein}</span>
        </span>
        <span>
            <span>Fat: </span>
            <span>{recipe.nutrition.fat}</span>
        </span>
        <span>
            <span>Fiber: </span>
            <span>{recipe.nutrition.fiber}</span>
        </span>
        <span>
            <span>Sugar: </span>
            <span>{recipe.nutrition.sugar}</span>
        </span>
    </div>
      {/* FOOTER */}
      <div>
        <div className="page-footer">{number}</div>
      </div>
    </div>
  );
});

export default RecipePage;  