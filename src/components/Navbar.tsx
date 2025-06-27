import { useAuth } from "@solid-mediakit/auth/client";
import { AiOutlineMenu } from "solid-icons/ai";
import { createSignal, Show } from "solid-js";
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
  const auth = useAuth();

  return (
    <nav class="flex min-w-fit md:relative mt-2 md:mt-0">
      <div class="hidden md:flex flex-1 justify-end">
        <LoginButton />
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
