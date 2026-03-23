import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import Reveal from "../components/common/Reveal";
import cases from "../data/cases";

function Cases() {
  return (
    <>
      <PageBanner
        title="Our Gallery"
        subtitle="Selected project environments where our industrial products support safety, structure, and performance."
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Project Applications"
            title="Examples of product deployment in real working environments"
            text="These samples show how our systems fit different types of road and infrastructure requirements."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-500">{item.location}</p>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cases;