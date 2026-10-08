import { C, crafts, display } from "../data/siteData";

export default function Crafts() {
  return (
    <section id="crafts" className="mx-auto max-w-6xl px-5 py-16">
      <h2 style={display} className="text-center text-4xl">حرفنا</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {crafts.map((c) => (
          <div key={c.title} className="rounded-lg p-6" style={{ background: "#F7EAD0", borderTop: `6px solid ${c.tone}` }}>
            <h3 style={display} className="text-2xl">{c.title}</h3>
            <p className="mt-3 leading-8" style={{ color: C.wood }}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
