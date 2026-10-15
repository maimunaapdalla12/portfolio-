function Stat({ number, label }) {
  return (
    <div className="border-zinc-200 sm:border-r last:border-r-0">
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-4xl font-black text-transparent">
        {number}
      </div>

      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-zinc-700">
        {label}
      </p>
    </div>
  );
}

export default Stat;