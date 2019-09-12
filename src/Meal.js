import React from 'react';
import {Consumer} from './context'

const Meal = () => {
    return ( 
        <div className='meal-cont bg-dark'>
        <Consumer>
            {val=> {
                var a=val.state.meal  
                console.log(a)
                if(a.strYoutube){var vi=a.strYoutube.replace('watch?v=','embed/')}else{ vi=''}
                console.log(vi)
                const ingredients=[]
                let numb = 0
                while(numb>=0){
                    numb++
                    if(eval('a.strIngredient'+numb)){
                        if(ingredients.includes(eval('a.strIngredient'+numb))){}else{ingredients.push( eval('a.strIngredient'+numb) )}
                        
                    }else{numb= -1}
                }


                return <div className='meal p-2'>
                    <h5 className='text-center '>{a.strMeal}</h5>
                    <h6 className='lighted text-center'>{a.strCategory}/{a.strArea}</h6>
                    <img className='w-100 my-4 ' src={a.strMealThumb} alt='wrong'></img>
                    <h5  className=' ' >Ingredients</h5>
                    <ul className='px-3 lighted'>{ingredients.map(item=><li className=' d-inline mx-1' key={item}>-{item}</li>)}</ul>
                    <h5 className=''>Recipe</h5>
                    <p className='lighted instructions'>{a.strInstructions}</p>
                    <h5>Watch Video</h5>
                    <div className='video'><h5>NO VIDEO</h5><iframe src={vi} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>
                </div>
            }}
        </Consumer>
        </div>
     );
}
 
export default Meal;