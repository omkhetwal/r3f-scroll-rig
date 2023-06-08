import e,{useLayoutEffect as r,useEffect as t,forwardRef as n,useRef as o,useImperativeHandle as i,useMemo as l,Fragment as a,cloneElement as c,Component as u,useState as s,useCallback as d}from"react";import{useThree as f,invalidate as v,useFrame as p,Canvas as h,createPortal as m,useLoader as g,addEffect as w}from"@react-three/fiber";import{ResizeObserver as b}from"@juggle/resize-observer";import{parse as y}from"query-string";import S from"zustand";import{Vector2 as R,Color as E,Scene as C,MathUtils as O,DefaultLoadingManager as T,TextureLoader as I,ImageBitmapLoader as L,Texture as M,CanvasTexture as P}from"three";import{useInView as k}from"react-intersection-observer";import V from"debounce";import x from"vecn";import{suspend as D}from"suspend-react";import _ from"supports-webp";import j from"fast-deep-equal";import A from"@studio-freight/lenis";function U(){return U=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},U.apply(this,arguments)}function z(e,r){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},z(e,r)}function F(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function Y(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var Q="undefined"!=typeof window?r:t,q={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},B=S(function(e){return{debug:!1,scaleMultiplier:q.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:q.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:U({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],l=i.instances;return{canvasChildren:U({},o,((n={})[r]={mesh:i.mesh,props:U({},i.props,t),instances:l},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:F(o,[r].map(Y))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:U({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(){},onScroll:function(){return function(){}}}}),G=function(){var e=B(function(e){return e.requestReflow}),r=B(function(e){return e.debug});return t(function(){var t=new(window.ResizeObserver||b)(function(){e(),r&&console.log("ResizeManager","document.body height changed")});return t.observe(document.body),function(){null==t||t.disconnect()}},[]),null},W=["makeDefault","margin"],H=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=r.margin,u=void 0===c?0:c,s=F(r,W),d=f(function(e){return e.set}),v=f(function(e){return e.camera}),p=f(function(e){return e.size}),h=f(function(e){return e.viewport}),m=o(null);i(t,function(){return m.current});var g=B(function(e){return e.pageReflow}),w=B(function(e){return e.scaleMultiplier}),b=l(function(){var e,r=(p.height+2*u)*w,t=(p.width+2*u)*w/r,n=s.fov||50,o=null==s||null==(e=s.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(r/(2*o)):o=r/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:t}},[p,w,g]),y=b.fov,S=b.distance,R=b.aspect;return Q(function(){m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld(),d(function(e){return{viewport:U({},e.viewport,h.getCurrentViewport(v))}})},[p,w,g]),Q(function(){if(a){var e=v;return d(function(){return{camera:m.current}}),function(){return d(function(){return{camera:e}})}}},[m,a,d]),e.createElement("perspectiveCamera",U({ref:m,position:[0,0,S],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:R,fov:y,far:2*S},s))}),X=["makeDefault","margin"],N=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=r.margin,u=void 0===c?0:c,s=F(r,X),d=f(function(e){return e.set}),v=f(function(e){return e.camera}),p=f(function(e){return e.size}),h=B(function(e){return e.pageReflow}),m=B(function(e){return e.scaleMultiplier}),g=l(function(){return Math.max(p.width*m,p.height*m)},[p,h,m]),w=o(null);return i(t,function(){return w.current}),Q(function(){w.current.lookAt(0,0,0),w.current.updateProjectionMatrix(),w.current.updateMatrixWorld()},[g,p]),Q(function(){if(a){var e=v;return d(function(){return{camera:w.current}}),function(){return d(function(){return{camera:e}})}}},[w,a,d]),e.createElement("orthographicCamera",U({left:p.width*m/-2-u*m,right:p.width*m/2+u*m,top:p.height*m/2+u*m,bottom:p.height*m/-2-u*m,far:2*g,position:[0,0,g],near:.001,ref:w,onUpdate:function(e){return e.updateProjectionMatrix()}},s))});function J(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return J(e,r)}))}var K,Z=new R,$=function(e){void 0===e&&(e=[0]),B.getState().globalRenderQueue=B.getState().globalRenderQueue||[0],B.getState().globalRenderQueue=[].concat(B.getState().globalRenderQueue||[],e)},ee=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,c=e.layer,u=void 0===c?0:c,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;t&&n&&(r.autoClear=void 0!==s&&s,r.setScissor(o,i,l,a),r.setScissorTest(!0),n.layers.set(u),f&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1))},re=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,c=e.layer,u=void 0===c?0:c,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,p=e.clearDepth,h=void 0!==p&&p;t&&n&&(r.getSize(Z),r.autoClear=v,r.setViewport(o,i,l,a),r.setScissor(o,i,l,a),r.setScissorTest(d),n.layers.set(u),h&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,Z.x,Z.y))},te=function(e,r,t,n){void 0===t&&(t=0),q.preloadQueue.push(function(o,i,l){o.setScissorTest(!1),J(e||i,!1),r.layers.set(t),o.render(e||i,r||l),J(e||i,!0),n&&n()}),v()},ne=function(){var e=B(function(e){return e.isCanvasAvailable}),r=B(function(e){return e.hasSmoothScrollbar}),n=B(function(e){return e.requestReflow}),o=B(function(e){return e.pageReflow}),i=B(function(e){return e.debug}),l=B(function(e){return e.scaleMultiplier});return t(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:l,preloadScene:te,requestRender:$,renderScissor:ee,renderViewport:re,reflow:n,reflowCompleted:o}},oe=function(r){var n=r.children,o=f(function(e){return e.gl}),i=B(function(e){return e.canvasChildren}),l=ne();return t(function(){Object.keys(i).length||(l.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.clear(),l.requestRender(),v())},[i]),l.debug&&console.log("GlobalChildren",Object.keys(i).length),e.createElement(e.Fragment,null,n,Object.keys(i).map(function(r){var t=i[r],n=t.mesh,o=t.props;return"function"==typeof n?e.createElement(a,{key:r},n(U({key:r},l,o))):c(n,U({key:r},o))}))},ie=function(){var e=f(function(e){return e.gl}),r=f(function(e){return e.frameloop}),t=B(function(e){return e.globalClearDepth}),n=B(function(e){return e.globalPriority}),o=ne();return Q(function(){e.debug.checkShaderErrors=o.debug},[o.debug]),p(function(r){var t=r.camera,n=r.scene;q.preloadQueue.length&&(q.preloadQueue.forEach(function(r){return r(e,n,t)}),e.clear(),q.preloadQueue=[],o.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),o.requestRender(),v())},q.PRIORITY_PRELOAD),p(function(n){var o=n.camera,i=n.scene,l=B.getState().globalRenderQueue;("always"===r||l)&&(o.layers.disableAll(),l?l.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),t&&e.clearDepth(),e.render(i,o)),B.getState().clearGlobalRenderQueue()},n),null},le=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,z(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(u),ae="8.11.8",ce=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],ue=["children","onError"];"undefined"!=typeof window&&(K=window.ResizeObserver||b);var se=function(r){var t=r.children,n=r.as,o=void 0===n?h:n,i=r.gl,l=r.style,a=r.orthographic,c=r.camera,u=r.debug,s=r.scaleMultiplier,d=void 0===s?q.DEFAULT_SCALE_MULTIPLIER:s,f=r.globalRender,v=void 0===f||f,p=r.globalPriority,m=void 0===p?q.PRIORITY_GLOBAL:p,g=r.globalClearDepth,w=void 0!==g&&g,b=F(r,ce),S=B(function(e){return e.globalRender});return Q(function(){"undefined"!=typeof window&&(window.__r3f_scroll_rig=ae);var e=y(window.location.search);(u||void 0!==e.debug)&&(B.setState({debug:!0}),console.info("@14islands/r3f-scroll-rig@"+ae))},[u]),Q(function(){B.setState({scaleMultiplier:d,globalRender:v,globalPriority:m,globalClearDepth:w})},[d,m,v,w]),e.createElement(o,U({id:"ScrollRig-canvas",camera:{manual:!0},gl:U({failIfMajorPerformanceCaveat:!0},i),resize:{scroll:!1,debounce:0,polyfill:K},style:U({position:"fixed",top:0,left:0,right:0,height:"100vh"},l)},b),!a&&e.createElement(H,U({manual:!0,makeDefault:!0},c)),a&&e.createElement(N,U({manual:!0,makeDefault:!0},c)),S&&e.createElement(ie,null),"function"==typeof t?t(e.createElement(oe,null)):e.createElement(oe,null,t),e.createElement(G,null))},de=function(r){var t=r.children,n=r.onError,o=F(r,ue);return Q(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),e.createElement(le,{onError:function(e){n&&n(e),B.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},e.createElement(se,U({},o),t),e.createElement("noscript",null,e.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},fe=function(r){return e.createElement("mesh",{scale:r.scale},e.createElement("planeGeometry",null),e.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new E("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},ve="undefined"!=typeof window;function pe(e){var r=(void 0===e?{}:e).debounce,n=void 0===r?0:r,o=s({width:ve?window.innerWidth:Infinity,height:ve?window.innerHeight:Infinity}),i=o[0],l=o[1];return t(function(){var e=document.getElementById("ScrollRig-canvas");function r(){var r=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;r===i.width&&t===i.height||l({width:r,height:t})}var t,o=V.debounce(r,n),a=window.ResizeObserver||b;return e?(t=new a(o)).observe(e):window.addEventListener("resize",o),r(),function(){var e;window.removeEventListener("resize",o),null==(e=t)||e.disconnect()}},[i,l]),i}function he(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var me=function(){return{enabled:B(function(e){return e.hasSmoothScrollbar}),scroll:B(function(e){return e.scroll}),scrollTo:B(function(e){return e.scrollTo}),onScroll:B(function(e){return e.onScroll})}};function ge(e,r){var n=pe(),i=me(),a=i.scroll,c=i.onScroll,u=B(function(e){return e.scaleMultiplier}),f=B(function(e){return e.pageReflow}),v=B(function(e){return e.debug}),p=l(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),h=p.autoUpdate,m=p.wrapper,g=k({rootMargin:p.rootMargin,threshold:p.threshold}),w=g.ref,b=g.inView;Q(function(){w(e.current)},[e,null==e?void 0:e.current]);var y=s(x.vec3(0,0,0)),S=y[0],R=y[1],E=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,C=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,O=s(C),T=O[0],I=O[1],L=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,M=o(x.vec3(0,0,0)).current;Q(function(){var r,t=null==(r=e.current)?void 0:r.getBoundingClientRect();if(t){var o=m?m.scrollTop:window.scrollY,i=m?m.scrollLeft:window.scrollX;C.top=t.top+o,C.bottom=t.bottom+o,C.left=t.left+i,C.right=t.right+i,C.width=t.width,C.height=t.height,I(U({},C)),R(x.vec3((null==C?void 0:C.width)*u,(null==C?void 0:C.height)*u,1)),v&&console.log("useTracker.getBoundingClientRect:",C,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",f)}},[e,n,f,u,v]);var P=d(function(r){var t=void 0===r?{}:r,o=t.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||E.inViewport)){var i=t.scroll||a;!function(e,r,t,n){e.top=r.top-(t.y||0),e.bottom=r.bottom-(t.y||0),e.left=r.left-(t.x||0),e.right=r.right-(t.x||0),e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(L,C,i,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(M,L,u);var l="horizontal"===i.scrollDirection,c=l?"width":"height",s=n[c]-L[l?"left":"top"];E.progress=he(s,0,n[c]+L[c],0,1),E.visibility=he(s,0,L[c],0,1),E.viewport=he(s,0,n[c],0,1)}},[e,n,u,a]);return Q(function(){E.inViewport=b,P({onlyUpdateInViewport:!1}),v&&console.log("useTracker.inViewport:",b,"update()")},[b]),Q(function(){P({onlyUpdateInViewport:!1}),v&&console.log("useTracker.update on resize/reflow")},[P,f]),t(function(){if(h)return c(function(e){return P({onlyUpdateInViewport:!0})})},[h,P,c]),{rect:T,bounds:L,scale:S,position:M,scrollState:E,inViewport:b,update:P}}var we=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"];function be(r){var t=r.track,n=r.children,o=r.margin,i=void 0===o?0:o,l=r.inViewportMargin,a=r.inViewportThreshold,c=r.visible,u=void 0===c||c,f=r.hideOffscreen,v=void 0===f||f,h=r.scissor,g=void 0!==h&&h,w=r.debug,b=void 0!==w&&w,y=r.as,S=void 0===y?"scene":y,R=r.priority,E=void 0===R?q.PRIORITY_SCISSORS:R,O=F(r,we),T=d(function(e){null!==e&&M(e)},[]),I=s(g?new C:null),L=I[0],M=I[1],P=ne(),k=P.requestRender,V=P.renderScissor,x=B(function(e){return e.globalRender}),D=ge(t,{rootMargin:l,threshold:a}),_=D.bounds,j=D.scale,A=D.position,z=D.scrollState,Y=D.inViewport;Q(function(){L&&(L.visible=v?Y&&u:u)},[L,Y,v,u]),p(function(e){var r=e.gl,t=e.camera;L&&L.visible&&(L.position.y=A.y,L.position.x=A.x,g?V({gl:r,scene:L,camera:t,left:_.left-i,top:_.positiveYUpBottom-i,width:_.width+2*i,height:_.height+2*i}):k())},x?E:void 0);var G=e.createElement(e.Fragment,null,(!n||b)&&j&&e.createElement(fe,{scale:j}),n&&L&&j&&n(U({track:t,margin:i,scale:j,scrollState:z,inViewport:Y,priority:E},O))),W=S;return g&&L?m(G,L):e.createElement(W,{ref:T},G)}var ye=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],Se=["track","margin","inViewportMargin","inViewportThreshold","priority"],Re=["bounds"],Ee=function(r){var n=r.track,o=r.children,i=r.margin,l=void 0===i?0:i,a=r.visible,c=void 0===a||a,u=r.hideOffscreen,s=void 0===u||u,d=r.debug,v=void 0!==d&&d,h=r.orthographic,m=void 0!==h&&h,g=r.priority,w=void 0===g?q.PRIORITY_VIEWPORTS:g,b=r.inViewport,y=r.bounds,S=r.scale,R=r.scrollState,E=r.camera,C=r.hud,O=F(r,ye),T=f(function(e){return e.scene}),I=f(function(e){return e.get}),L=f(function(e){return e.setEvents}),M=ne().renderViewport;return Q(function(){T.visible=s?b&&c:c},[b,s,c]),t(function(){var e=I().events.connected;return L({connected:n.current}),function(){return L({connected:e})}},[]),p(function(e){var r=e.scene;r.visible&&M({gl:e.gl,scene:r,camera:e.camera,left:y.left-l,top:y.positiveYUpBottom-l,width:y.width+2*l,height:y.height+2*l,clearDepth:!!C})},w),e.createElement(e.Fragment,null,!m&&e.createElement(H,U({manual:!0,margin:l,makeDefault:!0},E)),m&&e.createElement(N,U({manual:!0,margin:l,makeDefault:!0},E)),(!o||v)&&S&&e.createElement(fe,{scale:S}),o&&S&&o(U({track:n,margin:l,scale:S,scrollState:R,inViewport:b,priority:w},O)))};function Ce(r){var t=r.track,n=r.margin,o=void 0===n?0:n,i=r.inViewportMargin,l=r.inViewportThreshold,a=r.priority,c=F(r,Se),u=s(function(){return new C})[0],f=ge(t,{rootMargin:i,threshold:l}),v=f.bounds,p=F(f,Re),h=d(function(e,r){t.current&&e.target===t.current&&(r.pointer.set((e.clientX-v.left+o)/(v.width+2*o)*2-1,-(e.clientY-v.top+o)/(v.height+2*o)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera))},[v]);return v&&m(e.createElement(Ee,U({track:t,bounds:v,priority:a,margin:o},c,p)),u,{events:{compute:h,priority:a},size:{width:v.width,height:v.height}})}function Oe(e,r,n){void 0===r&&(r={});var o=void 0===n?{}:n,i=o.key,a=o.dispose,c=void 0===a||a,u=B(function(e){return e.updateCanvas}),s=B(function(e){return e.renderToCanvas}),f=B(function(e){return e.removeFromCanvas}),v=l(function(){return i||O.generateUUID()},[]);Q(function(){s(v,e,U({},r,{inactive:!1}))},[v]),t(function(){return function(){f(v,c)}},[v]);var p=d(function(e){u(v,e)},[u,v]);return t(function(){p(r)},[].concat(Object.values(r))),p}var Te=["children","id","dispose"],Ie=n(function(e,r){var t=e.children,n=e.id,o=e.dispose,i=void 0===o||o,l=F(e,Te);return t?(Oe(t,U({},l,{ref:r}),{key:n,dispose:i}),null):null}),Le=!1;function Me(e,r){var n,o,i=void 0===r?{}:r,a=i.initTexture,c=void 0===a||a,u=i.premultiplyAlpha,d=void 0===u?"default":u,v=f(function(e){return e.gl}),p=pe(),h=B(function(e){return e.debug}),m=s(null==(n=e.current)?void 0:n.currentSrc),w=m[0],b=m[1];t(function(){var r=e.current,t=function(){var r;b(null==(r=e.current)?void 0:r.currentSrc)};return null==r||r.addEventListener("load",t),function(){return null==r?void 0:r.removeEventListener("load",t)}},[e,w,b]);var y,S,R,E=D(function(){return T.itemStart("waiting for DOM image"),new Promise(function(r){var t=e.current;function n(){r(null==t?void 0:t.currentSrc),T.itemEnd("waiting for DOM image")}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[e,p,null==(o=e.current)?void 0:o.currentSrc,w],{equal:j}),C=(y=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),R=(S=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||y||S&&Number(R)<98?I:L),O=g(C,E,function(e){e instanceof L&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:d,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(Le?"image/webp,":"")+"*/*"}))}),k=l(function(){return O instanceof M?O:O instanceof ImageBitmap?new P(O):void 0},[O]);return t(function(){c&&v.initTexture(k),h&&console.log("useImageAsTexture","initTexture()")},[v,k,c]),k}_.then(function(e){Le=e});var Pe=n(function(e,r){var n=e.children,l=e.enabled,a=void 0===l||l,c=e.locked,u=void 0!==c&&c,s=e.scrollRestoration,f=void 0===s?"auto":s,v=e.disablePointerOnScroll,p=void 0===v||v,h=e.horizontal,m=void 0!==h&&h,g=e.scrollInContainer,w=void 0!==g&&g,b=e.updateGlobalState,y=void 0===b||b,S=e.onScroll,R=e.config,E=void 0===R?{}:R,C=e.invalidate,O=void 0===C?function(){}:C,T=e.addEffect,I=o(),L=o(),M=o(!1),P=B(function(e){return e.scroll});i(r,function(){return{start:function(){var e;return null==(e=L.current)?void 0:e.start()},stop:function(){var e;return null==(e=L.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=L.current)?void 0:t.on(e,r)},notify:function(){var e;return null==(e=L.current)?void 0:e.emit()},emit:function(){var e;return null==(e=L.current)?void 0:e.emit()},scrollTo:function(e,r){var t;return null==(t=L.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=L.current)?void 0:r.raf(e)},__lenis:L.current}});var k=d(function(e){p&&I.current&&M.current!==e&&(M.current=e,I.current.style.pointerEvents=e?"none":"auto")},[p,I,M]);return Q(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=f)},[]),Q(function(){var e,r,t=document.documentElement,n=document.body,o=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",w),n.classList.toggle("ScrollRig-scrollWrapper",w),w&&Object.assign(E,{smoothTouch:!0,wrapper:n,content:o}),L.current=new A(U({orientation:m?"horizontal":"vertical"},E)),T?e=T(function(e){var r;return null==(r=L.current)?void 0:r.raf(e)}):(r=requestAnimationFrame(function e(t){var n;null==(n=L.current)||n.raf(t),r=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(r)}),function(){var r;e(),null==(r=L.current)||r.destroy()}},[]),Q(function(){var e,r,t=function(e){var r=e.scroll,t=e.limit,n=e.velocity,o=e.direction,i=e.progress,l=m?r:0;y&&(P.y=m?0:r,P.x=l,P.limit=t,P.velocity=n,P.direction=o,P.progress=i||0),Math.abs(n)>1.5&&k(!0),Math.abs(n)<1&&k(!1),S&&S({scroll:r,limit:t,velocity:n,direction:o,progress:i}),O()};return null==(e=L.current)||e.on("scroll",t),y&&(P.scrollDirection=m?"horizontal":"vertical",B.setState({scrollTo:function(){var e;null==(e=L.current)||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(e){var r,t;return null==(r=L.current)||r.on("scroll",e),null==(t=L.current)||t.emit(),function(){var r;return null==(r=L.current)?void 0:r.off("scroll",e)}}}),B.getState().scroll.y=window.scrollY,B.getState().scroll.x=window.scrollX),null==(r=L.current)||r.emit(),function(){var e;null==(e=L.current)||e.off("scroll",t),y&&B.setState({onScroll:function(){return function(){}},scrollTo:function(){}})}},[]),Q(function(){var e=function(){return O()},r=function(){return k(!1)};return window.addEventListener("pointermove",r),window.addEventListener("pointerdown",r),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",r),window.removeEventListener("pointerdown",r),window.removeEventListener("wheel",e)}},[]),t(function(){y&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",a),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!a),B.setState({hasSmoothScrollbar:a}))},[a]),t(function(){var e,r;u?null==(e=L.current)||e.stop():null==(r=L.current)||r.start()},[u]),n({ref:I})}),ke=n(function(r,t){return e.createElement(Pe,U({ref:t,invalidate:v,addEffect:w},r))}),Ve={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{de as GlobalCanvas,be as ScrollScene,ke as SmoothScrollbar,Ie as UseCanvas,Ce as ViewportScrollScene,Ve as styles,Oe as useCanvas,B as useCanvasStore,Me as useImageAsTexture,ne as useScrollRig,me as useScrollbar,ge as useTracker};
//# sourceMappingURL=scrollrig.module.js.map
