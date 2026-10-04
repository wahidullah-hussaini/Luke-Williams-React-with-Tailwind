function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-28">
      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Luke Williams
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg mb-12">
        <h3>Founder - Matrix Designs</h3>
        <h3>📍 New York</h3>
      </div>

      <div className="max-w-3xl space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
        <p>
          Hi there! I’m an adventurer based in New York, with a
          background in the entertainment industry. These days,
          I’m driven by a love for creativity and innovation,
          constantly exploring new ways to connect ideas and
          build something meaningful.
        </p>

        <p>
          When I’m not immersed in my projects, you’ll find me
          outdoors - scaling rock faces, hiking scenic trails,
          and embracing the energy of nature. Life is all about
          climbing to new heights, both literally and figuratively!
        </p>
      </div>
    </section>
  );
}

export default Hero;
