import { ssr, ssrHydrationKey, escape, createComponent } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/solid-js/web/dist/server.js';
import { K as Kt, E as Er, B as Br } from '../_/nitro.mjs';
import { useContext, Show } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/solid-js/dist/server.js';
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

var c = ["<p", ' class="text-white">You do not have the required credentials to view this</p>'], h = ["<main", ' class="flex min-h-screen flex-col bg-[#1b1b1b] mt-4"><!--$-->', "<!--/--><!--$-->", "<!--/--></main>"];
function k() {
  const { admins: e } = useContext(Kt), i = Er();
  return ssr(h, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    var _a;
    return (_a = e()) == null ? void 0 : _a.some((t) => {
      var _a2;
      return t.id === ((_a2 = i.session()) == null ? void 0 : _a2.user.id) && t.isAdmin;
    });
  }, get children() {
    return createComponent(Br, {});
  } })), escape(createComponent(Show, { get when() {
    var _a;
    return (_a = e()) == null ? void 0 : _a.some((t) => {
      var _a2;
      return t.id !== ((_a2 = i.session()) == null ? void 0 : _a2.user.id) && t.isAdmin;
    });
  }, get children() {
    return ssr(c, ssrHydrationKey());
  } })));
}

export { k as default };
//# sourceMappingURL=admin2.mjs.map