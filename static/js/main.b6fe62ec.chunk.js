(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.254db709.png"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),s=(a(29),a(21)),o=a(10);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=r.a.createContext(),p={categories:[],currentCategory:[],currentCategoryMeals:[],category:[],allMeals:[],meal:{},searchedResult:[]},h=function(e,t){switch(t&&t.type){case t.type:return m({},e,Object(o.a)({},t.type,t.value));default:return m({},e)}},d=a(2),E=(a(30),function(e){return r.a.createElement("div",{className:"Categorymeals"},e.mealslist.map(function(t){return r.a.createElement("div",{className:"categorymeal text-center",key:t.idMeal,onClick:function(){return e.Meal(t.strMeal)}},r.a.createElement(d.b,{to:"/meal"},r.a.createElement("img",{src:t.strMealThumb,alt:"wrong",className:""})),r.a.createElement("h4",{className:" my-2"},t.strMeal))}))}),f=function(){var e=Object(n.useContext)(u);return r.a.createElement("div",null,r.a.createElement("h3",{className:"heading"},e.state.currentCategory),r.a.createElement(E,{mealslist:e.state.currentCategoryMeals,Meal:e.actionHandler.meal}))},g=(a(36),function(){var e=Object(n.useContext)(u).state.meal,t="",a="",c="";e.strInstructions&&(t=e.strInstructions.slice(0,300),a=e.strInstructions.slice(300)),c=e.strYoutube?e.strYoutube.replace("watch?v=","embed/"):"";for(var l=[],s=0;s>=0;)e["strIngredient"+ ++s]?l.includes(e["strIngredient"+s])||l.push(e["strIngredient"+s]):s=-1;return r.a.createElement("div",{className:"Meal-recipe-cont bg-dark"},r.a.createElement("div",{className:"Meal-recipe p-2 text-light"},r.a.createElement("section",null,r.a.createElement("h5",{className:""},e.strMeal),r.a.createElement("h6",{className:"lighted text-center"},e.strCategory,"/",e.strArea)),r.a.createElement("img",{className:"",src:e.strMealThumb,alt:"."}),r.a.createElement("section",null,r.a.createElement("h5",{className:" "},"Ingredients"),r.a.createElement("ul",{className:"px-3 lighted"},l.map(function(e){return r.a.createElement("li",{className:"mx-1",key:e},r.a.createElement("span",{className:"bullet"},"-"),e)}))),r.a.createElement("section",null,r.a.createElement("h5",{className:""},"Recipe"),r.a.createElement("div",{className:"lighted instructions d-sm-none"},r.a.createElement("span",null,t),r.a.createElement("span",{className:"hidden hidden-p collapse "},a,r.a.createElement("br",null)),r.a.createElement("span",{className:"shower","data-target":".hidden","data-toggle":"collapse"},"...more"),r.a.createElement("div",{className:"hidden hidden-coverer collapse"},"Cover")),r.a.createElement("p",{className:"lighted instructions d-none d-sm-block"},e.strInstructions)),r.a.createElement("section",null,r.a.createElement("h5",null,"Watch Video"),r.a.createElement("div",{className:"video"},r.a.createElement("h5",null,"NO VIDEO"),r.a.createElement("iframe",{src:c,title:"wewe",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),");")}),b=(a(37),function(e){e.searchOnChange;var t=Object(n.useContext)(u);return r.a.createElement("div",{className:"searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 "},r.a.createElement("div",{className:"search-menu"},r.a.createElement("input",{type:"text",placeholder:"Search Meal",onChange:function(e){return t.actionHandler.search(e,t.state.allMeals)}}),r.a.createElement("ul",{className:"search-result"},t.state.searchedResult.map(function(e){return r.a.createElement("li",{key:e.idMeal,onClick:function(){return t.actionHandler.meal(e.strMeal)}},r.a.createElement(d.b,{to:"/meal"},e.strMeal))}))),r.a.createElement(d.b,{to:"/meal"},r.a.createElement("button",{className:"btn btn-sm btn-primary"},"Go \u2192")))}),v=function(e){var t=e.categoriesList,a=e.categoryOnClick;return r.a.createElement("div",{className:"categories"},t.map(function(e){return r.a.createElement(d.b,{to:"/category",key:e.idCategory},r.a.createElement("div",{className:"category d-flex  justify-content-between align-items-center bg-light ",onClick:function(){return a(e.strCategory)}},r.a.createElement("img",{className:"",src:e.strCategoryThumb,alt:"wrong"}),r.a.createElement("p",{className:" category-name"},e.strCategory),r.a.createElement("span",{className:""})))}))},y=function(){var e=Object(n.useContext)(u);return r.a.createElement("div",{className:"Home"},r.a.createElement(b,null),r.a.createElement("p",{className:"intro-line"},'"Master the secret to making dishes all around the globe in few simple steps"'),r.a.createElement("h3",{className:"heading"},"Categories"),r.a.createElement(v,{categoriesList:e.state.categories,categoryOnClick:e.actionHandler.category}))},N=(a(38),function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h3",null,"About"),r.a.createElement("p",null,"this is all thanks to https://www.themealdb.com/ for letting me use their api to create this beautiful application. All resources belong to aforemension party used within the limites of rights granted"))}),w=function(){var e=Object(n.useContext)(u);return r.a.createElement("div",{className:"Allmeals"},r.a.createElement("h3",{className:"heading"},"All Meals"),r.a.createElement(E,{mealslist:e.state.allMeals,Meal:e.actionHandler.meal}))},O=a(6),j=(a(39),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark  justify-content-between  "},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:a(40),alt:""})),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"menu"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(d.b,{to:"/"},r.a.createElement("li",{className:"nav-link  "},"HOME")),r.a.createElement(d.b,{to:"allmeals"},r.a.createElement("li",{className:"nav-link "},"ALL MEALS")),r.a.createElement(d.b,{to:"about"},r.a.createElement("li",{className:"nav-link  "},"ABOUT")))))}),C=(a(41),function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,"Mohamed Abdulle"),r.a.createElement("p",null," copyright \xa9 2019"))}),M=function(){return r.a.createElement("div",{className:"App h-100"},r.a.createElement(j,null),r.a.createElement("div",{className:"components-container"},r.a.createElement(O.a,{path:"/category",component:f}),r.a.createElement(O.a,{path:"/meal",component:g}),r.a.createElement(O.a,{path:"/about",component:N}),r.a.createElement(O.a,{path:"/allmeals",component:w}),r.a.createElement(O.a,{exact:!0,path:"/",component:y})),r.a.createElement(C,null))},k=a(18),x=a(19),A=a(22),I=a(20),P=a(23),H=function(e){function t(){return Object(k.a)(this,t),Object(A.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(x.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),L=Object(O.e)(H);l.a.render(r.a.createElement(d.a,{basename:"recipe-app"},r.a.createElement(L,null,r.a.createElement(function(e){var t=Object(n.useReducer)(h,p),a=Object(s.a)(t,2),c=a[0],l=a[1],o=function(e,t){return{category:function(a){var n="filter.php?c=".concat(a);t(n).then(function(t){e({type:"currentCategoryMeals",value:t.meals}),e({type:"currentCategory",value:a})})},meal:function(a){var n="search.php?s=".concat(a);t(n).then(function(t){e({type:"meal",value:t.meals[0]})})},searchy:function(a){var n="search.php?s=".concat(a.target.value);t(n).then(function(t){var a=t.meals&&t.meals[0]?t.meals[0]:{};e({type:"meal",value:a})})},search:function(t,a){var n=t.target.value,r=a.filter(function(e){if(e.strMeal.toLowerCase().includes(n.toLowerCase())&&""!==n)return e});e({type:"searchedResult",value:r})}}}(l,function(e){return fetch("https://www.themealdb.com/api/json/v1/1/"+e).then(function(e){return e.json()})});return Object(n.useEffect)(function(){var e=[];fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(e){return e.json()}).then(function(e){return l({type:"categories",value:e.categories}),e.categories.map(function(e){return e.strCategory})}).then(function(t){return t.forEach(function(t){return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(t)).then(function(e){return e.json()}).then(function(t){return t.meals.forEach(function(t){return e.push(t)})})}),e}).then(function(e){return l({type:"allMeals",value:e})})},[]),r.a.createElement(u.Provider,{value:{state:c,actionHandler:o}},e.children)},null,r.a.createElement(M,null)))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b6fe62ec.chunk.js.map