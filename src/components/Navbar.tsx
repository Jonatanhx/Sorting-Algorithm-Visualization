import { useAuth } from "@solid-mediakit/auth/client";
import { AiOutlineMenu } from "solid-icons/ai";
import { createSignal, Match, Show, Switch, useContext } from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import LoginButton from "./LoginButton";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export const [activeSection, setActiveSection] = createSignal("");

export function Navbar() {
  const { admins } = useContext(AdminDataContext);
  const auth = useAuth();

  return (
    <nav class="flex min-w-fit md:relative mt-2 md:mt-0">
      <div class="hidden md:flex flex-1 justify-end">
        <LoginButton />
        <Show
          when={admins()?.some(
            (admin) =>
              admin.id === auth.session()?.user.id &&
              admin.isAdmin &&
              auth.status() === "authenticated"
          )}
        >
          <a
            href="/Admin"
            class="flex items-center font-semibold border-bottom-effect text-white px-10"
          >
            Admin
          </a>
        </Show>
        <Show when={auth.status() === "authenticated"}>
          <img
            class="lg:w-20 md:w-[8rem]"
            src={`${auth.session()?.user.image}`}
            alt="Github profile picture"
          />
        </Show>
      </div>

      <div class="md:hidden flex flex-1 justify-end items-center">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <p class="hidden">x</p>
              <AiOutlineMenu class="text-white cursor-pointer size-6" />
            </MenubarTrigger>
            <MenubarContent class="bg-[#1b1b1b]">
              <Switch>
                <Match when={auth.status() === "authenticated"}>
                  <Show
                    when={admins()?.some(
                      (admin) =>
                        admin.id === auth.session()?.user.id && admin.isAdmin
                    )}
                  >
                    <MenubarItem>
                      <button>
                        <a
                          href="/Admin"
                          class="flex items-center font-semibold border-bottom-effect text-white px-10"
                        >
                          Admin
                        </a>
                      </button>
                    </MenubarItem>
                  </Show>
                </Match>
              </Switch>

              <MenubarItem>
                <LoginButton />
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}
