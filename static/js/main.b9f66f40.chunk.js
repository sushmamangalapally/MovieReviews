(this["webpackJsonpwatch-more-films"]=this["webpackJsonpwatch-more-films"]||[]).push([[0],{30:function(e,t,o){},48:function(e,t,o){},74:function(e,t,o){"use strict";o.r(t);var i=o(1),s=o.n(i),n=o(21),a=o.n(n),c=(o(48),o(11)),r=(o(30),o(0));var l=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("nav",{className:"top-nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"nav-wrapper",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12 m10 offset-m1",children:Object(r.jsx)("h4",{className:"header",children:Object(r.jsx)(c.b,{to:"/",children:"Watch More Movies"})})})})})})}),Object(r.jsxs)("ul",{id:"slide-out",className:"sidenav sidenav-fixed",children:[Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/",children:[Object(r.jsx)("i",{class:"material-icons",children:"home"}),"Home"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/search",children:[Object(r.jsx)("i",{class:"material-icons",children:"search"}),"Search"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/favorites",children:[Object(r.jsx)("i",{class:"material-icons",children:"favorite_border"}),"Favorites"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/bookmark",children:[Object(r.jsx)("i",{class:"material-icons",children:"bookmark_border"}),"Bookmark"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/watchlater",children:[Object(r.jsx)("i",{class:"material-icons",children:"playlist_add"})," Watch Later"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(c.b,{to:"/whattowatch",children:[Object(r.jsx)("i",{class:"material-icons",children:"tv"})," What to Watch?"]})})]})]})};var d=function(){return Object(r.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(r.jsx)("div",{className:"text-center p-3",children:"Created by Sushma"})})},v=o(6),h=o(7),j=o(9),u=o(8),p=o(4),m="SEARCH_MOVIE",b="FETCH_MOVIES",f="FETCH_MOVIE",O="LOADING",g="FETCH_POPULAR_MOVIES",x="ADD_TO_FAVORITES",k="ADD_TO_BOOKMARKS",y="ADD_TO_WATCHLIST",w="REMOVE_FROM_FAVORITES",M="REMOVE_FROM_BOOKMARKS",L="REMOVE_FROM_WATCHLIST",N="FETCH_RANDOM_MOVIES",A=o(20),C=o.n(A),S="7107cc88cc38939ff1dc0ecdee74365c",E=function(e){return function(e){C.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(S,"&language=en-US&page=1&include_adult=false")).then((function(t){return console.log(t),e({type:g,payload:t.data.results,loading:!0})})).catch((function(e){return console.log(e)}))}},R=function(){return{type:O}},F=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(v.a)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onChange=function(t){e.props.searchMovie(t.target.value),""===t.target.value&&(e.props.fetchPopularMovies(),e.props.setLoading())},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(h.a)(o,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"jumbotron jumbotron-fluid mt-5 text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("h5",{className:"display-4 mb-3",children:[Object(r.jsx)("i",{className:"fa fa-search"})," Search for a movie..."]}),Object(r.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(r.jsx)("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary btn-bg mt-3",children:"Search"})]})]})})}}]),o}(i.Component),T=Object(p.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:m,payload:e})}},fetchMovies:function(e){return function(t){C.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(S,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return console.log(e),t({type:b,payload:e.data.results,loading:!1})})).catch((function(e){return console.log(e)}))}},setLoading:R,fetchPopularMovies:E})(F),I=o(18),W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8AAABHR0djY2Onp6erq6sKCgq9vb3v7+9XV1f8/PwODg75+fkFBQUbGxvU1NRMTEzm5ua2trZpaWlxcXGhoaFdXV14eHjb29sqKirNzc0VFRXCwsKRkZGKioo1NTUiIiJAQECEhIQsLCyZmZk5OTlBQUE8Rit0AAAEE0lEQVR4nO2d7VqyQBRFxU9CBL8wDX21su7/El+DLKFmmIE5Z06111/m2ZsVojgD1usBAAAAAAAAAADgZxOtp4E7jntvIgeHGhfGE18ic7ci/kz6jkW8mTgX8WVSiLyOHJD5NSlEBi6SQr/HhELEiwmJiA8TGhEPJkQi/CZUIuwmZCLcJnQizCaEIrwmlCKsJqQinCa0IowmxCJ8JtQibCbkIlwm9CJMJgwiPCYcIiwmLCIcJjwiDCZMIvQmXCLkJmwi1CZ8IsQmjCK0JpwipCasIpQmvCKEJswidCbcImQm7CJUJvwiRCYeRIJx6qKvhg+RYOOir4Y7kXj2S0R6a2MRN31VHIpE581dI/kPEPHbBxFpfRCR1gcRaX0QkdYHEWl9EJHWBxFpfRCR1gcRaX0QkdYHEWl9JsFRGJvGxWHUva8VjcHh4WUWBLv7RXPWdn0KgvFjptP2JrJP3qc5x+eGpOjpOvm708y2+xJZ3sxMP+mTVp8jpw9t+9qjD15UHonTLtBktyNPYbu+DuiDB7d7FzxrcuK8MlR59PyIhLUlD81ThsPqyKRVXxe0wZPq3gX/1Dmr2tBtm74uaIOz2t6t1Dn15xlV5xNEmtAG781fWvV1N9Xnpx+RuPZAsuaDblkduWvV1wV9cPXv/KjJiU6VoYd2fR3QB4fJzc7N1J/XvdoheVZebvm6RHm4eXEN9Un/PkcmqjdfjxeN2+N15xrvIBleP9z7mitlf5fx0XJzmibzs8FXkvDQT/LdQPsrA/iG6C2Yuw8i0vogIq0PItL6/rxIvE3ThfEEZPc+kuAw25QX7bPdYGQpI0gk3Yxvr9inK4PJ1C59RMFhdaqrOC73FkdFisgk/+Jx4aT9ytWlzxy74PN3GhfGS5o+C6yCP35VLFll+zTdnzcfXyBHFH022ARfp0WPo4/VnDh7n3SYGT6CIEEkLd+tZofKolR8X5rkZm9eAkSi8tt7/uXEXpaCc8d9lpgHlyf69JtJukk5aW90wvsXiRP13paOR6d9thgHl2e6Yhq7SNEtn9j32WIcXAwcK5bU0sAqxqdIuXilXFcoVhVyh33WmAYv9S+e8oVn8BCYd5FiZneqvK2hfFKsYXbYps8a0+DiovdFvb14T2tYibfps8Y0+O5t3J16+8vb9rW7PmtMg+cN4/ra9wL7PmtMg5/exmXtt9v2WWMaHF8OyUBzC1PTdts+a8yDF8r7S8y22/ZZ8ufntcT1QURaH0Sk9UFEWh9EpPVBRFofRKT1QURaH0Sk9UFEWh9EpPVBRFofRKT1QURaH0Sk9UFEWh9EpPVBRFofRKT1/S6R1yEbz6Qi3EBEg+t/2WyEwV1E1jj+J9pmmN5Ib4Pbf2tuRK75xQUAAAAAAAAAAAD8DP4Dq1MtXp9ZFrMAAAAASUVORK5CYII=",P=function(e,t){return function(o){console.log("addToFavorites"),console.log(e),console.log(t);var i=e?e.find((function(e){return e.id==t.id})):null,s=e;i||s.push(t),localStorage.setItem("favMovies",JSON.stringify(s)),o({type:x,payload:s})}},_=function(e,t){return function(o){console.log(e);var i=e.slice().filter((function(e){return e.id!==t.id}));localStorage.setItem("favMovies",JSON.stringify(i)),o({type:w,payload:i})}},J=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(v.a)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).favoriteOrUnfavorite=function(t){t.preventDefault(),console.log(Object(I.a)(e));var o=e.props.favoritesMoviesList?e.props.favoritesMoviesList:[];(o?o.find((function(t){return t.id===e.props.movie.id})):null)?e.props.removeFromFavorites(o,e.props.movie):e.props.addToFavorites(o,e.props.movie),e.setState({fave:!e.state.fave})},e.bookmarkOrUnbookmark=function(t){t.preventDefault(),console.log(Object(I.a)(e));var o=e.props.bookmarkMoviesList?e.props.bookmarkMoviesList:[];(o?o.find((function(t){return t.id===e.props.movie.id})):null)?e.props.removeFromBookmark(o,e.props.movie):e.props.addToBookmark(o,e.props.movie),e.setState({bookMrk:!e.state.bookMrk})},e.watchOrNotWatch=function(t){t.preventDefault(),console.log(Object(I.a)(e));var o=e.props.watchMoviesList?e.props.watchMoviesList:[];(o?o.find((function(t){return t.id===e.props.movie.id})):null)?e.props.removeFromWatchlist(o,e.props.movie):e.props.addToWatchlist(o,e.props.movie),e.setState({watch:!e.state.watch})},e.state={fave:!!e.props.favoritesMoviesList&&e.props.favoritesMoviesList.find((function(t){return t.id===e.props.movie.id})),bookMrk:!!e.props.bookmarkMoviesList&&e.props.bookmarkMoviesList.find((function(t){return t.id===e.props.movie.id})),watch:!!e.props.watchMoviesList&&e.props.watchMoviesList.find((function(t){return t.id===e.props.movie.id}))},e}return Object(h.a)(o,[{key:"componentDidMount",value:function(){console.log(this)}},{key:"render",value:function(){console.log(this);var e=this.props.movie,t=this.props.key;this.props.moviesList&&this.props.moviesList.favoritesMoviesList&&this.props.moviesList.favoritesMoviesList;return Object(r.jsx)("div",{className:"col s3 center-align z-depth-5 movie-card",children:Object(r.jsxs)("div",{className:"col-content ",children:[Object(r.jsx)("div",{className:"img-content",children:Object(r.jsx)("img",{className:"poster",src:e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:W,alt:"Poster of "+e.title,style:{width:"100%",height:"370px"}})}),Object(r.jsxs)("div",{className:"info-content",children:[Object(r.jsx)("h5",{children:e.title}),Object(r.jsx)("p",{children:e.release_date})]}),Object(r.jsx)(c.b,{className:"waves-effect waves-light btn-small",style:{"margin-bottom":"5px"},to:"/movie/"+e.id,children:"Details"}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{className:"iconsChange waves-effect waves-light btn-small",onClick:this.favoriteOrUnfavorite,children:this.props.favoritesMoviesList.find((function(t){return t.id===e.id}))?Object(r.jsx)("i",{class:"material-icons",children:"favorite"}):Object(r.jsx)("i",{class:"material-icons",children:"favorite_border"})}),Object(r.jsx)("p",{className:"iconsChange waves-effect waves-light btn-small",onClick:this.watchOrNotWatch,children:this.props.watchMoviesList.find((function(t){return t.id===e.id}))?Object(r.jsx)("i",{class:"material-icons",children:"playlist_add_check"}):Object(r.jsx)("i",{class:"material-icons",children:"playlist_add"})}),Object(r.jsx)("p",{className:"iconsChange waves-effect waves-light btn-small",onClick:this.bookmarkOrUnbookmark,children:this.props.bookmarkMoviesList.find((function(t){return t.id===e.id}))?Object(r.jsx)("i",{class:"material-icons",children:"bookmark"}):Object(r.jsx)("i",{class:"material-icons",children:"bookmark_border"})})]})},t)}}]),o}(i.Component),V=Object(p.b)((function(e){return console.log(e),{favoritesMoviesList:e.moviesList.favoritesMoviesList,bookmarkMoviesList:e.moviesList.bookmarkMoviesList,watchMoviesList:e.moviesList.watchMoviesList,text:e.moviesList.textTitle,loading:e.moviesList.loading}}),{addToFavorites:P,removeFromFavorites:_,addToWatchlist:function(e,t){return function(o){console.log("addToWatchlist"),console.log(e),console.log(t);var i=e?e.find((function(e){return e.id==t.id})):null,s=e;i||s.push(t),localStorage.setItem("watchMovies",JSON.stringify(s)),o({type:y,payload:s})}},removeFromWatchlist:function(e,t){return function(o){console.log(e);var i=e.slice().filter((function(e){return e.id!==t.id}));localStorage.setItem("watchMovies",JSON.stringify(i)),o({type:L,payload:i})}},addToBookmark:function(e,t){return function(o){console.log("addToBookmark"),console.log(e),console.log(t);var i=e?e.find((function(e){return e.id==t.id})):null,s=e;i||s.push(t),localStorage.setItem("bookmarkMovies",JSON.stringify(s)),o({type:k,payload:s})}},removeFromBookmark:function(e,t){return function(o){console.log(e);var i=e.slice().filter((function(e){return e.id!==t.id}));localStorage.setItem("bookmarkMovies",JSON.stringify(i)),o({type:M,payload:i})}}})(J),D=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e,t=this.props,o=t.movies,i=t.text,s=t.type,n=t.favoritesMoviesList,a=t.bookmarkMoviesList,c=t.watchMoviesList,l=[];return console.log(o),"landing"===s?l=o:"favorite"===s?l=n:"watchlist"===s?l=c:"bookmark"===s&&(l=a),e=l&&l.length>0?l.map((function(e,t){return Object(r.jsx)(V,{movie:e},t)})):i&&i.length?Object(r.jsx)("p",{children:"Sorry, no results found!"}):null,Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:e})})})}}]),o}(i.Component),B=Object(p.b)((function(e){return{moviesList:e.moviesList,favoritesMoviesList:e.moviesList.favoritesMoviesList,watchMoviesList:e.moviesList.watchMoviesList,bookmarkMoviesList:e.moviesList.bookmarkMoviesList,movies:e.movies.movies,text:e.movies.text}}))(D),U=o.p+"static/media/Spinner-1s-200px.b5d58eb0.gif";var X=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:U,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},H=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"componentDidMount",value:function(){this.props.fetchPopularMovies(),this.props.setLoading()}},{key:"render",value:function(){console.log(this.props);var e=this.props.loading;return Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:e?Object(r.jsx)(X,{}):Object(r.jsx)(B,{type:"landing"})})})}}]),o}(i.Component),K=Object(p.b)((function(e){return{movies:e.movies,loading:e.movies.loading}}),{fetchPopularMovies:E,setLoading:R})(H),Q=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e,t=this.props,o=t.movies,i=t.text;return console.log(o),e=o&&o.length>0?o.map((function(e,t){return Object(r.jsx)(V,{movie:e},t)})):i.length?Object(r.jsx)("p",{children:"Sorry, no results found!"}):null,Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(T,{}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:e})})})]})})}}]),o}(i.Component),Z=Object(p.b)((function(e){return{movies:e.movies.movies,text:e.movies.text,loading:e.movies.loading}}))(Q),Y=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e=this.props.moviesList,t=e&&e.favoritesMoviesList&&0!==e.favoritesMoviesList.length;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h3",{children:"Favorites"}),t?null:Object(r.jsx)("p",{children:"No list yet"}),Object(r.jsx)(B,{type:"favorite"})]})}}]),o}(i.Component),q=Object(p.b)((function(e){return console.log(e),{moviesList:e.moviesList,textTitle:e.moviesList.textTitle,loading:e.moviesList.loading}}),{addToFavorites:P,removeFromFavorites:_})(Y),G=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e=this.props.moviesList,t=e&&e.bookmarkMoviesList&&0!==e.bookmarkMoviesList.length;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h3",{children:"Bookmarks"}),t?null:Object(r.jsx)("p",{children:"No list yet"}),Object(r.jsx)(B,{type:"bookmark"})]})}}]),o}(i.Component),z=Object(p.b)((function(e){return console.log(e),{moviesList:e.moviesList,textTitle:e.moviesList.textTitle,loading:e.moviesList.loading}}))(G),$=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e=this.props.moviesList,t=e&&e.watchMoviesList&&0!==e.watchMoviesList.length;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h3",{children:"Watchlist"}),t?null:Object(r.jsx)("p",{children:"No list yet"}),Object(r.jsx)(B,{type:"watchlist"})]})}}]),o}(i.Component),ee=Object(p.b)((function(e){return console.log(e),{moviesList:e.moviesList,textTitle:e.moviesList.textTitle,loading:e.moviesList.loading}}))($),te=o(29),oe=o.n(te),ie=o(41),se=o(23);var ne=Object(p.b)((function(e){return console.log(e),{favoritesMoviesList:e.moviesList.favoritesMoviesList,watchMoviesList:e.moviesList.watchMoviesList,loading:e.moviesList.loading,randomMovies:e.movies.randomMovies}}),{fetchRandomMovie:function(){return function(e){C.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&language=en-US&sort_by=popularity.desc&include_adult=false&page=1")).then((function(t){return console.log(t),e({type:N,payload:t.data.results,loading:!1})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.favoritesMoviesList,o=e.watchMoviesList,s=e.fetchRandomMovie,n=e.randomMovies,a=Object(i.useState)(""),c=Object(se.a)(a,2),l=c[0],d=c[1],v=Object(i.useState)(null),h=Object(se.a)(v,2),j=h[0],u=h[1],p=Object(i.useState)(null),m=Object(se.a)(p,2),b=m[0],f=m[1];function O(e){return e=Math.floor(e),Math.floor(Math.random()*(e-0)+0)}function g(){return(g=Object(ie.a)(oe.a.mark((function e(i){var s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(l),s=null,"favorites"===l?s=t[O(t.length)]:"watchlist"===l?s=o[O(o.length)]:"random"===l&&(console.log(n),s=n[O(n.length)]),console.log(j),console.log(s),u(s),f(!0),i.preventDefault();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){n.length||s()}),[n]),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("p",{children:"Movies Roulette"}),Object(r.jsx)("div",{class:"input-field col s12",children:Object(r.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(r.jsxs)("label",{children:["What should you watch?",Object(r.jsxs)("select",{value:l,style:{display:"block"},onChange:function(e){d(e.target.value)},children:[Object(r.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Choose your option"}),t.length&&Object(r.jsx)("option",{value:"favorites",children:"Select from your favorites"}),o.length&&Object(r.jsx)("option",{value:"watchlist",children:"Select from your watchlist"}),Object(r.jsx)("option",{value:"random",children:"Select from any movies"})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-bg mt-3",value:"Submit"})]})}),!0===b&&j&&Object(r.jsx)("button",{className:"btn btn-primary btn-bg mt-3",onClick:function(){console.log(l);var e="random"===l?n[O(n.length)]:"favorites"===l?t[O(t.length)]:"watchlist"===l?o[O(o.length)]:null;u(e)},children:"Change movie"}),j&&Object(r.jsx)(V,{movie:j})]})})})})})})),ae=function(e){Object(j.a)(o,e);var t=Object(u.a)(o);function o(){return Object(v.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.movie,o=e.loading,i=Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12 m7",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-image",children:[Object(r.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/"+t.poster_path:W,alt:"Poster of "+t.title,style:{width:"255px",height:"370px",margin:"auto"}}),Object(r.jsx)("span",{className:"card-title",children:t.title})]}),Object(r.jsx)("div",{className:"card-content",children:Object(r.jsx)("p",{children:t.overview})}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("p",{children:t.popularity}),Object(r.jsx)("p",{children:t.release_date})]}),Object(r.jsx)("div",{className:"card-action",children:Object(r.jsx)(c.b,{to:"/",children:"Go back to home page."})})]})})})})});return o?Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(X,{})})})}):i}}]),o}(i.Component),ce=Object(p.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){console.log(e),C.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(S,"&language=en-US")).then((function(e){return console.log(e),t({type:f,payload:e.data,loading:!1})})).catch((function(e){return console.log(e)}))}},setLoading:R})(ae),re=o(16),le=o(42),de=o(43),ve=o(3),he={text:"",movies:[],loading:!1,movie:[],randomMovies:[]},je={textTitle:"",loading:!1,favoritesMoviesList:[],bookmarkMoviesList:[],watchMoviesList:[]},ue=Object(re.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(ve.a)(Object(ve.a)({},e),{},{text:t.payload,loading:!1});case b:return Object(ve.a)(Object(ve.a)({},e),{},{movies:t.payload,loading:!1});case f:return Object(ve.a)(Object(ve.a)({},e),{},{movie:t.payload,loading:!1});case O:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!0});case g:return Object(ve.a)(Object(ve.a)({},e),{},{movies:t.payload,loading:!1});case N:return Object(ve.a)(Object(ve.a)({},e),{},{randomMovies:t.payload,loading:!1});default:return e}},moviesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case w:return Object(ve.a)(Object(ve.a)({},e),{},{text:"Favorites",loading:!1,favoritesMoviesList:t.payload});case k:case M:return Object(ve.a)(Object(ve.a)({},e),{},{text:"Bookmarks",loading:!1,bookmarkMoviesList:t.payload});case y:case L:return Object(ve.a)(Object(ve.a)({},e),{},{text:"Watchlist",loading:!1,watchMoviesList:t.payload});default:return e}}}),pe=[le.a],me=Object(re.createStore)(ue,{},Object(de.composeWithDevTools)(re.applyMiddleware.apply(void 0,pe))),be=o(5);var fe=function(){return Object(r.jsx)(p.a,{store:me,children:Object(r.jsx)(c.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(be.a,{exact:!0,path:"/",component:K}),Object(r.jsx)(be.a,{exact:!0,path:"/search",component:Z}),Object(r.jsx)(be.a,{exact:!0,path:"/favorites",component:q}),Object(r.jsx)(be.a,{exact:!0,path:"/bookmark",component:z}),Object(r.jsx)(be.a,{exact:!0,path:"/watchlater",component:ee}),Object(r.jsx)(be.a,{exact:!0,path:"/movie/:id",component:ce}),Object(r.jsx)(be.a,{exact:!0,path:"/whattowatch",component:ne}),Object(r.jsx)(d,{})]})})})},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(r.jsx)(fe,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Oe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ge(e)}))}}()}},[[74,1,2]]]);
//# sourceMappingURL=main.b9f66f40.chunk.js.map