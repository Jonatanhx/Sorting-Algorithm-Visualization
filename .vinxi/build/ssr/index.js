import{ssr as v,ssrHydrationKey as m,escape as i,createComponent as e,mergeProps as G}from"solid-js/web";import{createSignal as c,useContext as k,createEffect as O,onCleanup as Ce,splitProps as q,createUniqueId as ke,mergeProps as Me,For as Q}from"solid-js";import{_ as De,m as Re,A as Ae,e as ne,q as V,r as T}from"./assets/button-CwX4pdjk.js";import{t as F,P as oe,d as le,f as ae,g as ce,h as de,i as ue,j as ge,k as fe,l as he,m as ve,n as me,o as pe,S as xe,p as be,q as Se,r as Ie,c as $e,v as je,w as ze,e as Pe,M as _e,x as W}from"./assets/IsSortingContext-DJfWCCK7.js";import"@solid-primitives/utils";import"solid-js/web/storage";import"./assets/http-BotmrE-L.js";import"h3";import"unctx";import"node:async_hooks";import"@prisma/client";import"class-variance-authority";import"clsx";import"tailwind-merge";import"@solid-primitives/props";import"@floating-ui/dom";import"@solid-primitives/event-listener";import"@solid-primitives/refs";var Te=["<div",' id="gradient-border" class="bg-gradient-to-r from-[#1b1b1b] from-10% via-blue-500 via-50% to-[#1b1b1b] to-90% pb-[2px]"><section class="lg:h-96 md:h-72 sm:h-64 bg-carbon-fibre"><div class="lg:h-96 md:h-72 sm:h-64 bg-gradient-to-t from-black from-10% via-black/50 via-60% to-transparent to-100% flex justify-center items-center p-4"><div class="flex flex-col lg:h-96 md:h-72 sm:h-64 text-white font-semibold text-center justify-center md:gap-2"><h1 class="lg:text-5xl md:text-4xl text-xl font-extrabold">Data sorting visualizer</h1><h2 class="lg:text-5xl md:text-4xl text-lg font-extrabold">Learning data sorting algorithms made easy.</h2><p class="lg:text-lg md:text-md text-[0.8rem]">Learn the strengths and weaknesses of each sorting algorithm with visual rendering of data sets in real time in a web environment.</p><p class="lg:text-lg md:text-md text-[0.8rem]">Boost your knowledge in the fundamentals to make your software blazingly fast.</p></div></div></section></div>'];function Le(){return v(Te,m())}function E(o,u,l){const f=u.map(p=>p[l]),s=Math.min(...f),w=Math.max(...f),d=Math.log(s||1),b=Math.log(w),a=(Math.log(o)-d)/(b-d)*100;return`${Math.max(5,Math.min(100,a))}%`}var Ge=["<div",'><div class="','"><!--$-->',"<!--/-->:<!--$-->","<!--/-->:<!--$-->","<!--/--></div></div>"];function K(o){const[u,l]=c(0),[f,s]=c(0),[w,d]=c(0),{isSorting:b}=k(F),a=()=>{l(0),s(0),d(0)};O(()=>{o.isRunning===!0&&a()});const p=setInterval(()=>{b()&&o.isRunning===!0&&d(y=>y>=99?(s(S=>S>=59?(l(h=>h+1),0):S+1),0):y+1)},10);return Ce(()=>clearInterval(p)),v(Ge,m(),`font-mono ${o.isRunning?"text-yellow-300":"text-white"}`,i(u().toString().padStart(2,"0")),i(f().toString().padStart(2,"0")),i(w().toString().padStart(2,"0")))}var Je={};De(Je,{Arrow:()=>oe,CheckboxItem:()=>le,Content:()=>we,DropdownMenu:()=>A,Group:()=>ae,GroupLabel:()=>ce,Icon:()=>de,Item:()=>ue,ItemDescription:()=>ge,ItemIndicator:()=>fe,ItemLabel:()=>he,Portal:()=>ve,RadioGroup:()=>me,RadioItem:()=>pe,Root:()=>ye,Separator:()=>xe,Sub:()=>be,SubContent:()=>Se,SubTrigger:()=>Ie,Trigger:()=>$e});function we(o){const u=je(),l=ze(),[f,s]=q(o,["onCloseAutoFocus","onInteractOutside"]);let w=!1;return e(Pe,G({onCloseAutoFocus:a=>{f.onCloseAutoFocus?.(a),w||Ae(l.triggerRef()),w=!1,a.preventDefault()},onInteractOutside:a=>{f.onInteractOutside?.(a),(!u.isModal()||a.detail.isContextMenu)&&(w=!0)}},s))}function ye(o){const u=`dropdownmenu-${ke()}`,l=Re({id:u},o);return e(_e,l)}var A=Object.assign(ye,{Arrow:oe,CheckboxItem:le,Content:we,Group:ae,GroupLabel:ce,Icon:de,Item:ue,ItemDescription:ge,ItemIndicator:fe,ItemLabel:he,Portal:ve,RadioGroup:me,RadioItem:pe,Separator:xe,Sub:be,SubContent:Se,SubTrigger:Ie,Trigger:$e}),Be=["<svg",' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-2 w-2"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34"></path></g><title>Radio</title></svg>'];const U=A.Trigger,N=A.Group;A.Sub;const X=A.RadioGroup,Y=o=>{const u=Me({gutter:4,flip:!1},o);return e(A,u)},Z=o=>{const[u,l]=q(o,["class"]);return e(A.Portal,{get children(){return e(A.Content,G({get class(){return ne("min-w-8rem z-50 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",u.class)}},l))}})},ee=o=>{const[u,l]=q(o,["class"]);return e(A.GroupLabel,G({as:"div",get class(){return ne("px-2 py-1.5 text-sm font-semibold",u.class)}},l))},te=o=>{const[u,l]=q(o,["class"]);return e(A.Separator,G({get class(){return ne("-mx-1 my-1 h-px bg-muted",u.class)}},l))},L=o=>{const[u,l]=q(o,["class","children"]);return e(A.RadioItem,G({get class(){return ne("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",u.class)}},l,{get children(){return[e(A.ItemIndicator,{class:"absolute left-2 inline-flex h-4 w-4 items-center justify-center",get children(){return v(Be,m())}}),o.children]}}))};var Oe=["<div",' class="flex border flex-col border-neutral-600 rounded-lg bg-neutral-900 mx-96 lg:min-w-[70rem] md:min-w-[50rem] min-w-[20rem] text-center"><div class="m-1 flex flex-col">',"</div></div>"];function re(o){return v(Oe,m(),i(o.children))}var Fe=["<div",' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Bubble sort</h1><h2>Currently sorting:<!--$-->',"<!--/--></h2><!--$-->","<!--/--></div></div>"],He=["<div",' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black z-10 rotate-180 flex-row-reverse">','</div><div class="','"></div></div>'],qe=["<div",' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->','<!--/--><div class="flex justify-end flex-1">',"</div></div>"],Qe=["<div",' class="','" style="','"></div>'];function Ve(){const{countries:o}=k(V),{isSorting:u,setIsSorting:l}=k(F),{setIsSorted:f}=k(W),[s,w]=c("populationSize"),[d,b]=c(!1),[a,p]=c([]),[y,S]=c(0),[h,$]=c(0);O(()=>{const r=o();r&&r.length>0&&p(r)});function j(){P();const r=a();if(u()||r.length===0)return;b(!0),l(!0),f(!1),S(0),$(0);const t=setInterval(()=>{const g=[...a()];if(y()>=g.length-1){f(!0),clearInterval(t),b(!1),l(!1);return}if(h()<g.length-y()-1){if(g[h()][s()]>g[h()+1][s()]){const n=[...g];[n[h()],n[h()+1]]=[n[h()+1],n[h()]],p(n)}$(n=>n+1)}else $(0),S(n=>n+1)},100)}function P(){const r=o();r&&r.length>0&&p(r),S(0),$(0),l(!1),f(!1)}return e(re,{get children(){return[v(Fe,m()," "+i(s()),i(e(K,{get isRunning(){return d()}}))),v(He,m(),i(e(Q,{get each(){return a()},children:(r,t)=>v(Qe,m(),`flex-1 z-10 border border-black
                    ${t()===y()||t()===h()||t()===h()+1?"bg-red-600":"bg-white"}`,"height:"+i(E(r[s()],a(),s()),!0))})),`gradient-border ${d()?"animation-snake":""}`),v(qe,m(),i(e(T,{onClick:j,get disabled(){return u()||a().length===0},variant:"outline",children:"Start"})),i(e(Y,{placement:"bottom",get children(){return[e(U,{as:r=>e(T,G({variant:"outline"},r,{get disabled(){return d()==!0},children:"Select dataset"}))}),e(Z,{class:"w-56",get children(){return e(N,{get children(){return[e(ee,{children:"Select dataset"}),e(te,{}),e(X,{get value(){return s()},onChange:w,get children(){return[e(L,{value:"populationSize",children:"Population Size"}),e(L,{value:"landArea",children:"Land Area in km2"})]}})]}})}})]}})))]}})}var We=["<div",' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Insertion sort</h1><h2>Currently sorting:<!--$-->',"<!--/--></h2><!--$-->","<!--/--></div></div>"],Ee=["<div",' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">','</div><div class="','"></div></div>'],Ke=["<div",' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->','<!--/--><div class="flex justify-end flex-1">',"</div></div>"],Ue=["<div",' class="','" style="','"></div>'];function Ne(){const{countries:o}=k(V),{isSorting:u,setIsSorting:l}=k(F),{setIsSorted:f}=k(W),[s,w]=c("populationSize"),[d,b]=c([]),[a,p]=c(0),[y,S]=c(0),[h,$]=c(!1);O(()=>{const r=o();r&&r.length>0&&b(r)});function j(){P(),$(!0),l(!0),f(!1),p(0),S(0);const r=setInterval(()=>{const t=[...d()];if(a()>=t.length){f(!0),clearInterval(r),$(!1),l(!1);return}const g=t[a()];let n=a()-1;for(;n>=0&&t[n][s()]>g[s()];)t[n+1]=t[n],n--;t[n+1]=g,b(t),S(n+1),p(a()+1)},100)}function P(){const r=o();r&&r.length>0&&b(r),p(0),S(0),l(!1),f(!1)}return e(re,{get children(){return[v(We,m()," "+i(s()),i(e(K,{get isRunning(){return h()}}))),v(Ee,m(),i(e(Q,{get each(){return d()},children:(r,t)=>v(Ue,m(),`flex-1 z-10 border border-black
                    ${t()===a()||t()===y()||t()===y()+1?"bg-red-600":"bg-white"}`,"height:"+i(E(r[s()],d(),s()),!0))})),`gradient-border ${h()?"animation-snake":""}`),v(Ke,m(),i(e(T,{onClick:j,get disabled(){return u()||d().length===0},variant:"outline",children:"Start"})),i(e(Y,{placement:"bottom",get children(){return[e(U,{as:r=>e(T,G({variant:"outline"},r,{get disabled(){return h()==!0},children:"Select dataset"}))}),e(Z,{class:"w-56",get children(){return e(N,{get children(){return[e(ee,{children:"Select dataset"}),e(te,{}),e(X,{get value(){return s()},onChange:w,get children(){return[e(L,{value:"populationSize",children:"Population Size"}),e(L,{value:"landArea",children:"Land Area in km2"})]}})]}})}})]}})))]}})}var Xe=["<div",' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Merge sort</h1><h2>Currently sorting:<!--$-->',"<!--/--></h2><!--$-->","<!--/--></div></div>"],Ye=["<div",' class="flex flex-1 relative border-black overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">','</div><div class="','"></div></div>'],Ze=["<div",' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->','<!--/--><div class="flex justify-end flex-1">',"</div></div>"],et=["<div",' class="','" style="','"></div>'];function tt(){const{countries:o}=k(V),{isSorting:u,setIsSorting:l}=k(F),{setIsSorted:f}=k(W),[s,w]=c("populationSize"),[d,b]=c(!1),[a,p]=c([]),[y,S]=c(0),[h,$]=c(0);O(()=>{const t=o();t&&t.length>0&&p(t)});function j(){const t=o();t&&t.length>0&&p(t),S(0),$(0),l(!1),f(!1)}function P(){if(j(),u()||a().length===0)return;b(!0),l(!0),f(!1);const t=[...a()],g=t.length;let n=1;const J=setInterval(()=>{if(n>g){p(t),f(!0),clearInterval(J),b(!1),l(!1);return}for(let x=0;x<g-1;x+=2*n){const C=Math.min(x+n-1,g-1),z=Math.min(x+2*n-1,g-1);r(t,x,C,z)}n*=2,p([...t])},100)}function r(t,g,n,J){const x=t.slice(g,n+1),C=t.slice(n+1,J+1);let z=0,I=0,R=g;for(;z<x.length&&I<C.length;)S(g+z),$(n+1+I),x[z][s()]<=C[I][s()]?t[R++]=x[z++]:t[R++]=C[I++];for(;z<x.length;)S(g+z),t[R++]=x[z++];for(;I<C.length;)$(n+1+I),t[R++]=C[I++]}return e(re,{get children(){return[v(Xe,m()," "+i(s()),i(e(K,{get isRunning(){return d()}}))),v(Ye,m(),i(e(Q,{get each(){return a()},children:(t,g)=>v(et,m(),`flex-1 z-10 border border-black ${g()===y()||g()===h()||g()===h()+1?"bg-red-600":"bg-white"}`,"height:"+i(E(t[s()],a(),s()),!0))})),`gradient-border ${d()?"animation-snake":""}`),v(Ze,m(),i(e(T,{onClick:P,get disabled(){return u()||a().length===0},variant:"outline",children:"Start"})),i(e(Y,{placement:"bottom",get children(){return[e(U,{as:t=>e(T,G({variant:"outline"},t,{get disabled(){return d()==!0},children:"Select dataset"}))}),e(Z,{class:"w-56",get children(){return e(N,{get children(){return[e(ee,{children:"Select dataset"}),e(te,{}),e(X,{get value(){return s()},onChange:w,get children(){return[e(L,{value:"populationSize",children:"Population Size"}),e(L,{value:"landArea",children:"Land Area in km2"})]}})]}})}})]}})))]}})}var rt=["<div",' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Quick sort</h1><h2>Currently sorting:<!--$-->',"<!--/--></h2><!--$-->","<!--/--></div></div>"],nt=["<div",' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">','</div><div class="','"></div></div>'],st=["<div",' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->','<!--/--><div class="flex justify-end flex-1">',"</div></div>"],it=["<div",' class="','" style="','"></div>'];function ot(){const{countries:o}=k(V),{isSorting:u,setIsSorting:l}=k(F),{setIsSorted:f}=k(W),[s,w]=c("populationSize"),[d,b]=c([]),[a,p]=c(-1),[y,S]=c(-1),[h,$]=c(-1),[j,P]=c(!1),[r,t]=c([]),[g,n]=c(null),[J,x]=c({pivotIndex:-1,i:-1,j:-1,isPartitioning:!1});O(()=>{const I=o();I&&I.length>0&&b(I)});function C(){z(),P(!0),l(!0),f(!1),t([[0,d().length-1]]),n(null),x({pivotIndex:-1,i:-1,j:-1,isPartitioning:!1});const I=setInterval(()=>{const R=r(),se=g(),M=J();if(!M.isPartitioning&&!se){if(R.length===0){clearInterval(I),P(!1),l(!1),f(!0),p(-1),S(-1),$(-1);return}const H=R[R.length-1];t(R.slice(0,-1)),n(H);const[B,D]=H;x({pivotIndex:D,i:B-1,j:B,isPartitioning:!0}),p(D)}else if(M.isPartitioning&&se){const[H,B]=se,D=[...d()];if(M.j<B){if(D[M.j][s()]<D[M.pivotIndex][s()]){const _=M.i+1;[D[_],D[M.j]]=[D[M.j],D[_]],b(D),x({...M,i:_,j:M.j+1})}else x({...M,j:M.j+1});S(M.i),$(M.j)}else{const _=M.i+1;[D[_],D[B]]=[D[B],D[_]],b(D);const ie=[...r()];_-1>H&&ie.push([H,_-1]),_+1<B&&ie.push([_+1,B]),t(ie),n(null),x({pivotIndex:-1,i:-1,j:-1,isPartitioning:!1})}}},100)}function z(){const I=o();I&&I.length>0&&b(I),S(-1),$(-1),p(-1),t([]),n(null),x({pivotIndex:-1,i:-1,j:-1,isPartitioning:!1}),l(!1),f(!1)}return e(re,{get children(){return[v(rt,m()," "+i(s()),i(e(K,{get isRunning(){return j()}}))),v(nt,m(),i(e(Q,{get each(){return d()},children:(I,R)=>v(it,m(),`flex-1 z-10 border border-black
                    ${R()===a()||R()===y()||R()===h()||R()===h()+1?"bg-red-600":"bg-white"}`,"height:"+i(E(I[s()],d(),s()),!0))})),`gradient-border ${j()?"animation-snake":""}`),v(st,m(),i(e(T,{onClick:C,get disabled(){return u()||d().length===0},variant:"outline",children:"Start"})),i(e(Y,{placement:"bottom",get children(){return[e(U,{as:I=>e(T,G({variant:"outline"},I,{get disabled(){return j()==!0},children:"Select dataset"}))}),e(Z,{class:"w-56",get children(){return e(N,{get children(){return[e(ee,{children:"Select dataset"}),e(te,{}),e(X,{get value(){return s()},onChange:w,get children(){return[e(L,{value:"populationSize",children:"Population Size"}),e(L,{value:"landArea",children:"Land Area in km2"})]}})]}})}})]}})))]}})}var lt=["<div",' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Selection sort</h1><h2>Currently sorting:<!--$-->',"<!--/--></h2><!--$-->","<!--/--></div></div>"],at=["<div",' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">','</div><div class="','"></div></div>'],ct=["<div",' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->','<!--/--><div class="flex justify-end flex-1">',"</div></div>"],dt=["<div",' class="','" style="','"></div>'];function ut(){const{countries:o}=k(V),{isSorting:u,setIsSorting:l}=k(F),{setIsSorted:f}=k(W),[s,w]=c("populationSize"),[d,b]=c([]),[a,p]=c(0),[y,S]=c(0),[h,$]=c(!1);O(()=>{const r=o();r&&r.length>0&&b(r)});function j(){const r=o();r&&r.length>0&&b(r),p(0),S(0),l(!1),f(!1)}function P(){j(),$(!0),l(!0),f(!1),p(0),S(0);const r=setInterval(()=>{const t=[...d()],g=t.length,n=a(),J=y();if(n>=g-1){f(!0),clearInterval(r),$(!1),l(!1);return}if(J>=g){let x=n;for(let C=n+1;C<g;C++)t[C][s()]<t[x][s()]&&(x=C);if(x!==n){const C=t[n];t[n]=t[x],t[x]=C,b(t)}p(n+1),S(n+1);return}S(J+1)},100)}return e(re,{get children(){return[v(lt,m()," "+i(s()),i(e(K,{get isRunning(){return h()}}))),v(at,m(),i(e(Q,{get each(){return d()},children:(r,t)=>v(dt,m(),`flex-1 z-10 border border-black
                    ${t()===a()||t()===y()||t()===y()+1?"bg-red-600":"bg-white"}`,"height:"+i(E(r[s()],d(),s()),!0))})),`gradient-border ${h()?"animation-snake":""}`),v(ct,m(),i(e(T,{onClick:P,get disabled(){return u()||d().length===0},variant:"outline",children:"Start"})),i(e(Y,{placement:"bottom",get children(){return[e(U,{as:r=>e(T,G({variant:"outline"},r,{get disabled(){return h()==!0},children:"Select dataset"}))}),e(Z,{class:"w-56",get children(){return e(N,{get children(){return[e(ee,{children:"Select dataset"}),e(te,{}),e(X,{get value(){return s()},onChange:w,get children(){return[e(L,{value:"populationSize",children:"Population Size"}),e(L,{value:"landArea",children:"Land Area in km2"})]}})]}})}})]}})))]}})}var gt=["<main",' class="flex flex-col z-0 min-h-screen gap-4"><!--$-->','<!--/--><div class="flex flex-col gap-4 items-center"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></div></main>"];function jt(){return v(gt,m(),i(e(Le,{})),i(e(Ve,{})),i(e(Ne,{})),i(e(ut,{})),i(e(ot,{})),i(e(tt,{})))}export{jt as default};
