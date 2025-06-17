export default function Hero() {
  return (
    <section>
      <div class="h-[395px] flex justify-center items-center bg-[#1b1b1b] text-nowrap">
        <div class="flex flex-col text-white font-semibold text-center justify-center gap-2 font-[Montserrat]">
          <h1 class="lg:text-5xl md:text-4xl text-xl font-extrabold">
            Data sorting visualizer <br /> Learning data sorting algorithms made
            easy.
          </h1>
          <p class="lg:text-lg md:text-[0.9rem] text-[0.8rem]">
            Learn the strengths and weaknesses of each sorting algorithm with
            visual rendering of data sets in real time in a web environment.
            <br />
            Boost your knowledge in computer science fundamentals to understand
            what's happening under the hood.
          </p>
        </div>
      </div>
      <div class="gradient-border h-[2px]" />
    </section>
  );
}
