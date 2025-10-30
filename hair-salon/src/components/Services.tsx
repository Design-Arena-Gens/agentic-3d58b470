import { SparklesIcon } from "@heroicons/react/24/solid";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="badge mx-auto">
            <SparklesIcon className="h-4 w-4" /> Signature services
          </p>
          <h2 className="section-heading mt-6">Crafted looks for every hair story.</h2>
          <p className="section-subtitle">
            From luminous color to restorative rituals, each service begins with a thoughtful consultation to align with your lifestyle and hair goals.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="card flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{service.duration}</p>
                </div>
                <span className="rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-600">
                  {service.price}
                </span>
              </div>
              <p className="text-sm text-slate-600">{service.description}</p>
              {service.highlight ? (
                <span className="w-max rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-rose-500">
                  {service.highlight}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
