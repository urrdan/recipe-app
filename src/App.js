import React from 'react';
import './App.css';
import Category from './Category'
import Meal from './Meal'
import Home from './Home'
import {Route, NavLink} from 'react-router-dom'

class App extends React.Component{

  render(){  
    return (
      <div className="App text-light h-100">

        <nav className='navbar navbar-expand-sm bg-info navbar-dark  justify-content-between p-2 pb-sm-5'>
          <NavLink to='/' className='navbar-brand'>Recipe</NavLink>
          <button className='navbar-toggler' data-toggle='collapse' data-target='#menu'><span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse justify-content-end' id='menu'>
            <ul className='navbar-nav'>
              <li className='nav-link  '>Categories</li>
              <li className='nav-link  '>Search</li>
              <li className='nav-link '>All Meals</li>
            </ul>
          </div>
        </nav>
        
        <Route path='/category' component={Category}/>
        <Route path='/meal' component={Meal}/>
        <Route exact path='/' component={Home}/>

      </div>
    
  )}}

      

export default App;
