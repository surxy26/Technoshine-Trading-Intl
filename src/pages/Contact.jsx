import PageBanner from "../components/common/PageBanner";
import Reveal from "../components/common/Reveal";

function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Tell us about your product needs, quantity requirements, and project timeline."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
                Get In Touch
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white">
                Let’s talk about your project
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Share your requirements and our team will get back to you with
                product guidance and quotation support.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  sales@technoshine.com
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  +63 900 000 0000
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span>{" "}
                  Quezon City, Philippines
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  placeholder="Full name"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  placeholder="Email address"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  placeholder="Phone number"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                  placeholder="Company"
                />
              </div>

              <input
                className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Product needed"
              />
              <textarea
                className="mt-5 min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Tell us about quantity, specifications, and project details"
              />

              <button className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;