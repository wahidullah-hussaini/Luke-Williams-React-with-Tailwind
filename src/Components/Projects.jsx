const projects = [
  {
    title: "TrailType",
    year: "2026",
    description: "Modern design inspired by the great outdoors.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Spark Sessions",
    year: "2026",
    description: "A podcast for creators chasing meaningful work.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Into the Wild",
    year: "2025",
    description: "A raw journey through nature’s extremes.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
  },
];

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center border-b border-gray-300 pb-5 mb-10">
        <h2 className="text-4xl font-bold">Latest Projects</h2>
        <span className="text-lg text-gray-700">View all →</span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="mt-5">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {project.year}
              </p>

              <p className="text-gray-600 mt-3">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
