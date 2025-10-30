const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Stylists", href: "#stylists" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQs", href: "#faqs" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <div className="font-display text-xl font-semibold tracking-tight text-rose-500">
          Luminous Salon
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="transition hover:text-rose-500">
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          className="hidden rounded-full border border-rose-200 px-5 py-2 text-sm font-semibold text-rose-500 transition hover:border-rose-300 hover:text-rose-600 md:inline-flex"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
