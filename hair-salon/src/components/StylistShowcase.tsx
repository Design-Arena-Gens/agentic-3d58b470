import { stylists } from "@/data/stylists";

function createInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function StylistShowcase() {
  return (
    <section id="stylists" className="section-padding bg-rose-50/60">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="badge mx-auto bg-white text-rose-500">Meet the team</p>
          <h2 className="section-heading mt-6">Award-winning stylists dedicated to healthy, expressive hair.</h2>
          <p className="section-subtitle">
            We balance modern trends with timeless technique to design hair that feels authentic, effortless, and uniquely you.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stylists.map((stylist) => (
            <div key={stylist.id} className="card flex h-full flex-col gap-5 border-rose-100 bg-white/80 shadow-rose-100">
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-rose-200 via-rose-100 to-white">
                <span className="text-4xl font-display text-rose-600 drop-shadow-sm">
                  {createInitials(stylist.name)}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{stylist.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-rose-500">{stylist.title}</p>
                </div>
                <p className="text-sm text-slate-600">{stylist.bio}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-rose-500">
                  {stylist.specialties.map((specialty) => (
                    <li key={specialty} className="rounded-full bg-rose-500/10 px-3 py-1">
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
