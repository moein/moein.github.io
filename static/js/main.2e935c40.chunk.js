(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),l=a.n(c),r=(a(17),a(11)),s=a(1),o=a(2),m=a(4),d=a(3),u=a(5),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,c=e.editItem;return i.a.createElement("div",{className:"card card-body my-3"},i.a.createElement("form",{onSubmit:n},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text bg-primary text-white"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"add a todo item",value:t,onChange:a})),i.a.createElement("button",{type:"submit",className:c?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"},c?"edit item":"add item")))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleDelete,n=e.handleEdit;return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},i.a.createElement("h6",null,t),i.a.createElement("div",{className:"todo-icon"},i.a.createElement("span",{className:"mx-2 text-success",onClick:n},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"mx-2 text-danger",onClick:a},i.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearList,n=e.handleDelete,c=e.handleEdit;return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo list"),t.map(function(e){return i.a.createElement(p,{key:e.id,title:e.title,handleDelete:function(){return n(e.id)},handleEdit:function(){return c(e.id)}})}),i.a.createElement("button",{type:"button",className:"btn btn-danger btn-block text-capitalize mt-5",onClick:a},"clear list"))}}]),t}(n.Component),f=(a(19),a(6)),E=a.n(f),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={items:[],id:E()(),item:"",editItem:!1},a.handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item},n=Object(r.a)(a.state.items).concat([t]);a.setState({items:n,item:"",id:E()(),editItem:!1})},a.clearList=function(){a.setState({items:[]})},a.handleDelete=function(e){var t=a.state.items.filter(function(t){return t.id!==e});a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter(function(t){return t.id!==e}),n=a.state.items.find(function(t){return t.id===e});console.log(n),a.setState({items:t,item:n.title,editItem:!0,id:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-4"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo input"),i.a.createElement(h,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}),i.a.createElement(b,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.2e935c40.chunk.js.map