import React from 'react';
import {Consumer} from '../context'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return ( 
        <Consumer>
            {val=>
                <div className='Home'>
                    <div className='searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 ' >
                        <input className='border-0 px-3' type='text' placeholder='Search Meal' onChange={function(e){val.search(e)}}/>
                        <NavLink to='/meal'><button className='btn btn-sm btn-primary' onClick={val.Meal.bind(this,val.state.search)}>Go &rarr; </button></NavLink>
                    </div>
                    <p className='intro-line'>"Master the secret to making dishes all around the globe in few simple steps" </p>
                    <h3 className='mb-5'>Categories</h3>
                    <div className='categories'>{
                        val.state.categories.map(item=>
                            <NavLink to='/category' key={item.idCategory}>
                                <div className='category d-flex  justify-content-between align-items-center bg-light '  onClick={val.category.bind(this,item.strCategory,item)}>
                                    <img className='' src={item.strCategoryThumb} alt='wrong'></img>
                                    <p className=' category-name'>{item.strCategory}</p>
                                    <span className=''></span>
                                </div>
                            </NavLink>
                        )
                    }
                    </div>
                </div>
            }
        </Consumer>
    );
}
 
export default Home;