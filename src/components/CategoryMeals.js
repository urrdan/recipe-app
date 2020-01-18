import React from 'react';
import {Consumer} from '../context'
import MealsList from './MealsList'

const CategoryMeals = () => {
    return ( 
        <Consumer>
                {val=>{
                    return (
                    <div>
                        <div className='category-description text-dark text-center my-5'>
                            <h3>{val.state.catDescription.strCategory}</h3>
                            <p className=''>{val.state.catDescription.strCategoryDescription}</p>
                        </div>
                        <MealsList mealslist={val.state.category} Meal={val.Meal}/>
                    </div>
                    )
                
                }}
            </Consumer>
            
        
     );
}
 
export default CategoryMeals;