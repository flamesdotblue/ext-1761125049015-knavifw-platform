import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maya R.',
    text:
      'My skin has never looked so radiant. The HydraGlow Elixir is a game-changer—lightweight, hydrating, and luxurious.',
    avatar: 'https://i.pravatar.cc/100?img=12',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena V.',
    text:
      'Clean, elegant packaging with incredible results. I love the texture and how gentle it feels on my sensitive skin.',
    avatar: 'https://i.pravatar.cc/100?img=32',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia K.',
    text:
      'Within a week my complexion felt smoother and more even. The moisturizer is silky and absorbs fast.',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ava T.',
    text:
      'The cleanser leaves me fresh without stripping. Subtle scent and a spa-like experience every morning.',
    avatar: 'https://i.pravatar.cc/100?img=56',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/60 to-purple-50/60" />
      <div className="absolute inset-10 rounded-3xl bg-white/50 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm tracking-wide text-pink-600">Loved by our community</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Glowing Reviews
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur-lg"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <figcaption>
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <div className="flex items-center text-pink-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#ec4899" className="text-pink-500" />
                    ))}
                  </div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-slate-700">“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
