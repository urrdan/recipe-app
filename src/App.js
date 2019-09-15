import React from 'react';
import './App.css';
import CategoryMeals from './CategoryMeals'
import Meal from './Meal'
import Home from './Home'
import {Route, NavLink} from 'react-router-dom'

class App extends React.Component{

  render(){  
    return (
      <div className="App  h-100">

        <nav className='navbar navbar-expand-sm bg-info navbar-dark  justify-content-between p-1 '>
          <NavLink to='/' className='navbar-brand'><img src={require('./logo.png')}/></NavLink>
          <button className='navbar-toggler' data-toggle='collapse' data-target='#menu'><span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse justify-content-end' id='menu'>
            <ul className='navbar-nav'>
              <li className='nav-link  '>Categories</li>
              <li className='nav-link  '>About</li>
              <li className='nav-link '>All Meals</li>
            </ul>
          </div>
        </nav>

        <div className='cont'>
          <Route path='/category' component={CategoryMeals}/>
          <Route path='/meal' component={Meal}/>
          <Route exact path='/' component={Home}/>
        </div>
        <footer>
          <h3>Urrdan</h3>
          <p> copyright &copy; 2019</p>
        </footer>
      </div>
    
  )}}

      

export default App;
