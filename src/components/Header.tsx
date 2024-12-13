import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header class="background-black flex border-b border-neutral-800 bg-[#1b1b1b]">
      <a
        href="/"
        class=" flex items-center px-12  border-bottom-effect lg:h-28 md:h-20"
      >
        <h1 class="text-white flex-1 lg:text-6xl md:text-4xl sm:text-3xl">
          Sorting Visualizer
        </h1>
      </a>
      <Navbar />
    </header>
  );
}
