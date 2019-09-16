import React from 'react';
import {Consumer} from './context'
import MealsList from './MealsList';

const AllMeals = () => {
        

    return (
        <Consumer>
                {val=>
                    <div>
                        <h3>All Meals</h3>
                        <MealsList mealslist={val.state.allmeals} Meal={val.Meal}/>
                    </div>
                
                }
        </Consumer>
    )

}
 
export default AllMeals;