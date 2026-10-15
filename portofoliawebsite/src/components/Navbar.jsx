import logo from '../assets/maymaa-logo.png';

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

        <a href="#home" className="flex items-center gap-3">
          <img
            className="size-14 rounded-xl object-contain"
            src={logo}
            alt="Maymaa logo"
          />
          <span className="sr-only">Maymaa</span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-zinc-700 md:flex">
          <a className="transition hover:text-cyan-600" href="#home">
            Home
          </a>

          <a className="transition hover:text-cyan-600" href="#about">
            About Me
          </a>

          <a className="transition hover:text-cyan-600" href="#services">
            Services
          </a>

          <a className="transition hover:text-cyan-600" href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-cyan-200/70 transition hover:scale-105"
        >
          Connect With Me
        </a>

      </div>
    </nav>
  );
}

export default Navbar;