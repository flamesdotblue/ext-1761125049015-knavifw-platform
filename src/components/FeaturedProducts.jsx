const products = [
  {
    id: 1,
    name: 'HydraGlow Elixir',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'SilkTouch Moisturizer',
    price: 56,
    image:
      'https://images.unsplash.com/photo-1696603971962-0c5eee1b9c85?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWxrVG91Y2glMjBNb2lzdHVyaXplcnxlbnwwfDB8fHwxNzYxMTI1MjQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Radiance Cleanser',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Velvet Night Serum',
    price: 62,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative z-10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="text-sm tracking-wide text-pink-600">Our Most Loved Collection</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured Beauty Essentials
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Curated best-sellers that blend science-backed formulas with sensorial luxury.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-lg backdrop-blur-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-slate-900">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-pink-600 font-semibold">${p.price.toFixed(2)}</span>
                  <button className="rounded-xl border border-pink-200 bg-pink-50 px-3 py-1.5 text-sm text-pink-700 transition hover:bg-pink-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
