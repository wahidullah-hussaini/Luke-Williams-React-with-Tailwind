const posts = [
  {
    date: "Jul 2025",
    title: "How I built my Framer template empire",
  },
  {
    date: "Jun 2025",
    title: "My journey from $0 to $10K MRR",
  },
  {
    date: "Jun 2025",
    title: "Is vibe coding here to stay?",
  },
  {
    date: "May 2025",
    title: "Don't complain, create!",
  },
];

function LatestPosts() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center border-b border-orange-200 pb-5">
        <h2 className="text-4xl font-bold">Latest Posts</h2>

        <span className="text-lg text-gray-700">
          View all
        </span>
      </div>

      <div>
        {posts.map((post) => (
          <div
            key={post.title}
            className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 py-6 border-b border-gray-300"
          >
            <p className="text-gray-500 text-lg">
              {post.date}
            </p>

            <p className="text-xl">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;
