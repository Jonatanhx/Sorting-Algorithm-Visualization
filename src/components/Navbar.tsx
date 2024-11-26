import { useAuth } from "@solid-mediakit/auth/client";
import { Match, Switch } from "solid-js";
import LoginButton from "./LoginButton";

export function Navbar() {
  const auth = useAuth();
  return (
    <nav class="flex-1 flex justify-end items-center">
      <Switch>
        <Match when={auth.status() === "authenticated"}>
          <div class="flex flex-row">
            <span class="text-xl text-white mr-3 flex items-center">
              Welcome {auth.session()?.user?.name}
            </span>
            <img
              class="h-36 w-36"
              src={`${auth.session()?.user.image}`}
              alt="User Github profile image"
            />
          </div>
        </Match>
      </Switch>
      <LoginButton />
    </nav>
  );
}
