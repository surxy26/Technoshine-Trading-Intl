import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import Reveal from "../components/common/Reveal";
import news from "../data/news";
import { formatDate } from "../utils/helpers";

function News() {
  return (
    <>
      <PageBanner
        title="Latest News"
        subtitle="Insights, updates, and technical information that help clients make better project decisions."
        image="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Articles"
            title="Updates from our company and industry"
            text="Browse our latest posts about quality, logistics, and product selection."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {news.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-500">{formatDate(item.date)}</p>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{item.excerpt}</p>
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

export default News;