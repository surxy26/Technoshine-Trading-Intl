import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import Reveal from "../components/common/Reveal";

function TechnicalSupport() {
  return (
    <>
      <PageBanner
        title="Technical Support"
        subtitle="Practical assistance for product selection, project planning, and installation coordination."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Support Services"
            title="Helping you plan and execute with more clarity"
            text="Our technical support covers the most common needs of industrial and infrastructure buyers."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Product selection guidance",
              "Specification matching",
              "Quantity planning assistance",
              "Accessory compatibility review",
              "Delivery coordination support",
              "Project communication assistance",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">{item}</h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    We provide practical support to make product decisions and project coordination easier.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnicalSupport;