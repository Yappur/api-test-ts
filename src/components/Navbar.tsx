function Navbar() {
  return (
    <nav className="bg-[#1b1b1b] sticky top-0 left-0 right-0 p-4 opacity-95 z-[999]">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="styled-text font-bold lg:text-5xl sm:text-md md:text-3xl">
          Cinetérea
        </h1>
        <div>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2">
            Home
          </a>
          <a
            href="/popular"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Peliculas Populares
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
