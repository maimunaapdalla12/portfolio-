function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="relative inline-block text-5xl font-bold tracking-tight md:text-6xl">
        {title}

        <span className="absolute -bottom-2 right-0 -z-0 h-5 w-28 rounded-full bg-gradient-to-r from-cyan-100 to-cyan-200 opacity-90" />
      </h2>
    </div>
  );
}

export default SectionTitle;