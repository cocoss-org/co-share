"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{9956:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.Action=void 0;var o=n(3349);function i(e,t){var n=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return t.forEach((function(t){return t.publish.apply(t,r([e],n,!1))}))},i=function(e,n){for(var i=[],c=2;c<arguments.length;c++)i[c-2]=arguments[c];try{t.apply(e,r([n],i,!0))}catch(a){o.LogAction.publishTo([n],a)}};return{publishTo:n,forwardFrom:i,execute:t,identifier:e,bindTo:c.bind(void 0,e,t,n,i)}}function c(e,t,n,o,i,c){var u=Object.assign(t.bind(i,void 0),{forwardFrom:o.bind(void 0,i),publishTo:function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var c=a(e,Array.from(i.linkSet));n.apply(void 0,r([c],t,!1))},identifier:e});if(!c&&i.actionMap.has(e))throw'Action "'.concat(e,'" already exists on store (').concat(i,"). If you want to overwrite the action, set the overwrite parameter to true.");return i.actionMap.set(e,u),u}function a(e,t){switch(e.to){case"all":return t;case"all-except-one":return t.filter((function(t){return t!=e.except}));case"all-except-multiple":return t.filter((function(t){return!e.except.includes(t)}));case"all-fiter":return t.filter(e.filter);case"one":return[e.one]}}t.Action={create:function(e,t,n,r){return void 0===r&&(r=!1),i(t,n).bindTo(e,r)},createUnbound:i}},6480:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},3349:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.rootStore=t.createRootStore=t.isBrowser=void 0,t.isBrowser=function(){return![typeof window,typeof document].includes("undefined")},o(n(6480),t),o(n(4948),t),o(n(7131),t),o(n(9956),t),o(n(970),t),o(n(6630),t),o(n(5123),t);var i=n(5123);function c(){return new i.RootStore(new Map)}t.createRootStore=c,t.rootStore=c()},8077:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2698),t)},2698:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useStoreSubscription=void 0;var o=n(7378),i=n(5165),c=n(4487),a=n(3349),u=Symbol();t.useStoreSubscription=function(e,t,n,s,l,f){void 0===l&&(l=a.rootStore),void 0===f&&(f=l.mainLink);var d=(0,c.suspend)((function(){return l.subscribe(e,f,n).pipe((0,i.retryWhen)((function(e){return e.pipe((0,i.delay)(t))})),(0,i.map)((function(e){return{store:e[0],storeLink:e[1],referenceCount:0}}))).toPromise()}),r(r([t,e,l,f],null!==s&&void 0!==s?s:[],!0),[u],!1));return(0,o.useEffect)((function(){return d.referenceCount+=1,function(){d.referenceCount-=1,0===d.referenceCount&&(a.UnsubscribeAction.publishTo([d.storeLink]),l.destroyStore(d.store,e),(0,c.clear)(r(r([t,e,l,f],null!==s&&void 0!==s?s:[],!0),[u],!1)))}}),[d]),d.store}},6630:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.takeOneOptional=t.catchFunction=t.Request=void 0;var o=n(4039),i=n(5165),c=n(9956);function a(e,t,n){void 0===n&&(n=!1);var a=new o.Subject,f=new o.Subject,d=new o.Subject,h=new o.Subject,b="next_".concat(e),p="error_".concat(e),v="complete_".concat(e),m="request_".concat(e),g="cancel_".concat(e),x=c.Action.createUnbound(b,(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return a.next(t)})),y=c.Action.createUnbound(p,(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return d.next(t)})),S=c.Action.createUnbound(v,(function(e,t){return f.next(t)})),w=s.bind(void 0,t),j=c.Action.createUnbound(m,(function(e,t){for(var c=[],a=2;a<arguments.length;a++)c[a-2]=arguments[a];null!=e&&w.apply(void 0,r([this,e],c,!1)).pipe(l(!n),(0,i.tap)((function(n){return x.publishTo([e],t,n)}),(function(n){return y.publishTo([e],t,n)}),(function(){n&&S.publishTo([e],t)})),(0,i.catchError)((function(){return o.EMPTY})),(0,i.takeUntil)(h.pipe((0,i.filter)((function(e){return e===t}))))).subscribe()})),k=c.Action.createUnbound(g,(function(e,t){return h.next(t)})),N=function(e){for(var t=[],c=1;c<arguments.length;c++)t[c-1]=arguments[c];return new o.Observable((function(c){var u=Math.round(Math.random()*Number.MAX_SAFE_INTEGER),s=(0,i.filter)((function(e){return e[0]===u})),h=!1,b=(0,o.merge)(a.pipe(s,l(!n),(0,i.tap)((function(e){e[0];var t=e[1];c.next(t),n||(h=!0,c.complete())}))),d.pipe(s,(0,i.tap)((function(e){e[0];var t=e[1];h=!0,c.error(t)}))),f.pipe((0,i.filter)((function(e){return e===u})),(0,i.tap)((function(){h=!0,c.complete()})))).subscribe();return j.publishTo.apply(j,r([[e],u],t,!1)),function(){h||(b.unsubscribe(),k.publishTo([e],u))}}))};return{execute:t,forwardFrom:w,publishTo:N,bindTo:u.bind(void 0,t,N,w,x,y,S,j,k)}}function u(e,t,n,r,o,i,c,a,u,s){return void 0===s&&(s=!1),r.bindTo(u,s),o.bindTo(u,s),i.bindTo(u,s),c.bindTo(u,s),a.bindTo(u,s),Object.assign(e.bind(u,void 0),{publishTo:t,forwardFrom:n.bind(void 0,u)})}function s(e,t,n){for(var i=[],c=3;c<arguments.length;c++)i[c-3]=arguments[c];try{return e.apply(t,r([n],i,!0))}catch(a){return(0,o.throwError)(a)}}function l(e){return e?(0,i.take)(1):function(e){return e}}t.Request={create:function(e,t,n,r,o){return void 0===r&&(r=!1),void 0===o&&(o=!1),a(t,n,r).bindTo(e,o)},createUnbound:a},t.catchFunction=s,t.takeOneOptional=l},5123:function(e,t,n){var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.RootStore=t.SubscribeRequest=void 0;var o=n(4039),i=n(5165),c=n(3349),a=n(970);t.SubscribeRequest=c.Request.createUnbound("requestSubscribe",(function(e,t,n){if(null==e)throw'subscribeToChild can only be executed remotely using "publish"';var r=this.storeMap.get(n);return null==r?(0,o.throwError)('unable to find store with path "'.concat(n,'"')):r instanceof r.subscriber.storeClass?new o.Observable((function(t){return r.subscriber(e.connection,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.next(e)}),(function(e){return t.error(e)}))})).pipe((0,i.tap)((function(){return r.link(t,e.connection)}))):(0,o.throwError)("Subscribed store has no correct implemented subscriber. Subscriber must be created with the store class.")}));var u=function(e){function n(r){var o=e.call(this)||this;return o.storeMap=r,o.subscriber=a.Subscriber.create(n,(function(e,t,n){return n("can't subscribe to the root store")})),o.requestSubscribe=t.SubscribeRequest.bindTo(o),o}return r(n,e),n.prototype.addStore=function(e,t){if(this.storeMap.has(t))throw'a store with the path "'.concat(t," was already added, a store's path must be unique inside one root store\"");this.storeMap.set(t,e)},n.prototype.destroyStore=function(e,t){var n=this.storeMap.get(t);if(null!=n){if(n===e)return this.storeMap.delete(t),void e.linkSet.forEach((function(e){return e.close()}));throw'the provided store with path "'.concat(t,"\" is occupied by another store and therefore can't be destroyed")}console.warn('no store on path "'.concat(t,'" found'))},n.prototype.subscribe=function(e,t,n){var r=this,o=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);return this.requestSubscribe.publishTo(t,o,e).pipe((0,i.map)((function(i){var c=n.apply(void 0,i);r.addStore(c,e);var a=c.link(o,t.connection);return[c,a]})))},n.prototype.onUnlink=function(e){},n.prototype.onLink=function(e){},n}(c.Store);t.RootStore=u},4948:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RootStoreDefaultLinkId=void 0,t.RootStoreDefaultLinkId=Number.MIN_SAFE_INTEGER},7131:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.Store=t.UnsubscribeAction=t.LogAction=void 0;var o=n(4039),i=n(5165),c=n(9956);t.LogAction=c.Action.createUnbound("log",(function(e,t){console.log(this,e,t)})),t.UnsubscribeAction=c.Action.createUnbound("unsubscribe",(function(e){if(null==e)throw"can't execute unsubscribe locally";e.close()}));var a=function(){function e(){this.actionMap=new Map,this.log=t.LogAction.bindTo(this),this.unsubscribe=t.UnsubscribeAction.bindTo(this),this.linkSet=new Set}return Object.defineProperty(e.prototype,"mainLink",{get:function(){if(1===this.linkSet.size)return this.linkSet.values().next().value;throw"unable to find exact one store link in the root store. If you have mutliple connections simulatenously, there is no 'main' link"},enumerable:!1,configurable:!0}),e.prototype.link=function(e,t){var n=this,c=new o.Subject,a={id:e,connection:t,close:function(){return c.next()},publish:function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t.publish.apply(t,r([e,n],o,!1))}};return this.linkSet.add(a),this.onLink(a),t.receive().pipe((0,i.takeUntil)(c),(0,i.filter)((function(t){var n=t[0];return e===n})),(0,i.tap)((function(e){var t=e[1],o=e.slice(2),i=n.actionMap.get(t);if(null!=i)try{i.forwardFrom.apply(i,r([a],o,!1))}catch(c){n.log.publishTo({to:"one",one:a},"error occured when executing ".concat(t,": ").concat(c))}else n.log.publishTo({to:"one",one:a},"unkown action ".concat(t))})),(0,i.finalize)((function(){n.linkSet.delete(a),n.onUnlink(a)}))).subscribe(),a},e}();t.Store=a},970:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Subscriber=void 0,t.Subscriber={create:function(e,t){return Object.assign(t,{storeClass:e})}}},9138:function(e,t,n){n.d(t,{$:function(){return c}});var r=n(5675),o=n(4246),i=function(e){var t=e.src;return"/co-share".concat(t)};function c(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex-grow-1"}),(0,o.jsx)("footer",{className:"bg-light",children:(0,o.jsxs)("div",{className:"d-flex align-items-center justify-content-around p-3 container-lg",children:[(0,o.jsxs)("a",{target:"_blank",href:"https://github.com/cocoss-org/co-share",className:"mx-2 text-black d-flex flex-row align-items-center",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-github mx-2",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),(0,o.jsx)("span",{className:"h5 mb-0",children:"Github"})]}),(0,o.jsx)("a",{className:"d-flex mx-2",target:"_blank",href:"https://www.coconut-xr.com/",children:(0,o.jsx)(r.default,{loader:i,layout:"fixed",width:170,height:40,src:"/powered-by.svg"})})]})})]})}},1655:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(1664),o=n(7378),i=n(4246),c=[{title:"Tutorial",url:"/counter"},{title:"Request",url:"/request"},{title:"Message",url:"/message"},{title:"Lockable",url:"/lockable"},{title:"Optimistic Lockable",url:"/optimistic-lockable"},{title:"Whiteboard",url:"/whiteboard"},{title:"Transformable",url:"/transformable"},{title:"Consistent",url:"/consistent"}];function a(e){var t=e.selectedIndex,n=(0,o.useState)(!1),a=n[0],u=n[1];return(0,i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)(r.default,{href:"/",passHref:!0,children:(0,i.jsx)("a",{className:"navbar-brand",children:"co-share examples"})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){return u(!a)},"data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"navbar-toggler-icon"})}),(0,i.jsx)("div",{className:"align-self-flex-end navbar-collapse ".concat(a?"":"collapse"),children:(0,i.jsx)("ul",{className:"navbar-nav",children:c.map((function(e,n){var o=e.title,c=e.url;return(0,i.jsx)("li",{className:"nav-item",children:n===t?(0,i.jsx)("span",{style:{cursor:"pointer"},className:"active nav-link",children:o}):(0,i.jsx)(r.default,{href:c,passHref:!0,children:(0,i.jsx)("a",{className:"nav-link",children:o})})},o)}))})})]})})}},4467:function(e,t,n){n.d(t,{X:function(){return g}});var r=n(7378),o=n(3349),i=n(4942),c=n(5785),a=n(5861),u=n(5671),s=n(3144),l=n(7757),f=n.n(l),d=n(2952),h=function(){function e(t,n){(0,u.Z)(this,e),this.rootStore=t,this.log=n}return(0,s.Z)(e,[{key:"createConnection",value:function(){var e=(0,a.Z)(f().mark((function e(t,n,r){var i,a,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(r);case 2:return i=new d.xQ,this.log&&i.subscribe((function(e){var n;return(n=console).log.apply(n,["client ".concat(t," to server:")].concat((0,c.Z)(e)))})),a=new b(t,i),u={userData:{id:t},disconnect:function(){return a.serverDisconnected()},publish:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.sendToClient(JSON.parse(JSON.stringify(t)))},receive:function(){return i}},this.log&&console.log("client ".concat(t," connected to server")),this.rootStore.link(o.RootStoreDefaultLinkId,u),e.next=10,p(n);case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),b=function(){function e(t,n){(0,u.Z)(this,e),this.clientToServerSubject=n,(0,i.Z)(this,"userData",void 0),(0,i.Z)(this,"incommingLatency",0),(0,i.Z)(this,"outgoingLatency",0),(0,i.Z)(this,"receiveSubject",new d.xQ),this.userData={id:t}}return(0,s.Z)(e,[{key:"publish",value:function(e,t){for(var n=this,r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];setTimeout((function(){return n.clientToServerSubject.next(JSON.parse(JSON.stringify([e,t].concat(o))))}),this.outgoingLatency)}},{key:"sendToClient",value:function(e){var t=this;setTimeout((function(){return t.receiveSubject.next(e)}),this.incommingLatency)}},{key:"receive",value:function(){return this.receiveSubject}},{key:"disconnect",value:function(){var e=this;this.receiveSubject.complete(),setTimeout((function(){e.clientToServerSubject.complete()}),this.outgoingLatency)}},{key:"serverDisconnected",value:function(){var e=this;this.clientToServerSubject.complete(),setTimeout((function(){e.receiveSubject.complete()}),this.incommingLatency)}}]),e}();function p(e){return new Promise((function(t){return setTimeout(t,e)}))}var v=n(4246),m=["Alice","Bob"];function g(e){var t=e.children,n=e.initStores,i=e.twoClients,c=e.defaultIncommingLatency,a=e.defaultOutgoingLatency,u=e.defaultNetworkSettingsCollapsed,s=(0,r.useMemo)((function(){var e=(0,o.createRootStore)();return n(e),new h(e,!1)}),[n,i]);return i?(0,v.jsx)(v.Fragment,{children:m.map((function(e){return(0,v.jsx)(y,{defaultNetworkSettingsCollapsed:u,defaultOutgoingLatency:a,defaultIncommingLatency:c,children:t,id:e,serverStub:s},e)}))}):(0,v.jsx)(x,{children:t,id:"test",serverStub:s})}function x(e){var t=e.id,n=e.serverStub,o=e.children,i=(0,r.useState)(void 0),c=i[0],a=i[1];return(0,r.useEffect)((function(){var e=!1;return n.createConnection(t,0,0).then((function(t){e||a(t)})),function(){e=!1}}),[n,t]),(0,v.jsx)("div",{className:"d-flex flex-column flex-grow-1 flex-basis-0 m-3 flex-shrink-1",children:(0,v.jsx)("div",{className:"flex-grow-1 flex-basis-0 border border-2 rounded-3",children:null==c?"Not Conncted":(0,v.jsx)(S,{connection:c,children:o})})})}function y(e){var t=e.id,n=e.children,o=e.serverStub,i=e.defaultIncommingLatency,c=e.defaultOutgoingLatency,a=e.defaultNetworkSettingsCollapsed,u=(0,r.useState)(void 0),s=u[0],l=u[1],f=(0,r.useState)(null!==i&&void 0!==i?i:0),d=f[0],h=f[1],b=(0,r.useState)(null!==c&&void 0!==c?c:0),p=b[0],m=b[1],g=(0,r.useState)(!1),x=g[0],y=g[1],w=(0,r.useState)(!1),j=w[0],k=w[1],N=(0,r.useState)(null===a||void 0===a||a),_=N[0],T=N[1];(0,r.useEffect)((function(){if(x){var e=setInterval((function(){return h(Math.floor(500*Math.random()))}),200);return function(){return clearInterval(e)}}}),[x]),(0,r.useEffect)((function(){if(j){var e=setInterval((function(){return m(Math.floor(500*Math.random()))}),200);return function(){return clearInterval(e)}}}),[j]),(0,r.useEffect)((function(){null!=s&&(s.incommingLatency=d,s.outgoingLatency=p)}),[s,d,p]);var A=(0,r.useState)(!0),O=A[0],M=A[1],C=(0,r.useCallback)((function(){return M((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){return function(){null!=s&&s.disconnect()}}),[s]),(0,r.useEffect)((function(){if(O){var e=!1;return o.createConnection(t,d,p).then((function(t){e||l(t)})),function(){e=!0}}l(void 0)}),[t,o,O]),(0,v.jsxs)("div",{className:"d-flex flex-column flex-grow-1 flex-basis-0 m-3 flex-shrink-1",children:[(0,v.jsxs)("div",{className:"d-flex flex-row my-3 align-items-center",children:[(0,v.jsx)("h6",{className:"mb-0",children:t}),(0,v.jsx)("button",{onClick:C,className:"ms-3 btn btn-sm btn-outline-secondary",children:O?"disconnect":"connect"})]}),(0,v.jsx)("button",{onClick:function(){return T(!_)},className:"border accordion-button mb-3 ".concat(_?"collapsed":""),type:"button",children:"Network Settings"}),(0,v.jsxs)("div",{className:"accordion-collapse ".concat(_?"collapse":""),children:[(0,v.jsxs)("div",{className:"mb-3 d-flex flex-row align-items-start",children:[(0,v.jsx)("label",{className:"col-sm-4 col-form-label me-2 text-nowrap",children:"Incomming Latency"}),(0,v.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[(0,v.jsx)("input",{className:"form-control",type:"number",disabled:x,onChange:function(e){return h(e.target.valueAsNumber)},value:d}),(0,v.jsxs)("div",{className:"d-flex flex-row mt-2",children:[(0,v.jsx)("input",{checked:x,onChange:function(e){return y(e.target.checked)},className:"form-check-input me-2",type:"checkbox"}),(0,v.jsx)("label",{className:"form-check-label",children:"Randomize"})]})]})]}),(0,v.jsxs)("div",{className:"mb-3 d-flex flex-row align-items-start",children:[(0,v.jsx)("label",{className:"col-sm-4 col-form-label me-2 text-nowrap",children:"Outgoing Latency"}),(0,v.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[(0,v.jsx)("input",{className:"form-control",type:"number",disabled:j,onChange:function(e){return m(e.target.valueAsNumber)},value:p}),(0,v.jsxs)("div",{className:"d-flex flex-row mt-2",children:[(0,v.jsx)("input",{checked:j,onChange:function(e){return k(e.target.checked)},className:"form-check-input me-2",type:"checkbox"}),(0,v.jsx)("label",{className:"form-check-label",children:"Randomize"})]})]})]})]}),(0,v.jsx)("div",{className:"flex-basis-0 border border-2 rounded-3",children:null==s?O?"Connecting ...":"Not Conncted":(0,v.jsx)(S,{connection:s,children:n})})]})}function S(e){var t=e.children,n=e.connection,i=(0,r.useMemo)((function(){var e=(0,o.createRootStore)();return e.link(o.RootStoreDefaultLinkId,n),e}),[n]);return(0,v.jsx)(r.Suspense,{fallback:"loading ...",children:t(i)})}}}]);