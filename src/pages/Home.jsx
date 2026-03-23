import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import cases from "../data/cases";
import news from "../data/news";
import Reveal from "../components/common/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import ProductCard from "../components/product/ProductCard";

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80"
            alt="Industrial highway barrier"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="container-shell relative grid min-h-[82vh] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              Trusted Industrial Protection
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
              Modern steel barrier solutions built for demanding projects.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
              We deliver road safety systems, structural support components, and
              project-ready industrial products with dependable quality and
              strong technical service.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/products">Explore Products</Button>
              <Button
                to="/contact"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Request Quote
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={70}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Featured industrial product"
                className="h-[460px] w-full rounded-[1.5rem] object-cover"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Featured Products"
            title="Reliable systems for infrastructure and industrial use"
            text="Explore core product lines designed for durability, compatibility, and project performance."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white page-padding">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
              alt="Factory production"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionTitle
              eyebrow="About Us"
              title="Built for supply consistency, product strength, and technical reliability"
              text="We help clients source industrial barrier systems and related components with quality-focused production and efficient project handling."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["10+", "Years of industry experience"],
                ["250+", "Projects supported"],
                ["30+", "Export destinations"],
                ["24/7", "Response and service support"],
              ].map(([value, label], index) => (
                <Reveal key={label} delay={0.15 + index * 0.08}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-3xl font-extrabold text-orange-500">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Gallery"
            title="Projects backed by quality delivery and industrial performance"
            text="A sample of project environments where our product systems are applied."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cases.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                      {item.location}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
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

export default Home;