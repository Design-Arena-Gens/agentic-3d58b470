const galleryImages = [
  {
    id: "glow",
    src: "https://images.unsplash.com/photo-1605733513560-9bb5e4820c1c?auto=format&fit=crop&w=900&q=80",
    caption: "Bronzed balayage"
  },
  {
    id: "curl",
    src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7c5?auto=format&fit=crop&w=900&q=80",
    caption: "Curl defining ritual"
  },
  {
    id: "editorial",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    caption: "Editorial finish"
  },
  {
    id: "texture",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    caption: "Signature fringe"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="badge mx-auto">Our canvas</p>
          <h2 className="section-heading mt-6">Textures, tones, and finishes glowing with life.</h2>
          <p className="section-subtitle">
            A peek inside the looks crafted by our stylists, each customized for the person wearing it.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {galleryImages.map((image) => (
            <figure key={image.id} className="group relative overflow-hidden rounded-3xl">
              <div
                className="aspect-[3/4] w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <figcaption className="absolute inset-x-0 bottom-4 mx-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
