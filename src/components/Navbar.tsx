import { useAuth } from "@solid-mediakit/auth/client";
import { Match, Show, Switch, useContext } from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import LoginButton from "./LoginButton";

export function Navbar() {
  const { admins } = useContext(AdminDataContext);

  const auth = useAuth();
  return (
    <nav class="flex-1 flex justify-end items-center">
      <Switch>
        <Match when={auth.status() === "authenticated"}>
          <Show
            when={admins()?.some(
              (admin) => admin.id === auth.session()?.user.id && admin.isAdmin
            )}
          >
            <a href="/Admin">
              <div class="text-white mr-3">Admin</div>
            </a>
          </Show>
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
