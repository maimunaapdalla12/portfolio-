function ContactLine({ icon, text }) {
  return (
    <p className="flex items-center gap-4">
      <span className="grid size-9 place-items-center rounded-full bg-zinc-100 font-bold">
        {icon}
      </span>

      {text}
    </p>
  );
}

export default ContactLine;