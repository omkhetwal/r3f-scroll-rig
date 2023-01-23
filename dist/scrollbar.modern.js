import e from"zustand";import t,{useLayoutEffect as r,useEffect as o,forwardRef as n,useRef as l,useImperativeHandle as i,useCallback as s,useMemo as c,useState as a}from"react";import{addEffect as u,invalidate as d}from"@react-three/fiber";import h from"debounce";import p from"@studio-freight/lenis";import{useInView as v}from"react-intersection-observer";import w from"vecn";import{Vector2 as g}from"three";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t.indexOf(r=l[o])>=0||(n[r]=e[r]);return n}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}const y={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},S=e(e=>({debug:!1,scaleMultiplier:y.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:y.PRIORITY_GLOBAL,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:()=>e(()=>({globalRenderQueue:!1})),isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:(t,r,o={})=>e(({canvasChildren:e})=>Object.getOwnPropertyDescriptor(e,t)?(e[t].instances+=1,e[t].props.inactive=!1,{canvasChildren:e}):{canvasChildren:f({},e,{[t]:{mesh:r,props:o,instances:1}})}),updateCanvas:(t,r)=>e(({canvasChildren:e})=>{if(!e[t])return;const{[t]:{mesh:o,props:n,instances:l}}=e;return{canvasChildren:f({},e,{[t]:{mesh:o,props:f({},n,r),instances:l}})}}),removeFromCanvas:(t,r=!0)=>e(({canvasChildren:e})=>{var o;return(null==(o=e[t])?void 0:o.instances)>1?(e[t].instances-=1,{canvasChildren:e}):r?{canvasChildren:m(e,[t].map(b))}:(e[t].instances=0,e[t].props.inactive=!0,{canvasChildren:f({},e)})}),pageReflow:0,requestReflow:()=>{e(e=>({pageReflow:e.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:e=>window.scrollTo(0,e),onScroll:()=>()=>{}})),R=()=>({enabled:S(e=>e.hasSmoothScrollbar),scroll:S(e=>e.scroll),scrollTo:S(e=>e.scrollTo),onScroll:S(e=>e.onScroll)}),C="undefined"!=typeof window?r:o,T=["children","duration","easing","smooth","direction","config"],L=e=>1===e?1:1-Math.pow(2,-10*e);var E=n(function(e,t){let{children:r,duration:n=1,easing:s=L,smooth:c=!0,direction:a="vertical",config:u}=e,d=m(e,T);const h=l();return i(t,()=>({start:()=>{var e;return null==(e=h.current)?void 0:e.start()},stop:()=>{var e;return null==(e=h.current)?void 0:e.stop()},on:(e,t)=>{var r;return null==(r=h.current)?void 0:r.on(e,t)},once:(e,t)=>{var r;return null==(r=h.current)?void 0:r.once(e,t)},off:(e,t)=>{var r;return null==(r=h.current)?void 0:r.off(e,t)},notify:()=>{var e;return null==(e=h.current)?void 0:e.notify()},scrollTo:(e,t)=>{var r;return null==(r=h.current)?void 0:r.scrollTo(e,t)},raf:e=>{var t;return null==(t=h.current)?void 0:t.raf(e)},__lenis:h.current})),o(function(){const e=h.current=new p(f({duration:n,easing:s,smooth:c,direction:a},u));return()=>{e.destroy()}},[n,s,c,a]),r&&r(d)});const I=n(({children:e,enabled:r=!0,locked:n=!1,scrollRestoration:a="auto",disablePointerOnScroll:p=!0,horizontal:v=!1,scrollInContainer:w=!1,updateGlobalState:g=!0,onScroll:m,config:b},y)=>{const R=l(),T=l(),L=l(!1),I=S(e=>e.scroll);i(y,()=>({scrollTo:(e,t)=>{var r;return null==(r=T.current)?void 0:r.scrollTo(e,t)},__lenis:T.current}));const O=e=>{p&&R.current&&L.current!==e&&(L.current=e,R.current.style.pointerEvents=e?"none":"auto")},V=s(()=>{O(!1)},[]),_=s(e=>{var t;return null==(t=T.current)||t.on("scroll",e),()=>{var t;return null==(t=T.current)?void 0:t.off("scroll",e)}},[]);C(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=a)},[]),o(()=>{var e,t;const r=u(e=>{var t;return null==(t=T.current)?void 0:t.raf(e)});var o;null==(e=T.current)||e.on("scroll",({scroll:e,limit:t,velocity:r,direction:o,progress:n})=>{const l=v?e:0;g&&(I.y=v?0:e,I.x=l,I.limit=t,I.velocity=r,I.direction=o,I.progress=n);const i=h.debounce(()=>O(!0),100,!0);Math.abs(r)>1.4?i():O(!1),m&&m({scroll:e,limit:t,velocity:r,direction:o,progress:n}),d()}),null==(t=T.current)||t.notify(),g&&(I.scrollDirection=v?"horizontal":"vertical",S.setState({scrollTo:null==(o=T.current)?void 0:o.scrollTo}),S.setState({onScroll:_}),S.getState().scroll.y=window.scrollY,S.getState().scroll.x=window.scrollX);const n=()=>d();return window.addEventListener("pointermove",V),window.addEventListener("wheel",n),()=>{var e;null==(e=T.current)||e.off("scroll"),r(),window.removeEventListener("pointermove",V),window.removeEventListener("wheel",n)}},[]),o(()=>{g&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",r),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!r),S.setState({hasSmoothScrollbar:r}))},[r]),o(()=>{var e,t;n?null==(e=T.current)||e.stop():null==(t=T.current)||t.start()},[n]);const{wrapper:P,content:x}=c(()=>{if("undefined"==typeof document)return{};const e=document.documentElement,t=document.body,r=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",w),t.classList.toggle("ScrollRig-scrollWrapper",w),{wrapper:t,content:r}},[w]);return t.createElement(E,{ref:T,direction:v?"horizontal":"vertical",config:f(w?{smoothTouch:!0,wrapper:P,content:x}:{},b)},t=>e(f({},t,{ref:R})))}),O="undefined"!=typeof window;function V(e,t,r,o,n){return o+(e-t)*(n-o)/(r-t)}function _(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(e=>_(e,t)))}const P=new g,x=(e=[0])=>{S.getState().globalRenderQueue=S.getState().globalRenderQueue||[0],S.getState().globalRenderQueue=[...S.getState().globalRenderQueue||[],...e]},D=({gl:e,scene:t,camera:r,left:o,top:n,width:l,height:i,layer:s=0,autoClear:c=!1,clearDepth:a=!0})=>{if(!t||!r)return;const u=e.autoClear;e.autoClear=c,e.setScissor(o,n,l,i),e.setScissorTest(!0),r.layers.set(s),a&&e.clearDepth(),e.render(t,r),e.setScissorTest(!1),e.autoClear=u},U=({gl:e,scene:t,camera:r,left:o,top:n,width:l,height:i,layer:s=0,scissor:c=!0,autoClear:a=!1,clearDepth:u=!0})=>{if(!t||!r)return;const d=e.autoClear;e.getSize(P),e.autoClear=a,e.setViewport(o,n,l,i),e.setScissor(o,n,l,i),e.setScissorTest(c),r.layers.set(s),u&&e.clearDepth(),e.render(t,r),e.setScissorTest(!1),e.setViewport(0,0,P.x,P.y),e.autoClear=d},z=(e,t,r=0,o)=>{e&&t&&(y.preloadQueue.push(n=>{n.setScissorTest(!1),_(e,!1),t.layers.set(r),n.render(e,t),_(e,!0),o&&o()}),d())};function A(e,t){const r=function({debounce:e=0}={}){const[t,r]=a({width:O?window.innerWidth:Infinity,height:O?window.innerHeight:Infinity});return o(()=>{const o=document.getElementById("ScrollRig-canvas");function n(){const e=o?o.clientWidth:window.innerWidth,n=o?o.clientHeight:window.innerHeight;e===t.width&&n===t.height||r({width:e,height:n})}const l=h.debounce(n,e);let i;return o?(i=new ResizeObserver(l),i.observe(o)):window.addEventListener("resize",l),n(),()=>{var e;window.removeEventListener("resize",l),null==(e=i)||e.disconnect()}},[t,r]),t}(),{debug:n}=(()=>{const e=S(e=>e.isCanvasAvailable),t=S(e=>e.hasSmoothScrollbar),r=S(e=>e.requestReflow),n=S(e=>e.debug),l=S(e=>e.scaleMultiplier);return o(()=>{n&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=r)},[]),{debug:n,isCanvasAvailable:e,hasSmoothScrollbar:t,scaleMultiplier:l,preloadScene:z,requestRender:x,renderScissor:D,renderViewport:U,reflow:r}})(),{scroll:i,onScroll:u}=R(),d=S(e=>e.scaleMultiplier),p=S(e=>e.pageReflow),{rootMargin:g,threshold:m,autoUpdate:b,wrapper:y}=c(()=>{const e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map((t,o)=>{void 0!==r[t]&&(e[t]=r[t])}),e},[t]),{ref:T,inView:L}=v({rootMargin:g,threshold:m});C(()=>{T(e.current)},[e]);const[E,I]=a(w.vec3(0,0,0)),_=l({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,P=l({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,[A,M]=a(P),j=l({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,Y=l(w.vec3(0,0,0)).current;C(()=>{var t;const o=null==(t=e.current)?void 0:t.getBoundingClientRect();if(!o)return;const l=y?y.scrollTop:window.scrollY,i=y?y.scrollLeft:window.scrollX;P.top=o.top+l,P.bottom=o.bottom+l,P.left=o.left+i,P.right=o.right+i,P.width=o.width,P.height=o.height,P.x=P.left+.5*o.width,P.y=P.top+.5*o.height,M(f({},P)),I(w.vec3((null==P?void 0:P.width)*d,(null==P?void 0:P.height)*d,1)),n&&console.log("useTracker.getBoundingClientRect:",P,"intialScroll:",{initialY:l,initialX:i},"size:",r,"pageReflow:",p)},[e,r,p,d,n]);const Q=s(({onlyUpdateInViewport:t=!1,scroll:o}={})=>{if(!e.current||t&&!_.inViewport)return;const n=o||i;!function(e,t,r,o){e.top=t.top-r.y,e.bottom=t.bottom-r.y,e.left=t.left-r.x,e.right=t.right-r.x,e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*o.width,e.y=e.top+.5*t.height-.5*o.height,e.positiveYUpBottom=o.height-e.bottom}(j,P,n,r),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(Y,j,d);const l="horizontal"===n.scrollDirection,s=l?"width":"height",c=r[s]-j[l?"left":"top"];_.progress=V(c,0,r[s]+j[s],0,1),_.visibility=V(c,0,j[s],0,1),_.viewport=V(c,0,r[s],0,1)},[e,r,d,i]);return C(()=>{_.inViewport=L,Q({onlyUpdateInViewport:!1}),n&&console.log("useTracker.inViewport:",L,"update()")},[L]),C(()=>{Q({onlyUpdateInViewport:!1}),n&&console.log("useTracker.update on resize/reflow")},[Q,p]),o(()=>{if(b)return u(e=>Q({onlyUpdateInViewport:!0}))},[b,Q,u]),{rect:A,bounds:j,scale:E,position:Y,scrollState:_,inViewport:L,update:Q}}export{I as SmoothScrollbar,R as useScrollbar,A as useTracker};
//# sourceMappingURL=scrollbar.modern.js.map
