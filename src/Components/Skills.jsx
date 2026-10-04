function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-10">
        What I Do
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Web Design
          </h3>

          <p className="text-gray-600">
            I create simple and modern designs for websites.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Branding
          </h3>

          <p className="text-gray-600">
            I help create strong and memorable brands.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Creative Direction
          </h3>

          <p className="text-gray-600">
            I turn ideas into meaningful creative projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
