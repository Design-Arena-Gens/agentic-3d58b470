export default function Footer() {
  return (
    <footer className="section-padding bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Luminous Salon</p>
            <p className="mt-2 text-sm text-white/60">Modern hair artistry with gentle, sustainable care.</p>
          </div>
          <div className="grid gap-2 text-sm text-white/70">
            <a href="tel:+16465550126" className="hover:text-white">(646) 555-0126</a>
            <a href="mailto:hello@luminoussalon.com" className="hover:text-white">hello@luminoussalon.com</a>
            <p>89 Mercer St, Suite 3, New York, NY</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Luminous Salon. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
