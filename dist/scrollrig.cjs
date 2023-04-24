var e=require("react"),r=require("@react-three/fiber"),t=require("@juggle/resize-observer"),n=require("query-string"),o=require("zustand"),i=require("three"),a=require("react-intersection-observer"),l=require("debounce"),u=require("vecn"),c=require("suspend-react"),s=require("supports-webp"),d=require("fast-deep-equal"),f=require("@studio-freight/lenis");function v(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=/*#__PURE__*/v(e),h=/*#__PURE__*/v(o),g=/*#__PURE__*/v(l),m=/*#__PURE__*/v(u),w=/*#__PURE__*/v(s),b=/*#__PURE__*/v(d),y=/*#__PURE__*/v(f);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)}function R(e,r){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},R(e,r)}function E(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function C(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var T="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,O={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},I=h.default(function(e){return{debug:!1,scaleMultiplier:O.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:O.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:S({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:S({},o,((n={})[r]={mesh:i.mesh,props:S({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:E(o,[r].map(C))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:S({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),M=function(){var r=I(function(e){return e.requestReflow}),n=I(function(e){return e.debug});return e.useEffect(function(){var e=new(window.ResizeObserver||t.ResizeObserver)(function(){r(),n&&console.log("ResizeManager","document.body height changed")});return e.observe(document.body),function(){null==e||e.disconnect()}},[]),null},x=["makeDefault","margin"],L=e.forwardRef(function(t,n){var o=t.makeDefault,i=void 0!==o&&o,a=t.margin,l=void 0===a?0:a,u=E(t,x),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=r.useThree(function(e){return e.viewport}),v=e.useRef(null);e.useImperativeHandle(n,function(){return v.current});var h=I(function(e){return e.pageReflow}),g=I(function(e){return e.scaleMultiplier}),m=e.useMemo(function(){var e,r=(d.height+2*l)*g,t=(d.width+2*l)*g/r,n=u.fov||50,o=null==u||null==(e=u.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(r/(2*o)):o=r/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:t}},[d,g,h]),w=m.fov,b=m.distance,y=m.aspect;return T(function(){v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld(),c(function(e){return{viewport:S({},e.viewport,f.getCurrentViewport(s))}})},[d,g,h]),T(function(){if(i){var e=s;return c(function(){return{camera:v.current}}),function(){return c(function(){return{camera:e}})}}},[v,i,c]),p.default.createElement("perspectiveCamera",S({ref:v,position:[0,0,b],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:y,fov:w,far:2*b},u))}),k=["makeDefault","margin"],P=e.forwardRef(function(t,n){var o=t.makeDefault,i=void 0!==o&&o,a=t.margin,l=void 0===a?0:a,u=E(t,k),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=I(function(e){return e.pageReflow}),v=I(function(e){return e.scaleMultiplier}),h=e.useMemo(function(){return Math.max(d.width*v,d.height*v)},[d,f,v]),g=e.useRef(null);return e.useImperativeHandle(n,function(){return g.current}),T(function(){g.current.lookAt(0,0,0),g.current.updateProjectionMatrix(),g.current.updateMatrixWorld()},[h,d]),T(function(){if(i){var e=s;return c(function(){return{camera:g.current}}),function(){return c(function(){return{camera:e}})}}},[g,i,c]),p.default.createElement("orthographicCamera",S({left:d.width*v/-2-l*v,right:d.width*v/2+l*v,top:d.height*v/2+l*v,bottom:d.height*v/-2-l*v,far:2*h,position:[0,0,h],near:.001,ref:g,onUpdate:function(e){return e.updateProjectionMatrix()}},u))});function V(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return V(e,r)}))}var D,j=new i.Vector2,A=function(e){void 0===e&&(e=[0]),I.getState().globalRenderQueue=I.getState().globalRenderQueue||[0],I.getState().globalRenderQueue=[].concat(I.getState().globalRenderQueue||[],e)},q=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,l=e.height,u=e.layer,c=void 0===u?0:u,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;t&&n&&(r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,l),r.setScissorTest(!0),n.layers.set(c),f&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1))},_=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,l=e.height,u=e.layer,c=void 0===u?0:u,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,p=e.clearDepth,h=void 0!==p&&p;t&&n&&(r.getSize(j),r.autoClear=v,r.setViewport(o,i,a,l),r.setScissor(o,i,a,l),r.setScissorTest(d),n.layers.set(c),h&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,j.x,j.y))},F=function(e,t,n,o){void 0===n&&(n=0),O.preloadQueue.push(function(r,i,a){r.setScissorTest(!1),V(e||i,!1),t.layers.set(n),r.render(e||i,t||a),V(e||i,!0),o&&o()}),r.invalidate()},z=function(){var r=I(function(e){return e.isCanvasAvailable}),t=I(function(e){return e.hasSmoothScrollbar}),n=I(function(e){return e.requestReflow}),o=I(function(e){return e.pageReflow}),i=I(function(e){return e.debug}),a=I(function(e){return e.scaleMultiplier});return e.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:r,hasSmoothScrollbar:t,scaleMultiplier:a,preloadScene:F,requestRender:A,renderScissor:q,renderViewport:_,reflow:n,reflowCompleted:o}},U=function(t){var n=t.children,o=r.useThree(function(e){return e.gl}),i=I(function(e){return e.canvasChildren}),a=z();return e.useEffect(function(){Object.keys(i).length||(a.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.clear(),a.requestRender(),r.invalidate())},[i]),a.debug&&console.log("GlobalChildren",Object.keys(i).length),p.default.createElement(p.default.Fragment,null,n,Object.keys(i).map(function(r){var t=i[r],n=t.mesh,o=t.props;return"function"==typeof n?p.default.createElement(e.Fragment,{key:r},n(S({key:r},a,o))):e.cloneElement(n,S({key:r},o))}))},Y=function(){var e=r.useThree(function(e){return e.gl}),t=r.useThree(function(e){return e.frameloop}),n=I(function(e){return e.globalClearDepth}),o=I(function(e){return e.globalPriority}),i=z();return T(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),r.useFrame(function(t){var n=t.camera,o=t.scene;O.preloadQueue.length&&(O.preloadQueue.forEach(function(r){return r(e,o,n)}),e.clear(),O.preloadQueue=[],i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),r.invalidate())},O.PRIORITY_PRELOAD),r.useFrame(function(r){var o=r.camera,i=r.scene,a=I.getState().globalRenderQueue;("always"===t||a)&&(o.layers.disableAll(),a?a.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),n&&e.clearDepth(),e.render(i,o)),I.getState().clearGlobalRenderQueue()},o),null},B=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,R(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(e.Component),Q=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],G=["children","onError"];"undefined"!=typeof window&&(D=window.ResizeObserver||t.ResizeObserver);var H=function(e){var t=e.children,o=e.as,i=void 0===o?r.Canvas:o,a=e.gl,l=e.style,u=e.orthographic,c=e.camera,s=e.debug,d=e.scaleMultiplier,f=void 0===d?O.DEFAULT_SCALE_MULTIPLIER:d,v=e.globalRender,h=void 0===v||v,g=e.globalPriority,m=void 0===g?O.PRIORITY_GLOBAL:g,w=e.globalClearDepth,b=void 0!==w&&w,y=E(e,Q),R=I(function(e){return e.globalRender});return T(function(){var e=n.parse(window.location.search);(s||void 0!==e.debug)&&(I.setState({debug:!0}),console.log("r3f-scroll-rig","v8.10.0"))},[s]),T(function(){I.setState({scaleMultiplier:f,globalRender:h,globalPriority:m,globalClearDepth:b})},[f,m,h,b]),p.default.createElement(i,S({id:"ScrollRig-canvas",camera:{manual:!0},gl:S({failIfMajorPerformanceCaveat:!0},a),resize:{scroll:!1,debounce:0,polyfill:D},style:S({position:"fixed",top:0,left:0,right:0,height:"100vh"},l)},y),!u&&p.default.createElement(L,S({manual:!0,makeDefault:!0},c)),u&&p.default.createElement(P,S({manual:!0,makeDefault:!0},c)),R&&p.default.createElement(Y,null),"function"==typeof t?t(p.default.createElement(U,null)):p.default.createElement(U,null,t),p.default.createElement(M,null))},W=function(e){return p.default.createElement("mesh",{scale:e.scale},p.default.createElement("planeGeometry",null),p.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new i.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},X="undefined"!=typeof window;function J(r){var n=(void 0===r?{}:r).debounce,o=void 0===n?0:n,i=e.useState({width:X?window.innerWidth:Infinity,height:X?window.innerHeight:Infinity}),a=i[0],l=i[1];return e.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function r(){var r=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;r===a.width&&t===a.height||l({width:r,height:t})}var n,i=g.default.debounce(r,o),u=window.ResizeObserver||t.ResizeObserver;return e?(n=new u(i)).observe(e):window.addEventListener("resize",i),r(),function(){var e;window.removeEventListener("resize",i),null==(e=n)||e.disconnect()}},[a,l]),a}function K(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var N=function(){return{enabled:I(function(e){return e.hasSmoothScrollbar}),scroll:I(function(e){return e.scroll}),scrollTo:I(function(e){return e.scrollTo}),onScroll:I(function(e){return e.onScroll})}};function Z(r,t){var n=J(),o=N(),i=o.scroll,l=o.onScroll,u=I(function(e){return e.scaleMultiplier}),c=I(function(e){return e.pageReflow}),s=I(function(e){return e.debug}),d=e.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,n){void 0!==r[t]&&(e[t]=r[t])}),e},[t]),f=d.autoUpdate,v=d.wrapper,p=a.useInView({rootMargin:d.rootMargin,threshold:d.threshold}),h=p.ref,g=p.inView;T(function(){h(r.current)},[r]);var w=e.useState(m.default.vec3(0,0,0)),b=w[0],y=w[1],R=e.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,E=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,C=e.useState(E),O=C[0],M=C[1],x=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,L=e.useRef(m.default.vec3(0,0,0)).current;T(function(){var e,t=null==(e=r.current)?void 0:e.getBoundingClientRect();if(t){var o=v?v.scrollTop:window.scrollY,i=v?v.scrollLeft:window.scrollX;E.top=t.top+o,E.bottom=t.bottom+o,E.left=t.left+i,E.right=t.right+i,E.width=t.width,E.height=t.height,M(S({},E)),y(m.default.vec3((null==E?void 0:E.width)*u,(null==E?void 0:E.height)*u,1)),s&&console.log("useTracker.getBoundingClientRect:",E,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",c)}},[r,n,c,u,s]);var k=e.useCallback(function(e){var t=void 0===e?{}:e,o=t.onlyUpdateInViewport;if(r.current&&(void 0===o||!o||R.inViewport)){var a=t.scroll||i;!function(e,r,t,n){e.top=r.top-(t.y||0),e.bottom=r.bottom-(t.y||0),e.left=r.left-(t.x||0),e.right=r.right-(t.x||0),e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(x,E,a,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(L,x,u);var l="horizontal"===a.scrollDirection,c=l?"width":"height",s=n[c]-x[l?"left":"top"];R.progress=K(s,0,n[c]+x[c],0,1),R.visibility=K(s,0,x[c],0,1),R.viewport=K(s,0,n[c],0,1)}},[r,n,u,i]);return T(function(){R.inViewport=g,k({onlyUpdateInViewport:!1}),s&&console.log("useTracker.inViewport:",g,"update()")},[g]),T(function(){k({onlyUpdateInViewport:!1}),s&&console.log("useTracker.update on resize/reflow")},[k,c]),e.useEffect(function(){if(f)return l(function(e){return k({onlyUpdateInViewport:!0})})},[f,k,l]),{rect:O,bounds:x,scale:b,position:L,scrollState:R,inViewport:g,update:k}}var $=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],ee=e.memo(function(t){var n=t.track,o=t.children,a=t.margin,l=void 0===a?0:a,u=t.inViewportMargin,c=t.inViewportThreshold,s=t.visible,d=void 0===s||s,f=t.hideOffscreen,v=void 0===f||f,h=t.scissor,g=void 0!==h&&h,m=t.debug,w=void 0!==m&&m,b=t.as,y=void 0===b?"scene":b,R=t.priority,C=void 0===R?O.PRIORITY_SCISSORS:R,M=E(t,$),x=e.useCallback(function(e){null!==e&&P(e)},[]),L=e.useState(g?new i.Scene:null),k=L[0],P=L[1],V=z(),D=V.requestRender,j=V.renderScissor,A=I(function(e){return e.globalRender}),q=Z(n,{rootMargin:u,threshold:c}),_=q.bounds,F=q.scale,U=q.position,Y=q.scrollState,B=q.inViewport;T(function(){k&&(k.visible=v?B&&d:d)},[k,B,v,d]),r.useFrame(function(e){var r=e.gl,t=e.camera;k&&k.visible&&(k.position.y=U.y,k.position.x=U.x,g?j({gl:r,scene:k,camera:t,left:_.left-l,top:_.positiveYUpBottom-l,width:_.width+2*l,height:_.height+2*l}):D())},A?C:void 0);var Q=p.default.createElement(p.default.Fragment,null,(!o||w)&&F&&p.default.createElement(W,{scale:F}),o&&k&&F&&o(S({track:n,margin:l,scale:F,scrollState:Y,inViewport:B,priority:C},M))),G=y;return g&&k?r.createPortal(Q,k):p.default.createElement(G,{ref:x},Q)}),re=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],te=["track","margin","inViewportMargin","inViewportThreshold","priority"],ne=["bounds"],oe=function(t){var n=t.track,o=t.children,i=t.margin,a=void 0===i?0:i,l=t.visible,u=void 0===l||l,c=t.hideOffscreen,s=void 0===c||c,d=t.debug,f=void 0!==d&&d,v=t.orthographic,h=void 0!==v&&v,g=t.priority,m=void 0===g?O.PRIORITY_VIEWPORTS:g,w=t.inViewport,b=t.bounds,y=t.scale,R=t.scrollState,C=t.camera,I=t.hud,M=E(t,re),x=r.useThree(function(e){return e.scene}),k=r.useThree(function(e){return e.get}),V=r.useThree(function(e){return e.setEvents}),D=z().renderViewport;return T(function(){x.visible=s?w&&u:u},[w,s,u]),e.useEffect(function(){var e=k().events.connected;return V({connected:n.current}),function(){return V({connected:e})}},[]),r.useFrame(function(e){var r=e.scene;r.visible&&D({gl:e.gl,scene:r,camera:e.camera,left:b.left-a,top:b.positiveYUpBottom-a,width:b.width+2*a,height:b.height+2*a,clearDepth:!!I})},m),p.default.createElement(p.default.Fragment,null,!h&&p.default.createElement(L,S({manual:!0,margin:a,makeDefault:!0},C)),h&&p.default.createElement(P,S({manual:!0,margin:a,makeDefault:!0},C)),(!o||f)&&y&&p.default.createElement(W,{scale:y}),o&&y&&o(S({track:n,margin:a,scale:y,scrollState:R,inViewport:w,priority:m},M)))},ie=e.memo(function(t){var n=t.track,o=t.margin,a=void 0===o?0:o,l=t.inViewportMargin,u=t.inViewportThreshold,c=t.priority,s=E(t,te),d=e.useState(function(){return new i.Scene})[0],f=Z(n,{rootMargin:l,threshold:u}),v=f.bounds,h=E(f,ne),g=e.useCallback(function(e,r){n.current&&e.target===n.current&&(r.pointer.set((e.clientX-v.left+a)/(v.width+2*a)*2-1,-(e.clientY-v.top+a)/(v.height+2*a)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera))},[v]);return v&&r.createPortal(p.default.createElement(oe,S({track:n,bounds:v,priority:c,margin:a},s,h)),d,{events:{compute:g,priority:c},size:{width:v.width,height:v.height}})});function ae(r,t,n){void 0===t&&(t={});var o=void 0===n?{}:n,a=o.key,l=o.dispose,u=void 0===l||l,c=I(function(e){return e.updateCanvas}),s=I(function(e){return e.renderToCanvas}),d=I(function(e){return e.removeFromCanvas}),f=e.useMemo(function(){return a||i.MathUtils.generateUUID()},[]);T(function(){s(f,r,{inactive:!1})},[f]),e.useEffect(function(){return function(){d(f,u)}},[f]);var v=e.useCallback(function(e){c(f,e)},[c,f]);return e.useEffect(function(){v(t)},[].concat(Object.values(t))),v}var le=["children","id","dispose"],ue=e.forwardRef(function(e,r){var t=e.id,n=e.dispose,o=void 0===n||n;return ae(e.children,S({},E(e,le),{ref:r}),{key:t,dispose:o}),null}),ce=!1;w.default.then(function(e){ce=e});var se=e.forwardRef(function(r,t){var n=r.children,o=r.enabled,i=void 0===o||o,a=r.locked,l=void 0!==a&&a,u=r.scrollRestoration,c=void 0===u?"auto":u,s=r.disablePointerOnScroll,d=void 0===s||s,f=r.horizontal,v=void 0!==f&&f,p=r.scrollInContainer,h=void 0!==p&&p,g=r.updateGlobalState,m=void 0===g||g,w=r.onScroll,b=r.config,R=void 0===b?{}:b,E=r.invalidate,C=void 0===E?function(){}:E,O=r.addEffect,M=e.useRef(),x=e.useRef(),L=e.useRef(!1),k=I(function(e){return e.scroll});e.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=x.current)?void 0:e.start()},stop:function(){var e;return null==(e=x.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=x.current)?void 0:t.on(e,r)},notify:function(){var e;return null==(e=x.current)?void 0:e.emit()},emit:function(){var e;return null==(e=x.current)?void 0:e.emit()},scrollTo:function(e,r){var t;return null==(t=x.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=x.current)?void 0:r.raf(e)},__lenis:x.current}});var P=e.useCallback(function(e){d&&M.current&&L.current!==e&&(L.current=e,M.current.style.pointerEvents=e?"none":"auto")},[d,M,L]);return T(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=c)},[]),T(function(){var e,r,t=document.documentElement,n=document.body,o=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",h),n.classList.toggle("ScrollRig-scrollWrapper",h),h&&Object.assign(R,{smoothTouch:!0,wrapper:n,content:o}),x.current=new y.default(S({orientation:v?"horizontal":"vertical"},R)),O?e=O(function(e){var r;return null==(r=x.current)?void 0:r.raf(e)}):(r=requestAnimationFrame(function e(t){var n;null==(n=x.current)||n.raf(t),r=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(r)}),function(){var r;e(),null==(r=x.current)||r.destroy()}},[]),T(function(){var e,r,t,n=function(e){var r=e.scroll,t=e.limit,n=e.velocity,o=e.direction,i=e.progress,a=v?r:0;m&&(k.y=v?0:r,k.x=a,k.limit=t,k.velocity=n,k.direction=o,k.progress=i),Math.abs(n)>1.5&&P(!0),Math.abs(n)<1&&P(!1),w&&w({scroll:r,limit:t,velocity:n,direction:o,progress:i}),C()};return null==(e=x.current)||e.on("scroll",n),m&&(k.scrollDirection=v?"horizontal":"vertical",I.setState({scrollTo:null==(t=x.current)?void 0:t.scrollTo}),I.setState({onScroll:function(e){var r,t;return null==(r=x.current)||r.on("scroll",e),null==(t=x.current)||t.emit(),function(){var r;return null==(r=x.current)?void 0:r.off("scroll",e)}}}),I.getState().scroll.y=window.scrollY,I.getState().scroll.x=window.scrollX),null==(r=x.current)||r.emit(),function(){var e;null==(e=x.current)||e.off("scroll",n)}},[]),T(function(){var e=function(){return C()},r=function(){return P(!1)};return window.addEventListener("pointermove",r),window.addEventListener("pointerdown",r),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",r),window.removeEventListener("pointerdown",r),window.removeEventListener("wheel",e)}},[]),e.useEffect(function(){m&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),I.setState({hasSmoothScrollbar:i}))},[i]),e.useEffect(function(){var e,r;l?null==(e=x.current)||e.stop():null==(r=x.current)||r.start()},[l]),n({ref:M})}),de=e.forwardRef(function(e,t){return p.default.createElement(se,S({ref:t,invalidate:r.invalidate,addEffect:r.addEffect},e))});exports.GlobalCanvas=function(e){var r=e.children,t=e.onError,n=E(e,G);return T(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),p.default.createElement(B,{onError:function(e){t&&t(e),I.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},p.default.createElement(H,S({},n),r),p.default.createElement("noscript",null,p.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},exports.ScrollScene=ee,exports.SmoothScrollbar=de,exports.UseCanvas=ue,exports.ViewportScrollScene=ie,exports.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},exports.useCanvas=ae,exports.useCanvasStore=I,exports.useImageAsTexture=function(t,n){var o,a,l=void 0===n?{}:n,u=l.initTexture,s=void 0===u||u,d=l.premultiplyAlpha,f=void 0===d?"default":d,v=r.useThree(function(e){return e.gl}),p=J(),h=I(function(e){return e.debug}),g=e.useState(null==(o=t.current)?void 0:o.currentSrc),m=g[0],w=g[1];e.useEffect(function(){var e=t.current,r=function(){var e;w(null==(e=t.current)?void 0:e.currentSrc)};return null==e||e.addEventListener("load",r),function(){return null==e?void 0:e.removeEventListener("load",r)}},[t,m,w]);var y,S,R,E=c.suspend(function(){return i.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(e){var r=t.current;function n(){e(null==r?void 0:r.currentSrc),i.DefaultLoadingManager.itemEnd("waiting for DOM image")}null==r||r.addEventListener("load",n,{once:!0}),null!=r&&r.complete&&(null==r||r.removeEventListener("load",n),n())})},[t,p,null==(a=t.current)?void 0:a.currentSrc,m],{equal:b.default}),C=(y=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),R=(S=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||y||S&&R<98?i.TextureLoader:i.ImageBitmapLoader),T=r.useLoader(C,E,function(e){e instanceof i.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(ce?"image/webp,":"")+"*/*"}))}),O=e.useMemo(function(){return T instanceof i.Texture?T:T instanceof ImageBitmap?new i.CanvasTexture(T):void 0},[T]);return e.useEffect(function(){s&&v.initTexture(O),h&&console.log("useImageAsTexture","initTexture()")},[v,O,s]),O},exports.useScrollRig=z,exports.useScrollbar=N,exports.useTracker=Z;
//# sourceMappingURL=scrollrig.cjs.map
