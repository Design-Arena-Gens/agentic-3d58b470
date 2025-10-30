import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="badge mx-auto bg-white/10 text-white">Client love</p>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-white md:text-4xl">
            &ldquo;Our guests leave luminous, empowered, and ready to live their story.&rdquo;
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20"
            >
              <blockquote className="text-sm leading-relaxed text-white/90">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-white">
                {testimonial.author}
                <span className="block text-xs font-normal text-white/60">{testimonial.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
