(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[5],{451:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(){function e(e){switch(e){case"prev":v.a.emit("dailyLending",p,h-7*b,7),m(function(e){return e-7*b});break;case"next":v.a.emit("dailyLending",p,h+7*b,7),m(function(e){return e+7*b})}}var t=(0,j.g)(),n=A((0,y.useState)([]),2),l=n[0],i=(n[1],A((0,y.useState)(0),2)),r=i[0],s=i[1],a=A((0,y.useState)(null),2),o=a[0],c=a[1],n=A((0,y.useState)(null),2),i=n[0],d=n[1],a=A((0,y.useState)(!1),2),u=a[0],x=a[1],n=A((0,y.useState)(0),2),a=n[0],f=n[1],n=A((0,y.useState)(0),2),h=n[0],m=n[1],p=localStorage.getItem("id"),b=864e5,g=(0,C.b)();return(0,y.useEffect)(function(){return v.a.open(),g(S.a.loading()),u?v.a.emit("lending",p,N.LOCAL):v.a.emit("lending",p,N.UTC),function(){v.a.off("lending"),v.a.close()}},[u]),(0,y.useEffect)(function(){return v.a.on("lendingInterest",function(e){c(e[0]),s(e[1]),g(S.a.complete())}),function(){v.a.off("lendingInterest")}},[]),(0,y.useEffect)(function(){return v.a.on("dailyInterest",function(e){d(e),g(S.a.complete())}),function(){v.a.off("lendingInterest")}},[]),(0,w.jsxs)("div",{className:"pt-2 pb-4 px-4 h-full box-border",children:[(0,w.jsxs)("div",{className:"h-1/2",children:[(0,w.jsxs)("div",{className:"mt-1 relative",children:[(0,w.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){return setcoinSelectionOpen(function(e){return!e})},children:[(0,w.jsx)("span",{className:"flex items-center",children:(0,w.jsx)("span",{className:"ml-3 block truncate",children:addedSelection||"Coin"})}),(0,w.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,w.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,w.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,w.jsx)("ul",{className:"".concat(coinSelectionOpen?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:l.map(function(e,t){return(0,w.jsxs)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return onSelected(e.symbol)},children:[(0,w.jsx)("div",{className:"flex items-center",children:(0,w.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.name})}),(0,w.jsx)("div",{className:"flex items-center",children:(0,w.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.symbol})}),(0,w.jsx)("div",{children:e.subscribed?(0,w.jsx)("span",{className:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4",children:(0,w.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,w.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}):""})]},Math.random())})})]}),(0,w.jsxs)("div",{className:"h-3/4",children:[(0,w.jsxs)("div",{className:"inline-flex my-4 w-full h-1/2",children:[(0,w.jsx)("h3",{className:"w-1/2 text-2xl",children:"Lending Amount"}),(0,w.jsx)("input",{className:"w-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md border-none text-right",type:"text",value:r,onChange:function(e){s(+e.target.value)}})]}),(0,w.jsxs)("div",{className:"items-center justify-between flex h-1/2",children:[(0,w.jsxs)("label",{children:[(0,w.jsx)("input",{type:"checkbox",id:"queryTimezone",name:"queryTimezone",className:"mr-2",checked:u,onChange:function(){return x(function(e){return!e})}}),"Show in Local time"]}),(0,w.jsx)("span",{className:"p-2 bg-blue-300 text-white text-center font-bold text-xl float-right",onClick:function(){g(S.a.loading()),v.a.emit("reviseLending",p,r),x(!1)},children:"submit"})]})]})]}),(0,w.jsxs)("div",{className:"h-1/2",children:[(0,w.jsxs)("div",{className:"inline-flex justify-around w-full",children:[(0,w.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ".concat(0===a?"ring-4 ring-indigo-200":""),onClick:function(){return f(0)},children:"Latest"}),(0,w.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ".concat(1===a?"ring-4 ring-indigo-200":""),onClick:function(){var e=new Date,t=e.getDay(),t=e.setHours(0,0,0,0)-(t-1)*b;g(S.a.loading()),v.a.emit("dailyLending",p,t),f(1),m(t)},children:"Sumary"})]}),(0,w.jsxs)("div",{className:"mt-4 px-4 border-2 border-blue-300 h-3/4 justify-items-center items-center",children:[0===a&&(0,w.jsx)("table",{className:"text-left mt-2 space-around w-full h-3/4 border-collapse",children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"Today's total"}),(0,w.jsx)("td",{children:null==o?void 0:o.today.toFixed(3)})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"This week's total"}),(0,w.jsx)("td",{children:null==o?void 0:o.week.toFixed(3)})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"This month's total"}),(0,w.jsx)("td",{children:null==o?void 0:o.month.toFixed(3)})]})]})}),1===a&&(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"float-right",children:[(0,w.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m",onClick:function(){return e("prev")},children:"Prev"}),(0,w.jsx)("span",{className:"w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ",onClick:function(){return e("next")},children:"Next"})]}),(0,w.jsx)(k,{data:i})]})]})]}),(0,w.jsx)("div",{className:"w-full flex sticky justify-end z-10 bottom-56",children:(0,w.jsx)("span",{className:"pl-2 pr-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",onClick:function(){t.push("/")},children:"Back to Home"})})]})}});var y=n(1),j=n(464),v=n(162),l=n(452),w=n(3);function k(e){return(0,w.jsxs)(l.c,{width:280,height:200,xType:"time",children:[(0,w.jsx)(l.b,{title:"week",style:{line:{stroke:"#ADDDE1"},ticks:{stroke:"#ADDDE1"},text:{stroke:"none",fill:"#6b6b76",fontWeight:600,fontSize:10}},tickPadding:2}),(0,w.jsx)(l.d,{title:"Amount",style:{line:{stroke:"#ADDDE1"},ticks:{stroke:"#ADDDE1"},text:{stroke:"none",fill:"#6b6b76",fontWeight:600}}}),(0,w.jsx)(l.a,{className:"linemark-series-example",style:{strokeWidth:"1px",fill:"none"},markStyle:{stroke:"blue",fill:"blue"},data:e.data})]})}var N,C=n(35),S=n(454);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var l,i,r=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}(n=N=N||{}).LOCAL="local",n.UTC="UTC"},454:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});var l=n(111);var i={loading:function(){return{type:l.a.LOADING}},complete:function(){return{type:l.a.COMPLETED}}}},162:(e,t,n)=>{"use strict";n.d(t,{a:()=>l});const l=(0,n(188).a)("https://api.trackyourcypto.com")}}]);