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
              title="Technoshine Trading International"
              text="A pioneering company in the field of road safety solutions, committed to delivering innovative and sustainable products to enhance safety on our roadways."
            />

            <p className="mt-6 text-slate-600 leading-8">
              As a dedicated and forward-thinking company, we take pride in introducing cutting-edge technologies aimed at transforming the landscape of road safety. At the heart of our innovation lies the commitment to creating safer roadways for everyone. At Technoshine, we believe in the power of innovation to address the pressing challenges of road safety.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src="src/assets/about/tech_about.jpg"
              alt="About factory"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell grid gap-6 md:grid-cols-3 items-stretch">
          {[
            ["Mission", "To revolutionize the way we approach and enhance safety on our roads."],
            ["Vision", "To contribute to a brighter and sustainable future through innovative solutions."],
            ["Value", "We are committed to innovation, safety, sustainability, and excellence in road solutions."],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="h-full rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-slate-600 leading-7 flex-grow">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;