import React from 'react';

const Card = ({ plat }) => {

    return (
        <div className='card'>
            <div className="p1">
                <h2>{plat.strMeal}</h2>
                <p>Origin : {plat.strArea}</p>
                <img src={plat.strMealThumb} alt="plat" />
            </div>
            <div className="p2">
                <p>{plat.strInstructions}</p>
            </div>

        </div>
    );
};

export default Card;