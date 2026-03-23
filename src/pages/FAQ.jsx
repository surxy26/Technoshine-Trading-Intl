import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import Reveal from "../components/common/Reveal";
import faq from "../data/faq";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Helpful answers about orders, customization, technical support, and project coordination."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Answers to common client questions"
            text="Here are some of the questions we usually receive from project teams and buyers."
            center
          />

          <div className="mt-12 space-y-4">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={item.question} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                      <span className="text-2xl font-light text-orange-500">{isOpen ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 leading-7 text-slate-600">{item.answer}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;