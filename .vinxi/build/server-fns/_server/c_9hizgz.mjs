import{createComponent as e}from"solid-js/web";import{c as n}from"./server-fns-runtime.mjs";import{createContext as i,createResource as a}from"solid-js";import{d as c}from"./db.mjs";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"unctx";import"node:async_hooks";import"@prisma/client";const p=i({});function $(t){const[r,{refetch:o}]=a(n(m,"c_9hizgz","$$function0"));return e(p.Provider,{value:{countries:r,refetch:o},get children(){return t.children}})}async function m(){return await c.countries.findMany({})}export{m as $$function0,p as CountryDataContext,$ as CountryDataProvider};
