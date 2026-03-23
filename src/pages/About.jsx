import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import Reveal from "../components/common/Reveal";

function About() {
  return (
    <>
      <PageBanner
        title="About Our Company"
        subtitle="We provide industrial barrier systems and product support built on reliability, technical service, and project readiness."
        image="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding bg-white">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Who We Are"
              title="A practical partner for industrial supply and infrastructure projects"
              text="Our company focuses on dependable production quality, responsive support, and long-term value for clients across public and private sector projects."
            />
            <p className="mt-6 text-slate-600 leading-8">
              From manufacturing coordination to shipment preparation, we work to keep product standards high and project requirements clear. Our goal is simple: deliver reliable systems and help clients move faster with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
              alt="About factory"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {[
            ["Mission", "Deliver industrial products with quality, consistency, and professional project support."],
            ["Vision", "Be a trusted product source for infrastructure and industrial applications across multiple markets."],
            ["Value", "We prioritize reliability, responsiveness, technical clarity, and long-term client trust."],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;