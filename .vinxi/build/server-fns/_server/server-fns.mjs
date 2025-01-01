import{fromJSON as A,crossSerializeStream as z,getCrossReferenceHeader as _}from"seroval";import{CustomEventPlugin as w,DOMExceptionPlugin as R,EventPlugin as S,FormDataPlugin as v,HeadersPlugin as $,ReadableStreamPlugin as E,RequestPlugin as b,ResponsePlugin as T,URLSearchParamsPlugin as P,URLPlugin as k}from"seroval-plugins/web";import{lazy as W,createComponent as G,sharedConfig as D}from"solid-js";import{ssrElement as h,escape as F,mergeProps as J,ssr as V,isServer as K,getRequestEvent as Q,renderToString as Y}from"solid-js/web";import{provideRequestEvent as M}from"solid-js/web/storage";import{g as Z,s as ee,a as te,m as L,b as O,c as m,d as re}from"./fetchEvent.mjs";import{eventHandler as ne}from"h3";import"node:async_hooks";import{createRouter as se}from"radix3";const g="Invariant Violation",{setPrototypeOf:ae=function(e,r){return e.__proto__=r,e}}=Object;class x extends Error{framesToPop=1;name=g;constructor(r=g){super(typeof r=="number"?`${g}: ${r} (see https://github.com/apollographql/invariant-packages)`:r),ae(this,x.prototype)}}function oe(e,r){if(!e)throw new x(r)}const N=[{page:!0,$component:{src:"src/routes/admin.tsx?pick=default&pick=$css",build:()=>import("./admin.mjs"),import:()=>import("./admin.mjs")},path:"/admin",filePath:"D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/src/routes/admin.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("./index.mjs"),import:()=>import("./index.mjs")},path:"/",filePath:"D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/src/routes/index.tsx"},{page:!1,$GET:{src:"src/routes/api/auth/[...solidauth].ts?pick=GET",build:()=>import("./_...solidauth_.mjs"),import:()=>import("./_...solidauth_.mjs")},$HEAD:{src:"src/routes/api/auth/[...solidauth].ts?pick=GET",build:()=>import("./_...solidauth_.mjs"),import:()=>import("./_...solidauth_.mjs")},$POST:{src:"src/routes/api/auth/[...solidauth].ts?pick=POST",build:()=>import("./_...solidauth_2.mjs"),import:()=>import("./_...solidauth_2.mjs")},path:"/api/auth/*solidauth",filePath:"D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/src/routes/api/auth/[...solidauth].ts"}],ie=ce(N.filter(e=>e.page));function ce(e){function r(t,a,s,i){const c=Object.values(t).find(o=>s.startsWith(o.id+"/"));return c?(r(c.children||(c.children=[]),a,s.slice(c.id.length)),t):(t.push({...a,id:s,path:s.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,a)=>t.path.length-a.path.length).reduce((t,a)=>r(t,a,a.path,a.path),[])}function ue(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}se({routes:N.reduce((e,r)=>{if(!ue(r))return e;let t=r.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(a,s)=>`**:${s}`).split("/").map(a=>a.startsWith(":")||a.startsWith("*")?a:encodeURIComponent(a)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${r.path}"`);return e[t]={route:r},e},{})});function le(e){e.forEach(r=>{if(!r.attrs.href)return;let t=document.head.querySelector(`link[href="${r.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",r.attrs.href),document.head.appendChild(t))})}var pe=" ";const de={style:e=>h("style",e.attrs,()=>F(e.children),!0),link:e=>h("link",e.attrs,void 0,!0),script:e=>e.attrs.src?h("script",J(()=>e.attrs,{get id(){return e.key}}),()=>V(pe),!0):null,noscript:e=>h("noscript",e.attrs,()=>F(e.children),!0)};function fe(e,r){let{tag:t,attrs:{key:a,...s}={key:void 0},children:i}=e;return de[t]({attrs:{...s,nonce:r},key:a,children:i})}function he(e,r,t,a="default"){return W(async()=>{{const i=(await e.import())[a],o=(await r.inputs?.[e.src].assets()).filter(d=>d.tag==="style"||d.attrs.rel==="stylesheet");return typeof window<"u"&&le(o),{default:d=>[...o.map(l=>fe(l)),G(i,d)]}}})}function B(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&he(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return ie.map(e)}let H;const Ce=K?()=>Q().routes:()=>H||(H=B());function me(e){const r=Z(e.nativeEvent,"flash");if(r)try{let t=JSON.parse(r);if(!t||!t.result)return;const a=[...t.input.slice(0,-1),new Map(t.input[t.input.length-1])],s=t.error?new Error(t.result):t.result;return{input:a,url:t.url,pending:!1,result:t.thrown?void 0:s,error:t.thrown?s:void 0}}catch(t){console.error(t)}finally{ee(e.nativeEvent,"flash","",{maxAge:0})}}async function ge(e){const r=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await r.json(),assets:[...await r.inputs[r.handler].assets()],router:{submission:me(e)},routes:B(),complete:!1,$islands:new Set})}const ye=new Set([301,302,303,307,308]);function we(e){return e.status&&ye.has(e.status)?e.status:302}function Re(e){const r=new TextEncoder().encode(e),t=r.length,a=t.toString(16),s="00000000".substring(0,8-a.length)+a,i=new TextEncoder().encode(`;0x${s};`),c=new Uint8Array(12+t);return c.set(i),c.set(r,12),c}function I(e,r){return new ReadableStream({start(t){z(r,{scopeId:e,plugins:[w,R,S,v,$,E,b,T,P,k],onSerialize(a,s){t.enqueue(Re(s?`(${_(e)},${a})`:a))},onDone(){t.close()},onError(a){t.error(a)}})}})}async function Se(e){const r=te(e),t=r.request,a=t.headers.get("X-Server-Id"),s=t.headers.get("X-Server-Instance"),i=t.headers.has("X-Single-Flight"),c=new URL(t.url);let o,p;if(a)oe(typeof a=="string","Invalid server function"),[o,p]=a.split("#");else if(o=c.searchParams.get("id"),p=c.searchParams.get("name"),!o||!p)throw new Error("Invalid request");const d=(await globalThis.MANIFEST["server-fns"].chunks[o].import())[p];let l=[];if(!s||e.method==="GET"){const n=c.searchParams.get("args");if(n){const u=JSON.parse(n);(u.t?A(u,{plugins:[w,R,S,v,$,E,b,T,P,k]}):u).forEach(f=>l.push(f))}}if(e.method==="POST"){const n=t.headers.get("content-type"),u=e.node.req,f=u instanceof ReadableStream,q=f&&u.locked,C=f?u:u.body;if(n?.startsWith("multipart/form-data")||n?.startsWith("application/x-www-form-urlencoded"))l.push(await(q?t:new Request(t,{...t,body:C})).formData());else if(n?.startsWith("application/json")){const X=q?t:new Request(t,{...t,body:C});l=A(await X.json(),{plugins:[w,R,S,v,$,E,b,T,P,k]})}}try{let n=await M(r,async()=>(D.context={event:r},r.locals.serverFunctionMeta={id:o+"#"+p},d(...l)));if(i&&s&&(n=await j(r,n)),n instanceof Response){if(n.headers&&n.headers.has("X-Content-Raw"))return n;s&&(n.headers&&L(e,n.headers),n.status&&(n.status<300||n.status>=400)&&O(e,n.status),n.customBody?n=await n.customBody():n.body==null&&(n=null))}return s?(m(e,"content-type","text/javascript"),I(s,n)):U(n,t,l)}catch(n){if(n instanceof Response)i&&s&&(n=await j(r,n)),n.headers&&L(e,n.headers),n.status&&(!s||n.status<300||n.status>=400)&&O(e,n.status),n.customBody?n=n.customBody():n.body==null&&(n=null),m(e,"X-Error","true");else if(s){const u=n instanceof Error?n.message:typeof n=="string"?n:"true";m(e,"X-Error",u.replace(/[\r\n]+/g,""))}else n=U(n,t,l,!0);return s?(m(e,"content-type","text/javascript"),I(s,n)):n}}function U(e,r,t,a){const s=new URL(r.url),i=e instanceof Error;let c=302,o;return e instanceof Response?(o=new Headers(e.headers),e.headers.has("Location")&&(o.set("Location",new URL(e.headers.get("Location"),s.origin+"").toString()),c=we(e))):o=new Headers({Location:new URL(r.headers.get("referer")).toString()}),e&&o.append("Set-Cookie",`flash=${encodeURIComponent(JSON.stringify({url:s.pathname+s.search,result:i?e.message:e,thrown:a,error:i,input:[...t.slice(0,-1),[...t[t.length-1].entries()]]}))}; Secure; HttpOnly;`),new Response(null,{status:c,headers:o})}let y;async function j(e,r){let t,a=new URL(e.request.headers.get("referer")).toString();r instanceof Response&&(r.headers.has("X-Revalidate")&&(t=r.headers.get("X-Revalidate").split(",")),r.headers.has("Location")&&(a=new URL(r.headers.get("Location"),new URL(e.request.url).origin+"").toString()));const s=re(e);return s.request=new Request(a,{headers:e.request.headers}),await M(s,async()=>{await ge(s),y||(y=(await import("./app.mjs")).default),s.router.dataOnly=t||!0,s.router.previousUrl=e.request.headers.get("referer");try{Y(()=>{D.context.event=s,y()})}catch(o){console.log(o)}const i=s.router.data;if(!i)return r;let c=!1;for(const o in i)i[o]===void 0?delete i[o]:c=!0;return c&&(r instanceof Response?r.customBody&&(i._$value=r.customBody()):(i._$value=r,r=new Response(null,{status:200})),r.customBody=()=>i,r.headers.set("X-Single-Flight","true")),r})}const Ae=ne(Se);export{Ce as F,Ae as h};