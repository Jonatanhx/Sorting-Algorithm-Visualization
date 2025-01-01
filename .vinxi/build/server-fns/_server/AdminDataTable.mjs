import{getRequestEvent as vt,isServer as Z,createComponent as n,mergeProps as l,ssrElement as O,escape as R,ssr as k,ssrHydrationKey as $,ssrStyle as bt,Portal as xt}from"solid-js/web";import{createContext as Y,useContext as _,createResource as wt,splitProps as g,createSignal as y,createMemo as H,createEffect as F,onCleanup as L,on as Q,Show as ee,createUniqueId as te,batch as Ce}from"solid-js";import{g as me,p as yt,c as Ct}from"./utils.mjs";import{CountryDataContext as fe}from"./c_9hizgz.mjs";import{z as G}from"zod";import{deleteCountry as It}from"./c_ol5iyx.mjs";import{m as V,P as S,f as E,g as Dt,h as Vt,i as Pt,b as re,j as z,_ as pe,v as Ft,k as he,u as Tt,c as $e,B as ve,s as Ie,l as De,e as v,n as X,o as Ot,p as St,q as Nt,D as Rt,r as kt,t as Ve,d as At,w as Pe}from"./index2.mjs";import{access as h}from"@solid-primitives/utils";import{NumberParser as Et,NumberFormatter as $t}from"@internationalized/number";import{cva as Lt}from"class-variance-authority";import{combineStyle as Mt}from"@solid-primitives/props";const Le=Y(void 0),Fe=t=>t===null?{status:"unauthenticated",data:null}:t?{status:"authenticated",data:t}:{status:"loading",data:void 0},Rr=()=>{const t=_(Le);if(!t)throw new Error("[@solid-mediakit/auth]: `useAuth` must be wrapped in a <SessionProvider />");return{signIn:async(o,a,s)=>await zt(t.refetchSessionState,o,a,s),signOut:async o=>await Ht(t.refetchSessionState,o),status:()=>t.sessionState().status,session:()=>t.sessionState().data,refetch:async o=>await t.refetchSessionState(o)}},_t=t=>t.locals?.session?t.locals.session:t.nativeEvent?.context?.session;function kr(t){const r=vt(),e=Z?_t(r):void 0,o=async()=>{try{const c=await Bt(r);return c?{status:"authenticated",data:c}:{status:"unauthenticated",data:null}}catch(c){return console.error("@solid-mediakit/auth error",c),{status:"unauthenticated",data:null}}},[a,{refetch:s}]=wt(async(c,i)=>{const u=typeof i.refetching=="object"?i.refetching.force:!1,d=i.value;return Z&&e!==void 0&&!u?Fe(e):!u&&d?.status!=="loading"?d:await o()},{initialValue:e?Fe(e):{status:"loading",data:void 0},deferStream:t.deferStream??!0});return n(Le.Provider,{value:{sessionState:a,refetchSessionState:async c=>{const i=await s({force:c??!1});return i??{status:"loading",data:void 0}}},get children(){return t.children}})}const qt=t=>typeof window>"u"?`${yt(Ct("AUTH_URL_INTERNAL","AUTH_URL","VERCEL_URL")).origin}${t}`:t,Bt=async t=>{let r;if(Z&&t?.request){const a=t.request.headers.get("cookie");a&&(r={headers:{cookie:a}})}const e=await fetch(qt(`${me()}/session`),r);if(Z&&t?.request&&t?.response){const a=e.headers.get("set-cookie");if(a)try{t.response.headers.append("set-cookie",a??"")}catch{}}const o=await e.json();if(!e.ok)throw new Error(o.error);return!o||Object.keys(o).length===0?null:o};async function zt(t,r,e,o){const{callbackUrl:a=window.location.href,redirect:s=!0}=e??{},c=r==="credentials",u=c||r==="email",d=me(),I=`${`${d}/${c?"callback":"signin"}/${r}`}?${new URLSearchParams(o)}`,f=await fetch(`${d}/csrf`),{csrfToken:p}=await f.json(),b=await fetch(I,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({...e,csrfToken:p,callbackUrl:a})}),x=await b.clone().json();if(s||!u){window.location.href=x.url??a,x.url.includes("#")&&window.location.reload();return}const D=new URL(x.url).searchParams.get("error"),N=new URL(x.url).searchParams.get("code");return b.ok&&await t(!0),{error:D,code:N,status:b.status,ok:b.ok,url:D?null:x.url}}async function Ht(t,r){const{redirectTo:e=window.location.href}=r??{},o=me(),a=await fetch(`${o}/csrf`),{csrfToken:s}=await a.json(),i=await(await fetch(`${o}/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({csrfToken:s,callbackUrl:e})})).json();if(r?.redirect??!0){const u=i.url??e;window.location.href=u,u.includes("#")&&window.location.reload();return}return await t(!0),i}function ne(t,r){const e=l(t.a,r),[o,a]=g(e,["src"]),[s,c]=y(""),i=H(()=>r.title?`${t.c}<title>${r.title}</title>`:t.c);return F(()=>c(i())),L(()=>{c("")}),O("svg",l({get stroke(){return t.a?.stroke},get color(){return r.color||"currentColor"},get fill(){return r.color||"currentColor"},"stroke-width":"0",get style(){return{...r.style,overflow:"visible"}}},a,{get height(){return r.size||"1em"},get width(){return r.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return s()}}),()=>Z&&R(k(i())),!0)}function Ar(t){return ne({a:{viewBox:"0 0 1024 1024"},c:'<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>'},t)}function Er(t){return ne({a:{viewBox:"0 0 1024 1024"},c:'<path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"/>'},t)}function $r(t){return ne({a:{viewBox:"0 0 1024 1024"},c:'<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"/>'},t)}function Ut(t){return ne({a:{viewBox:"0 0 1024 1024"},c:'<defs><style/></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"/><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z"/>'},t)}const jt=G.object({name:G.string().min(4,"Name must be at least 4 characters long"),populationSize:G.number().positive().max(1429e6,"Population size cannot exceed 1,429,000,000"),landArea:G.number().positive().max(1429e6,"Land area cannot exceed 1,429,000,000 km²")});var Kt={empty:"Empty"};function Wt(t){const r=V({translations:Kt},t),[e,o]=g(r,["translations","value","textValue","minValue","maxValue","validationState","onIncrement","onIncrementPage","onDecrement","onDecrementPage","onDecrementToMin","onIncrementToMax","onKeyDown","onFocus","onBlur"]);let a=!1;const s=H(()=>e.textValue===""?e.translations?.empty:(e.textValue||`${e.value}`).replace("-","−")),c=d=>{if(E(d,e.onKeyDown),!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey||t.readOnly))switch(d.key){case"PageUp":if(e.onIncrementPage){d.preventDefault(),e.onIncrementPage();break}case"ArrowUp":case"Up":e.onIncrement&&(d.preventDefault(),e.onIncrement());break;case"PageDown":if(e.onDecrementPage){d.preventDefault(),e.onDecrementPage();break}case"ArrowDown":case"Down":e.onDecrement&&(d.preventDefault(),e.onDecrement());break;case"Home":e.onDecrementToMin&&(d.preventDefault(),e.onDecrementToMin());break;case"End":e.onIncrementToMax&&(d.preventDefault(),e.onIncrementToMax());break}},i=d=>{E(d,e.onFocus),a=!0},u=d=>{E(d,e.onBlur),a=!1};return F(Q(s,d=>{a&&(Dt("assertive"),Vt(d??"","assertive"))})),n(S,l({as:"div",role:"spinbutton",get"aria-valuenow"(){return e.value!=null&&!Number.isNaN(e.value)?e.value:void 0},get"aria-valuetext"(){return s()},get"aria-valuemin"(){return e.minValue},get"aria-valuemax"(){return e.maxValue},get"aria-required"(){return t.required||void 0},get"aria-disabled"(){return t.disabled||void 0},get"aria-readonly"(){return t.readOnly||void 0},get"aria-invalid"(){return e.validationState==="invalid"||void 0},onKeyDown:c,onFocus:i,onBlur:u},o))}var Me=["id","name","validationState","required","disabled","readOnly"];function _e(t){const r=`form-control-${te()}`,e=V({id:r},t),[o,a]=y(),[s,c]=y(),[i,u]=y(),[d,C]=y(),I=(x,D,N)=>{const K=N!=null||o()!=null;return[N,o(),K&&D!=null?x:void 0].filter(Boolean).join(" ")||void 0},f=x=>[i(),d(),x].filter(Boolean).join(" ")||void 0,p=H(()=>({"data-valid":h(e.validationState)==="valid"?"":void 0,"data-invalid":h(e.validationState)==="invalid"?"":void 0,"data-required":h(e.required)?"":void 0,"data-disabled":h(e.disabled)?"":void 0,"data-readonly":h(e.readOnly)?"":void 0}));return{formControlContext:{name:()=>h(e.name)??h(e.id),dataset:p,validationState:()=>h(e.validationState),isRequired:()=>h(e.required),isDisabled:()=>h(e.disabled),isReadOnly:()=>h(e.readOnly),labelId:o,fieldId:s,descriptionId:i,errorMessageId:d,getAriaLabelledBy:I,getAriaDescribedBy:f,generateId:re(()=>h(e.id)),registerLabel:z(a),registerField:z(c),registerDescription:z(u),registerErrorMessage:z(C)}}}var be=Y();function q(){const t=_(be);if(t===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return t}function ae(t){const r=q(),e=V({id:r.generateId("description")},t);return F(()=>L(r.registerDescription(e.id))),n(S,l({as:"div"},()=>r.dataset(),e))}function oe(t){const r=q(),e=V({id:r.generateId("error-message")},t),[o,a]=g(e,["forceMount"]),s=()=>r.validationState()==="invalid";return F(()=>{s()&&L(r.registerErrorMessage(a.id))}),n(ee,{get when(){return o.forceMount||s()},get children(){return n(S,l({as:"div"},()=>r.dataset(),a))}})}function se(t){let r;const e=q(),o=V({id:e.generateId("label")},t),[a,s]=g(o,["ref"]),c=Pt(()=>r,()=>"label");return F(()=>L(e.registerLabel(s.id))),n(S,l({as:"label",get for(){return c()==="label"?e.fieldId():void 0}},()=>e.dataset(),s))}var qe=["id","aria-label","aria-labelledby","aria-describedby"];function Be(t){const r=q(),e=V({id:r.generateId("field")},t);return F(()=>L(r.registerField(h(e.id)))),{fieldProps:{id:()=>h(e.id),ariaLabel:()=>h(e["aria-label"]),ariaLabelledBy:()=>r.getAriaLabelledBy(h(e.id),h(e["aria-label"]),h(e["aria-labelledby"])),ariaDescribedBy:()=>r.getAriaDescribedBy(h(e["aria-describedby"]))}}}function ze(t,r){F(Q(t,e=>{if(e==null)return;const o=Gt(e);o!=null&&(o.addEventListener("reset",r,{passive:!0}),L(()=>{o.removeEventListener("reset",r)}))}))}function Gt(t){return Xt(t)?t.form:t.closest("form")}function Xt(t){return t.matches("textarea, input, select, button")}var Zt=["<div",' style="','" aria-hidden="true">',"</div>"],Yt={};pe(Yt,{DecrementTrigger:()=>je,Description:()=>ae,ErrorMessage:()=>oe,HiddenInput:()=>Ke,IncrementTrigger:()=>We,Input:()=>Ge,Label:()=>se,NumberField:()=>B,Root:()=>Xe});var He=Y();function xe(){const t=_(He);if(t===void 0)throw new Error("[kobalte]: `useNumberFieldContext` must be used within a `NumberField` component");return t}function Ue(t){const r=q(),e=xe(),[o,a]=g(t,["numberFieldVaryType","onClick"]);return n(ve,l({tabIndex:-1,get disabled(){return r.isDisabled()||e.rawValue()===(o.numberFieldVaryType==="increment"?e.maxValue():e.minValue())},get"aria-controls"(){return r.fieldId()},onClick:s=>{E(s,o.onClick),e.varyValue(e.step()*(o.numberFieldVaryType==="increment"?1:-1)),e.inputRef()?.focus()}},a))}function je(t){return n(Ue,l({numberFieldVaryType:"decrement"},t))}function Ke(t){const r=xe(),[e,o]=g(t,["ref","onChange"]),a=q();return k(Zt,$(),bt(Ft),O("input",l({type:"text",tabIndex:-1,style:{"font-size":"16px"},get name(){return a.name()},get value(){return Number.isNaN(r.rawValue())?"":r.rawValue()},get required(){return a.isRequired()},get disabled(){return a.isDisabled()},get readOnly(){return a.isReadOnly()}},o),void 0,!1))}function We(t){return n(Ue,l({numberFieldVaryType:"increment"},t))}function Ge(t){const r=q(),e=xe(),o=V({id:e.generateId("input"),inputMode:"decimal",autocomplete:"off",autocorrect:"off",spellcheck:!1},t),[a,s,c]=g(o,["ref","onInput","onChange","onWheel","as"],qe),{fieldProps:i}=Be(s);return n(Wt,l({type:"text",get id(){return i.id()},get value(){return e.value()},get validationState(){return r.validationState()},get required(){return r.isRequired()},get disabled(){return r.isDisabled()},get readOnly(){return r.isReadOnly()},get textValue(){return e.textValue()},get minValue(){return e.minValue()},get maxValue(){return e.maxValue()},onIncrement:()=>{e.varyValue(e.step())},onIncrementPage:()=>{e.varyValue(e.largeStep())},onIncrementToMax:()=>{e.setValue(e.maxValue()),e.format()},onDecrement:()=>{e.varyValue(-e.step())},onDecrementPage:()=>{e.varyValue(-e.largeStep())},onDecrementToMin:()=>{e.setValue(e.minValue()),e.format()},get translations(){return e.translations()},onChange:u=>{E(u,a.onChange),e.format()},onWheel:u=>{E(u,a.onWheel),!(!e.changeOnWheel()||document.activeElement!==e.inputRef())&&(u.preventDefault(),u.deltaY<0?e.varyValue(e.step()):e.varyValue(-e.step()))},get onInput(){return he([a.onInput,e.onInput])},get"aria-label"(){return i.ariaLabel()},get"aria-labelledby"(){return i.ariaLabelledBy()},get"aria-describedby"(){return i.ariaDescribedBy()}},()=>r.dataset(),{as:u=>n(S,l({get as(){return a.as||"input"},get value(){return Number.isNaN(e.rawValue())||e.value()===void 0?"":e.formatNumber(e.rawValue())},get required(){return r.isRequired()},get disabled(){return r.isDisabled()},get readOnly(){return r.isReadOnly()}},u,c))}))}function Xe(t){let r;const e=`NumberField-${te()}`,o=V({id:e,format:!0,minValue:Number.MIN_SAFE_INTEGER,maxValue:Number.MAX_SAFE_INTEGER,step:1,changeOnWheel:!0},t),[a,s,c]=g(o,["ref","value","defaultValue","onChange","rawValue","onRawValueChange","translations","format","formatOptions","textValue","minValue","maxValue","step","largeStep","changeOnWheel","translations","allowedInput"],Me),{locale:i}=Tt(),u=H(()=>new Et(i(),a.formatOptions)),d=H(()=>new $t(i(),a.formatOptions)),C=m=>a.format?d().format(m):m.toString(),I=m=>a.format&&typeof m!="number"?u().parse(m??""):Number(m??""),f=m=>a.format&&typeof m!="number"?u().isValidPartialNumber(m??"",o.minValue,o.maxValue):!Number.isNaN(Number(m)),[p,b]=$e({value:()=>a.value,defaultValue:()=>a.defaultValue??a.rawValue,onChange:m=>{a.onChange?.(typeof m=="number"?C(m):m),a.onRawValueChange?.(I(m))}});p()!==void 0&&a.onRawValueChange?.(I(p()));function x(m){return a.allowedInput!==void 0?a.allowedInput.test(m):!0}const{formControlContext:D}=_e(s);ze(()=>r,()=>{b(a.defaultValue??"")});const[N,K]=y(),[M,le]=y(),ht=m=>{if(D.isReadOnly()||D.isDisabled())return;const w=m.target;let T=w.selectionStart;f(w.value)?(m.inputType!=="insertText"||x(m.data||""))&&b(w.value):m.inputType==="deleteContentBackward"&&T!==null&&(T+=1);const j=p();j!==w.value&&(w.value=String(j??""),T!==null&&(w.selectionStart=T,w.selectionEnd=T))},P={value:p,setValue:b,rawValue:()=>I(p()),generateId:re(()=>h(s.id)),formatNumber:C,format:()=>{if(!a.format)return;let m=P.rawValue();if(Number.isNaN(m)){M()&&(M().value=""),a.onRawValueChange?.(m);return}P.minValue()&&(m=Math.max(m,P.minValue())),P.maxValue()&&(m=Math.min(m,P.maxValue()));const w=P.formatNumber(m);p()!=w&&b(w),N()&&(N().value=w),M()&&(M().value=String(m))},onInput:ht,textValue:()=>a.textValue,minValue:()=>a.minValue,maxValue:()=>a.maxValue,step:()=>a.step,largeStep:()=>a.largeStep??a.step*10,changeOnWheel:()=>a.changeOnWheel,translations:()=>a.translations,inputRef:N,setInputRef:K,hiddenInputRef:M,setHiddenInputRef:le,varyValue:m=>{let w=P.rawValue()??0;Number.isNaN(w)&&(w=0),Ce(()=>{let T=w;const j=m>0?"+":"-",ce=Math.abs(m),we=t.minValue===void 0?Number.NaN:P.minValue(),ye=t.maxValue===void 0?Number.NaN:P.maxValue();T=Ie(w,we,ye,ce),j==="+"&&T>w||j==="-"&&T<w||(T=Ie(Jt(j,w,ce),we,ye,ce)),P.setValue(T),P.format()})}};return F(Q(()=>a.rawValue,m=>{if(m!==P.rawValue()){if(Number.isNaN(m))return;Ce(()=>{b(m??""),P.format()})}},{defer:!0})),n(be.Provider,{value:D,get children(){return n(He.Provider,{value:P,get children(){return n(S,l({as:"div",role:"group",get id(){return h(s.id)}},()=>D.dataset(),c))}})}})}function Jt(t,r,e){let o=t==="+"?r+e:r-e;if(Number.isFinite(r)&&Number.isFinite(e)&&(e%1!==0||r%1!==0)){const a=De(e),s=De(r),c=10**Math.max(a,s),i=Math.round(e*c),u=Math.round(r*c);o=(t==="+"?u+i:u-i)/c}return o}var B=Object.assign(Xe,{Description:ae,ErrorMessage:oe,HiddenInput:Ke,Input:Ge,IncrementTrigger:We,DecrementTrigger:je,Label:se}),Qt={};pe(Qt,{Description:()=>ae,ErrorMessage:()=>oe,Input:()=>Je,Label:()=>se,Root:()=>et,TextArea:()=>tt,TextField:()=>J});var Ze=Y();function Ye(){const t=_(Ze);if(t===void 0)throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");return t}function Je(t){return n(Qe,l({type:"text"},t))}function Qe(t){const r=q(),e=Ye(),o=V({id:e.generateId("input")},t),[a,s,c]=g(o,["onInput"],qe),{fieldProps:i}=Be(s);return n(S,l({as:"input",get id(){return i.id()},get name(){return r.name()},get value(){return e.value()},get required(){return r.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return r.isReadOnly()},get"aria-label"(){return i.ariaLabel()},get"aria-labelledby"(){return i.ariaLabelledBy()},get"aria-describedby"(){return i.ariaDescribedBy()},get"aria-invalid"(){return r.validationState()==="invalid"||void 0},get"aria-required"(){return r.isRequired()||void 0},get"aria-disabled"(){return r.isDisabled()||void 0},get"aria-readonly"(){return r.isReadOnly()||void 0},get onInput(){return he([a.onInput,e.onInput])}},()=>r.dataset(),c))}function et(t){let r;const e=`textfield-${te()}`,o=V({id:e},t),[a,s,c]=g(o,["ref","value","defaultValue","onChange"],Me),i=a.value,[u,d]=$e({value:()=>i===void 0?void 0:a.value??"",defaultValue:()=>a.defaultValue,onChange:p=>a.onChange?.(p)}),{formControlContext:C}=_e(s);ze(()=>r,()=>d(a.defaultValue??""));const I=p=>{if(C.isReadOnly()||C.isDisabled())return;const b=p.target;d(b.value),b.value=u()??""},f={value:u,generateId:re(()=>h(s.id)),onInput:I};return n(be.Provider,{value:C,get children(){return n(Ze.Provider,{value:f,get children(){return n(S,l({as:"div",role:"group",get id(){return h(s.id)}},()=>C.dataset(),c))}})}})}function tt(t){let r;const e=Ye(),o=V({id:e.generateId("textarea")},t),[a,s]=g(o,["ref","autoResize","submitOnEnter","onKeyPress"]);F(Q([()=>r,()=>a.autoResize,()=>e.value()],([i,u])=>{!i||!u||er(i)}));const c=i=>{};return n(Qe,l({as:"textarea",get"aria-multiline"(){return a.submitOnEnter?"false":void 0},get onKeyPress(){return he([a.onKeyPress,c])}},s))}function er(t){const r=t.style.alignSelf,e=t.style.overflow;"MozAppearance"in t.style||(t.style.overflow="hidden"),t.style.alignSelf="start",t.style.height="auto",t.style.height=`${t.scrollHeight+(t.offsetHeight-t.clientHeight)}px`,t.style.overflow=e,t.style.alignSelf=r}var J=Object.assign(et,{Description:ae,ErrorMessage:oe,Input:Je,Label:se,TextArea:tt});const tr=t=>{const[r,e]=g(t,["class"]);return n(J,l({get class(){return v("space-y-1",r.class)}},e))},ie=Lt("text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium",{variants:{label:{true:"data-[invalid]:text-destructive"},error:{true:"text-destructive text-xs"},description:{true:"font-normal text-muted-foreground"}},defaultVariants:{label:!0}}),rr=t=>{const[r,e]=g(t,["class"]);return n(J.Label,l({get class(){return v(ie(),r.class)}},e))},nr=t=>{const[r,e]=g(t,["class"]);return n(J.ErrorMessage,l({get class(){return v(ie({error:!0}),r.class)}},e))},ar=t=>{const[r,e]=g(t,["class"]);return n(J.Input,l({get class(){return v("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r.class)}},e))};var or=["<svg",' xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"></path><title>Decreasing number</title></svg>'],sr=["<svg",' xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path><title>Increase number</title></svg>'];B.HiddenInput;const Te=t=>{const[r,e]=g(t,["class"]);return n(B.Label,l({get class(){return v(ie({label:!0}),r.class)}},e))},Oe=t=>{const[r,e]=g(t,["class"]);return n(B.ErrorMessage,l({get class(){return v(ie({error:!0}),r.class)}},e))},Se=t=>{const[r,e]=g(t,["class"]);return n(B,l({get class(){return v("grid gap-1.5",r.class)}},e))},Ne=t=>{const[r,e]=g(t,["class"]);return O("div",l({get class(){return v("relative rounded-md transition-shadow focus-within:outline-none focus-within:ring-[1.5px] focus-within:ring-ring",r.class)}},e),void 0,!0)},Re=t=>{const[r,e]=g(t,["class"]);return n(B.Input,l({get class(){return v("flex h-9 w-full rounded-md border border-input bg-transparent px-10 py-1 text-center text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",r.class)}},e))},ke=t=>{const[r,e]=g(t,["class"]);return n(B.DecrementTrigger,l({get class(){return v("absolute left-0 top-1/2 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",r.class)}},e,{get children(){return k(or,$())}}))},Ae=t=>{const[r,e]=g(t,["class"]);return n(B.IncrementTrigger,l({get class(){return v("absolute right-0 top-1/2 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",r.class)}},e,{get children(){return k(sr,$())}}))};var ir=["<div",'><form class="flex gap-1 flex-col"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->",'<!--/--><div class="flex flex-col-reverse">',"</div></form></div>"];function lr(){const{countries:t,refetch:r}=_(fe),[e,o]=y(""),[a,s]=y(0),[c,i]=y(0),[u,d]=y({}),C=H(()=>{const p=t();return!p||!Array.isArray(p)?!0:!p.some(b=>b.name&&b.name.toLowerCase()===e().toLowerCase())}),I=()=>{const p={name:e(),populationSize:a(),landArea:c()};try{if(jt.parse(p),!C())throw new Error("Name must be unique");return d({}),!0}catch(b){if(b instanceof G.ZodError){const x={};b.errors.forEach(D=>{D.path&&(x[D.path[0]]=D.message)}),C()||(x.name="Name must be unique"),d(x)}return!1}},f=H(()=>I());return k(ir,$(),R(n(tr,{class:"mb-4",get value(){return e()},onChange:p=>o(p),get children(){return[n(rr,{children:"Name"}),n(ar,{required:!0,type:"text"}),u().name&&n(nr,{get children(){return u().name}})]}})),R(n(Se,{minValue:0,maxValue:1429e6,onRawValueChange:p=>s(Number(p)),class:"mb-4",get children(){return[n(Te,{children:"Population size"}),n(Ne,{get children(){return[n(ke,{"aria-label":"Decrement"}),n(Re,{placeholder:"0"}),u().populationSize&&n(Oe,{get children(){return u().populationSize}}),n(Ae,{"aria-label":"Increment"})]}})]}})),R(n(Se,{minValue:0,maxValue:1429e6,class:"mb-4",onRawValueChange:p=>i(Number(p)),get children(){return[n(Te,{children:"Land area in km2"}),n(Ne,{get children(){return[n(ke,{"aria-label":"Decrement"}),n(Re,{placeholder:"0"}),u().landArea&&n(Oe,{get children(){return u().landArea}}),n(Ae,{"aria-label":"Increment"})]}})]}})),R(n(X,{type:"submit",get disabled(){return!f()},children:"Submit"})))}var cr={};pe(cr,{CloseButton:()=>nt,Content:()=>at,Description:()=>ot,Dialog:()=>A,Overlay:()=>st,Portal:()=>it,Root:()=>lt,Title:()=>ct,Trigger:()=>ut});var rt=Y();function U(){const t=_(rt);if(t===void 0)throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return t}function nt(t){const r=U(),[e,o]=g(t,["aria-label","onClick"]);return n(ve,l({get"aria-label"(){return e["aria-label"]||r.translations().dismiss},onClick:s=>{E(s,e.onClick),r.close()}},o))}function at(t){let r;const e=U(),o=V({id:e.generateId("content")},t),[a,s]=g(o,["ref","onOpenAutoFocus","onCloseAutoFocus","onPointerDownOutside","onFocusOutside","onInteractOutside"]);let c=!1,i=!1;const u=f=>{a.onPointerDownOutside?.(f),e.modal()&&f.detail.isContextMenu&&f.preventDefault()},d=f=>{a.onFocusOutside?.(f),e.modal()&&f.preventDefault()},C=f=>{a.onInteractOutside?.(f),!e.modal()&&(f.defaultPrevented||(c=!0,f.detail.originalEvent.type==="pointerdown"&&(i=!0)),At(e.triggerRef(),f.target)&&f.preventDefault(),f.detail.originalEvent.type==="focusin"&&i&&f.preventDefault())},I=f=>{a.onCloseAutoFocus?.(f),e.modal()?(f.preventDefault(),Pe(e.triggerRef())):(f.defaultPrevented||(c||Pe(e.triggerRef()),f.preventDefault()),c=!1,i=!1)};return Ot({isDisabled:()=>!(e.isOpen()&&e.modal()),targets:()=>[]}),St({element:()=>null,enabled:()=>e.contentPresent()&&e.preventScroll()}),Nt({trapFocus:()=>e.isOpen()&&e.modal(),onMountAutoFocus:a.onOpenAutoFocus,onUnmountAutoFocus:I},()=>r),F(()=>L(e.registerContentId(s.id))),n(ee,{get when(){return e.contentPresent()},get children(){return n(Rt,l({role:"dialog",tabIndex:-1,get disableOutsidePointerEvents(){return e.modal()&&e.isOpen()},get excludedElements(){return[e.triggerRef]},get"aria-labelledby"(){return e.titleId()},get"aria-describedby"(){return e.descriptionId()},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:C,get onDismiss(){return e.close}},s))}})}function ot(t){const r=U(),e=V({id:r.generateId("description")},t),[o,a]=g(e,["id"]);return F(()=>L(r.registerDescriptionId(o.id))),n(S,l({as:"p",get id(){return o.id}},a))}function st(t){const r=U(),[e,o]=g(t,["ref","style","onPointerDown"]),a=s=>{E(s,e.onPointerDown),s.target===s.currentTarget&&s.preventDefault()};return n(ee,{get when(){return r.overlayPresent()},get children(){return n(S,l({as:"div",get style(){return Mt({"pointer-events":"auto"},e.style)},get"data-expanded"(){return r.isOpen()?"":void 0},get"data-closed"(){return r.isOpen()?void 0:""},onPointerDown:a},o))}})}function it(t){const r=U();return n(ee,{get when(){return r.contentPresent()||r.overlayPresent()},get children(){return n(xt,t)}})}var Ee={dismiss:"Dismiss"};function lt(t){const r=`dialog-${te()}`,e=V({id:r,modal:!0,translations:Ee},t),[o,a]=y(),[s,c]=y(),[i,u]=y(),[d,C]=y(),[I,f]=y(),[p,b]=y(),x=kt({open:()=>e.open,defaultOpen:()=>e.defaultOpen,onOpenChange:le=>e.onOpenChange?.(le)}),D=()=>e.forceMount||x.isOpen(),{present:N}=Ve({show:D,element:()=>d()??null}),{present:K}=Ve({show:D,element:()=>I()??null}),M={translations:()=>e.translations??Ee,isOpen:x.isOpen,modal:()=>e.modal??!0,preventScroll:()=>e.preventScroll??M.modal(),contentId:o,titleId:s,descriptionId:i,triggerRef:p,overlayRef:d,setOverlayRef:C,contentRef:I,setContentRef:f,overlayPresent:N,contentPresent:K,close:x.close,toggle:x.toggle,setTriggerRef:b,generateId:re(()=>e.id),registerContentId:z(a),registerTitleId:z(c),registerDescriptionId:z(u)};return n(rt.Provider,{value:M,get children(){return e.children}})}function ct(t){const r=U(),e=V({id:r.generateId("title")},t),[o,a]=g(e,["id"]);return F(()=>L(r.registerTitleId(o.id))),n(S,l({as:"h2",get id(){return o.id}},a))}function ut(t){const r=U(),[e,o]=g(t,["ref","onClick"]);return n(ve,l({"aria-haspopup":"dialog",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return r.isOpen()?r.contentId():void 0},get"data-expanded"(){return r.isOpen()?"":void 0},get"data-closed"(){return r.isOpen()?void 0:""},onClick:s=>{E(s,e.onClick),r.toggle()}},o))}var A=Object.assign(lt,{CloseButton:nt,Content:at,Description:ot,Overlay:st,Portal:it,Title:ct,Trigger:ut}),ur=["<svg",' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path><title>Close</title></svg>'];const dt=A,gt=A.Trigger,mt=t=>{const[r,e]=g(t,["class","children"]);return n(A.Portal,{get children(){return[n(A.Overlay,l({get class(){return v("fixed inset-0 z-50 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0")}},e)),n(A.Content,l({get class(){return v("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg data-[closed]:duration-200 data-[expanded]:duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",r.class)}},e,{get children(){return[r.children,n(A.CloseButton,{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-[opacity,box-shadow] hover:opacity-100 focus:outline-none focus:ring-[1.5px] focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",get children(){return k(ur,$())}})]}}))]}})},ft=t=>{const[r,e]=g(t,["class"]);return n(A.Title,l({get class(){return v("text-lg font-semibold text-foreground",r.class)}},e))},ge=t=>{const[r,e]=g(t,["class"]);return n(A.Description,l({get class(){return v("text-sm text-muted-foreground",r.class)}},e))},pt=t=>{const[r,e]=g(t,["class"]);return O("div",l({get class(){return v("flex flex-col space-y-2 text-center sm:text-left",r.class)}},e),void 0,!0)},dr=t=>{const[r,e]=g(t,["class"]);return O("div",l({get class(){return v("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r.class)}},e),void 0,!0)};function gr(){return n(dt,{get children(){return[n(gt,{get children(){return n(X,{variant:"default",class:" border border-white hover:bg-white text-white hover:text-black",get children(){return n(Ut,{})}})}}),n(mt,{get children(){return n(pt,{get children(){return[n(ft,{class:"mb-8",children:"Add a new entry to database"}),n(ge,{get children(){return n(lr,{})}})]}})}})]}})}var mr=["<p",' class="italic ml-2">',"</p>"],fr=["<div",' class="flex justify-between flex-1"><!--$-->',"<!--/--><!--$-->","<!--/--></div>"];function pr(t){const{countries:r,refetch:e}=_(fe),[o,a]=y(!1);function s(c){const i=r();if(i&&i[c]){const u=i[c];It(u),e()}else console.error(`countryData object: ${i} threw exception`)}return n(dt,{get open(){return o()},onOpenChange:a,get children(){return[n(gt,{get children(){return n(X,{variant:"ghost",children:"X"})}}),n(mt,{get children(){return[n(pt,{get children(){return[n(ft,{class:"mb-2 flex",get children(){return["Confirm deletion of entry:",k(mr,$(),R(t.name))]}}),n(ge,{children:"Are you sure you want to delete this database entry?"}),n(ge,{children:" This action is irreversible"})]}}),n(dr,{get children(){return k(fr,$(),R(n(X,{onClick:()=>s(t.index),children:"Confirm"})),R(n(X,{onClick:()=>a(!1),children:"Cancel"})))}})]}})]}})}var hr=["<div",' class="w-full overflow-auto max-h-[60rem]">',"</div>"];const vr=t=>{const[r,e]=g(t,["class"]);return k(hr,$(),O("table",l({get class(){return v("w-full caption-bottom text-sm",r.class)}},e),void 0,!1))},br=t=>{const[r,e]=g(t,["class"]);return O("thead",l({get class(){return v("[&_tr]:border-b",r.class)}},e),void 0,!0)},xr=t=>{const[r,e]=g(t,["class"]);return O("tbody",l({get class(){return v("[&_tr:last-child]:border-0",r.class)}},e),void 0,!0)},ue=t=>{const[r,e]=g(t,["class"]);return O("tr",l({get class(){return v("border-b transition-colors data-[state=selected]:bg-muted",r.class)}},e),void 0,!0)},de=t=>{const[r,e]=g(t,["class"]);return O("th",l({get class(){return v("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r.class)}},e),void 0,!0)},W=t=>{const[r,e]=g(t,["class"]);return O("td",l({get class(){return v("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r.class)}},e),void 0,!0)};var wr=["<div",' class="flex flex-row justify-center flex-1 items-center"><div class="text-white border-2 bg-neutral-900 rounded-md p-12" id="center-div"><!--$-->',"<!--/--><!--$-->","<!--/--></div></div>"];function Lr(){const{countries:t}=_(fe);return k(wr,$(),R(n(vr,{get children(){return[n(br,{get children(){return n(ue,{get children(){return[n(de,{children:"Name"}),n(de,{children:"Population Size"}),n(de,{children:"Land Area in km2"})]}})}}),n(xr,{get children(){return t.loading?n(ue,{get children(){return n(W,{colSpan:2,children:"Loading..."})}}):t()?.map((r,e)=>n(ue,{get children(){return[n(W,{class:"truncate max-w-36",get children(){return r.name}}),n(W,{get children(){return r.populationSize}}),n(W,{get children(){return r.landArea}}),n(W,{get children(){return n(pr,{index:e,get name(){return r.name}})}})]}}))}})]}})),R(n(gr,{})))}export{Ar as A,kr as S,Er as a,$r as b,Lr as c,Rr as u};