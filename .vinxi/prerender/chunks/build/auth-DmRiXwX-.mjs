import { createActionURL, Auth, raw, skipCSRFCheck, isAuthAction } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/core/index.js';
import { R as R$1, z as G, D as Y, F as u } from '../_/nitro.mjs';
import k from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/core/providers/github.js';
import { PrismaAdapter } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/@auth/prisma-adapter/index.js';
import { z } from 'file://D:/Code/Examen-projekt/Sorting-Algorithm-Visualization/node_modules/zod/lib/index.mjs';

const R = "authorizationParams-";
function W(e) {
  const n = async (t) => {
    var _a;
    const r = typeof e == "object" ? e : await e(t);
    R$1(process.env, r), (_a = r.basePath) != null ? _a : r.basePath = u(r);
    const { request: o } = t, a = new URL(o.url), d = a.pathname.slice(r.basePath.length + 1).split("/")[0];
    return isAuthAction(d) && a.pathname.startsWith(r.basePath + "/") ? Auth(o, r) : new Response("Not Found", { status: 404 });
  };
  return { signIn: async (t) => {
    const { request: r } = t, o = typeof e == "object" ? e : await e(t);
    R$1(process.env, o);
    const a = await r.formData(), { providerId: d, ...u } = Object.fromEntries(a);
    let p = {}, m = {};
    for (const i in u) i.startsWith(R) ? p[i.slice(R.length)] = u[i] : m[i] = u[i];
    await D(d, m, p, o, t);
  }, signOut: async (t) => {
    const r = typeof e == "object" ? e : await e(t);
    R$1(process.env, r);
    const o = Object.fromEntries(await t.request.formData());
    await j(o, r, t);
  }, GET: n, POST: n };
}
async function D(e, n = {}, t, r, o) {
  var _a, _b, _c, _d, _e, _f;
  const { request: a } = o, { protocol: d } = new URL(a.url), u = new Headers(a.headers), { redirect: p = true, redirectTo: m, ...i } = n instanceof FormData ? Object.fromEntries(n) : n, l = (_b = (_a = m == null ? void 0 : m.toString()) != null ? _a : u.get("Referer")) != null ? _b : "/", h = createActionURL("signin", d, u, process.env, r);
  if (!e) {
    const s = `${h}?${new URLSearchParams({ callbackUrl: l })}`;
    return p && G(o.nativeEvent, s, 302), s;
  }
  let w = `${h}/${e}?${new URLSearchParams(t)}`, S;
  for (const s of r.providers) {
    const { id: P } = typeof s == "function" ? s() : s;
    if (P === e) {
      S = P;
      break;
    }
  }
  if (!S) {
    const s = `${h}?${new URLSearchParams({ callbackUrl: l })}`;
    return p && G(o.nativeEvent, s, 302), s;
  }
  S === "credentials" && (w = w.replace("signin", "callback")), u.set("Content-Type", "application/x-www-form-urlencoded");
  const O = new URLSearchParams({ ...i, callbackUrl: l }), g = new Request(w, { method: "POST", headers: u, body: O }), b = await Auth(g, { ...r, raw: raw, skipCSRFCheck: skipCSRFCheck });
  for (const s of (_c = b == null ? void 0 : b.cookies) != null ? _c : []) o.response.headers.append("set-cookie", `${s.name}=${s.value}; Path=/; ${((_d = s.options) == null ? void 0 : _d.httpOnly) ? "HttpOnly;" : ""} ${((_e = s.options) == null ? void 0 : _e.secure) ? "Secure;" : ""} ${((_f = s.options) == null ? void 0 : _f.sameSite) ? `SameSite=${s.options.sameSite};` : ""}`);
  return p ? G(o.nativeEvent, b.redirect, 302) : b.redirect;
}
async function j(e, n, t) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { request: r } = t, { protocol: o } = new URL(r.url), a = new Headers(r.headers);
  a.set("Content-Type", "application/x-www-form-urlencoded");
  const d = createActionURL("signout", o, a, process.env, n), u = (_b = (_a = e == null ? void 0 : e.redirectTo) != null ? _a : a.get("Referer")) != null ? _b : "/", p = new URLSearchParams({ callbackUrl: u }), m = new Request(d, { method: "POST", headers: a, body: p }), i = await Auth(m, { ...n, raw: raw, skipCSRFCheck: skipCSRFCheck });
  for (const l of (_c = i == null ? void 0 : i.cookies) != null ? _c : []) t.response.headers.append("set-cookie", `${l.name}=${l.value}; Path=/; ${((_d = l.options) == null ? void 0 : _d.httpOnly) ? "HttpOnly;" : ""} ${((_e = l.options) == null ? void 0 : _e.secure) ? "Secure;" : ""} ${((_f = l.options) == null ? void 0 : _f.sameSite) ? `SameSite=${l.options.sameSite};` : ""}`);
  return ((_g = e == null ? void 0 : e.redirect) != null ? _g : true) ? G(t.nativeEvent, i.redirect, 302) : i;
}
const q = z.object({ NODE_ENV: z.enum(["development", "production", "test"]).default("development"), GITHUB_ID: z.string(), GITHUB_SECRET: z.string(), AUTH_SECRET: z.string(), AUTH_TRUST_HOST: z.string().optional(), AUTH_URL: z.string().optional(), DATABASE_URL: z.string() });
z.object({ MODE: z.enum(["development", "production", "test"]).default("development"), VITE_AUTH_PATH: z.string().optional() });
const B = (e) => Object.entries(e).map(([n, t]) => {
  if (t && "_errors" in t) return `${n}: ${t._errors.join(", ")}
`;
}).filter(Boolean), v = q.safeParse(process.env);
if (v.success === false) throw console.error(`\u274C Invalid environment variables:
`, ...B(v.error.format())), new Error("Invalid environment variables");
const U = v.data, M = { callbacks: { session({ session: e, user: n }) {
  return e.user && (e.user.id = n.id), e;
} }, adapter: PrismaAdapter(Y), providers: [k({ clientId: U.GITHUB_ID, clientSecret: U.GITHUB_SECRET, allowDangerousEmailAccountLinking: true })], debug: false, basePath: "/api/auth" };

export { M, W };
//# sourceMappingURL=auth-DmRiXwX-.mjs.map
