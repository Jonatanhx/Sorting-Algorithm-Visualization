import logo from "../public/assets/SortingVisualizerLogoAlt.png";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header class="flex flex-col bg-[#131313]">
      <div class="flex flex-row justify-between">
        <a
          href="/"
          class="flex items-center lg:pl-6 pl-4 border-bottom-effect py-4"
        >
          <img class="w-[3rem] mr-2" src={logo} alt="Company logo" />
          <h1 class="text-white flex-1 lg:text-4xl md:text-3xl text-xl font-bold">
            Sorting Visualizer
          </h1>
        </a>
        <Navbar />
      </div>

      <div class="gradient-border h-[2px]" />
    </header>
  );
}
