function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-bold">LW</h2>

        <span className="text-gray-300">|</span>

        <div className="hidden md:flex gap-7 text-lg">
          <span>About</span>
          <span>Work</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="flex items-center gap-5 text-lg">
        <span>𝕏</span>
        <span>in</span>
        <span className="text-gray-300">|</span>
        <span>☾</span>
      </div>
    </nav>
  );
}

export default Navbar;
