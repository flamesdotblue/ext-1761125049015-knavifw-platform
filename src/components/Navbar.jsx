export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 w-[92%] max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/30 px-4 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 shadow" />
            <span className="font-semibold tracking-tight">Lumière Beauty</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#" className="hover:text-slate-900">Home</a>
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-pink-200/40 transition hover:brightness-110"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
