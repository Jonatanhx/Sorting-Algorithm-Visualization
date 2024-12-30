import { useAuth } from "@solid-mediakit/auth/client";
import { Match, Switch } from "solid-js";

export default function LoginButton() {
  const auth = useAuth();
  return (
    <Switch fallback={<div>Loading...</div>}>
      <Match when={auth.status() === "authenticated"}>
        <button
          onClick={() => auth.signOut({ redirectTo: "/" })}
          class="flex items-center px-10 font-semibold text-white no-underline transition border-bottom-effect cursor-pointer"
        >
          Sign out
        </button>
      </Match>
      <Match when={auth.status() === "unauthenticated"}>
        <button
          onClick={() => auth.signIn("github", { redirectTo: "/" })}
          class="flex items-center px-10 font-semibold text-white no-underline transition border-bottom-effect cursor-pointer"
        >
          Sign in
        </button>
      </Match>
    </Switch>
  );
}
