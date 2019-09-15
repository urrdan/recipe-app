(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),Meal=function Meal(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"meal-cont bg-dark"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__.a,null,function(val){var a=val.state.meal,subInstructions1="",subInstructions2="";if(a.strInstructions&&(subInstructions1=a.strInstructions.slice(0,300),subInstructions2=a.strInstructions.slice(300)),a.strYoutube)var vi=a.strYoutube.replace("watch?v=","embed/");else vi="";for(var ingredients=[],numb=0;numb>=0;)numb++,eval("a.strIngredient"+numb)?ingredients.includes(eval("a.strIngredient"+numb))||ingredients.push(eval("a.strIngredient"+numb)):numb=-1;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"meal p-2 text-light"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:""},a.strMeal),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{className:"lighted text-center"},a.strCategory,"/",a.strArea)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"",src:a.strMealThumb,alt:"wrong"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:" "},"Ingredients"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"px-3 lighted"},ingredients.map(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"mx-1",key:e},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"\u2666"),e)}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:""},"Recipe"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lighted instructions d-sm-none"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,subInstructions1),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hidden hidden-p collapse "},subInstructions2,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"shower","data-target":".hidden","data-toggle":"collapse"},"...more"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden hidden-underlay collapse show"},"underlay"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidder-coverer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"data-target":".hidden","data-toggle":"collapse"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",null,"hid"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden hidden-coverer collapse show"},"Cover")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"lighted instructions d-none d-sm-block"},a.strInstructions)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,"Watch Video"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"video"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,"NO VIDEO"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",{src:vi,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})," ")))}))};__webpack_exports__.a=Meal},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.254db709.png"},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),_=a(11),s=a(12),i=a(14),o=a(13),m=a(15),u=(a(30),a(6)),E=a(5),d=function(){return r.a.createElement(u.a,null,function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"cat-des text-dark text-center my-5"},r.a.createElement("h3",null,e.state.catDescription.strCategory),r.a.createElement("p",{className:""},e.state.catDescription.strCategoryDescription)),r.a.createElement("div",{className:"categorymeals"},e.state.category.map(function(t){return r.a.createElement("div",{className:"categorymeal text-center",key:t.idMeal,onClick:e.Meal.bind(void 0,t.strMeal)},r.a.createElement(E.b,{to:"/meal"},r.a.createElement("img",{src:t.strMealThumb,alt:"wrong",className:""})),r.a.createElement("h4",{className:" my-2"},t.strMeal))})))})},p=a(24),h=function(){return r.a.createElement(u.a,null,function(e){return r.a.createElement("div",{className:"Categories  text-center "},r.a.createElement("div",{className:"searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 "},r.a.createElement("input",{className:"border-0 px-3",type:"text",placeholder:"Search Meal",onChange:function(t){e.search(t)}}),r.a.createElement(E.b,{to:"/meal"},r.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:e.Meal.bind(void 0,e.state.search)},"Go \u2192 "))),r.a.createElement("h3",{className:"mb-5"},"Categories"),r.a.createElement("div",{className:"category-cont"},e.state.categories.map(function(t){return r.a.createElement(E.b,{to:"/category",key:t.idCategory},r.a.createElement("div",{className:"category d-flex  justify-content-between align-items-center bg-light ",onClick:e.category.bind(void 0,t.strCategory,t)},r.a.createElement("img",{className:"",src:t.strCategoryThumb,alt:"wrong"}),r.a.createElement("p",{className:" category-name"},t.strCategory),r.a.createElement("span",{className:""})))})))})},M=a(7),O=function(e){function t(){return Object(_.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App  h-100"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark  justify-content-between p-1 "},r.a.createElement(E.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:a(36)})),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"menu"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-link  "},"Categories"),r.a.createElement("li",{className:"nav-link  "},"About"),r.a.createElement("li",{className:"nav-link "},"All Meals")))),r.a.createElement("div",{className:"cont"},r.a.createElement(M.a,{path:"/category",component:d}),r.a.createElement(M.a,{path:"/meal",component:p.a}),r.a.createElement(M.a,{exact:!0,path:"/",component:h})),r.a.createElement("footer",null,r.a.createElement("h3",null,"Urrdan"),r.a.createElement("p",null," copyright \xa9 2019")))}}]),t}(r.a.Component);l.a.render(r.a.createElement(u.b,null,r.a.createElement(E.a,{basename:"recipe-app"},r.a.createElement(O,null))),document.getElementById("root"))},6:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"a",function(){return E});var n=a(11),r=a(12),c=a(14),l=a(13),_=a(8),s=a(15),i=a(0),o=a.n(i),m=o.a.createContext(),u=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={categories:[],catDescription:[],category:[],meal:{},search:""},e.category=e.category.bind(Object(_.a)(e)),e.Meal=e.Meal.bind(Object(_.a)(e)),e.search=e.search.bind(Object(_.a)(e)),e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"category",value:function(e,t){var a=this;this.setState({catDescription:t}),fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then(function(e){return e.json()}).then(function(e){return a.setState({category:e.meals})})}},{key:"Meal",value:function(e){var t=this;fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({meal:e.meals[0]})})}},{key:"search",value:function(e){e.persist(),this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;console.log("am mounted"),fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(e){return e.json()}).then(function(t){return e.setState({categories:t.categories})})}},{key:"componentDidUpdate",value:function(){console.log("am updated")}},{key:"render",value:function(){return o.a.createElement(m.Provider,{value:{state:this.state,category:this.category,Meal:this.Meal,search:this.search}},this.props.children)}}]),t}(o.a.Component),E=m.Consumer}},[[25,1,2]]]);
//# sourceMappingURL=main.71c29e74.chunk.js.map