(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},r={app:0},a=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/alseco_test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var m=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-2",attrs:{id:"app"}},[s("router-view",{attrs:{usersList:t.usersList}})],1)},a=[],n=(s("c5f6"),s("ac6a"),{name:"app",data:function(){return{usersList:[{name:"Tony",lastname:"Hawk",email:"tony@ex.com",items:[{title:"Logitech 175xd",price:12e3,category:"Mouse",date:"14/09/2019"}],itemsLength:0,priceSum:0},{name:"Alex",lastname:"Mercer",email:"alex@ex.com",items:[{title:"Asus ROG",price:25e4,category:"Notebook",date:"19/09/2019"},{title:"Logitech 175xd",price:12e3,category:"Mouse",date:"14/09/2019"}],itemsLength:0,priceSum:0},{name:"John",lastname:"Wick",email:"john@ex.com",items:[{title:"Apple iPhone ",price:9e5,category:"Phone",date:"14/09/2019"}],itemsLength:0,priceSum:0},{name:"Adele",lastname:"Hello",email:"adele@ex.com",items:[{title:"Apple Macbook",price:6e4,category:"Notebook",date:"16/09/2019"},{title:"Canon x400",price:8e4,category:"Camera",date:"04/09/2019"},{title:"Apple Airpods",price:7e4,category:"Accessories",date:"10/09/2019"}],itemsLength:0,priceSum:0}]}},methods:{computeUsers:function(){this.usersList.forEach((function(t){t.priceSum=0,t.items.forEach((function(e){t.priceSum+=Number(e.price),t.itemsLength=t.items.length}))}))}},created:function(){this.computeUsers()}}),o=n,c=s("2877"),l=Object(c["a"])(o,r,a,!1,null,null,null),m=l.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-link text--primary",on:{click:function(e){return t.$router.push("/alseco_test")}}},[t._v("Back to list")]),s("h1",[t._v(t._s(t.user.name+" "+t.user.lastname))]),s("h2",[t._v(t._s(t.user.email))]),s("table",{staticClass:"table"},[t._m(0),s("tbody",[t._l(t.user.items,(function(e){return s("tr",{key:e.title,on:{click:function(s){return t.selectItem(e,s)}}},[s("td",[t._v(t._s(e.category))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.date))]),s("td",[t._v(t._s(e.price))])])})),s("tr",[s("td"),s("td",{staticClass:"font-weight-bold"},[t._v("All items sum")]),s("td"),s("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.user.priceSum))])])],2)]),1==t.selectedItems.length&&t.editFormState?s("div",{staticClass:"edit-form form-inline form-group row w-100 p-3 m-0 d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedItem.category,expression:"editedItem.category"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.editedItem.category},on:{input:function(e){e.target.composing||t.$set(t.editedItem,"category",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedItem.title,expression:"editedItem.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.editedItem.title},on:{input:function(e){e.target.composing||t.$set(t.editedItem,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedItem.date,expression:"editedItem.date"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.editedItem.date},on:{input:function(e){e.target.composing||t.$set(t.editedItem,"date",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedItem.price,expression:"editedItem.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.editedItem.price},on:{input:function(e){e.target.composing||t.$set(t.editedItem,"price",e.target.value)}}})]):t._e(),!t.formVisibilityState&&t.selectedItems.length<1?s("button",{ref:"showForm",staticClass:"btn btn-link d-block mx-auto",attrs:{type:"button"},on:{click:function(e){t.formVisibilityState=!0}}},[t._v("Add")]):t._e(),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.formVisibilityState,expression:"formVisibilityState"}],staticClass:"add-form p-3"},[s("form",[s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Category\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Title\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Price\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])])]),s("button",{staticClass:"btn btn-success",on:{click:t.addItem}},[t._v("Save")]),s("button",{staticClass:"btn btn-danger ml-3",on:{click:function(e){t.formVisibilityState=!1}}},[t._v("Cancel")])])]),s("div",{staticClass:"btn-group mx-auto d-table"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.selectedItems.length>0,expression:"selectedItems.length > 0"}],staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.showConfirm}},[t._v("Remove")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1==t.selectedItems.length&&0==t.editFormState,expression:"selectedItems.length == 1 && editFormState == false"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.editItem}},[t._v("Edit")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1==t.selectedItems.length&&t.editFormState,expression:"selectedItems.length == 1 && editFormState"}],staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.saveItem}},[t._v("Save")])])],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Category")]),s("th",{attrs:{scope:"col"}},[t._v("Title")]),s("th",{attrs:{scope:"col"}},[t._v("Date")]),s("th",{attrs:{scope:"col"}},[t._v("Price")])])])}],f=(s("6762"),s("2fdb"),s("7f7f"),s("3022")),v={name:"User",props:["usersList"],data:function(){return{editFormState:!1,selectedItems:[],formVisibilityState:!1,users:this.usersList,user:Object,title:"",price:Number(),category:"",editedItem:{category:"",title:"",price:Number(),date:""}}},methods:{editItem:function(){this.editFormState=!0;var t=this.selectedItems[0];this.editedItem={category:t.category,title:t.title,price:Number(t.price),date:t.date}},saveItem:function(){var t=this,e=[];this.user.items.filter((function(s){t.selectedItems[0]==s?e.push(t.editedItem):e.push(s)})),this.user.items=e,this.$parent.$data.usersList.forEach((function(e){e.name==t.user.name&&e.email&&t.user.email&&(e.items=t.user.items,t.$parent.computeUsers(),t.initUserData(),t.editFormState=!1,t.selectedItems.length=0,document.querySelectorAll(".bg-dark.text-white")[0].classList.remove("bg-dark","text-white"))}))},showConfirm:function(){var t=this,e=confirm("Are u sure?");e&&(this.selectedItems.forEach((function(e){t.user.items=t.user.items.filter((function(t){return t==e?void 0:t}))})),this.selectedItems.length=0,this.$parent.$data.usersList.forEach((function(e){e==t.user&&(e.items=t.user.items,e.priceSum=0,t.$parent.computeUsers())})))},selectItem:function(t,e){this.selectedItems.includes(t)?(this.selectedItems=this.selectedItems.filter((function(e){return t==e?void 0:t})),e.target.parentElement.classList.remove("bg-dark","text-white")):(e.target.parentElement.classList.add("bg-dark","text-white"),this.selectedItems.push(t))},initUserData:function(){var t=this;this.$parent.$data.usersList.forEach((function(e){t.$route.params.name===e.name&&(t.user=e)}))},addItem:function(){var t=this;if(this.price=Number(this.price),this.title.trim()&&this.category.trim()&&Object(f["isNumber"])(this.price)){var e=new Date,s={category:this.category,title:this.title,price:this.price,date:e.toLocaleDateString("en-FR")};this.$parent.$data.usersList.forEach((function(e){e.name==t.user.name&&e.email==t.user.email&&(e.items.push(s),e.itemsLength++,e.priceSum+=+s.price,t.initUserData())})),this.formVisibilityState=!1,this.category=this.title="",this.price=0}}},watch:{selectedItems:function(){0==this.selectedItems.length&&(this.editFormState=!1)}},created:function(){this.initUserData()}},h=v,g=Object(c["a"])(h,d,p,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",on:{click:t.removeContext}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectState,expression:"selectState"}],staticClass:"form-control form-control-sm",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectState=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""}},[t._v("By name")]),s("option",[t._v("By price")])]),s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.sortedUsersList,(function(e){return s("tr",{key:e.name,on:{contextmenu:function(e){return e.preventDefault(),t.handler(e)},click:function(s){return t.selectUser(e,s)},dblclick:function(s){return t.$router.push("/alseco_test/"+e.name)}}},[s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.itemsLength))]),s("td",[t._v(t._s(e.priceSum))])])})),0)]),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.formVisibilityState,expression:"!formVisibilityState"}],ref:"showForm",staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){t.formVisibilityState=!0}}},[t._v("Add")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.selectedUsers.length&&t.contextMenu,expression:"selectedUsers.length && contextMenu "}],ref:"delBtn",staticClass:"mybtn btn btn-danger",attrs:{type:"button"},on:{click:t.showConfirm}},[t._v("Remove")]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.formVisibilityState,expression:"formVisibilityState"}],staticClass:"add-form p-3"},[s("form",[s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Lastname\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Firstname\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",[t._v("\n            Email\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])])]),s("button",{staticClass:"btn btn-success",on:{click:t.addUser}},[t._v("Save")]),s("button",{staticClass:"btn btn-danger ml-3",on:{click:function(e){t.formVisibilityState=!1}}},[t._v("Cancel")])])])],1)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Name")]),s("th",{attrs:{scope:"col"}},[t._v("Items")]),s("th",{attrs:{scope:"col"}},[t._v("Price")])])])}],w=(s("55dd"),{props:["usersList"],data:function(){return{contextMenu:!1,selectState:"By name",formVisibilityState:!1,users:this.usersList,email:"",lastname:"",name:"",selectedUsers:[]}},methods:{removeContext:function(){this.contextMenu=!1},handler:function(t){this.contextMenu=!0,this.$refs.delBtn.style.top=t.clientY+"px",this.$refs.delBtn.style.left=t.clientX+"px"},selectUser:function(t,e){this.selectedUsers.includes(t)?(this.selectedUsers=this.selectedUsers.filter((function(e){return t==e?void 0:t})),e.target.parentElement.classList.remove("bg-dark","text-white")):(e.target.parentElement.classList.add("bg-dark","text-white"),this.selectedUsers.push(t))},addUser:function(){if(this.lastname.trim()&&this.name.trim()&&this.email.trim()){var t={name:this.name,lastname:this.lastname,email:this.email,items:[],itemsLength:0,priceSum:Number()};this.name=this.email=this.lastname="",this.formVisibilityState=!1,this.$parent.$data.usersList.push(t)}},showConfirm:function(){var t=this,e=confirm("Are u sure?");e&&(this.selectedUsers.forEach((function(e){t.$parent.$data.usersList=t.users=t.$parent.$data.usersList.filter((function(t){return t==e?void 0:t}))})),this.selectedUsers.length=0)}},computed:{sortedUsersList:function(){if("By name"==this.selectState){var t=this.users.sort((function(t,e){var s=t.name.toLowerCase(),i=e.name.toLowerCase();return s<i?-1:s>i?1:0}));return t}if("By price"==this.selectState){var e=this.users.sort((function(t,e){var s=t.priceSum,i=e.priceSum;return s<i?1:s>i?-1:0}));return e}}}}),x=w,S=(s("7af6"),Object(c["a"])(x,y,_,!1,null,null,null)),C=S.exports;i["a"].use(u["a"]);var I=new u["a"]({mode:"history",routes:[{path:"/alseco_test/:name",component:b},{path:"/alseco_test",component:C}]}),k=I;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(m)},router:k}).$mount("#app")},"7af6":function(t,e,s){"use strict";var i=s("e052"),r=s.n(i);r.a},e052:function(t,e,s){}});
//# sourceMappingURL=app.9897870b.js.map