(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[3],{453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(){function t(e){switch(e){case"filter":r(function(e){return!e});break;case"add":i(function(e){return!e})}}var e=w((0,m.useState)(!1),2),n=e[0],r=e[1],s=w((0,m.useState)(!1),2),a=s[0],i=s[1],o=w((0,m.useState)(null),2),e=o[0],c=o[1],l=localStorage.getItem("id"),s=w((0,m.useState)({open:!1,icon:"",title:"",message:"",button:""}),2),o=s[0],d=s[1],u=(0,f.b)(),s=function(e){switch(e){case"filter":r(!1);break;case"add":i(!1)}};return(0,m.useEffect)(function(){return x.a.open(),u(g.a.loading()),x.a.emit("averageprice","".concat(l)),function(){x.a.close()}},[]),(0,m.useEffect)(function(){return x.a.on("allPrice",function(e){c(e),u(g.a.complete())}),function(){x.a.off("allPrice")}},[]),(0,h.jsxs)(m.Suspense,{fallback:(0,h.jsx)(p.a,{}),children:[(0,h.jsxs)("div",{className:"w-full h-full",children:[(0,h.jsx)("div",{className:"h-5/6",children:(0,h.jsx)(b,{headers:["coin","price"],rows:e,delete:function(e){u(g.a.loading()),x.a.emit("deleteScription",l,e)}})}),(0,h.jsx)(O,{show:a,onSave:function(e){x.a.emit("addCoin",e,function(e){e.status?d({open:!0,icon:"success",title:"Add coin success",message:e.message,button:"OK"}):d({open:!0,icon:"error",title:"Add coin fail",message:e.message,button:"OK"})}),t("add")},onClose:s}),(0,h.jsx)(N,{show:n,onSave:function(e){u(g.a.loading()),x.a.emit("addScription",l,e),t("filter")},onClose:s}),(0,h.jsx)("div",{className:"self-end h-1/6",children:(0,h.jsxs)(k,{children:[(0,h.jsx)(j,{text:"Filter",onclick:function(){return t("filter")}}),(0,h.jsx)(j,{text:"Add",onclick:function(){return t("add")}})]})})]}),(0,h.jsx)(y,{data:o,onClose:function(){d(function(e){return v(v({},e),{},{open:!1})}),window.location.reload()}})]})}});var m=n(1),f=n(51),x=n(112),p=n(225),r=n(454);const s=n.p+"images/083856526c4794262e146cbb1c4b6c16-checked.svg",a=n.p+"images/8614559796aa54805a84a7a47b1f1378-report.svg";var i,h=n(3);function y(e){var t=(0,m.useRef)(),n=e.data;return(0,h.jsx)(r.b.Root,{show:n.open,as:m.Fragment,children:(0,h.jsx)(r.a,{as:"div",static:!0,className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:t,open:n.open,onClose:e.onClose,children:(0,h.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,h.jsx)(r.b.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)(r.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,h.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,h.jsx)(r.b.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,h.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-2/3 fixed top-1/3",children:[(0,h.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,h.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,h.jsxs)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:[n.icon===i.SUCCESS&&(0,h.jsx)("img",{src:s,alt:"successIcon"}),n.icon===i.ERROR&&(0,h.jsx)("img",{src:a,alt:"errorIcon"})]}),(0,h.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,h.jsx)(r.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:n.title}),(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)("p",{className:"text-sm text-gray-500",children:n.message})})]})]})}),(0,h.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:(0,h.jsx)("span",{className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",ref:t,onClick:e.onClose,children:e.data.button})})]})})]})})})}(t=i=i||{}).SUCCESS="success",t.ERROR="error";var g=n(452),o=n(464),c=function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,h.jsx)(o.b,{to:"coin/".concat(e.abbreviation),children:(0,h.jsx)("div",{className:"text-sm text-gray-900",children:e.name})})}),(0,h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,h.jsx)("div",{className:"text-sm text-gray-900",children:e.price})})]})};function b(n){var e;return(0,h.jsx)("div",{className:"h-full shadow overflow-scroll border-b border-gray-200 sm:rounded-lg",children:(0,h.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,h.jsx)("thead",{className:"bg-gray-50",children:(0,h.jsxs)("tr",{children:[null===(e=n.headers)||void 0===e?void 0:e.map(function(e,t){return(0,h.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium bg-gray-50 text-gray-500 uppercase tracking-wider sticky top-0",children:e},t)}),(0,h.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium bg-gray-50 text-gray-500 uppercase tracking-wider sticky top-0"},"deleteButton")]})}),(0,h.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===(e=n.rows)||void 0===e?void 0:e.map(function(e,t){return(0,h.jsxs)("tr",{children:[c(e),(0,h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,h.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",onClick:function(){return n.delete(e.abbreviation)},children:"delete"})})]},t)})})]})})}function j(e){return(0,h.jsx)("div",{className:"w-1/4 lg:w-1/6 h-2/3 bg-blue-200 rounded-lg box-border flex items-center",onClick:e.onclick,children:(0,h.jsx)("p",{className:"w-full text-center",children:e.text})})}function l(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function v(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach(function(e){var t,n;t=r,e=s[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,s,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,s=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=(0,m.lazy)(function(){return n.e(6).then(n.bind(n,456))}),O=(0,m.lazy)(function(){return n.e(7).then(n.bind(n,457))}),k=(0,m.lazy)(function(){return n.e(8).then(n.bind(n,458))})},452:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(161);var s={loading:function(){return{type:r.a.LOADING}},complete:function(){return{type:r.a.COMPLETED}}}}}]);