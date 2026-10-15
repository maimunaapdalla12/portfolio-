import SectionTitle from './SectionTitle';
import { services } from '../data/portfolioData';

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="My Services" />

      <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="group rounded-xl border border-cyan-100 bg-white p-8 shadow-lg shadow-cyan-100/70 transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-cyan-200 hover:text-zinc-950"
          >
            <span className="text-2xl font-bold">{service.id}</span>

            <h3 className="mt-6 text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h3>

            <p className="mt-4 leading-7 text-zinc-600">
              {service.body}
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 font-semibold"
            >
              Read More <span aria-hidden="true">&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;