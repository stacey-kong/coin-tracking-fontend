(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[7],{455:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(){function t(e){switch(e){case"filter":r(function(e){return!e});break;case"add":i(function(e){return!e})}}var e=P((0,v.useState)(!1),2),n=e[0],r=e[1],s=P((0,v.useState)(!1),2),a=s[0],i=s[1],o=P((0,v.useState)(null),2),c=o[0],l=o[1],u=P((0,v.useState)(null),2),d=u[0],m=u[1],f=P((0,v.useState)(null),2),e=f[0],p=f[1],s=P((0,v.useState)(!1),2),o=s[0],h=s[1],x=localStorage.getItem("id"),u=["coin","price"],f=P((0,v.useState)({open:!1,icon:"",title:"",message:"",button:""}),2),s=f[0],g=f[1],y=(0,j.b)(),f=function(e){switch(e){case"filter":r(!1);break;case"add":i(!1)}};return(0,v.useEffect)(function(){var t,e;d&&c&&(t=d.map(function(e){if(e.subscribed)return e.symbol}),e=c.filter(function(e){if(t.includes(e.abbreviation))return e}),p(e))},[d,c]),(0,v.useEffect)(function(){return y(k.a.loading()),w.a.open(),w.a.on("price",function(e){l(e)}),w.a.on("firstloaded",function(e){l(e),N({type:b.QUERY,userId:null!=x?x:""}).then(function(e){m(e.message.data.coin)}),y(k.a.complete())}),function(){w.a.off("price"),w.a.close()}},[]),(0,O.jsxs)("div",{className:"w-full h-full",children:[(0,O.jsx)("div",{className:"h-5/6",children:o?(0,O.jsx)(E,{headers:u,rows:e,delete:function(e){y(k.a.loading()),N({type:b.DELETE,coin:e,userId:null!=x?x:""}).then(function(e){m(e.message.data.coin),y(k.a.complete())})},filter:function(){return h(function(e){return!e})},custom:o}):(0,O.jsx)(E,{headers:u,rows:c,filter:function(){return h(function(e){return!e})},custom:o})}),(0,O.jsx)(R,{show:a,onSave:function(e){w.a.emit("addCoin",e,function(e){e.status?g({open:!0,icon:"success",title:"Add coin success",message:e.message,button:"OK"}):g({open:!0,icon:"error",title:"Add coin fail",message:e.message,button:"OK"})}),t("add")},onClose:f}),n&&(0,O.jsx)(A,{show:n,onSave:function(e){y(k.a.loading()),N({type:b.ADD,coin:e,userId:null!=x?x:""}).then(function(e){y(k.a.complete()),m(e.message.data.coin),e.error?g({open:!0,icon:"error",title:"Something went wrong",message:e.message.message,button:"OK"}):g({open:!0,icon:"success",title:"Subscribed",message:e.message.message,button:"OK"})}),t("filter")},onClose:f,data:d}),(0,O.jsx)("div",{className:"self-end h-1/6",children:(0,O.jsxs)(T,{children:[(0,O.jsx)(C,{text:"Filter",onclick:function(){return t("filter")}}),(0,O.jsx)(C,{text:"Add",onclick:function(){return t("add")}})]})}),(0,O.jsx)(S,{data:s,onClose:function(){g(function(e){return D(D({},e),{},{open:!1})}),window.location.reload()}})]})}});var b,v=n(1),j=n(35),w=n(210);function c(e,t,n,r,s,a,i){try{var o=e[a](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,s)}(t=b=b||{}).QUERY="QUERY",t.ADD="ADD",t.DELETE="DELETE";var r="".concat("https://api.trackyourcypto.com","/api/subscription");function N(){return s.apply(this,arguments)}function s(){var o;return o=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={userId:t.userId,coin:null!==(n=t.coin)&&void 0!==n?n:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.t0=t.type,e.next=e.t0===b.ADD?5:e.t0===b.DELETE?6:e.t0===b.QUERY?7:8;break;case 5:return e.abrupt("return",fetch("".concat(r,"/add"),n).then(function(e){return e.json()}));case 6:return e.abrupt("return",fetch("".concat(r,"/delete"),n).then(function(e){return e.json()}));case 7:return e.abrupt("return",fetch("".concat(r),n).then(function(e){return e.json()}));case 8:case"end":return e.stop()}},e)}),(s=function(){var e=this,i=arguments;return new Promise(function(t,n){var r=o.apply(e,i);function s(e){c(r,t,n,s,a,"next",e)}function a(e){c(r,t,n,s,a,"throw",e)}s(void 0)})}).apply(this,arguments)}var a=n(456);const i=n.p+"images/083856526c4794262e146cbb1c4b6c16-checked.svg",o=n.p+"images/8614559796aa54805a84a7a47b1f1378-report.svg";var l,O=n(3);function S(e){var t=(0,v.useRef)(),n=e.data;return(0,O.jsx)(a.b.Root,{show:n.open,as:v.Fragment,children:(0,O.jsx)(a.a,{as:"div",static:!0,className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:t,open:n.open,onClose:e.onClose,children:(0,O.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,O.jsx)(a.b.Child,{as:v.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,O.jsx)(a.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,O.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,O.jsx)(a.b.Child,{as:v.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,O.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-2/3 fixed top-1/3",children:[(0,O.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,O.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,O.jsxs)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:[n.icon===l.SUCCESS&&(0,O.jsx)("img",{src:i,alt:"successIcon"}),n.icon===l.ERROR&&(0,O.jsx)("img",{src:o,alt:"errorIcon"})]}),(0,O.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,O.jsx)(a.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:n.title}),(0,O.jsx)("div",{className:"mt-2",children:(0,O.jsx)("p",{className:"text-sm text-gray-500",children:n.message})})]})]})}),(0,O.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:(0,O.jsx)("span",{className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",ref:t,onClick:e.onClose,children:e.data.button})})]})})]})})})}(t=l=l||{}).SUCCESS="success",t.ERROR="error";var k=n(454),u=n(459);const d=n.p+"images/b201aac8831f2168f5595f5c5860ff12-star.svg",m=n.p+"images/6c44f94a3eec90c17ea22de007c6164a-star_active.svg";var f=function(e){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,O.jsx)(u.b,{to:"coin/".concat(e.abbreviation),children:(0,O.jsx)("div",{className:"text-sm text-gray-900",children:e.name})})}),(0,O.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,O.jsx)("div",{className:"text-sm text-gray-900",children:e.price})})]})};function E(n){var e;return(0,O.jsx)("div",{className:"h-full shadow overflow-scroll border-b border-gray-200 sm:rounded-lg",children:(0,O.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,O.jsx)("thead",{className:"bg-gray-50",children:(0,O.jsxs)("tr",{children:[null===(e=n.headers)||void 0===e?void 0:e.map(function(e,t){return(0,O.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium bg-gray-50 text-gray-500 uppercase tracking-wider sticky top-0",children:e},t)}),(0,O.jsx)("th",{scope:"col",className:"px-6 py-3 text-xs font-medium bg-gray-50 w-1/4 uppercase tracking-wider sticky top-0",onClick:function(){return n.filter()},children:n.custom?(0,O.jsx)("img",{src:m,alt:"filterbySubscription",className:"h-6 m-auto ",width:"20"}):(0,O.jsx)("img",{src:d,alt:"unfilterbySubscription",className:"h-6 m-auto  ",width:"20"})},"customButton")]})}),(0,O.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===(e=n.rows)||void 0===e?void 0:e.map(function(e,t){return(0,O.jsxs)("tr",{children:[f(e),(0,O.jsx)("td",{className:"px-6 py-4 w-1/4 whitespace-nowrap text-center text-sm font-medium",children:n.custom?(0,O.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",onClick:function(){return n.delete(e.abbreviation)},children:"delete"}):(0,O.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900"})})]},t)})})]})})}function C(e){return(0,O.jsx)("div",{className:"w-1/4 lg:w-1/6 h-2/3 bg-blue-200 rounded-lg box-border flex items-center",onClick:e.onclick,children:(0,O.jsx)("p",{className:"w-full text-center",children:e.text})})}function p(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function D(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach(function(e){var t,n;t=r,e=s[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,s,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,s=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=(0,v.lazy)(function(){return n.e(15).then(n.bind(n,461))}),R=(0,v.lazy)(function(){return n.e(16).then(n.bind(n,462))}),T=(0,v.lazy)(function(){return n.e(17).then(n.bind(n,463))})},454:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(109);var s={loading:function(){return{type:r.a.LOADING}},complete:function(){return{type:r.a.COMPLETED}}}},210:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});const r=(0,n(186).a)("https://api.trackyourcypto.com")}}]);