import { createActionURL, Auth, raw, skipCSRFCheck, isAuthAction } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/core/index.js';
import { Q, a as t } from '../_/nitro.mjs';
import { R as R$1, E } from './utils.mjs';
import k from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/core/providers/github.js';
import { PrismaAdapter } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/prisma-adapter/index.js';
import { z } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/zod/lib/index.mjs';

const R="authorizationParams-";function M(e){const n=async t=>{const r=typeof e=="object"?e:await e(t);R$1(process.env,r),r.basePath??=E(r);const{request:s}=t,a=new URL(s.url),d=a.pathname.slice(r.basePath.length+1).split("/")[0];return isAuthAction(d)&&a.pathname.startsWith(r.basePath+"/")?Auth(s,r):new Response("Not Found",{status:404})};return {signIn:async t=>{const{request:r}=t,s=typeof e=="object"?e:await e(t);R$1(process.env,s);const a=await r.formData(),{providerId:d,...u}=Object.fromEntries(a);let l={},m={};for(const i in u)i.startsWith(R)?l[i.slice(R.length)]=u[i]:m[i]=u[i];await D(d,m,l,s,t);},signOut:async t=>{const r=typeof e=="object"?e:await e(t);R$1(process.env,r);const s=Object.fromEntries(await t.request.formData());await j(s,r,t);},GET:n,POST:n}}async function D(e,n={},t,r,s){const{request:a}=s,{protocol:d}=new URL(a.url),u=new Headers(a.headers),{redirect:l=!0,redirectTo:m,...i}=n instanceof FormData?Object.fromEntries(n):n,p=m?.toString()??u.get("Referer")??"/",h=createActionURL("signin",d,u,process.env,r);if(!e){const o=`${h}?${new URLSearchParams({callbackUrl:p})}`;return l&&Q(s.nativeEvent,o,302),o}let w=`${h}/${e}?${new URLSearchParams(t)}`,S;for(const o of r.providers){const{id:P}=typeof o=="function"?o():o;if(P===e){S=P;break}}if(!S){const o=`${h}?${new URLSearchParams({callbackUrl:p})}`;return l&&Q(s.nativeEvent,o,302),o}S==="credentials"&&(w=w.replace("signin","callback")),u.set("Content-Type","application/x-www-form-urlencoded");const O=new URLSearchParams({...i,callbackUrl:p}),g=new Request(w,{method:"POST",headers:u,body:O}),b=await Auth(g,{...r,raw:raw,skipCSRFCheck:skipCSRFCheck});for(const o of b?.cookies??[])s.response.headers.append("set-cookie",`${o.name}=${o.value}; Path=/; ${o.options?.httpOnly?"HttpOnly;":""} ${o.options?.secure?"Secure;":""} ${o.options?.sameSite?`SameSite=${o.options.sameSite};`:""}`);return l?Q(s.nativeEvent,b.redirect,302):b.redirect}async function j(e,n,t){const{request:r}=t,{protocol:s}=new URL(r.url),a=new Headers(r.headers);a.set("Content-Type","application/x-www-form-urlencoded");const d=createActionURL("signout",s,a,process.env,n),u=e?.redirectTo??a.get("Referer")??"/",l=new URLSearchParams({callbackUrl:u}),m=new Request(d,{method:"POST",headers:a,body:l}),i=await Auth(m,{...n,raw:raw,skipCSRFCheck:skipCSRFCheck});for(const p of i?.cookies??[])t.response.headers.append("set-cookie",`${p.name}=${p.value}; Path=/; ${p.options?.httpOnly?"HttpOnly;":""} ${p.options?.secure?"Secure;":""} ${p.options?.sameSite?`SameSite=${p.options.sameSite};`:""}`);return e?.redirect??!0?Q(t.nativeEvent,i.redirect,302):i}const q=z.object({NODE_ENV:z.enum(["development","production","test"]).default("development"),GITHUB_ID:z.string(),GITHUB_SECRET:z.string(),AUTH_SECRET:z.string(),AUTH_TRUST_HOST:z.string().optional(),AUTH_URL:z.string().optional(),DATABASE_URL:z.string()});z.object({MODE:z.enum(["development","production","test"]).default("development"),VITE_AUTH_PATH:z.string().optional()});const B=e=>Object.entries(e).map(([n,t])=>{if(t&&"_errors"in t)return `${n}: ${t._errors.join(", ")}
`}).filter(Boolean),v=q.safeParse(process.env);if(v.success===!1)throw console.error(`❌ Invalid environment variables:
`,...B(v.error.format())),new Error("Invalid environment variables");const U=v.data,J={callbacks:{session({session:e,user:n}){return e.user&&(e.user.id=n.id),e}},adapter:PrismaAdapter(t),providers:[k({clientId:U.GITHUB_ID,clientSecret:U.GITHUB_SECRET,allowDangerousEmailAccountLinking:!0})],debug:!1,basePath:"/api/auth"};

export { J, M };
//# sourceMappingURL=auth.mjs.map