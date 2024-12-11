import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header class="background-black flex">
      <a href="/">
        <h1 class="text-white flex-1 text-6xl">Sorting Visualizer</h1>
      </a>
      <Navbar />
    </header>
  );
}
