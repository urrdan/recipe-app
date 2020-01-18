import React from 'react';
import {NavLink} from 'react-router-dom'

const MealsList = (prop) => {
    return ( 
        <div className='Categorymeals'>
            {
                prop.mealslist.map(item=>
                    <div className='categorymeal text-center' key={item.idMeal}  onClick={prop.Meal.bind(this,item.strMeal)}>
                        <NavLink to='/meal'><img src={item.strMealThumb} alt='wrong' className=''></img></NavLink>
                        <h4 className=' my-2'>{item.strMeal}</h4>
                    </div>                        
                )
            }
        </div>
     );
}
 
export default MealsList;