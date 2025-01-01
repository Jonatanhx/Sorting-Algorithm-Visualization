import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/solid-js/web/dist/server.js';
import { splitProps, createUniqueId, useContext, createSignal, createEffect, For, onCleanup, mergeProps as mergeProps$1 } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/solid-js/dist/server.js';
import { d as sn, W as Wt, _ as _n, P as Pn, X as Xn, q as qn, j as jn, Z as Zn, J as Jn, e as Qn, f as eo, g as to, n as no, h as qe$1, o as oo, r as ro, i as so, k as Wn, G, H, Y as Yn, l as P, I as It, m as io, w as wn, v as En, A as An, x as to$1, y as En$1 } from '../_/nitro.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/destr/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/h3/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/hookable/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/vinxi/lib/app-fetch.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/vinxi/lib/app-manifest.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/solid-js/web/storage/dist/storage.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/unctx/dist/index.mjs';
import 'node:async_hooks';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@prisma/client/default.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/ufo/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/pathe/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/seroval/dist/esm/production/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/radix3/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/core/index.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@solid-primitives/utils/dist/index/index.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/class-variance-authority/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/clsx/dist/clsx.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/zod/lib/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@internationalized/number/dist/import.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@solid-primitives/props/dist/index.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@solid-primitives/event-listener/dist/index.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@solid-primitives/refs/dist/index.js';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/ohash/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/klona/dist/index.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/defu/dist/defu.mjs';
import 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/scule/dist/index.mjs';

