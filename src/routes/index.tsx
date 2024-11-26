import { useAuth } from "@solid-mediakit/auth/client";
import { type VoidComponent, Match, Switch } from "solid-js";
import BubbleSort from "~/env/components/BubbleSort";
import Header from "~/env/components/Header";

const Home: VoidComponent = () => {
  return (
    <main class="flex min-h-screen flex-col bg-black">
      <Header />
      <BubbleSort />
      <AuthShowcase />
    </main>
  );
};

export default Home;

const AuthShowcase: VoidComponent = () => {
  const auth = useAuth();
  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <Switch fallback={<div>Loading...</div>}>
        <Match when={auth.status() === "authenticated"}>
          <div class="flex flex-col gap-3">
            <span class="text-xl text-white">
              Welcome {auth.session()?.user?.name}
            </span>
            <button
              onClick={() => auth.signOut({ redirectTo: "/" })}
              class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            >
              Sign out
            </button>
          </div>
        </Match>
        <Match when={auth.status() === "unauthenticated"}>
          <button
            onClick={() => auth.signIn("github", { redirectTo: "/" })}
            class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          >
            Sign in
          </button>
        </Match>
      </Switch>
    </div>
  );
};
