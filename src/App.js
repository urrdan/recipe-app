import React from 'react';
import './styles/App.css';
import CategoryMeals from './components/CategoryMeals'
import MealRecipe from './components/MealRecipe'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import AllMeals from './components/AllMeals'
import {Route} from 'react-router-dom'


class App extends React.Component{

  render(){  
    return (
      <div className="App  h-100">  

        <Navbar/>

        <div className='components-container'>

          <Route path='/category' component={CategoryMeals}/>
          <Route path='/meal' component={MealRecipe}/>
          <Route path='/about' component={About}/>
          <Route path='/allmeals' component={AllMeals}/>
          <Route exact path='/' component={Home}/>

        </div>

        <footer>
          <h3>Mohamed Abdulle</h3>
          <p> copyright &copy; 2019</p>
        </footer>
        
      </div>
    
    )
  }
}

      

export default App;
