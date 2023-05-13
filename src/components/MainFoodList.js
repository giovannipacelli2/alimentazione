import React from 'react'

import FoodCard from './FoodCard';

const MainFoodList = ({ food,changeDose ,removeFood }) => {
  return (
    <div className='food-card-grid'>
        {food.map( (elem, index)=>{

            return(
                <FoodCard key={index} id={elem.id} elem={elem}  changeDose={changeDose} removeFood={removeFood}/>
            );
            } )}
    </div>
  )
}

export default MainFoodList