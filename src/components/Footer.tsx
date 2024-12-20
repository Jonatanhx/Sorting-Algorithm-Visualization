import { AiFillGithub, AiFillLinkedin } from "solid-icons/ai";

export default function Footer() {
  return (
    <footer class="bg-cyan-500 h-56 flex items-center px-96 mt-4">
      <h1 class="text-black flex-1 lg:text-5xl md:text-4xl sm:text-3xl font-bold">
        Sorting Visualizer
      </h1>
      <div class="flex gap-4">
        <a
          href="https://github.com/Jonatanhx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub class="size-14" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonatanhx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin class="size-14" />
        </a>
      </div>
    </footer>
  );
}
