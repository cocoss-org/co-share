(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{4929:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var n=t(7378),s=t(5671),o=t(3144),c=t(7326),p=t(9340),r=t(6215),m=t(1120),k=t(4942),N=t(3349),u=t(9148);function l(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,m.Z)(e);if(a){var s=(0,m.Z)(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return(0,r.Z)(this,t)}}var d=function(e){(0,p.Z)(t,e);var a=l(t);function t(e){var n;return(0,s.Z)(this,t),n=a.call(this),(0,k.Z)((0,c.Z)(n),"subscriber",N.Subscriber.create(t,(function(e,a,t){return a(n.state.getState().counter)}))),(0,k.Z)((0,c.Z)(n),"state",void 0),(0,k.Z)((0,c.Z)(n),"increase",N.Action.create((0,c.Z)(n),"incr",(function(e){n.increase.publishTo(null==e?{to:"all"}:{to:"all-except-one",except:e}),n.state.setState({counter:n.state.getState().counter+1})}))),n.state=(0,u.Z)((function(){return{counter:e}})),n}return(0,o.Z)(t,[{key:"onUnlink",value:function(e){}},{key:"onLink",value:function(e){}}]),t}(N.Store),i=t(4671),f=t(8077),y=t(7982),b=t(1655),h=t(7462),w=t(4925),S=t(3905),g=["components"],v={};function x(e){var a=e.components,t=(0,w.Z)(e,g);return(0,S.kt)("wrapper",(0,h.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,S.kt)("h1",null,"Counter Example"),(0,S.kt)("p",null,"A simple counter, right?",(0,S.kt)("br",{parentName:"p"}),"\n","Not quite!",(0,S.kt)("br",{parentName:"p"}),"\n","Behind this simple application is a whole system with a server and two (simulated) clients, that share the value of the counter!  "),(0,S.kt)("p",null,"Let's see how it works ..."),(0,S.kt)("pre",{className:"language-typescript"},(0,S.kt)("code",{parentName:"pre",className:"language-typescript"},(0,S.kt)("span",{parentName:"code",className:"token keyword module"},"export")," ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"class")," ",(0,S.kt)("span",{parentName:"code",className:"token class-name"},(0,S.kt)("span",{parentName:"span",className:"token maybe-class-name"},"CounterStore"))," ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"extends")," ",(0,S.kt)("span",{parentName:"code",className:"token class-name"},(0,S.kt)("span",{parentName:"span",className:"token maybe-class-name"},"Store"))," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"public")," subscriber",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"Subscriber")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"Subscriber"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"create"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"CounterStore"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"connection",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," accept",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," deny",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token arrow operator"},"=>"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token function"},"accept"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"state"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"getState"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"counter"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"public")," state",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"StoreApi"),(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," counter",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token builtin"},"number")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"public")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"onUnlink"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"link",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"StoreLink"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"void")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"public")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"onLink"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"link",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"StoreLink"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"void")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token function"},"constructor"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"value",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token builtin"},"number"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"super"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"state")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"create"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," counter",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," value ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n    increase ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"Action"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"create"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token string"},'"incr"'),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"origin",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"increase"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"publishTo"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"origin ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"==")," ",(0,S.kt)("span",{parentName:"code",className:"token keyword null nil"},"null")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"?")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," to",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token string"},'"all"')," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," to",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token string"},'"all-except-one"'),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," except",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," origin ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"state"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"setState"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            counter",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"this"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"state"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"getState"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"counter")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"+")," ",(0,S.kt)("span",{parentName:"code",className:"token number"},"1"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n")),(0,S.kt)("pre",{className:"language-typescript"},(0,S.kt)("code",{parentName:"pre",className:"language-typescript"},(0,S.kt)("span",{parentName:"code",className:"token keyword"},"function")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},(0,S.kt)("span",{parentName:"span",className:"token maybe-class-name"},"CounterExamplePage")),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," rootStore ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," rootStore",(0,S.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"RootStore")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"const")," store ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"useChildStore"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"rootStore",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," rootStore",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"links"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,S.kt)("span",{parentName:"code",className:"token number"},"0"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token maybe-class-name"},"CounterStore"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token number"},"1000"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token string"},'"counter"'),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"const")," useStoreState ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"useMemo"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"create"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"store",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token property-access"},"state"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"["),"store",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{")," counter ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,S.kt)("span",{parentName:"code",className:"token function"},"useStoreState"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n\n    ",(0,S.kt)("span",{parentName:"code",className:"token keyword control-flow"},"return")," ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),"div className",(0,S.kt)("span",{parentName:"code",className:"token operator"},"="),(0,S.kt)("span",{parentName:"code",className:"token string"},'"d-flex flex-row align-items-center"'),(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n            ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),"h1 className",(0,S.kt)("span",{parentName:"code",className:"token operator"},"="),(0,S.kt)("span",{parentName:"code",className:"token string"},'"mx-3"'),(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"counter",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),(0,S.kt)("span",{parentName:"code",className:"token operator"},"/"),"h1",(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n            ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),"button className",(0,S.kt)("span",{parentName:"code",className:"token operator"},"="),(0,S.kt)("span",{parentName:"code",className:"token string"},'"m-1 btn btn-outline-primary"')," onClick",(0,S.kt)("span",{parentName:"code",className:"token operator"},"="),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,S.kt)("span",{parentName:"code",className:"token arrow operator"},"=>")," store",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,S.kt)("span",{parentName:"code",className:"token method function property-access"},"increase"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n                ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"+"),"\n            ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),(0,S.kt)("span",{parentName:"code",className:"token operator"},"/"),"button",(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n        ",(0,S.kt)("span",{parentName:"code",className:"token operator"},"<"),(0,S.kt)("span",{parentName:"code",className:"token operator"},"/"),"div",(0,S.kt)("span",{parentName:"code",className:"token operator"},">"),"\n    ",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n",(0,S.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n")))}x.isMDXComponent=!0;var j=t(9138),Z=t(4246);function C(){return(0,Z.jsxs)("div",{className:"d-flex flex-column fullscreen",children:[(0,Z.jsx)(b.h,{selectedIndex:0}),(0,Z.jsxs)("div",{className:"d-flex flex-column justify-content-stretch container-lg",children:[(0,Z.jsx)("div",{className:"d-flex flex-row-responsive",children:(0,Z.jsx)(y.X,{twoClients:!0,initStore:function(e){return e.addChildStore(new d(0),!1,"counter")},children:function(e){return(0,Z.jsx)(R,{rootStore:e})}})}),(0,Z.jsx)("div",{className:"p-3 flex-basis-0 flex-grow-1",children:(0,Z.jsx)(x,{})})]}),(0,Z.jsx)(j.$,{})]})}function R(e){var a=e.rootStore,t=(0,f.useChildStore)(a,a.links[0],d,1e3,"counter"),s=(0,n.useMemo)((function(){return(0,i.Z)(t.state)}),[t])().counter;return(0,Z.jsxs)("div",{className:"p-3 d-flex flex-row align-items-center",children:[(0,Z.jsx)("h1",{className:"mx-3",children:s}),(0,Z.jsx)("button",{className:"m-1 btn btn-outline-primary",onClick:function(){return t.increase()},children:"+"})]})}},7017:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/counter",function(){return t(4929)}])},4671:function(e,a,t){"use strict";var n=t(7378);function s(e){let a;const t=new Set,n=(e,n)=>{const s="function"===typeof e?e(a):e;if(s!==a){const e=a;a=n?s:Object.assign({},a,s),t.forEach((t=>t(a,e)))}},s=()=>a,o={setState:n,getState:s,subscribe:(e,n,o)=>n||o?((e,n=s,o=Object.is)=>{let c=n(a);function p(){const t=n(a);if(!o(c,t)){const a=c;e(c=t,a)}}return t.add(p),()=>t.delete(p)})(e,n,o):(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return a=e(n,s,o),o}const o="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?n.useEffect:n.useLayoutEffect;a.Z=function(e){const a="function"===typeof e?s(e):e,t=(e=a.getState,t=Object.is)=>{const[,s]=(0,n.useReducer)((e=>e+1),0),c=a.getState(),p=(0,n.useRef)(c),r=(0,n.useRef)(e),m=(0,n.useRef)(t),k=(0,n.useRef)(!1),N=(0,n.useRef)();let u;void 0===N.current&&(N.current=e(c));let l=!1;(p.current!==c||r.current!==e||m.current!==t||k.current)&&(u=e(c),l=!t(N.current,u)),o((()=>{l&&(N.current=u),p.current=c,r.current=e,m.current=t,k.current=!1}));const d=(0,n.useRef)(c);return o((()=>{const e=()=>{try{const e=a.getState(),t=r.current(e);m.current(N.current,t)||(p.current=e,N.current=t,s())}catch(e){k.current=!0,s()}},t=a.subscribe(e);return a.getState()!==d.current&&e(),t}),[]),l?u:N.current};return Object.assign(t,a),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[t,a];return{next(){const a=e.length<=0;return{value:e.shift(),done:a}}}},t}},9148:function(e,a){"use strict";a.Z=function(e){let a;const t=new Set,n=(e,n)=>{const s="function"===typeof e?e(a):e;if(s!==a){const e=a;a=n?s:Object.assign({},a,s),t.forEach((t=>t(a,e)))}},s=()=>a,o={setState:n,getState:s,subscribe:(e,n,o)=>n||o?((e,n=s,o=Object.is)=>{let c=n(a);function p(){const t=n(a);if(!o(c,t)){const a=c;e(c=t,a)}}return t.add(p),()=>t.delete(p)})(e,n,o):(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return a=e(n,s,o),o}}},function(e){e.O(0,[667,734,839,774,888,179],(function(){return a=7017,e(e.s=a);var a}));var a=e.O();_N_E=a}]);