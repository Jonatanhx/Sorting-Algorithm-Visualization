import{ssr as e,ssrHydrationKey as m,escape as s,createComponent as r}from"solid-js/web";import{u as n,c as a}from"./AdminDataTable.mjs";import{useContext as u,Show as p}from"solid-js";import{AdminDataContext as d}from"./c_1p5wook.mjs";import"./utils.mjs";import"@auth/core";import"./c_9hizgz.mjs";import"./server-fns-runtime.mjs";import"solid-js/web/storage";import"./fetchEvent.mjs";import"h3";import"unctx";import"node:async_hooks";import"./db.mjs";import"@prisma/client";import"zod";import"./c_ol5iyx.mjs";import"./index2.mjs";import"class-variance-authority";import"clsx";import"tailwind-merge";import"@solid-primitives/utils";import"@internationalized/number";import"@solid-primitives/props";var c=["<p",' class="text-white">You do not have the required credentials to view this</p>'],h=["<main",' class="flex min-h-screen flex-col bg-[#1b1b1b] mt-4"><!--$-->',"<!--/--><!--$-->","<!--/--></main>"];function G(){const{admins:i}=u(d),o=n();return e(h,m(),s(r(p,{get when(){return i()?.some(t=>t.id===o.session()?.user.id&&t.isAdmin)},get children(){return r(a,{})}})),s(r(p,{get when(){return i()?.some(t=>t.id!==o.session()?.user.id&&t.isAdmin)},get children(){return e(c,m())}})))}export{G as default};
