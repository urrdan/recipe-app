import React from 'react';
import './App.css';
import CategoryMeals from './CategoryMeals'
import MealRecipe from './MealRecipe'
import Home from './Home'
import About from './About'
import AllMeals from './AllMeals'
import {Route, NavLink} from 'react-router-dom'


class App extends React.Component{

  render(){  
    return (
      <div className="App  h-100">

        <nav className='navbar navbar-expand-sm bg-info navbar-dark  justify-content-between  '>
          <NavLink to='/' className='navbar-brand'><img src={require('./logo.png')} alt=''/></NavLink>
          <button className='navbar-toggler' data-toggle='collapse' data-target='#menu'><span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse justify-content-end' id='menu'>
            <ul className='navbar-nav'>
            <NavLink to='/'><li className='nav-link  '>Home</li></NavLink>
            <NavLink to='allmeals'><li className='nav-link '>All Meals</li></NavLink>
            <NavLink to='about'><li className='nav-link  '>About</li></NavLink>
            </ul>
          </div>
        </nav>

        <div className='cont w-100'>
          <Route path='/category' component={CategoryMeals}/>
          <Route path='/meal' component={MealRecipe}/>
          <Route path='/about' component={About}/>
          <Route path='/allmeals' component={AllMeals}/>
          <Route exact path='/' component={Home}/>
        </div>
        <footer>
          <h3>Urrdan</h3>
          <p> copyright &copy; 2019</p>
        </footer>
      </div>
    
  )}}

      

export default App;
