import { C, display, gallery } from "../data/siteData";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 pb-20">
      <h2 style={display} className="text-center text-4xl">أعمالنا</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((g) => (
          <figure key={g.id}>
            {g.image ? (
              <img src={g.image} alt={g.name} className="aspect-square w-full rounded-sm object-cover" />
            ) : (
              <div className="aspect-square rounded-sm" style={{ background: g.tone, opacity: 0.85 }} />
            )}
            <figcaption className="mt-3 text-center">
              <span className="block text-lg font-bold">{g.name}</span>
              <span className="block text-sm" style={{ color: C.wood }}>المقاس: {g.size}</span>
              <span className="mt-1 block font-bold" style={{ color: C.sea }}>{g.price}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
