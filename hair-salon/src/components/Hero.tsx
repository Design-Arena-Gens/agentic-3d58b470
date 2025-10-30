import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-56 w-56 rounded-full bg-rose-300/40 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="badge w-max">Award-winning hair studio in SoHo NYC</p>
          <h1 className="text-4xl font-display tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Modern artistry rooted in craftsmanship & care.
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            Step into an immersive salon experience where precision cutting, luminous color, and restorative rituals are crafted around your natural texture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#booking" className="primary-button">
              Reserve your chair
            </Link>
            <Link href="#services" className="secondary-button">
              Explore services
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div>
              <p className="font-semibold text-slate-900">1,200+ five-star reviews</p>
              <p>Trusted by New York&apos;s creatives and execs</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Cruelty-free products</p>
              <p>Powered by slow beauty and sustainability</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-3xl border border-white/60 bg-white/40" />
          <div className="absolute -right-8 bottom-16 h-20 w-20 rounded-full border border-white/50 bg-white/70" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/40 shadow-2xl shadow-rose-100">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 space-y-3 text-white">
              <p className="text-xs uppercase tracking-[0.3em]">Luminous Studio</p>
              <p className="text-2xl font-display">Hair that feels like you</p>
              <p className="text-sm text-white/80">Signature balayage • Editorial styling • Texture mastery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
