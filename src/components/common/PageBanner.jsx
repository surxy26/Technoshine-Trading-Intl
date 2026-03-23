import Reveal from "./Reveal";

function PageBanner({ title, subtitle, image }) {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,.68), rgba(2,6,23,.68)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-shell py-28 text-white">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
            Industrial Solutions
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm text-slate-200 md:text-base">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default PageBanner;