(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.254db709.png"},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=a(7),o=a(8),i=a(10),m=a(9),u=a(11),p=(a(28),a(12)),h=r.a.createContext(),d=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={categories:[],catDescription:[],category:[],allmeals:[],meal:{},search:""},e.category=e.category.bind(Object(p.a)(e)),e.Meal=e.Meal.bind(Object(p.a)(e)),e.search=e.search.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"category",value:function(e,t){var a=this;this.setState({catDescription:t}),fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then(function(e){return e.json()}).then(function(e){return a.setState({category:e.meals})})}},{key:"Meal",value:function(e){var t=this;fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({meal:e.meals[0]})})}},{key:"search",value:function(e){e.persist(),this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;console.log("am mounted");var t=[];fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(e){return e.json()}).then(function(t){return e.setState({categories:t.categories}),t.categories.map(function(e){return e.strCategory})}).then(function(e){return e.forEach(function(e){return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then(function(e){return e.json()}).then(function(e){return e.meals.forEach(function(e){return t.push(e)})})}),t}).then(function(t){return e.setState({allmeals:t})})}},{key:"componentDidUpdate",value:function(){console.log("am updated")}},{key:"render",value:function(){return r.a.createElement(h.Provider,{value:{state:this.state,category:this.category,Meal:this.Meal,search:this.search}},this.props.children)}}]),t}(r.a.Component),E=h.Consumer,b=a(2),g=function(e){return r.a.createElement("div",{className:"categorymeals"},e.mealslist.map(function(t){return r.a.createElement("div",{className:"categorymeal text-center",key:t.idMeal,onClick:e.Meal.bind(void 0,t.strMeal)},r.a.createElement(b.b,{to:"/meal"},r.a.createElement("img",{src:t.strMealThumb,alt:"wrong",className:""})),r.a.createElement("h4",{className:" my-2"},t.strMeal))}))},f=function(){return r.a.createElement(E,null,function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"cat-des text-dark text-center my-5"},r.a.createElement("h3",null,e.state.catDescription.strCategory),r.a.createElement("p",{className:""},e.state.catDescription.strCategoryDescription)),r.a.createElement(g,{mealslist:e.state.category,Meal:e.Meal}))})},v=function(){return r.a.createElement("div",{className:"meal-recipe-cont bg-dark"},r.a.createElement(E,null,function(e){var t=e.state.meal,a="",n="";if(t.strInstructions&&(a=t.strInstructions.slice(0,300),n=t.strInstructions.slice(300)),t.strYoutube)var l=t.strYoutube.replace("watch?v=","embed/");else l="";for(var c=[],s=0;s>=0;)t["strIngredient"+ ++s]?c.includes(t["strIngredient"+s])||c.push(t["strIngredient"+s]):s=-1;return r.a.createElement("div",{className:"meal-recipe p-2 text-light"},r.a.createElement("section",null,r.a.createElement("h5",{className:""},t.strMeal),r.a.createElement("h6",{className:"lighted text-center"},t.strCategory,"/",t.strArea)),r.a.createElement("img",{className:"",src:t.strMealThumb,alt:"."}),r.a.createElement("section",null,r.a.createElement("h5",{className:" "},"Ingredients"),r.a.createElement("ul",{className:"px-3 lighted"},c.map(function(e){return r.a.createElement("li",{className:"mx-1",key:e},r.a.createElement("span",{className:"bullet"},"-"),e)}))),r.a.createElement("section",null,r.a.createElement("h5",{className:""},"Recipe"),r.a.createElement("div",{className:"lighted instructions d-sm-none"},r.a.createElement("span",null,a),r.a.createElement("span",{className:"hidden hidden-p collapse "},n,r.a.createElement("br",null)),r.a.createElement("span",{className:"shower","data-target":".hidden","data-toggle":"collapse"},"...more"),r.a.createElement("div",{className:"hidden hidden-coverer collapse"},"Cover")),r.a.createElement("p",{className:"lighted instructions d-none d-sm-block"},t.strInstructions)),r.a.createElement("section",null,r.a.createElement("h5",null,"Watch Video"),r.a.createElement("div",{className:"video"},r.a.createElement("h5",null,"NO VIDEO"),r.a.createElement("iframe",{src:l,title:"wewe",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})," ")))}))},y=function(){return r.a.createElement(E,null,function(e){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 "},r.a.createElement("input",{className:"border-0 px-3",type:"text",placeholder:"Search Meal",onChange:function(t){e.search(t)}}),r.a.createElement(b.b,{to:"/meal"},r.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:e.Meal.bind(void 0,e.state.search)},"Go \u2192 "))),r.a.createElement("p",{className:"intro-line"},'"Master the secret to making meals all around the globe in few simple steps" '),r.a.createElement("h3",{className:"mb-5"},"Categories"),r.a.createElement("div",{className:"categories"},e.state.categories.map(function(t){return r.a.createElement(b.b,{to:"/category",key:t.idCategory},r.a.createElement("div",{className:"category d-flex  justify-content-between align-items-center bg-light ",onClick:e.category.bind(void 0,t.strCategory,t)},r.a.createElement("img",{className:"",src:t.strCategoryThumb,alt:"wrong"}),r.a.createElement("p",{className:" category-name"},t.strCategory),r.a.createElement("span",{className:""})))})))})},N=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"About"),r.a.createElement("p",null,"this is all thanks to https://www.themealdb.com/ for letting me use their api to create this beautiful application. All resources belong to aforemension party used within the limites of rights granted"))},w=function(){return r.a.createElement(E,null,function(e){return r.a.createElement("div",{className:"Allmeals"},r.a.createElement("h3",null,"All Meals"),r.a.createElement(g,{mealslist:e.state.allmeals,Meal:e.Meal}))})},j=a(6),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App  h-100"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark  justify-content-between  "},r.a.createElement(b.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:a(34),alt:""})),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"menu"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(b.b,{to:"/"},r.a.createElement("li",{className:"nav-link  "},"Home")),r.a.createElement(b.b,{to:"allmeals"},r.a.createElement("li",{className:"nav-link "},"All Meals")),r.a.createElement(b.b,{to:"about"},r.a.createElement("li",{className:"nav-link  "},"About"))))),r.a.createElement("div",{className:"cont"},r.a.createElement(j.a,{path:"/category",component:f}),r.a.createElement(j.a,{path:"/meal",component:v}),r.a.createElement(j.a,{path:"/about",component:N}),r.a.createElement(j.a,{path:"/allmeals",component:w}),r.a.createElement(j.a,{exact:!0,path:"/",component:y})),r.a.createElement("footer",null,r.a.createElement("h3",null,"Urrdan"),r.a.createElement("p",null," copyright \xa9 2019")))}}]),t}(r.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),O=Object(j.e)(M);c.a.render(r.a.createElement(d,null,r.a.createElement(b.a,{basename:"recipe-app"},r.a.createElement(O,null,r.a.createElement(k,null)))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.37f1c0d9.chunk.js.map