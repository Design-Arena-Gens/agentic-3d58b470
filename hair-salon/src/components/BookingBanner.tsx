import Link from "next/link";

export default function BookingBanner() {
  return (
    <section id="booking" className="section-padding">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-gradient-to-r from-rose-500 via-rose-400 to-rose-600 p-12 text-white shadow-2xl shadow-rose-200">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Your time to glow</p>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Ready for luminous hair days?</h2>
            <p className="max-w-md text-sm text-white/80">
              Reserve an appointment online or connect with our concierge to customize a ritual that suits your schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://cal.com" target="_blank" className="primary-button bg-white text-rose-500 hover:bg-rose-50">
                Book online
              </Link>
              <a href="tel:+16465550126" className="secondary-button border-white/50 text-white hover:bg-white/10">
                Call (646) 555-0126
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 text-sm">
            <p className="font-semibold uppercase tracking-[0.4em] text-white/70">Hours</p>
            <ul className="mt-4 space-y-2 text-white/90">
              <li>Tuesday – Friday: 9am – 8pm</li>
              <li>Saturday: 9am – 5pm</li>
              <li>Sunday – Monday: Private bookings</li>
            </ul>
            <p className="mt-6 text-white/70">89 Mercer St, Suite 3, New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
