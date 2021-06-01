(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[1],{447:(e,t,n)=>{"use strict";n.d(t,{a:()=>function(t){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var l,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(i.push(l.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(!1),2),n=e[0],l=e[1],e=function(e){l(!1),t.selectAction&&(0,t.selectAction)(e)};return(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:t.label}),(0,i.jsxs)("div",{className:"mt-1 relative",children:[(0,i.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){t.onclick&&t.onclick(),l(!n)},children:[(0,i.jsx)("span",{className:"flex items-center",children:(0,i.jsx)("span",{className:"ml-3 block truncate",children:t.value||t.placeHolder})}),(0,i.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,i.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,i.jsxs)("ul",{className:"".concat(n?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:["coinList"===t.element.type&&function(e,n){return e.map(function(e,t){return(0,i.jsxs)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return n(e.symbol)},children:[(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.name})}),(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.symbol})}),(0,i.jsx)("div",{children:e.subscribed?(0,i.jsx)("span",{className:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4",children:(0,i.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}):""})]},t)})}(t.element.children,e),"default"===t.element.type&&function(e,n){return e.map(function(e,t){return(0,i.jsx)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return n(e)},children:(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)("span",{className:"font-normal ml-3 block truncate",children:e})})},t)})}(t.element.children,e)]})]})]})}});var r=n(1),i=n(3);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}},238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(){function e(e){switch(e){case"prev":w.a.emit("dailyLending",b,h-7*g,7),p(function(e){return e-7*g});break;case"next":w.a.emit("dailyLending",b,h+7*g,7),p(function(e){return e+7*g})}}var t=(0,v.g)(),n=D((0,j.useState)([]),2),l=n[0],r=n[1],i=D((0,j.useState)(0),2),a=i[0],s=i[1],o=D((0,j.useState)(null),2),c=o[0],d=o[1],n=D((0,j.useState)(null),2),i=n[0],u=n[1],o=D((0,j.useState)(!1),2),f=o[0],m=o[1],n=D((0,j.useState)(0),2),o=n[0],x=n[1],n=D((0,j.useState)(0),2),h=n[0],p=n[1],b=localStorage.getItem("id"),g=864e5,l={type:"coinList",children:l},y=(0,S.b)();return(0,j.useEffect)(function(){return w.a.open(),y(L.a.loading()),f?w.a.emit("lending",b,C.LOCAL):w.a.emit("lending",b,C.UTC),function(){w.a.off("lending"),w.a.close()}},[f]),(0,j.useEffect)(function(){return w.a.on("lendingInterest",function(e){d(e[0]),s(e[1]),y(L.a.complete())}),function(){w.a.off("lendingInterest")}},[]),(0,j.useEffect)(function(){return w.a.on("dailyInterest",function(e){u(e),y(L.a.complete())}),function(){w.a.off("lendingInterest")}},[]),(0,N.jsxs)("div",{className:"pt-2 pb-4 px-4 h-full box-border",children:[(0,N.jsxs)("div",{className:"h-1/2",children:[(0,N.jsx)(k.a,{element:l,label:"Select your coin",placeHolder:"Coin",value:"",onclick:function(){w.a.on("coinList",function(e){r(e)})}}),(0,N.jsxs)("div",{className:"h-3/4",children:[(0,N.jsxs)("div",{className:"inline-flex my-4 w-full h-1/2",children:[(0,N.jsx)("h3",{className:"w-1/2 text-2xl",children:"Lending Amount"}),(0,N.jsx)("input",{className:"w-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md border-none text-right",type:"text",value:a,onChange:function(e){s(+e.target.value)}})]}),(0,N.jsxs)("div",{className:"items-center justify-between flex h-1/2",children:[(0,N.jsxs)("label",{children:[(0,N.jsx)("input",{type:"checkbox",id:"queryTimezone",name:"queryTimezone",className:"mr-2",checked:f,onChange:function(){return m(function(e){return!e})}}),"Show in Local time"]}),(0,N.jsx)("span",{className:"p-2 bg-blue-300 text-white text-center font-bold text-xl float-right",onClick:function(){y(L.a.loading()),w.a.emit("reviseLending",b,a),m(!1)},children:"submit"})]})]})]}),(0,N.jsxs)("div",{className:"h-1/2",children:[(0,N.jsxs)("div",{className:"inline-flex justify-around w-full",children:[(0,N.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ".concat(0===o?"ring-4 ring-indigo-200":""),onClick:function(){return x(0)},children:"Latest"}),(0,N.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ".concat(1===o?"ring-4 ring-indigo-200":""),onClick:function(){var e=new Date,t=e.getDay(),t=e.setHours(0,0,0,0)-(t-1)*g;y(L.a.loading()),w.a.emit("dailyLending",b,t),x(1),p(t)},children:"Sumary"})]}),(0,N.jsxs)("div",{className:"mt-4 px-4 border-2 border-blue-300 h-3/4 justify-items-center items-center",children:[0===o&&(0,N.jsx)("table",{className:"text-left mt-2 space-around w-full h-3/4 border-collapse",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{children:"Today's total"}),(0,N.jsx)("td",{children:null==c?void 0:c.today.toFixed(3)})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{children:"This week's total"}),(0,N.jsx)("td",{children:null==c?void 0:c.week.toFixed(3)})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{children:"This month's total"}),(0,N.jsx)("td",{children:null==c?void 0:c.month.toFixed(3)})]})]})}),1===o&&(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"float-right",children:[(0,N.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m",onClick:function(){return e("prev")},children:"Prev"}),(0,N.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ",onClick:function(){return e("next")},children:"Next"})]}),(0,N.jsx)(A,{data:i})]})]})]}),(0,N.jsx)("div",{className:"w-full flex sticky justify-end z-10 bottom-56",children:(0,N.jsx)("span",{className:"pl-2 pr-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",onClick:function(){t.push("/")},children:"Back to Home"})})]})}});var j=n(1),v=n(459),w=n(112),k=n(447),l=n(450),N=n(3);function A(e){return(0,N.jsxs)(l.c,{width:280,height:200,xType:"time",children:[(0,N.jsx)(l.b,{title:"week",style:{line:{stroke:"#ADDDE1"},ticks:{stroke:"#ADDDE1"},text:{stroke:"none",fill:"#6b6b76",fontWeight:600,fontSize:10}},tickPadding:2}),(0,N.jsx)(l.d,{title:"Amount",style:{line:{stroke:"#ADDDE1"},ticks:{stroke:"#ADDDE1"},text:{stroke:"none",fill:"#6b6b76",fontWeight:600}}}),(0,N.jsx)(l.a,{className:"linemark-series-example",style:{strokeWidth:"1px",fill:"none"},markStyle:{stroke:"blue",fill:"blue"},data:e.data})]})}var C,S=n(51),L=n(452);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var l,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(i.push(l.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}(n=C=C||{}).LOCAL="local",n.UTC="UTC"},452:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var l=n(161);var r={loading:function(){return{type:l.a.LOADING}},complete:function(){return{type:l.a.COMPLETED}}}}}]);