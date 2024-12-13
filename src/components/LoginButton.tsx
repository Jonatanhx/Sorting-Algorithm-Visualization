import { useAuth } from "@solid-mediakit/auth/client";
import { Match, Switch } from "solid-js";

export default function LoginButton() {
  const auth = useAuth();
  return (
    <Switch fallback={<div>Loading...</div>}>
      <Match when={auth.status() === "authenticated"}>
        <div
          onClick={() => auth.signOut({ redirectTo: "/" })}
          class="flex items-center px-10 font-semibold text-white no-underline transition border-bottom-effect cursor-pointer"
        >
          Sign out
        </div>
      </Match>
      <Match when={auth.status() === "unauthenticated"}>
        <div
          onClick={() => auth.signIn("github", { redirectTo: "/" })}
          class="flex items-center px-10 font-semibold text-white no-underline transition border-bottom-effect cursor-pointer"
        >
          Sign in
        </div>
      </Match>
    </Switch>
  );
}
