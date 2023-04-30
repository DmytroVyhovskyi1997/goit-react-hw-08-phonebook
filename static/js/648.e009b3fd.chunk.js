"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[648],{2648:function(e,n,t){t.r(n),t.d(n,{default:function(){return ke}});var o=t(2791),r=t(9434),a=t(4270),i=t(9439),s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var o=63&t[e];n+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return n},c=t(3634),l=function(e){return e.contacts.items},u=function(e){return e.filter.filter},d=t(4942),f=t(1413);function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=t(3433);function g(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=g(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}var v=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=g(e))&&(o&&(o+=" "),o+=n);return o},h=["theme","type"],b=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},x=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},T=function(e){return x(e)||E(e)?e:null},Z=function(e){return(0,o.isValidElement)(e)||x(e)||E(e)||y(e)};function C(e){var n=e.enter,t=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=a?"".concat(n,"--").concat(i):n,g=a?"".concat(t,"--").concat(i):t,v=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,n=d.current,t=p.split(" "),o=function e(o){var r;o.target===d.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=n.classList).remove.apply(r,(0,m.Z)(t)))};(e=n.classList).add.apply(e,(0,m.Z)(t)),n.addEventListener("animationend",o),n.addEventListener("animationcancel",o)}),[]),(0,o.useEffect)((function(){var e=d.current,n=function n(){e.removeEventListener("animationend",n),s?function(e,n,t){void 0===t&&(t=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(n,t)}))}))}(e,u,l):u()};f||(c?n():(v.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",n)))}),[f]),o.createElement(o.Fragment,null,r)}}function w(e,n){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}}var _={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var t=this.list.get(e).filter((function(e){return e!==n}));return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var n=arguments,t=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(n,1)))}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},I=function(e){var n=e.theme,t=e.type,r=p(e,h);return o.createElement("svg",(0,f.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(t,")")},r))},k={info:function(e){return o.createElement(I,(0,f.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(I,(0,f.Z)({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(I,(0,f.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(I,(0,f.Z)({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function O(e){var n=(0,o.useReducer)((function(e){return e+1}),0),t=(0,i.Z)(n,2)[1],r=(0,o.useState)([]),a=(0,i.Z)(r,2),s=a[0],c=a[1],l=(0,o.useRef)(null),u=(0,o.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function v(e){var n=e.containerId;!g.props.limit||n&&g.containerId!==n||(g.count-=g.queue.length,g.queue=[])}function h(e){c((function(n){return null==e?[]:n.filter((function(n){return n!==e}))}))}function C(){var e=g.queue.shift();O(e.toastContent,e.toastProps,e.staleId)}function I(e,n){var r=n.delay,a=n.staleId,s=p(n,b);if(Z(e)&&!function(e){return!l.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||u.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,v=g.props,I=function(){return h(c)},L=null==d;L&&g.count++;var N,P,R=(0,f.Z)((0,f.Z)((0,f.Z)({},v),{},{style:v.toastStyle,key:g.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var n=(0,i.Z)(e,2);n[0];return null!=n[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:I,isIn:!1,className:T(s.className||v.toastClassName),bodyClassName:T(s.bodyClassName||v.bodyClassName),progressClassName:T(s.progressClassName||v.progressClassName),autoClose:!s.isLoading&&(N=s.autoClose,P=v.autoClose,!1===N||y(N)&&N>0?N:P),deleteToast:function(){var e=w(u.get(c),"removed");u.delete(c),_.emit(4,e);var n=g.queue.length;if(g.count=null==c?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){var o=null==c?g.props.limit:1;if(1===n||1===o)g.displayedToast++,C();else{var r=o>n?n:o;g.displayedToast=r;for(var a=0;a<r;a++)C()}}else t()}});R.iconOut=function(e){var n=e.theme,t=e.type,r=e.isLoading,a=e.icon,i=null,s={theme:n,type:t};return!1===a||(E(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):x(a)||y(a)?i=a:r?i=k.spinner():function(e){return e in k}(t)&&(i=k[t](s))),i}(R),E(s.onOpen)&&(R.onOpen=s.onOpen),E(s.onClose)&&(R.onClose=s.onClose),R.closeButton=v.closeButton,!1===s.closeButton||Z(s.closeButton)?R.closeButton=s.closeButton:!0===s.closeButton&&(R.closeButton=!Z(v.closeButton)||v.closeButton);var z=e;(0,o.isValidElement)(e)&&!x(e.type)?z=(0,o.cloneElement)(e,{closeToast:I,toastProps:R,data:m}):E(e)&&(z=e({closeToast:I,toastProps:R,data:m})),v.limit&&v.limit>0&&g.count>v.limit&&L?g.queue.push({toastContent:z,toastProps:R,staleId:a}):y(r)?setTimeout((function(){O(z,R,a)}),r):O(z,R,a)}}function O(e,n,t){var o=n.toastId;t&&u.delete(t);var r={content:e,props:n};u.set(o,r),c((function(e){return[].concat((0,m.Z)(e),[o]).filter((function(e){return e!==t}))})),_.emit(4,w(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return g.containerId=e.containerId,_.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&h(e)})).on(5,v).emit(2,g),function(){u.clear(),_.emit(3,g)}}),[]),(0,o.useEffect)((function(){g.props=e,g.isToastActive=d,g.displayedToast=s.length})),{getToastToRender:function(n){var t=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(e){return n(e[0],e[1])}))},containerRef:l,isToastActive:d}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var n=(0,o.useState)(!1),t=(0,i.Z)(n,2),r=t[0],a=t[1],s=(0,o.useState)(!1),c=(0,i.Z)(s,2),l=c[0],u=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,h=e.onClick,b=e.closeOnClick;function y(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var t=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=t.getBoundingClientRect(),t.style.transition="",f.x=L(n.nativeEvent),f.y=N(n.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(n){if(f.boundingRect){var t=f.boundingRect,o=t.top,r=t.bottom,a=t.left,i=t.right;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():T()}}function T(){a(!0)}function Z(){a(!1)}function C(n){var t=d.current;f.canDrag&&t&&(f.didMove=!0,r&&Z(),f.x=L(n),f.y=N(n),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),t.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),t.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var n=d.current;if(f.canDrag&&f.didMove&&n){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(e.draggableDirection,"(0)"),n.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),E(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",T),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:y,onTouchStart:y,onMouseUp:x,onTouchEnd:x};return m&&g&&(_.onMouseEnter=Z,_.onMouseLeave=T),b&&(_.onClick=function(e){h&&h(e),f.canCloseOnClick&&v()}),{playToast:T,pauseToast:Z,isRunning:r,preventExitTransition:l,toastRef:d,eventHandlers:_}}function R(e){var n=e.closeToast,t=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var n=e.delay,t=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,u=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,h=e.theme,b=s||u&&0===p,y=(0,f.Z)((0,f.Z)({},l),{},{animationDuration:"".concat(n,"ms"),animationPlayState:t?"running":"paused",opacity:b?0:1});u&&(y.transform="scaleX(".concat(p,")"));var x=v("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),T=E(c)?c({rtl:m,type:i,defaultClassName:x}):v(x,c);return o.createElement("div",(0,d.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:T,style:y},u&&p>=1?"onTransitionEnd":"onAnimationEnd",u&&p<1?null:function(){g&&r()}))}var j=function(e){var n=P(e),t=n.isRunning,r=n.preventExitTransition,a=n.toastRef,i=n.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,h=e.position,b=e.className,y=e.style,x=e.bodyClassName,T=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,w=e.updateId,_=e.role,I=e.progress,k=e.rtl,O=e.toastId,L=e.deleteToast,N=e.isIn,j=e.isLoading,A=e.iconOut,M=e.closeOnClick,B=e.theme,D=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":M}),S=E(b)?b({rtl:k,position:h,type:d,defaultClassName:D}):v(D,b),F=!!I||!l,q={closeToast:m,type:d,theme:B},H=null;return!1===s||(H=E(s)?s(q):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,q):R(q)),o.createElement(g,{isIn:N,done:L,position:h,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,f.Z)((0,f.Z)({id:O,onClick:u,className:S},i),{},{style:y,ref:a}),o.createElement("div",(0,f.Z)((0,f.Z)({},N&&{role:_}),{},{className:E(x)?x({type:d}):v("Toastify__toast-body",x),style:T}),null!=A&&o.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},A),o.createElement("div",null,c)),H,o.createElement(z,(0,f.Z)((0,f.Z)({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:k,theme:B,delay:l,isRunning:t,isIn:N,closeToast:m,hide:p,type:d,style:C,className:Z,controlledProgress:F,progress:I||0}))))},A=function(e,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:n}},M=C(A("bounce",!0)),B=(C(A("slide",!0)),C(A("zoom")),C(A("flip")),(0,o.forwardRef)((function(e,n){var t=O(e),r=t.getToastToRender,a=t.containerRef,i=t.isToastActive,s=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var n=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return E(s)?s({position:e,rtl:l,defaultClassName:n}):v(n,T(s))}return(0,o.useEffect)((function(){n&&(n.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:u},r((function(e,n){var t=n.length?(0,f.Z)({},c):(0,f.Z)((0,f.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(e),style:t,key:"container-".concat(e)},n.map((function(e,t){var r=e.content,a=e.props;return o.createElement(j,(0,f.Z)((0,f.Z)({},a),{},{isIn:i(a.toastId),style:(0,f.Z)((0,f.Z)({},a.style),{},{"--nth":t+1,"--len":n.length}),key:"toast-".concat(a.key)}),r)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,S=new Map,F=[],q=1;function H(){return""+q++}function Q(e){return e&&(x(e.toastId)||y(e.toastId))?e.toastId:H()}function V(e,n){return S.size>0?_.emit(0,e,n):F.push({content:e,options:n}),n.toastId}function U(e,n){return(0,f.Z)((0,f.Z)({},n),{},{type:n&&n.type||e,toastId:Q(n)})}function G(e){return function(n,t){return V(n,U(e,t))}}function K(e,n){return V(e,U("default",n))}K.loading=function(e,n){return V(e,U("default",(0,f.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},K.promise=function(e,n,t){var o,r=n.pending,a=n.error,i=n.success;r&&(o=x(r)?K.loading(r,t):K.loading(r.render,(0,f.Z)((0,f.Z)({},t),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,n,r){if(null!=n){var a=(0,f.Z)((0,f.Z)((0,f.Z)({type:e},s),t),{},{data:r}),i=x(n)?{render:n}:n;return o?K.update(o,(0,f.Z)((0,f.Z)({},a),i)):K(i.render,(0,f.Z)((0,f.Z)({},a),i)),r}K.dismiss(o)},l=E(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},K.success=G("success"),K.info=G("info"),K.error=G("error"),K.warning=G("warning"),K.warn=K.warning,K.dark=function(e,n){return V(e,U("default",(0,f.Z)({theme:"dark"},n)))},K.dismiss=function(e){S.size>0?_.emit(1,e):F=F.filter((function(n){return null!=e&&n.options.toastId!==e}))},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},K.isActive=function(e){var n=!1;return S.forEach((function(t){t.isToastActive&&t.isToastActive(e)&&(n=!0)})),n},K.update=function(e,n){void 0===n&&(n={}),setTimeout((function(){var t=function(e,n){var t=n.containerId,o=S.get(t||D);return o&&o.getToast(e)}(e,n);if(t){var o=t.props,r=t.content,a=(0,f.Z)((0,f.Z)((0,f.Z)({delay:100},o),n),{},{toastId:n.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,V(i,a)}}),0)},K.done=function(e){K.update(e,{progress:1})},K.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){D=e.containerId||e,S.set(D,e),F.forEach((function(e){_.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&_.off(0).off(1).off(5)}));var W,X,Y,J,$,ee,ne,te,oe,re,ae,ie,se,ce=t(168),le=t(6444),ue=le.ZP.form(W||(W=(0,ce.Z)(["\n  margin: 50px auto 0;\n  padding: 48px 64px;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 32px;\n  background-color: #e9f4f2;\n  box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),de=le.ZP.label(X||(X=(0,ce.Z)(["\n  margin-bottom: 16px;\n  margin-top: 16px;\n  width: 100%;\n  font-size: 20px;\n  font-weight: bold;\n"]))),fe=(le.ZP.div(Y||(Y=(0,ce.Z)(["\n  margin-bottom: 32px;\n  width: 100%;\n"]))),le.ZP.input(J||(J=(0,ce.Z)(["\n  width: 100%;\n  font-size: 18px;\n  line-height: 1.5;\n  border-bottom: 2px solid rgb(209, 229, 244);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin-top: 20px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  background-color: #e9f4f2;\n  &:focus {\n    outline: none;\n    border-color: red;\n    background-color: #e9f4f2;\n  }\n"])))),pe=le.ZP.button($||($=(0,ce.Z)(["\n  padding: 8px 24px;\n  display: inline-flex;\n  margin-top: 20px;\n  -webkit-box-align: center;\n  align-items: center;\n  gap: 4px;\n  color: rgb(24, 24, 24);\n  font-size: 16px;\n  font-weight: 500;\n  background-color: rgb(255, 255, 255);\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgb(209 229 244) 0px 0px 0px 2px;\n\n  &:hover,\n  focus {\n    color: white;\n    background-color: red;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  }\n"]))),me=t(3329),ge=function(){var e=(0,o.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],u=(0,o.useState)(""),d=(0,i.Z)(u,2),f=d[0],p=d[1],m=(0,r.v9)(l),g=(0,r.I0)(),v=function(e){var n=e.target,t=n.name,o=n.value;switch(t){case"name":a(o);break;case"number":p(o)}};return(0,me.jsxs)(ue,{onSubmit:function(e){e.preventDefault();var n={id:s(),name:t,number:f},o=m.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}));o?K.error("".concat(t," is already in contacts")):g((0,c.uK)(n)),a(""),p("")},children:[(0,me.jsx)(de,{children:"Name "}),(0,me.jsx)(fe,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",onChange:v,value:t}),(0,me.jsx)(de,{children:"Number "}),(0,me.jsx)(fe,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"111-11-11",onChange:v,value:f}),(0,me.jsx)(pe,{type:"submit",children:"Add contact"})]})},ve=t(4289),he=le.ZP.div(ee||(ee=(0,ce.Z)(["\n  margin: 30px auto 50px;\n  padding: 48px 64px;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 32px;\n  background-color: #e9f4f2;\n  box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),be=le.ZP.button(ne||(ne=(0,ce.Z)(["\n  padding: 8px 24px;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: bold;\n  display: inline-flex;\n  margin-left: 20px;\n  -webkit-box-align: center;\n  align-items: center;\n  gap: 4px;\n  color: rgb(24, 24, 24);\n\n  background-color: rgb(255, 255, 255);\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgb(209 229 244) 0px 0px 0px 2px;\n\n  &:hover,\n  focus {\n    color: white;\n    background-color: red;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  }\n"]))),ye=le.ZP.ul(te||(te=(0,ce.Z)(["\n  display: grid;\n  padding: 0;\n  align-items: center;\n  justify-content: space-around;\n"]))),xe=le.ZP.li(oe||(oe=(0,ce.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),Ee=le.ZP.p(re||(re=(0,ce.Z)(["\n  font-size: 18px;\n  line-height: 1.5;\n  font-weight: bold;\n"]))),Te=function(){var e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(u);(0,o.useEffect)((function(){e((0,c.yF)())}),[e]);var a=function(){var e=t?t.toLowerCase():"";return n?n.filter((function(n){return n.name.toLowerCase().includes(e)})):[]}();return(0,me.jsx)(he,{children:(0,me.jsx)(ye,{children:a.map((function(n){var t=n.id,o=n.name,r=n.number;return(0,me.jsxs)(xe,{children:[(0,me.jsxs)(Ee,{children:[o,": ",r]}),(0,me.jsx)(be,{onClick:function(){return e((0,c.GK)(t))},children:"Delete"})]},t)}))})})},Ze=t(1833),Ce=le.ZP.form(ae||(ae=(0,ce.Z)(["\n  margin: 50px auto 50px;\n  padding: 48px 64px;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 32px;\n  background-color: #e9f4f2;\n  box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),we=le.ZP.label(ie||(ie=(0,ce.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  font-size: 20px;\n  font-weight: bold;\n"]))),_e=le.ZP.input(se||(se=(0,ce.Z)(["\n  width: 100%;\n  font-size: 18px;\n  line-height: 1.5;\n  border-bottom: 2px solid rgb(209, 229, 244);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin-top: 20px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  background-color: #e9f4f2;\n  &:focus {\n    outline: none;\n    border-color: red;\n    background-color: #e9f4f2;\n  }\n"]))),Ie=function(){var e=(0,r.I0)(),n=(0,r.v9)(u);return(0,me.jsxs)(Ce,{children:[(0,me.jsx)(we,{children:"Find contacts by Name "}),(0,me.jsx)(_e,{type:"text",placeholder:"Enter filter",name:"filter",onChange:function(n){e((0,Ze.T)(n.target.value))},value:n})]})};function ke(){var e=(0,r.I0)(),n=(0,r.v9)(ve.Qb);return(0,o.useEffect)((function(){e((0,c.yF)())}),[e]),(0,me.jsxs)(me.Fragment,{children:[(0,me.jsx)(a.q,{children:(0,me.jsx)("title",{children:"Phonebook"})}),(0,me.jsx)(ge,{}),(0,me.jsx)("div",{children:n&&"Request in progress..."}),(0,me.jsx)(Ie,{}),(0,me.jsx)(Te,{})]})}}}]);
//# sourceMappingURL=648.e009b3fd.chunk.js.map