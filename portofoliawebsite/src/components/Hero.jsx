function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-32 text-center"
    >
      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        <span className="bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
          I'm Maymun Abdullahi Isse,
        </span>{' '}
        Full Stack Developer.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
        I build modern web and mobile applications with clean interfaces,
        responsive layouts, and reliable backend APIs.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-5">
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 px-8 py-4 font-semibold text-zinc-900 shadow-lg shadow-cyan-200/70 transition hover:scale-105"
        >
          Connect with me
        </a>
      </div>
    </section>
  );
}

export default Hero;