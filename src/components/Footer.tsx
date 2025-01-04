import { AiFillGithub, AiFillLinkedin } from "solid-icons/ai";
import logo from "../assets/SortingVisualizerLogoAlt.png";

export default function Footer() {
  return (
    <footer>
      <div class="h-[1rem] bg-cyan-700" />

      <div class="bg-black h-[10rem] flex items-center px-[4rem] text-white">
        <div class="flex-1" />
        <div class="flex flex-row">
          <img class="w-[3rem] mr-2" src={logo} />
          <h1 class=" flex-1 lg:text-5xl md:text-4xl text-lg font-bold">
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
            <AiFillGithub class="size-14" aria-label="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonatanhx/"
            target="_blank"
            id="github-link"
            rel="noopener noreferrer"
            aria-label="Visit Jonatan's LinkedIn profile"
          >
            <AiFillLinkedin class="size-14" aria-label="Linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
