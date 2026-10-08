import { C, display } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="px-5 py-20 text-center" style={{ background: C.burnt, color: C.parchment }}>
      <div className="mx-auto max-w-2xl">
        <img
          src={`${import.meta.env.BASE_URL}hero.jpg`}
          alt="حسن الراعي"
          className="mx-auto mb-6 h-40 w-40 rounded-full border-4 object-cover"
          style={{ borderColor: C.sun }}
        />
        <h2 style={display} className="text-4xl">حرفي الساحل</h2>
        <p className="mt-6 text-lg leading-9 opacity-90">
          عشت بين الجبل والبحر، وتعلّمت الحرفة من أبي. كل قطعة هنا تُصنع بيدي من البداية إلى النهاية:
          أختار الخشب، وأرسم، وأحرق، وأنقش، ثم أسلّمها لك كما تخيّلتها.
        </p>
      </div>
    </section>
  );
}