var Te = ["<div", ' id="gradient-border" class="bg-gradient-to-r from-[#1b1b1b] from-10% via-blue-500 via-50% to-[#1b1b1b] to-90% pb-[2px]"><section class="lg:h-96 md:h-72 sm:h-64 bg-carbon-fibre"><div class="lg:h-96 md:h-72 sm:h-64 bg-gradient-to-t from-black from-10% via-black/50 via-60% to-transparent to-100% flex justify-center items-center p-4"><div class="flex flex-col lg:h-96 md:h-72 sm:h-64 text-white font-semibold text-center justify-center md:gap-2"><h1 class="lg:text-5xl md:text-4xl text-xl font-extrabold">Data sorting visualizer</h1><h2 class="lg:text-5xl md:text-4xl text-lg font-extrabold">Learning data sorting algorithms made easy.</h2><p class="lg:text-lg md:text-md text-[0.8rem]">Learn the strengths and weaknesses of each sorting algorithm with visual rendering of data sets in real time in a web environment.</p><p class="lg:text-lg md:text-md text-[0.8rem]">Boost your knowledge in the fundamentals to make your software blazingly fast.</p></div></div></section></div>'];
function Le() {
  return ssr(Te, ssrHydrationKey());
}
function E(o, u, l) {
  const f = u.map((p) => p[l]), s = Math.min(...f), w = Math.max(...f), d = Math.log(s || 1), b = Math.log(w), a = (Math.log(o) - d) / (b - d) * 100;
  return `${Math.max(5, Math.min(100, a))}%`;
}
var Ge = ["<div", '><div class="', '"><!--$-->', "<!--/-->:<!--$-->", "<!--/-->:<!--$-->", "<!--/--></div></div>"];
function K(o) {
  const [u, l] = createSignal(0), [f, s] = createSignal(0), [w, d] = createSignal(0), { isSorting: b } = useContext(En), a = () => {
    l(0), s(0), d(0);
  };
  createEffect(() => {
    o.isRunning === true && a();
  });
  const p = setInterval(() => {
    b() && o.isRunning === true && d((y) => y >= 99 ? (s((S) => S >= 59 ? (l((h) => h + 1), 0) : S + 1), 0) : y + 1);
  }, 10);
  return onCleanup(() => clearInterval(p)), ssr(Ge, ssrHydrationKey(), `font-mono ${o.isRunning ? "text-yellow-300" : "text-white"}`, escape(u().toString().padStart(2, "0")), escape(f().toString().padStart(2, "0")), escape(w().toString().padStart(2, "0")));
}
var Je = {};
sn(Je, { Arrow: () => Wt, CheckboxItem: () => _n, Content: () => we, DropdownMenu: () => z, Group: () => Pn, GroupLabel: () => Xn, Icon: () => qn, Item: () => jn, ItemDescription: () => Zn, ItemIndicator: () => Jn, ItemLabel: () => Qn, Portal: () => eo, RadioGroup: () => to, RadioItem: () => no, Root: () => ye, Separator: () => qe$1, Sub: () => oo, SubContent: () => ro, SubTrigger: () => so, Trigger: () => Wn });
function we(o) {
  const u = G(), l = H(), [f, s] = splitProps(o, ["onCloseAutoFocus", "onInteractOutside"]);
  let w = false;
  return createComponent(Yn, mergeProps({ onCloseAutoFocus: (a) => {
    var _a;
    (_a = f.onCloseAutoFocus) == null ? void 0 : _a.call(f, a), w || P(l.triggerRef()), w = false, a.preventDefault();
  }, onInteractOutside: (a) => {
    var _a;
    (_a = f.onInteractOutside) == null ? void 0 : _a.call(f, a), (!u.isModal() || a.detail.isContextMenu) && (w = true);
  } }, s));
}
function ye(o) {
  const u = `dropdownmenu-${createUniqueId()}`, l = It({ id: u }, o);
  return createComponent(io, l);
}
var z = Object.assign(ye, { Arrow: Wt, CheckboxItem: _n, Content: we, Group: Pn, GroupLabel: Xn, Icon: qn, Item: jn, ItemDescription: Zn, ItemIndicator: Jn, ItemLabel: Qn, Portal: eo, RadioGroup: to, RadioItem: no, Separator: qe$1, Sub: oo, SubContent: ro, SubTrigger: so, Trigger: Wn }), Be = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-2 w-2"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34"></path></g><title>Radio</title></svg>'];
const U = z.Trigger, N = z.Group;
z.Sub;
const X = z.RadioGroup, Y = (o) => {
  const u = mergeProps$1({ gutter: 4, flip: false }, o);
  return createComponent(z, u);
}, Z = (o) => {
  const [u, l] = splitProps(o, ["class"]);
  return createComponent(z.Portal, { get children() {
    return createComponent(z.Content, mergeProps({ get class() {
      return En$1("min-w-8rem z-50 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95", u.class);
    } }, l));
  } });
}, ee = (o) => {
  const [u, l] = splitProps(o, ["class"]);
  return createComponent(z.GroupLabel, mergeProps({ as: "div", get class() {
    return En$1("px-2 py-1.5 text-sm font-semibold", u.class);
  } }, l));
}, te = (o) => {
  const [u, l] = splitProps(o, ["class"]);
  return createComponent(z.Separator, mergeProps({ get class() {
    return En$1("-mx-1 my-1 h-px bg-muted", u.class);
  } }, l));
}, L = (o) => {
  const [u, l] = splitProps(o, ["class", "children"]);
  return createComponent(z.RadioItem, mergeProps({ get class() {
    return En$1("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", u.class);
  } }, l, { get children() {
    return [createComponent(z.ItemIndicator, { class: "absolute left-2 inline-flex h-4 w-4 items-center justify-center", get children() {
      return ssr(Be, ssrHydrationKey());
    } }), o.children];
  } }));
};
var Oe = ["<div", ' class="flex border flex-col border-black rounded-lg bg-neutral-900 mx-96 lg:min-w-[70rem] md:min-w-[50rem] min-w-[20rem] text-center"><div class="m-1 flex flex-col">', "</div></div>"];
function re(o) {
  return ssr(Oe, ssrHydrationKey(), escape(o.children));
}
var Fe = ["<div", ' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Bubble sort</h1><h2>Currently sorting:<!--$-->', "<!--/--></h2><!--$-->", "<!--/--></div></div>"], He = ["<div", ' class="flex flex-1 relative border-black overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">', '</div><div class="', '"></div></div>'], qe = ["<div", ' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->', '<!--/--><div class="flex justify-end flex-1">', "</div></div>"], Qe = ["<div", ' class="', '" style="', '"></div>'];
function Ve() {
  const { countries: o } = useContext(wn), { isSorting: u, setIsSorting: l } = useContext(En), { setIsSorted: f } = useContext(An), [s, w] = createSignal("populationSize"), [d, b] = createSignal(false), [a, p] = createSignal([]), [y, S] = createSignal(0), [h, $] = createSignal(0);
  createEffect(() => {
    const r = o();
    r && r.length > 0 && p(r);
  });
  function j() {
    P();
    const r = a();
    if (u() || r.length === 0) return;
    b(true), l(true), f(false), S(0), $(0);
    const t = setInterval(() => {
      const g = [...a()];
      if (y() >= g.length - 1) {
        f(true), clearInterval(t), b(false), l(false);
        return;
      }
      if (h() < g.length - y() - 1) {
        if (g[h()][s()] > g[h() + 1][s()]) {
          const n = [...g];
          [n[h()], n[h() + 1]] = [n[h() + 1], n[h()]], p(n);
        }
        $((n) => n + 1);
      } else $(0), S((n) => n + 1);
    }, 100);
  }
  function P() {
    const r = o();
    r && r.length > 0 && p(r), S(0), $(0), l(false), f(false);
  }
  return createComponent(re, { get children() {
    return [ssr(Fe, ssrHydrationKey(), " " + escape(s()), escape(createComponent(K, { get isRunning() {
      return d();
    } }))), ssr(He, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return a();
    }, children: (r, t) => ssr(Qe, ssrHydrationKey(), `flex-1 z-10 border border-black
                    ${t() === y() || t() === h() || t() === h() + 1 ? "bg-red-600" : "bg-white"}`, "height:" + escape(E(r[s()], a(), s()), true)) })), `gradient-border ${d() ? "animation-snake" : ""}`), ssr(qe, ssrHydrationKey(), escape(createComponent(to$1, { onClick: j, get disabled() {
      return u() || a().length === 0;
    }, variant: "outline", children: "Start" })), escape(createComponent(Y, { placement: "bottom", get children() {
      return [createComponent(U, { as: (r) => createComponent(to$1, mergeProps({ variant: "outline" }, r, { get disabled() {
        return d() == true;
      }, children: "Select dataset" })) }), createComponent(Z, { class: "w-56", get children() {
        return createComponent(N, { get children() {
          return [createComponent(ee, { children: "Select dataset" }), createComponent(te, {}), createComponent(X, { get value() {
            return s();
          }, onChange: w, get children() {
            return [createComponent(L, { value: "populationSize", children: "Population Size" }), createComponent(L, { value: "landArea", children: "Land Area in km2" })];
          } })];
        } });
      } })];
    } })))];
  } });
}
var We = ["<div", ' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Insertion sort</h1><h2>Currently sorting:<!--$-->', "<!--/--></h2><!--$-->", "<!--/--></div></div>"], Ee = ["<div", ' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">', '</div><div class="', '"></div></div>'], Ke = ["<div", ' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->', '<!--/--><div class="flex justify-end flex-1">', "</div></div>"], Ue = ["<div", ' class="', '" style="', '"></div>'];
function Ne() {
  const { countries: o } = useContext(wn), { isSorting: u, setIsSorting: l } = useContext(En), { setIsSorted: f } = useContext(An), [s, w] = createSignal("populationSize"), [d, b] = createSignal([]), [a, p] = createSignal(0), [y, S] = createSignal(0), [h, $] = createSignal(false);
  createEffect(() => {
    const r = o();
    r && r.length > 0 && b(r);
  });
  function j() {
    P(), $(true), l(true), f(false), p(0), S(0);
    const r = setInterval(() => {
      const t = [...d()];
      if (a() >= t.length) {
        f(true), clearInterval(r), $(false), l(false);
        return;
      }
      const g = t[a()];
      let n = a() - 1;
      for (; n >= 0 && t[n][s()] > g[s()]; ) t[n + 1] = t[n], n--;
      t[n + 1] = g, b(t), S(n + 1), p(a() + 1);
    }, 100);
  }
  function P() {
    const r = o();
    r && r.length > 0 && b(r), p(0), S(0), l(false), f(false);
  }
  return createComponent(re, { get children() {
    return [ssr(We, ssrHydrationKey(), " " + escape(s()), escape(createComponent(K, { get isRunning() {
      return h();
    } }))), ssr(Ee, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return d();
    }, children: (r, t) => ssr(Ue, ssrHydrationKey(), `flex-1 z-10 border border-black
                    ${t() === a() || t() === y() || t() === y() + 1 ? "bg-red-600" : "bg-white"}`, "height:" + escape(E(r[s()], d(), s()), true)) })), `gradient-border ${h() ? "animation-snake" : ""}`), ssr(Ke, ssrHydrationKey(), escape(createComponent(to$1, { onClick: j, get disabled() {
      return u() || d().length === 0;
    }, variant: "outline", children: "Start" })), escape(createComponent(Y, { placement: "bottom", get children() {
      return [createComponent(U, { as: (r) => createComponent(to$1, mergeProps({ variant: "outline" }, r, { get disabled() {
        return h() == true;
      }, children: "Select dataset" })) }), createComponent(Z, { class: "w-56", get children() {
        return createComponent(N, { get children() {
          return [createComponent(ee, { children: "Select dataset" }), createComponent(te, {}), createComponent(X, { get value() {
            return s();
          }, onChange: w, get children() {
            return [createComponent(L, { value: "populationSize", children: "Population Size" }), createComponent(L, { value: "landArea", children: "Land Area in km2" })];
          } })];
        } });
      } })];
    } })))];
  } });
}
var Xe = ["<div", ' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Merge sort</h1><h2>Currently sorting:<!--$-->', "<!--/--></h2><!--$-->", "<!--/--></div></div>"], Ye = ["<div", ' class="flex flex-1 relative border-black overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">', '</div><div class="', '"></div></div>'], Ze = ["<div", ' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->', '<!--/--><div class="flex justify-end flex-1">', "</div></div>"], et = ["<div", ' class="', '" style="', '"></div>'];
function tt() {
  const { countries: o } = useContext(wn), { isSorting: u, setIsSorting: l } = useContext(En), { setIsSorted: f } = useContext(An), [s, w] = createSignal("populationSize"), [d, b] = createSignal(false), [a, p] = createSignal([]), [y, S] = createSignal(0), [h, $] = createSignal(0);
  createEffect(() => {
    const t = o();
    t && t.length > 0 && p(t);
  });
  function j() {
    const t = o();
    t && t.length > 0 && p(t), S(0), $(0), l(false), f(false);
  }
  function P() {
    if (j(), u() || a().length === 0) return;
    b(true), l(true), f(false);
    const t = [...a()], g = t.length;
    let n = 1;
    const J = setInterval(() => {
      if (n > g) {
        p(t), f(true), clearInterval(J), b(false), l(false);
        return;
      }
      for (let x = 0; x < g - 1; x += 2 * n) {
        const C = Math.min(x + n - 1, g - 1), A = Math.min(x + 2 * n - 1, g - 1);
        r(t, x, C, A);
      }
      n *= 2, p([...t]);
    }, 100);
  }
  function r(t, g, n, J) {
    const x = t.slice(g, n + 1), C = t.slice(n + 1, J + 1);
    let A = 0, I = 0, R = g;
    for (; A < x.length && I < C.length; ) S(g + A), $(n + 1 + I), x[A][s()] <= C[I][s()] ? t[R++] = x[A++] : t[R++] = C[I++];
    for (; A < x.length; ) S(g + A), t[R++] = x[A++];
    for (; I < C.length; ) $(n + 1 + I), t[R++] = C[I++];
  }
  return createComponent(re, { get children() {
    return [ssr(Xe, ssrHydrationKey(), " " + escape(s()), escape(createComponent(K, { get isRunning() {
      return d();
    } }))), ssr(Ye, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return a();
    }, children: (t, g) => ssr(et, ssrHydrationKey(), `flex-1 z-10 border border-black ${g() === y() || g() === h() || g() === h() + 1 ? "bg-red-600" : "bg-white"}`, "height:" + escape(E(t[s()], a(), s()), true)) })), `gradient-border ${d() ? "animation-snake" : ""}`), ssr(Ze, ssrHydrationKey(), escape(createComponent(to$1, { onClick: P, get disabled() {
      return u() || a().length === 0;
    }, variant: "outline", children: "Start" })), escape(createComponent(Y, { placement: "bottom", get children() {
      return [createComponent(U, { as: (t) => createComponent(to$1, mergeProps({ variant: "outline" }, t, { get disabled() {
        return d() == true;
      }, children: "Select dataset" })) }), createComponent(Z, { class: "w-56", get children() {
        return createComponent(N, { get children() {
          return [createComponent(ee, { children: "Select dataset" }), createComponent(te, {}), createComponent(X, { get value() {
            return s();
          }, onChange: w, get children() {
            return [createComponent(L, { value: "populationSize", children: "Population Size" }), createComponent(L, { value: "landArea", children: "Land Area in km2" })];
          } })];
        } });
      } })];
    } })))];
  } });
}
var rt = ["<div", ' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Quick sort</h1><h2>Currently sorting:<!--$-->', "<!--/--></h2><!--$-->", "<!--/--></div></div>"], nt = ["<div", ' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">', '</div><div class="', '"></div></div>'], st = ["<div", ' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->', '<!--/--><div class="flex justify-end flex-1">', "</div></div>"], it = ["<div", ' class="', '" style="', '"></div>'];
function ot() {
  const { countries: o } = useContext(wn), { isSorting: u, setIsSorting: l } = useContext(En), { setIsSorted: f } = useContext(An), [s, w] = createSignal("populationSize"), [d, b] = createSignal([]), [a, p] = createSignal(-1), [y, S] = createSignal(-1), [h, $] = createSignal(-1), [j, P] = createSignal(false), [r, t] = createSignal([]), [g, n] = createSignal(null), [J, x] = createSignal({ pivotIndex: -1, i: -1, j: -1, isPartitioning: false });
  createEffect(() => {
    const I = o();
    I && I.length > 0 && b(I);
  });
  function C() {
    A(), P(true), l(true), f(false), t([[0, d().length - 1]]), n(null), x({ pivotIndex: -1, i: -1, j: -1, isPartitioning: false });
    const I = setInterval(() => {
      const R = r(), se = g(), M = J();
      if (!M.isPartitioning && !se) {
        if (R.length === 0) {
          clearInterval(I), P(false), l(false), f(true), p(-1), S(-1), $(-1);
          return;
        }
        const H = R[R.length - 1];
        t(R.slice(0, -1)), n(H);
        const [B, D] = H;
        x({ pivotIndex: D, i: B - 1, j: B, isPartitioning: true }), p(D);
      } else if (M.isPartitioning && se) {
        const [H, B] = se, D = [...d()];
        if (M.j < B) {
          if (D[M.j][s()] < D[M.pivotIndex][s()]) {
            const _ = M.i + 1;
            [D[_], D[M.j]] = [D[M.j], D[_]], b(D), x({ ...M, i: _, j: M.j + 1 });
          } else x({ ...M, j: M.j + 1 });
          S(M.i), $(M.j);
        } else {
          const _ = M.i + 1;
          [D[_], D[B]] = [D[B], D[_]], b(D);
          const ie = [...r()];
          _ - 1 > H && ie.push([H, _ - 1]), _ + 1 < B && ie.push([_ + 1, B]), t(ie), n(null), x({ pivotIndex: -1, i: -1, j: -1, isPartitioning: false });
        }
      }
    }, 100);
  }
  function A() {
    const I = o();
    I && I.length > 0 && b(I), S(-1), $(-1), p(-1), t([]), n(null), x({ pivotIndex: -1, i: -1, j: -1, isPartitioning: false }), l(false), f(false);
  }
  return createComponent(re, { get children() {
    return [ssr(rt, ssrHydrationKey(), " " + escape(s()), escape(createComponent(K, { get isRunning() {
      return j();
    } }))), ssr(nt, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return d();
    }, children: (I, R) => ssr(it, ssrHydrationKey(), `flex-1 z-10 border border-black
                    ${R() === a() || R() === y() || R() === h() || R() === h() + 1 ? "bg-red-600" : "bg-white"}`, "height:" + escape(E(I[s()], d(), s()), true)) })), `gradient-border ${j() ? "animation-snake" : ""}`), ssr(st, ssrHydrationKey(), escape(createComponent(to$1, { onClick: C, get disabled() {
      return u() || d().length === 0;
    }, variant: "outline", children: "Start" })), escape(createComponent(Y, { placement: "bottom", get children() {
      return [createComponent(U, { as: (I) => createComponent(to$1, mergeProps({ variant: "outline" }, I, { get disabled() {
        return j() == true;
      }, children: "Select dataset" })) }), createComponent(Z, { class: "w-56", get children() {
        return createComponent(N, { get children() {
          return [createComponent(ee, { children: "Select dataset" }), createComponent(te, {}), createComponent(X, { get value() {
            return s();
          }, onChange: w, get children() {
            return [createComponent(L, { value: "populationSize", children: "Population Size" }), createComponent(L, { value: "landArea", children: "Land Area in km2" })];
          } })];
        } });
      } })];
    } })))];
  } });
}
var lt = ["<div", ' class="flex py-2 justify-center"><div class="flex flex-col text-white items-center"><h1 class="text-white text-4xl">Selection sort</h1><h2>Currently sorting:<!--$-->', "<!--/--></h2><!--$-->", "<!--/--></div></div>"], at = ["<div", ' class="flex flex-1 relative overflow-hidden"><div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">', '</div><div class="', '"></div></div>'], ct = ["<div", ' class="flex flex-row items-center m-1"><div class="flex-1"></div><!--$-->', '<!--/--><div class="flex justify-end flex-1">', "</div></div>"], dt = ["<div", ' class="', '" style="', '"></div>'];
function ut() {
  const { countries: o } = useContext(wn), { isSorting: u, setIsSorting: l } = useContext(En), { setIsSorted: f } = useContext(An), [s, w] = createSignal("populationSize"), [d, b] = createSignal([]), [a, p] = createSignal(0), [y, S] = createSignal(0), [h, $] = createSignal(false);
  createEffect(() => {
    const r = o();
    r && r.length > 0 && b(r);
  });
  function j() {
    const r = o();
    r && r.length > 0 && b(r), p(0), S(0), l(false), f(false);
  }
  function P() {
    j(), $(true), l(true), f(false), p(0), S(0);
    const r = setInterval(() => {
      const t = [...d()], g = t.length, n = a(), J = y();
      if (n >= g - 1) {
        f(true), clearInterval(r), $(false), l(false);
        return;
      }
      if (J >= g) {
        let x = n;
        for (let C = n + 1; C < g; C++) t[C][s()] < t[x][s()] && (x = C);
        if (x !== n) {
          const C = t[n];
          t[n] = t[x], t[x] = C, b(t);
        }
        p(n + 1), S(n + 1);
        return;
      }
      S(J + 1);
    }, 100);
  }
  return createComponent(re, { get children() {
    return [ssr(lt, ssrHydrationKey(), " " + escape(s()), escape(createComponent(K, { get isRunning() {
      return h();
    } }))), ssr(at, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return d();
    }, children: (r, t) => ssr(dt, ssrHydrationKey(), `flex-1 z-10 border border-black
                    ${t() === a() || t() === y() || t() === y() + 1 ? "bg-red-600" : "bg-white"}`, "height:" + escape(E(r[s()], d(), s()), true)) })), `gradient-border ${h() ? "animation-snake" : ""}`), ssr(ct, ssrHydrationKey(), escape(createComponent(to$1, { onClick: P, get disabled() {
      return u() || d().length === 0;
    }, variant: "outline", children: "Start" })), escape(createComponent(Y, { placement: "bottom", get children() {
      return [createComponent(U, { as: (r) => createComponent(to$1, mergeProps({ variant: "outline" }, r, { get disabled() {
        return h() == true;
      }, children: "Select dataset" })) }), createComponent(Z, { class: "w-56", get children() {
        return createComponent(N, { get children() {
          return [createComponent(ee, { children: "Select dataset" }), createComponent(te, {}), createComponent(X, { get value() {
            return s();
          }, onChange: w, get children() {
            return [createComponent(L, { value: "populationSize", children: "Population Size" }), createComponent(L, { value: "landArea", children: "Land Area in km2" })];
          } })];
        } });
      } })];
    } })))];
  } });
}
var gt = ["<main", ' class="flex flex-col z-0 min-h-screen gap-4"><!--$-->', '<!--/--><div class="flex flex-col gap-4 items-center"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></main>"];
function jt() {
  return ssr(gt, ssrHydrationKey(), escape(createComponent(Le, {})), escape(createComponent(Ve, {})), escape(createComponent(Ne, {})), escape(createComponent(ut, {})), escape(createComponent(ot, {})), escape(createComponent(tt, {})));
}

export { jt as default };
//# sourceMappingURL=index2.mjs.map
