(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),o=a(2),c=a.n(o),m=a(13),l=a(14),u=a(15),v=a(18),p=a(17),d=a(16),y=a.n(d);var g=function(e){e.key,e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genre;return r.a.createElement("div",{class:"movie"},r.a.createElement("img",{src:s,alt:a}),r.a.createElement("div",{class:"movie__data"},r.a.createElement("h3",{class:"movie__tile"},a),r.a.createElement("h3",{class:"movie__year"},t),r.a.createElement("p",{class:"movie__summary"},n.slice(0,140),"....."),r.a.createElement("ul",{class:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))},_=(a(42),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({isLoading:!1,movies:n});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{class:"container"},t?r.a.createElement("div",{class:"loader"},r.a.createElement("span",{class:"loader__text"},"Loading...")):r.a.createElement("div",{class:"movies"},a.map((function(e){return r.a.createElement(g,{id:e.id,year:e.year,title:e.title,poster:e.medium_cover_image,summary:e.summary,genre:e.genres})}))))}}]),a}(n.Component));i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.91a7f68b.chunk.js.map