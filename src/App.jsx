import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white text-slate-800">
      <Navbar />
      <Hero />
      <main>
        <FeaturedProducts />
        <Testimonials />

        {/* CTA Banner */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/60 via-purple-100/60 to-white" />
          <div className="absolute inset-0 backdrop-blur-[6px]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="rounded-3xl bg-white/60 shadow-xl ring-1 ring-white/60 backdrop-blur-lg p-10 md:p-14">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                    Join our beauty circle and get 10% off your first order
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Be the first to know about new launches, limited editions, and exclusive offers.
                  </p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-slate-800 placeholder-slate-400 shadow-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-white shadow-lg shadow-pink-200/40 transition hover:brightness-105 active:scale-[0.99]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative mt-10 border-t border-white/60 bg-gradient-to-b from-white to-pink-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 shadow-md" />
                <span className="text-xl font-semibold tracking-tight">Lumière Beauty</span>
              </div>
              <p className="mt-3 max-w-md text-slate-600">
                Premium skincare and cosmetics crafted with love and science. Elevate your natural beauty with formulas that care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="#products" className="hover:text-slate-900">Shop</a></li>
                <li><a href="#" className="hover:text-slate-900">FAQs</a></li>
                <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Follow</h4>
              <div className="mt-3 flex gap-3">
                <a aria-label="Instagram" href="#" className="h-10 w-10 rounded-full bg-white shadow hover:shadow-md grid place-items-center transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-pink-600"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.403a4.92 4.92 0 0 1 1.778 1.153 4.92 4.92 0 0 1 1.153 1.778c.163.457.348 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.778 4.92 4.92 0 0 1-1.778 1.153c-.457.163-1.257.348-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.778-1.153 4.92 4.92 0 0 1-1.153-1.778c-.163-.457-.348-1.257-.403-2.427C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.427A4.92 4.92 0 0 1 3.789 2.945 4.92 4.92 0 0 1 5.567 1.79c.457-.163 1.257-.348 2.427-.403C9.26 1.329 9.64 1.317 12 1.317m0-1.317C8.741 0 8.332.014 7.053.072 5.775.13 4.897.304 4.158.57A6.238 6.238 0 0 0 1.39 2.39C1.124 3.129.95 4.007.892 5.285.834 6.564.82 6.973.82 10.232v3.536c0 3.26.014 3.669.072 4.948.058 1.278.232 2.156.498 2.895a6.238 6.238 0 0 0 1.77 2.77c.739.266 1.617.44 2.895.498 1.279.058 1.688.072 4.947.072s3.669-.014 4.948-.072c1.278-.058 2.156-.232 2.895-.498a6.238 6.238 0 0 0 2.77-1.77c.266-.739.44-1.617.498-2.895.058-1.279.072-1.688.072-4.948V10.232c0-3.26-.014-3.669-.072-4.948-.058-1.278-.232-2.156-.498-2.895a6.238 6.238 0 0 0-1.77-2.77c-.739-.266-1.617-.44-2.895-.498C15.669.014 15.26 0 12 0Z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.164a4.002 4.002 0 1 1 0-8.004 4.002 4.002 0 0 1 0 8.004Z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                </a>
                <a aria-label="Twitter" href="#" className="h-10 w-10 rounded-full bg-white shadow hover:shadow-md grid place-items-center transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-700"><path d="M18.244 2.25h3.129l-6.84 7.82 8.037 11.68H16.42l-4.99-6.53-5.71 6.53H2.59l7.32-8.37L2.25 2.25h6.12l4.5 5.93 5.374-5.93Zm-1.1 18.5h1.732L7.01 3.955H5.16l11.985 16.795Z"/></svg>
                </a>
                <a aria-label="YouTube" href="#" className="h-10 w-10 rounded-full bg-white shadow hover:shadow-md grid place-items-center transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600"><path d="M23.498 6.186a3.005 3.005 0 0 0-2.116-2.128C19.585 3.5 12 3.5 12 3.5s-7.585 0-9.382.558A3.005 3.005 0 0 0 .502 6.186 31.356 31.356 0 0 0 0 12a31.356 31.356 0 0 0 .502 5.814 3.005 3.005 0 0 0 2.116 2.128C4.415 20.5 12 20.5 12 20.5s7.585 0 9.382-.558a3.005 3.005 0 0 0 2.116-2.128A31.356 31.356 0 0 0 24 12a31.356 31.356 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Lumière Beauty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
