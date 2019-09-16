(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.254db709.png"},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),s=a(10),o=a(11),m=a(13),i=a(12),u=a(14),p=(a(28),a(7)),h=l.a.createContext(),d=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).state={categories:[],catDescription:[],category:[],allmeals:[],meal:{},search:""},e.category=e.category.bind(Object(p.a)(e)),e.Meal=e.Meal.bind(Object(p.a)(e)),e.search=e.search.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"category",value:function(e,t){var a=this;this.setState({catDescription:t}),fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then(function(e){return e.json()}).then(function(e){return a.setState({category:e.meals})})}},{key:"Meal",value:function(e){var t=this;fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({meal:e.meals[0]})})}},{key:"search",value:function(e){e.persist(),this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;console.log("am mounted");var t=[];fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(e){return e.json()}).then(function(t){return e.setState({categories:t.categories}),t.categories.map(function(e){return e.strCategory})}).then(function(e){return e.forEach(function(e){return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then(function(e){return e.json()}).then(function(e){return e.meals.forEach(function(e){return t.push(e)})})}),t}).then(function(t){return e.setState({allmeals:t})})}},{key:"componentDidUpdate",value:function(){console.log("am updated")}},{key:"render",value:function(){return l.a.createElement(h.Provider,{value:{state:this.state,category:this.category,Meal:this.Meal,search:this.search}},this.props.children)}}]),t}(l.a.Component),E=h.Consumer,g=a(3),b=function(e){return l.a.createElement("div",{className:"categorymeals"},e.mealslist.map(function(t){return l.a.createElement("div",{className:"categorymeal text-center",key:t.idMeal,onClick:e.Meal.bind(void 0,t.strMeal)},l.a.createElement(g.b,{to:"/meal"},l.a.createElement("img",{src:t.strMealThumb,alt:"wrong",className:""})),l.a.createElement("h4",{className:" my-2"},t.strMeal))}))},f=function(){return l.a.createElement(E,null,function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"cat-des text-dark text-center my-5"},l.a.createElement("h3",null,e.state.catDescription.strCategory),l.a.createElement("p",{className:""},e.state.catDescription.strCategoryDescription)),l.a.createElement(b,{mealslist:e.state.category,Meal:e.Meal}))})},v=function(){return l.a.createElement("div",{className:"meal-recipe-cont bg-dark"},l.a.createElement(E,null,function(e){var t=e.state.meal,a="",n="";if(t.strInstructions&&(a=t.strInstructions.slice(0,300),n=t.strInstructions.slice(300)),t.strYoutube)var r=t.strYoutube.replace("watch?v=","embed/");else r="";for(var c=[],s=0;s>=0;)t["strIngredient"+ ++s]?c.includes(t["strIngredient"+s])||c.push(t["strIngredient"+s]):s=-1;return l.a.createElement("div",{className:"meal-recipe p-2 text-light"},l.a.createElement("section",null,l.a.createElement("h5",{className:""},t.strMeal),l.a.createElement("h6",{className:"lighted text-center"},t.strCategory,"/",t.strArea)),l.a.createElement("img",{className:"",src:t.strMealThumb,alt:"."}),l.a.createElement("section",null,l.a.createElement("h5",{className:" "},"Ingredients"),l.a.createElement("ul",{className:"px-3 lighted"},c.map(function(e){return l.a.createElement("li",{className:"mx-1",key:e},l.a.createElement("span",{className:"bullet",style:{color:"green"}},"\u2666"),e)}))),l.a.createElement("section",null,l.a.createElement("h5",{className:""},"Recipe"),l.a.createElement("div",{className:"lighted instructions d-sm-none"},l.a.createElement("span",null,a),l.a.createElement("span",{className:"hidden hidden-p collapse "},n,l.a.createElement("br",null)),l.a.createElement("span",{className:"shower","data-target":".hidden","data-toggle":"collapse"},"...more"),l.a.createElement("div",{className:"hidden hidden-coverer collapse"},"Cover")),l.a.createElement("p",{className:"lighted instructions d-none d-sm-block"},t.strInstructions)),l.a.createElement("section",null,l.a.createElement("h5",null,"Watch Video"),l.a.createElement("div",{className:"video"},l.a.createElement("h5",null,"NO VIDEO"),l.a.createElement("iframe",{src:r,title:"wewe",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})," ")))}))},y=function(){return l.a.createElement(E,null,function(e){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 "},l.a.createElement("input",{className:"border-0 px-3",type:"text",placeholder:"Search Meal",onChange:function(t){e.search(t)}}),l.a.createElement(g.b,{to:"/meal"},l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:e.Meal.bind(void 0,e.state.search)},"Go \u2192 "))),l.a.createElement("p",{className:"intro-line"},'"Master the secret to making meals all around the globe in few simple steps" '),l.a.createElement("h3",{className:"mb-5"},"Categories"),l.a.createElement("div",{className:"categories"},e.state.categories.map(function(t){return l.a.createElement(g.b,{to:"/category",key:t.idCategory},l.a.createElement("div",{className:"category d-flex  justify-content-between align-items-center bg-light ",onClick:e.category.bind(void 0,t.strCategory,t)},l.a.createElement("img",{className:"",src:t.strCategoryThumb,alt:"wrong"}),l.a.createElement("p",{className:" category-name"},t.strCategory),l.a.createElement("span",{className:""})))})))})},N=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"this is all thanks to https://www.themealdb.com/ for letting me use their api to create this beautiful application. All resources belong to aforemension party used within the limites of rights granted"))},w=function(){return l.a.createElement(E,null,function(e){return l.a.createElement("div",{className:"Allmeals"},l.a.createElement("h3",null,"All Meals"),l.a.createElement(b,{mealslist:e.state.allmeals,Meal:e.Meal}))})},j=a(6),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App  h-100"},l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark  justify-content-between  "},l.a.createElement(g.b,{to:"/",className:"navbar-brand"},l.a.createElement("img",{src:a(34),alt:""})),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"menu"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(g.b,{to:"/"},l.a.createElement("li",{className:"nav-link  "},"Home")),l.a.createElement(g.b,{to:"allmeals"},l.a.createElement("li",{className:"nav-link "},"All Meals")),l.a.createElement(g.b,{to:"about"},l.a.createElement("li",{className:"nav-link  "},"About"))))),l.a.createElement("div",{className:"cont"},l.a.createElement(j.a,{path:"/category",component:f}),l.a.createElement(j.a,{path:"/meal",component:v}),l.a.createElement(j.a,{path:"/about",component:N}),l.a.createElement(j.a,{path:"/allmeals",component:w}),l.a.createElement(j.a,{exact:!0,path:"/",component:y})),l.a.createElement("footer",null,l.a.createElement("h3",null,"Urrdan"),l.a.createElement("p",null," copyright \xa9 2019")))}}]),t}(l.a.Component);c.a.render(l.a.createElement(d,null,l.a.createElement(g.a,{basename:"recipe-app"},l.a.createElement(k,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ea55f24f.chunk.js.map