import { AcademicCapIcon, SparklesIcon, SwatchIcon } from "@heroicons/react/24/outline";

const pillars = [
  {
    title: "Holistic consultation",
    description:
      "We consider your hair history, everyday rituals, and wellness goals to create a maintenance plan you can live with.",
    icon: AcademicCapIcon
  },
  {
    title: "Editorial artistry",
    description:
      "Our stylists craft runway-inspired looks adapted for daily wear using advanced color and cutting methods.",
    icon: SwatchIcon
  },
  {
    title: "Sensory escape",
    description:
      "Sip botanical teas, recharge with guided breathing, and enjoy a luxe lounge with curated playlists and aromatherapy.",
    icon: SparklesIcon
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="badge w-max">The luminous difference</p>
          <h2 className="section-heading">A sanctuary for hair artistry & restorative self-care.</h2>
          <p className="section-subtitle">
            Each visit is orchestrated with slow beauty rituals, conscious products, and thoughtful education so you leave with confidence and a bespoke plan.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card border-slate-100">
                <pillar.icon className="mb-4 h-8 w-8 text-rose-500" />
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-rose-100 via-white to-rose-50 blur-3xl" />
          <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white shadow-2xl shadow-rose-100">
            <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-5 shadow-lg shadow-rose-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
                Ritual highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Aromatic scalp breathing to release tension</li>
                <li>• Customized glossing bar with bond-builder upgrade</li>
                <li>• Finished with runway styling lesson & take-home plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
