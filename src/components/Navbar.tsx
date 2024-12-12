import { useAuth } from "@solid-mediakit/auth/client";
import { Match, Show, Switch, useContext } from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import LoginButton from "./LoginButton";
import { Button } from "./ui/button";

export function Navbar() {
  const { admins } = useContext(AdminDataContext);

  const auth = useAuth();
  return (
    <nav class="flex-1 flex justify-end items-center">
      <LoginButton />
      <Switch>
        <Match when={auth.status() === "authenticated"}>
          <Show
            when={admins()?.some(
              (admin) => admin.id === auth.session()?.user.id && admin.isAdmin
            )}
          >
            <a href="/Admin">
              <Button variant={"default"} class="text-white mr-3">
                Admin
              </Button>
            </a>
          </Show>
          <div>
            <img
              class="lg:h-28 md:h-20"
              src={`${auth.session()?.user.image}`}
              alt="User Github profile image"
            />
          </div>
        </Match>
      </Switch>
    </nav>
  );
}
