(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){e.exports=a(369)},368:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1),c=a.n(r),o=a(48),l=a.n(o),s=a(136),i=a.n(s),u=a(76),m=a.n(u),d=a(20),f=function(e){var t=e.sparklineData,a=t.map(function(e,a){if(a%6===0){var n=168-a;return{value:e,date:m()().subtract(n,"hours").format("ddd h:mma")}}return a===t.length-1?{value:e,date:m()().format("ddd h:mma")}:null}).filter(function(e){return e});return c.a.createElement(d.c,{width:1100,height:300,data:a},c.a.createElement(d.b,{type:"monotone",dataKey:"value",stroke:"#8884d8"}),c.a.createElement(d.a,{stroke:"#ccc",strokeDasharray:"5 5"}),c.a.createElement(d.e,{dataKey:"date",interval:3}),c.a.createElement(d.f,null),c.a.createElement(d.d,null))},g=function(e){var t=e.coinData;return c.a.createElement("div",{className:"charts"},t.map(function(e){return c.a.createElement("div",{className:"chart__container",key:e.name},c.a.createElement("h2",{className:"coin__title"},e.name),c.a.createElement("h4",{className:"coin__symbol"},e.symbol),c.a.createElement("div",{className:"coin__logo"},c.a.createElement("img",{src:e.image,height:"40",alt:e.name})),c.a.createElement(f,{sparklineData:e.sparkline_in_7d.price}))}))},p=function(e,t){var a=Object(r.useState)(function(){var a=window.localStorage.getItem(e);return console.log("local storage key: "+a),a?JSON.parse(a):t}),c=Object(n.a)(a,2),o=c[0],l=c[1];return[o,function(t){l(t),console.log("value: "+t),window.localStorage.setItem(e,JSON.stringify(t))}]},v=function(){var e=p("darkMode"),t=Object(n.a)(e,2),a=t[0],c=t[1];return console.log("useDarkMode: "+a),Object(r.useEffect)(function(){a?document.querySelector("body").classList.add("dark-mode"):document.querySelector("body").classList.remove("dark-mode")},[a]),[a,c]},E=function(){var e=v(!1),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement("nav",{className:"navbar"},c.a.createElement("h1",null,"Crypto Tracker"),c.a.createElement("div",{className:"dark-mode__toggle",onClick:function(e){e.preventDefault(),r(!a)}},c.a.createElement("div",{className:a?"toggle toggled":"toggle"})))},k=(a(368),document.getElementById("root"));l.a.render(c.a.createElement(function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)(function(){i.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true").then(function(e){return o(e.data)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(g,{coinData:a}))},null),k)}},[[171,1,2]]]);
//# sourceMappingURL=main.39268e0f.chunk.js.map