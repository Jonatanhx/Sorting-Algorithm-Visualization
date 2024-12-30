export default function Banner() {
  return (
    <div
      id="gradient-border"
      class="bg-gradient-to-r from-[#1b1b1b] from-10% via-blue-500 via-50% to-[#1b1b1b] to-90% pb-[2px]"
    >
      <section class="lg:h-96 md:h-72 sm:h-64 bg-carbon-fibre">
        <div class="lg:h-96 md:h-72 sm:h-64 bg-gradient-to-t from-black from-10% via-black/50 via-60% to-transparent to-100% flex justify-center items-center p-2">
          <div class="flex flex-col lg:h-96 md:h-72 sm:h-64 text-white font-semibold text-center justify-center">
            <h1 class="lg:text-5xl md:text-4xl sm:text-3xl font-extrabold">
              Data sorting visualizer
              <br />
              Learning data sorting algorithms made easy.
            </h1>
            <p class="lg:text-lg md:text-md sm:text-sm pt-3">
              Learn the strengths and weaknesses of each sorting algorithm with
              visual rendering of data sets in real time in a web environment.
              <br />
              Boost your knowledge in the fundamentals to make your software
              blazingly fast.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
