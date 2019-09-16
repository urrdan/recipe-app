import React from 'react';
import {Consumer} from './context'

const Meal = () => {
    return ( 
        <div className='meal-recipe-cont bg-dark'>
        <Consumer>
            {val=> {

                var a=val.state.meal

                let subInstructions1= ''
                let subInstructions2= ''
                
                if(a.strInstructions){
                    subInstructions1=a.strInstructions.slice(0,300)
                    subInstructions2=a.strInstructions.slice(300)
                }  
                //console.log(a)
                if(a.strYoutube){var vi=a.strYoutube.replace('watch?v=','embed/')}else{ vi=''}
                //console.log(vi)
                const ingredients=[]
                let numb = 0
                while(numb>=0){
                    numb++
                    if(a['strIngredient'+numb]){
                        if(ingredients.includes(a['strIngredient'+numb])){}else{ingredients.push( a['strIngredient'+numb] )}
                        
                    }else{numb= -1}
                }


                return (
                    <div className='meal-recipe p-2 text-light'>
                        <section>                   
                            <h5 className=''>{a.strMeal}</h5>
                            <h6 className='lighted text-center'>{a.strCategory}/{a.strArea}</h6>
                        </section>

                        <img className='' src={a.strMealThumb} alt='.'></img>

                        <section>
                            <h5  className=' ' >Ingredients</h5>
                            <ul className='px-3 lighted'>{ingredients.map(item=><li className='mx-1' key={item}><span className='bullet'>-</span>{item}</li>)}</ul>
                        </section>

                        <section>
                            <h5 className=''>Recipe</h5>

                            <div className='lighted instructions d-sm-none'>
                                <span>{/* a.str */subInstructions1}</span>
                                <span className='hidden hidden-p collapse '>{subInstructions2}<br/></span>
                                <span className='shower' data-target='.hidden'  data-toggle='collapse'>...more</span>
                                <div className='hidden hidden-coverer collapse'>Cover</div>
                            </div>

                            <p className='lighted instructions d-none d-sm-block'>{a.strInstructions}</p>

                        </section>

                        <section>                   
                            <h5>Watch Video</h5>
                            <div className='video'><h5>NO VIDEO</h5><iframe src={vi} title='wewe'frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>
                        </section>
                    </div>
                )
            }}
        </Consumer>
        </div>
     );
}
 
export default Meal;