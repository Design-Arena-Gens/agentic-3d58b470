'use client';

import { useState } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { faqs } from "@/data/faqs";

export default function Faqs() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <section id="faqs" className="section-padding bg-rose-50/60">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="badge mx-auto bg-white text-rose-500">FAQs</p>
          <h2 className="section-heading mt-6">Everything you need to know before booking.</h2>
          <p className="section-subtitle">
            We love questions. If you can&apos;t find an answer here, call or text us at (646) 555-0126.
          </p>
        </div>
        <div className="mt-16 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            return (
              <div key={faq.question} className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm shadow-rose-100">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-slate-900"
                  onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <MinusSmallIcon className="h-5 w-5 text-rose-500" />
                  ) : (
                    <PlusSmallIcon className="h-5 w-5 text-rose-500" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-6 pb-6 text-sm text-slate-600`}
                >
                  <div className="overflow-hidden">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
