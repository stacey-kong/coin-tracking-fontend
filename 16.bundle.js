(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[16],{462:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var c,d,u=n(1),m=n(3);function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){b(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,l,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(n=c=c||{}).USD="USD",n.USDT="USDT",n.BTC="BTC",(n=d=d||{}).SPOT="Spot",n.PERPETUAL="Perpetual";var p=["USD","USDT","BTC"],h=["Spot","Perpetual"],g={name:"",symbol:"",currency:c.USD,marketType:d.SPOT};const a=u.memo(o);function o(e){var t=e.show?"flex":"hidden",n=x((0,u.useState)(g),2),r=n[0],l=n[1],a=x((0,u.useState)(!1),2),o=a[0],s=a[1],n=x((0,u.useState)(!1),2),a=n[0],i=n[1],n=function(e){var t=e.currentTarget.value,e=e.currentTarget.name,t=f(f({},r),{},b({},e,t));l(t)};return(0,m.jsx)("form",{id:"addCoinForm",onSubmit:function(e){null!=e&&e.preventDefault()},className:"".concat(t," z-10 w-full h-full fixed top-0 left-0"),onClick:function(){return e.onClose("add")},children:(0,m.jsxs)("div",{className:"shadow overflow-visible sm:rounded-md relative lg:w-1/3 w-3/4 m-auto bg-white",onClick:function(e){e.stopPropagation()},children:[(0,m.jsxs)("div",{className:"px-4 py-5 h-2/3 bg-white sm:p-6",children:[(0,m.jsx)("div",{className:"w-full flex justify-end",children:(0,m.jsx)("span",{className:"px-3 pb-1 inline-flex text-s leading-6 font-semibold rounded-full bg-gray-300 text-black-800 ",onClick:function(){return e.onClose("add")},children:"x"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"name",className:"block text-s font-medium text-gray-700",children:"Name"}),(0,m.jsx)("div",{className:"mt-1 relative rounded-md shadow-sm",children:(0,m.jsx)("input",{type:"text",name:"name",id:"name",value:r.name,className:"pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md",placeholder:"Enter the Coin Name",onChange:n})})]}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsx)("label",{htmlFor:"symbol",className:"block text-s font-medium text-gray-700",children:"Symbol"}),(0,m.jsx)("div",{className:"mt-1 relative rounded-md shadow-sm",children:(0,m.jsx)("input",{type:"text",name:"symbol",id:"symbol",value:r.symbol,className:"pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md",placeholder:"Enter the Coin Symbol",onChange:n})})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsxs)("div",{className:"w-full",children:[(0,m.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:"Currency"}),(0,m.jsxs)("div",{className:"mt-1 relative",children:[(0,m.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){return i(function(e){return!e})},children:[(0,m.jsx)("span",{className:"flex items-center",children:(0,m.jsx)("span",{className:"ml-3 block truncate",children:r.currency})}),(0,m.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,m.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,m.jsx)("ul",{className:"".concat(a?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:p.map(function(e,t){return(0,m.jsx)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return function(e){e="USDT"===e?c.USDT:"BTC"===e?c.BTC:c.USD,e=f(f({},r),{},{currency:e});i(!1),l(e)}(e)},children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("span",{className:"font-normal ml-3 block truncate",children:e})})},Math.random())})})]})]})}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsxs)("div",{className:"w-full",children:[(0,m.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:"Market Type"}),(0,m.jsxs)("div",{className:"mt-1 relative",children:[(0,m.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){return s(function(e){return!e})},children:[(0,m.jsx)("span",{className:"flex items-center",children:(0,m.jsx)("span",{className:"ml-3 block truncate",children:r.marketType})}),(0,m.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,m.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,m.jsx)("ul",{className:"".concat(o?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:h.map(function(e,t){return(0,m.jsx)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return function(e){e="Perpetual"===e?d.PERPETUAL:d.SPOT,e=f(f({},r),{},{marketType:e});s(!1),l(e)}(e)},children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("span",{className:"font-normal ml-3 block truncate",children:e})})},Math.random())})})]})]})})]}),(0,m.jsx)("div",{className:"px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6",children:(0,m.jsx)("button",{onClick:function(){e.onSave(r),l(g)},className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})}}}]);