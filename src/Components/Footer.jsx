function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pt-10 pb-8">
      <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-lg">
          © Luke Williams | 2026
        </p>

        <div className="flex gap-8 text-lg">
          <span className="text-orange-500">Home</span>
          <span>About</span>
          <span>Work</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
