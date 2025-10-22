import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to blend with brand colors */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-pink-50/40 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/50 px-3 py-1 text-xs tracking-wide text-slate-700 backdrop-blur-md">
            New season, same glow
          </span>
          <h1 className="mt-5 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Elevate Your Natural Beauty
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
            Premium skincare and cosmetics crafted with love and science.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-white shadow-lg shadow-pink-200/40 transition hover:brightness-110"
            >
              Shop Now
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/60 px-6 py-3 text-slate-800 backdrop-blur-md shadow hover:bg-white/80"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* Glass product card preview */}
        <div className="mt-10 w-full max-w-xl rounded-3xl border border-white/60 bg-white/40 p-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br from-pink-200 via-white to-purple-200 shadow-inner" />
            <div className="text-left">
              <p className="text-sm text-slate-600">Signature Serum</p>
              <p className="text-lg font-semibold text-slate-900">HydraGlow Elixir</p>
              <p className="text-sm text-pink-600">$48.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
