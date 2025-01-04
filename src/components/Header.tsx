import { Navbar } from "./Navbar";
import SortingSpeedSlider from "./SortingSpeedSlider";

export default function Header() {
  return (
    <div
      id="gradient-border"
      class="bg-gradient-to-r from-[#1b1b1b] from-1% via-blue-500 via-50% to-[#1b1b1b] to-99% pb-[2px] sticky top-0 z-50"
    >
      <header class="flex bg-[#1b1b1b] md:flex-row flex-col">
        <a href="/" class="flex items-center px-12  border-bottom-effect p-4">
          <h1 class="text-white flex-1 lg:text-4xl md:text-4xl text-xl font-bold">
            Sorting Visualizer
          </h1>
        </a>
        <SortingSpeedSlider />
        <Navbar />
      </header>
    </div>
  );
}
