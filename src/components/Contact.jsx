import { C, STORE, display } from "../data/siteData";
import Btn from "./ui/Btn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-16 text-center text-white"
      style={{
        background: `linear-gradient(180deg, ${C.deepSea}, ${C.sea} 70%, ${C.sun})`,
      }}
    >
      <h2 style={display} className="text-4xl">
        عندك فكرة؟ نحوّلها إلى قطعة
      </h2>
      <p className="mx-auto mt-4 max-w-md text-lg">
        أرسل لنا صورة أو اسمًا أو مناسبة، ونرد عليك بالسعر ومدة التنفيذ.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={STORE.facebook}
          className="rounded-md border-2 border-white px-7 py-3 font-bold hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          فيسبوك
        </a>
        <Btn href={STORE.whatsapp} dark>
          واتساب
        </Btn>
        <a
          href={STORE.instagram}
          className="rounded-md border-2 border-white px-7 py-3 font-bold hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          إنستغرام
        </a>
      </div>
    </section>
  );
}
