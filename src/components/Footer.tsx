import { AiFillGithub, AiFillLinkedin } from "solid-icons/ai";
import logo from "../public/assets/SortingVisualizerLogoAlt.png";

export default function Footer() {
  return (
    <footer>
      <div class="gradient-border h-[2px]" />

      <div class="bg-black h-[10rem] flex md:px-[4rem] text-white items-center justify-center px-4">
        <div class="flex flex-row">
          <img class="w-[3rem]" src={logo} alt="Company logo" />
          <h1 class="flex items-center lg:text-5xl md:text-4xl text-xl font-bold pl-6 md:pl-2">
            Sorting Visualizer
          </h1>
        </div>
        <div class="flex gap-4 flex-1 justify-end">
          <a
            href="https://github.com/Jonatanhx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Jonatan's GitHub profile"
          >
            <AiFillGithub class="md:size-14 size-8" aria-label="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonatanhx/"
            target="_blank"
            id="github-link"
            rel="noopener noreferrer"
            aria-label="Visit Jonatan's LinkedIn profile"
          >
            <AiFillLinkedin
              class="md:size-14 size-8"
              aria-label="Linkedin icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
