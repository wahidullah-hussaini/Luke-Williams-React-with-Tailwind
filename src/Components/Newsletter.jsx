function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="border border-gray-300 rounded-xl bg-gray-50 p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80"
            alt="Mountain landscape"
            className="w-full md:w-1/3 h-64 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">
              Subscribe to my Newsletter
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="name@email.com"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-4 text-lg outline-none"
              />

              <button
                className="bg-gray-800 text-white px-6 py-4 rounded-lg text-lg"
              >
                Subscribe
              </button>
            </div>

            <p className="text-lg text-gray-700 mt-5 leading-relaxed">
              Sign up to stay updated about my latest work and
              adventures. <i>No Spam, No BS. Promise!</i>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
