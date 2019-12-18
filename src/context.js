import React from 'react';

const mycotx= React.createContext()

class Provider extends React.Component {
    constructor(){
        super()
        this.state={
          categories:[],
          catDescription:[],
          category: [],
          allmeals:[],
          meal: {},
          search: ''

        }
        this.category=this.category.bind(this)
        this.Meal=this.Meal.bind(this)
        this.search=this.search.bind(this)
    }
    
    category(x, y){
        this.setState({catDescription: y})
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
        .then(a=> a.json())
        //.then(a=>console.log(a))
        .then(a=>this.setState({category:a.meals}))

    }
    
    Meal(meal){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(a=>a.json())
        .then(a=>this.setState({meal:a.meals[0]}))
        //.then(a=>console.log(a.meals[0]))
    }


    search(e){
        e.persist()
        this.setState({search: e.target.value})
    }


    componentDidMount(){
        console.log('am mounted');
        const liste=[]
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(a=>a.json())
        .then(a=>{this.setState({categories:a.categories}); return a.categories.map((x)=> x.strCategory)})
        //.then(a=>console.log(a))
        .then(a=>{
            a.forEach(z=>
                fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)
                .then(a=>a.json())
                .then(a=>a.meals.forEach(x=>liste.push(x)))
            )
            return liste
        })
        .then(a=>this.setState({allmeals: a}))

        
        //this.category('chicken ')
        //this.Meal('pasta')
    }
    
    componentDidUpdate(){
        console.log('am updated')

    }
    
    render() { 
        return ( 
            <mycotx.Provider value={ {state:this.state, category:this.category,  Meal:this.Meal, search:this.search} }>
                {this.props.children}
            </mycotx.Provider>
        );
    }
}
 
const Consumer=mycotx.Consumer
export {Provider , Consumer} ;