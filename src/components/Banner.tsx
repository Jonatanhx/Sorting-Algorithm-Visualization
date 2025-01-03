export default function Banner() {
  return (
    <div
      id="gradient-border"
      class="bg-gradient-to-r from-[#1b1b1b] from-10% via-blue-500 via-50% to-[#1b1b1b] to-90% pb-[2px] z-40"
    >
      <section class="lg:h-96 md:h-72 sm:h-64 bg-carbon-fibre">
        <div class="lg:h-96 md:h-72 sm:h-64 bg-gradient-to-t from-black from-10% via-black/50 via-60% to-transparent to-100% flex justify-center items-center p-4">
          <div class="flex flex-col lg:h-96 md:h-72 sm:h-64 text-white font-semibold text-center justify-center md:gap-2">
            <h1 class="lg:text-5xl md:text-4xl text-xl font-extrabold">
              Data sorting visualizer
            </h1>
            <h2 class="lg:text-5xl md:text-4xl text-lg font-extrabold">
              Learning data sorting algorithms made easy.
            </h2>
            <p class="lg:text-lg md:text-md text-[0.8rem]">
              Learn the strengths and weaknesses of each sorting algorithm with
              visual rendering of data sets in real time in a web environment.
            </p>
            <p class="lg:text-lg md:text-md text-[0.8rem]">
              Boost your knowledge in the data science fundamentals to make your
              software blazingly fast.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
