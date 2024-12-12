import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header class="background-black flex">
      <a href="/">
        <h1 class="text-white flex-1 lg:text-6xl md:text-4xl sm:text-3xl">
          Sorting Visualizer
        </h1>
      </a>
      <Navbar />
    </header>
  );
}
