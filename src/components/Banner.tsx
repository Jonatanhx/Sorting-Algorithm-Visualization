import { onMount } from "solid-js";

export default function Banner() {
  onMount(() => {
    const patternElement = document.getElementById("pattern");
    if (!patternElement) return;

    const gradientElement = document.getElementById("gradient");
    if (gradientElement) {
      gradientElement.style.opacity = "0.33";
    }

    const countY = Math.ceil(patternElement.clientHeight / 40) + 1;
    const countX = Math.ceil(patternElement.clientWidth / 48) + 1;

    for (let i = 0; i < countY; i++) {
      for (let j = 0; j < countX; j++) {
        const hexagon = document.createElement("div");
        hexagon.style.cssText = `
          background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
          width: 44px;
          height: 50px;
          background-size: contain;
          position: absolute;
          top: ${i * 40}px;
          left: ${j * 48 + ((i * 24) % 48)}px;
        `;

        patternElement.appendChild(hexagon);
      }
    }

    let mousePosition = { x: 0, y: 0 };

    document.addEventListener("mousemove", (mouse) => {
      mousePosition = { x: mouse.clientX, y: mouse.clientY };
    });

    const loop = () => {
      const gradientElement = document.getElementById("gradient");
      if (gradientElement) {
        gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }
      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  });

  return (
    <div
      id="gradient-border"
      class="bg-gradient-to-r from-[#1b1b1b] from-10% via-blue-500 via-50% to-[#1b1b1b] to-90% pb-[2px] z-40"
    >
      <section
        id="banner"
        class="lg:h-96 md:h-72 h-64 relative overflow-hidden"
      >
        <div class="flex flex-col lg:h-96 md:h-72 sm:h-64 text-white font-semibold text-center justify-center md:gap-2 absolute inset-0 z-10 font-[Montserrat] lg:p-0 p-2">
          <h1 class="lg:text-5xl md:text-4xl text-xl font-extrabold">
            Data sorting visualizer
          </h1>
          <h2 class="lg:text-5xl md:text-4xl text-lg font-extrabold">
            Learning data sorting algorithms made easy.
          </h2>
          <p class="lg:text-lg md:text-[0.9rem] text-[0.8rem]">
            Learn the strengths and weaknesses of each sorting algorithm with
            visual rendering of data sets in real time in a web environment.
          </p>
          <p class="lg:text-lg md:text-[0.9rem] text-[0.8rem]">
            Boost your knowledge in the data science fundamentals to make your
            software blazingly fast.
          </p>
        </div>
        <div id="gradient" class="absolute inset-0 z-0" />
        <div id="pattern" class="absolute top-0 left-0 w-full h-full z-0" />
      </section>
    </div>
  );
}
