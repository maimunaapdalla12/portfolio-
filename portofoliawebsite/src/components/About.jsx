import logo from '../assets/maymaa-logo.png';
import SectionTitle from './SectionTitle';
import Stat from './Stat';
import { skills } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle title="About me" />

      <div className="mt-16 grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">

        <div className="rounded-3xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 shadow-2xl shadow-cyan-200/70">
          <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-black">
            <img
              className="h-full w-full object-contain"
              src={logo}
              alt="Maymaa logo"
            />
          </div>
        </div>

        <div>
          <p className="text-lg leading-8 text-zinc-700">
            I am a full stack developer with experience in building modern web
            and mobile applications. I work with MERN Stack, ASP.NET Core Web
            API, Flutter, React, and Tailwind CSS to create clean interfaces,
            reliable backend systems, and responsive user experiences.
          </p>

          <div className="mt-10 space-y-6">
            {skills.map(([name, value]) => (
              <div
                key={name}
                className="grid gap-3 sm:grid-cols-[130px_1fr] sm:items-center"
              >
                <span className="font-semibold">{name}</span>

                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-100 to-cyan-300"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 text-center sm:grid-cols-3">
        <Stat number="2+" label="Years of experience" />
        <Stat number="10+" label="Projects completed" />
        <Stat number="2+" label="Work Experience" />
      </div>
    </section>
  );
}

export default About;