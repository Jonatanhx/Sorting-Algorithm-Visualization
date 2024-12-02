import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header class="background-black flex">
      <div class="text-white flex-1 text-6xl">
        Sorting Algorithm Visualization
      </div>
      <Navbar />
    </header>
  );
}
