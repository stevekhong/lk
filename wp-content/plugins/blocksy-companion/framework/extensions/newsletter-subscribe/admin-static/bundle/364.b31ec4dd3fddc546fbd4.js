"use strict";(globalThis.blocksyNewsletterSubscribeExtJsonp=globalThis.blocksyNewsletterSubscribeExtJsonp||[]).push([[364],{364:function(e,t,n){n.r(t);var r=n(381),a=n(343),o=n(652),i=n(184),c=n.n(i);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=null;t.default=function(e){var t=e.value,n=e.onChange,i=s((0,r.useState)(p||[]),2),f=i[0],d=i[1],m=s((0,r.useState)(!p),2),v=m[0],b=m[1],y=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(!(a.length>0&&void 0!==a[0])||a[0])&&b(!0),(t=new FormData).append("action","blocksy_ext_newsletter_subscribe_get_actual_lists"),e.prev=4,e.next=7,fetch(ajaxurl,{method:"POST",body:t});case 7:if(200!==(n=e.sent).status){e.next=18;break}return e.next=11,n.json();case 11:if(!(r=e.sent).success){e.next=18;break}if("api_key_invalid"===r.data.result){e.next=18;break}return b(!1),d(r.data.result),p=r.data.result,e.abrupt("return");case 18:e.next=22;break;case 20:e.prev=20,e.t0=e.catch(4);case 22:b(!1);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){y(!p)}),[]),0===f.length?(0,r.createElement)("div",{className:"ct-select-input"},(0,r.createElement)("input",{disabled:!0,placeholder:v?(0,o.__)("Loading...","blocksy-companion"):(0,o.__)("Invalid API Key...","blocksy-companion")})):(0,r.createElement)(a.ZP,{selectedItem:t||f[0].id,onChange:function(e){return n(e)},itemToString:function(e){return e?(f.find((function(t){return t.id===e}))||{}).name:""}},(function(e){var t=e.getInputProps,n=e.getItemProps,a=(e.getLabelProps,e.getMenuProps),i=e.isOpen,l=(e.inputValue,e.highlightedIndex),s=e.selectedItem,p=e.openMenu;return(0,r.createElement)("div",{className:"ct-select-input"},(0,r.createElement)("input",u({},t({onFocus:function(){return p()},onClick:function(){return p()}}),{placeholder:(0,o.__)("Select list...","blocksy-companion"),readOnly:!0})),i&&(0,r.createElement)("div",a({className:"ct-select-dropdown"}),f.map((function(e,t){return(0,r.createElement)("div",n({key:e.id,index:t,item:e.id,className:c()("ct-select-dropdown-item",{active:l===t,selected:s===e.id})}),e.name)}))))}))}}}]);