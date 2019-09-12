import React from 'react';
import {Consumer} from './context'
import {NavLink} from 'react-router-dom'

const Category = () => {
    return ( 
        <Consumer>
                {val=>{

                    return (<div className='text-dark text-center my-5'><h3>{val.state.catDescription.strCategory}</h3><p>{val.state.catDescription.strCategoryDescription}</p></div>,
                    <div className='categorymeals'>
                    {val.state.category.map(item=>
                        <div className='categorymeal card' key={item.idMeal}  onClick={val.Meal.bind(this,item.strMeal)}>
                            <NavLink to='/meal'><img src={item.strMealThumb} alt='wrong' className='w-100 .card-body'></img></NavLink>
                            <h4 className='card-body text-info'>{item.strMeal}</h4>
                        </div>
                        
                    )}
                    </div>
                    )
                
                }}
            </Consumer>
            
        
     );
}
 
export default Category;