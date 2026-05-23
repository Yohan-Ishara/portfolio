import {
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ButtonLink } from './components/ButtonLink';
import { Navbar } from './components/Navbar';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import {
  experience,
  profile,
  projects,
  services,
  skills,
  stats,
  upworkReviews,
  upworkHighlights,
} from './data/portfolio';

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight);
  }, [isLight]);

  return (
    <div className="min-h-screen bg-ink-950 bg-premium-radial text-slate-100 light:bg-slate-50 light:bg-none light:text-slate-800">
      <Navbar isLight={isLight} onToggleTheme={() => setIsLight((value) => !value)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Upwork />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pb-20 pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 light:border-cyan-200 light:bg-cyan-50 light:text-cyan-700">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Available for freelance backend and SaaS projects
            </div>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white light:text-slate-950 sm:text-5xl lg:text-6xl">
              Full Stack Engineer building scalable SaaS products
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 light:text-slate-600">
              I build reliable web applications, backend systems, and modern software solutions for businesses and clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={profile.upwork} target="_blank" rel="noreferrer">Hire Me on Upwork</ButtonLink>
              <ButtonLink href={profile.github} target="_blank" rel="noreferrer" variant="secondary">View GitHub</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">Contact Me</ButtonLink>
              <ButtonLink href={profile.cv} download variant="ghost" className="gap-2">
                <Download size={17} />
                Download CV
              </ButtonLink>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((item) => (
                <div key={item} className="glass-card rounded-2xl p-4">
                  <CheckCircle2 className="mb-3 text-cyan-300 light:text-cyan-600" size={19} />
                  <p className="text-sm font-semibold leading-6 text-slate-200 light:text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[360px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-violet-400/10 to-transparent blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-2xl shadow-cyan-950/30 light:border-slate-200 light:shadow-slate-200/70">
              <img
                src={profile.image}
                alt="Yohan Ishara professional portrait"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-ink-950/78 p-5 backdrop-blur-xl light:bg-white/85">
                <p className="text-sm text-cyan-200 light:text-cyan-700">{profile.role}</p>
                <h2 className="mt-1 text-2xl font-bold text-white light:text-slate-950">Yohan Ishara</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300 light:text-slate-600">Java · Spring Boot · Kafka · SaaS delivery</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell py-20">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">About</p>
            <h2 className="mt-3 text-3xl font-bold text-white light:text-slate-950 sm:text-4xl">Practical engineering for teams, founders, and freelance clients.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <p className="text-lg leading-9 text-slate-300 light:text-slate-600">
              I am a Software Engineer with 5+ years of overall experience in backend development, microservices, workflow automation, and enterprise web applications. I specialize in Java Spring Boot, REST APIs, PostgreSQL, Kafka, Docker, CI/CD, and cloud-ready backend systems. I have worked with enterprise clients in healthcare and telecommunications, including healthcare billing systems integrated with AdvancedMD, Excel file processing, high-throughput parallel processing, API integrations, and data-driven backend services. I also work with clients through Upwork, where I have completed Java development projects with 5-star feedback and quality-focused delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300 light:text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 light:bg-slate-100"><MapPin size={16} /> Sri Lanka</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 light:bg-slate-100"><Mail size={16} /> {profile.email}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell py-20">
      <SectionHeading eyebrow="Skills" title="Backend-first engineering toolkit" description="Grouped around the systems I build most often: APIs, workflow engines, databases, and production-ready delivery." />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.category} delay={index * 0.04}>
              <div className="glass-card h-full rounded-3xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/[0.12] text-cyan-300 light:bg-cyan-50 light:text-cyan-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white light:text-slate-950">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-slate-300 light:border-slate-200 light:bg-white light:text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell py-20">
      <SectionHeading eyebrow="Experience" title="Professional experience" description="A timeline of backend engineering roles across healthcare, telecommunications, workflow systems, and web application delivery." />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent sm:block" />
        <div className="grid gap-5">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.05}>
              <div className="glass-card relative rounded-3xl p-6 sm:ml-12">
                <span className="absolute -left-[3.25rem] top-7 hidden h-4 w-4 rounded-full bg-cyan-300 ring-8 ring-cyan-300/10 sm:block" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-950">{item.company}</h3>
                    <p className="text-cyan-200 light:text-cyan-700">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400 light:border-slate-200 light:text-slate-500">{item.period}</span>
                </div>
                <p className="mt-4 leading-7 text-slate-300 light:text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell py-20">
      <SectionHeading eyebrow="Projects" title="Selected backend and workflow projects" description="Enterprise and client-facing systems where reliability, workflow clarity, integrations, and maintainable APIs mattered." />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.06}>
            <motion.article whileHover={{ y: -6 }} className="glass-card h-full rounded-3xl p-6 transition">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white light:text-slate-950">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-200 light:text-cyan-700">{project.role}</p>
                </div>
                <span className="rounded-full bg-violet-400/[0.12] px-3 py-1 text-sm text-violet-100 light:bg-violet-50 light:text-violet-700">Business impact</span>
              </div>
              <p className="text-slate-300 light:text-slate-600">{project.description}</p>
              <p className="mt-4 rounded-2xl bg-cyan-300/10 p-4 text-sm font-medium text-cyan-100 light:bg-cyan-50 light:text-cyan-800">{project.impact}</p>
              <ul className="mt-5 grid gap-2">
                {project.work.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300 light:text-slate-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300 light:text-cyan-600" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 light:border-slate-200 light:text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Upwork() {
  return (
    <section id="upwork" className="section-shell py-20">
      <div className="glass-card rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">Upwork Credibility</p>
              <h2 className="mt-3 text-3xl font-bold text-white light:text-slate-950 sm:text-4xl">Trusted by Clients on Upwork</h2>
              <p className="mt-5 leading-8 text-slate-300 light:text-slate-600">
                Alongside my enterprise software engineering experience, I have completed freelance Java and backend development projects on Upwork with consistent 5-star client feedback and quality-focused delivery.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200 light:border-emerald-200 light:bg-emerald-50 light:text-emerald-700">
                3 out of 4 completed jobs highlighted Committed to Quality
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {upworkHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl bg-white/[0.055] p-4 light:bg-slate-50">
                      <Icon className="text-cyan-300 light:text-cyan-700" size={20} />
                      <p className="mt-3 text-2xl font-bold text-white light:text-slate-950">{item.value}</p>
                      <p className="text-sm text-slate-400 light:text-slate-500">{item.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.045] p-5 light:border-slate-200 light:bg-white">
                <h3 className="text-lg font-bold text-white light:text-slate-950">Upwork Freelance Profile</h3>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300 light:text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-cyan-300 light:text-cyan-600" size={17} /> 5.0 client rating</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-cyan-300 light:text-cyan-600" size={17} /> 4 completed jobs</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-cyan-300 light:text-cyan-600" size={17} /> $100+ earned</li>
                  <li className="flex gap-2"><CheckCircle2 className="shrink-0 text-cyan-300 light:text-cyan-600" size={17} /> Java and backend development projects</li>
                </ul>
                <ButtonLink href={profile.upwork} target="_blank" rel="noreferrer" variant="secondary" className="mt-5 w-full">
                  Open Upwork Profile
                </ButtonLink>
              </div>
              <ButtonLink href={profile.upwork} target="_blank" rel="noreferrer" className="mt-7">View My Upwork Profile</ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {upworkReviews.map((item, index) => (
              <Reveal key={item.projectTitle} delay={index * 0.05}>
                <UpworkReviewCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell py-20">
      <SectionHeading eyebrow="Services" title="Backend services for teams and founders" description="Practical engineering support for businesses that need clean APIs, workflow systems, integrations, and reliable SaaS foundations." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={(index % 4) * 0.04}>
              <div className="glass-card h-full rounded-3xl p-5">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-400/[0.12] text-violet-200 light:bg-violet-50 light:text-violet-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white light:text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-shell py-20">
      <SectionHeading eyebrow="Upwork Reviews" title="Real client feedback from Java projects" description="Completed freelance Java development work with 5-star feedback and quality-focused delivery." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {upworkReviews.map((item, index) => (
          <Reveal key={`${item.projectTitle}-${index}`} delay={(index % 3) * 0.05}>
            <UpworkReviewCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function UpworkReviewCard({ projectTitle, client, location, rating, date, text, badge, amount, projectType, category }: (typeof upworkReviews)[number]) {
  return (
    <motion.article whileHover={{ y: -5 }} className="glass-card h-full rounded-3xl p-5 transition">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white light:text-slate-950">{projectTitle}</h3>
          <p className="mt-1 text-sm text-slate-400 light:text-slate-500">
            {client}{location ? ` · ${location}` : ''}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-300/[0.12] px-3 py-1 text-xs font-semibold text-emerald-200 light:bg-emerald-50 light:text-emerald-700">
          {badge}
        </span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1 text-amber-300 light:text-amber-500" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={16} fill="currentColor" />
          ))}
        </span>
        <span className="text-sm font-semibold text-amber-100 light:text-amber-700">{rating}</span>
        <span className="text-sm text-slate-500">{date}</span>
      </div>
      <p className="italic leading-7 text-slate-300 light:text-slate-600">"{text}"</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-400 light:text-slate-500">
        <span className="rounded-full border border-white/10 px-3 py-1.5 light:border-slate-200">{amount}</span>
        <span className="rounded-full border border-white/10 px-3 py-1.5 light:border-slate-200">{projectType}</span>
        <span className="rounded-full border border-white/10 px-3 py-1.5 light:border-slate-200">{category}</span>
      </div>
    </motion.article>
  );
}

function ExternalTextLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="hover:text-cyan-200 light:hover:text-cyan-700" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ExternalButtonLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <ButtonLink href={href} target="_blank" rel="noreferrer" variant="secondary" className={className}>
      {children}
    </ButtonLink>
  );
}

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitStatus('loading');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          projectType: formData.get('projectType'),
          message: formData.get('message'),
        }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || 'Could not send your message. Please try again.');
      }

      form.reset();
      setSubmitStatus('success');
      setSubmitMessage(result?.message || 'Thanks, your message has been sent.');
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Could not send your message. Please try again.');
    }
  }

  return (
    <section id="contact" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white light:text-slate-950 sm:text-5xl">
              Have a backend system, SaaS MVP, or API project in mind? Let&apos;s build it.
            </h2>
            <p className="mt-6 leading-8 text-slate-300 light:text-slate-600">
              Send a short note about your project, timeline, and the type of backend support you need. I can help with APIs, Spring Boot services, workflow automation, integrations, and performance improvements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`} className="gap-2"><Mail size={17} /> Email</ButtonLink>
              <ExternalButtonLink href={profile.linkedIn} className="gap-2"><Linkedin size={17} /> LinkedIn</ExternalButtonLink>
              <ExternalButtonLink href={profile.github} className="gap-2"><Github size={17} /> GitHub</ExternalButtonLink>
              <ExternalButtonLink href={profile.upwork}>Upwork Profile</ExternalButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="glass-card rounded-3xl p-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-300 light:text-slate-700">
                Name
                <input className="field" name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-300 light:text-slate-700">
                Email
                <input className="field" name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-medium text-slate-300 light:text-slate-700">
              Project type
              <select className="field" name="projectType" defaultValue="Java Backend Development">
                <option>Java Backend Development</option>
                <option>Spring Boot REST API Development</option>
                <option>Microservices Development</option>
                <option>Database Design</option>
                <option>SaaS MVP Backend Development</option>
                <option>API Integration</option>
                <option>Bug Fixing and Backend Improvements</option>
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-medium text-slate-300 light:text-slate-700">
              Message
              <textarea className="field min-h-36 resize-y" name="message" placeholder="Tell me about your project, timeline, and goals." required />
            </label>
            {submitMessage ? (
              <p
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-medium ${
                  submitStatus === 'success'
                    ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200 light:bg-emerald-50 light:text-emerald-700'
                    : 'border-rose-300/20 bg-rose-300/10 text-rose-200 light:bg-rose-50 light:text-rose-700'
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            ) : null}
            <button
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={submitStatus === 'loading'}
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Submit Request'}
              <Send size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 light:border-slate-200">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white light:text-slate-950">Yohan Ishara</p>
          <p className="text-sm text-slate-400 light:text-slate-500">{profile.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 light:text-slate-600">
          <ExternalTextLink href={profile.github}>GitHub</ExternalTextLink>
          <ExternalTextLink href={profile.linkedIn}>LinkedIn</ExternalTextLink>
          <ExternalTextLink href={profile.upwork}>Upwork</ExternalTextLink>
          <a className="hover:text-cyan-200 light:hover:text-cyan-700" href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Yohan Ishara.</p>
      </div>
    </footer>
  );
}

export default App;
