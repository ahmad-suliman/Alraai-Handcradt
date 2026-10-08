
export const C = {
  parchment: "#F1E0BE", 
  sand: "#E6CFA3",
  burnt: "#3B2216",    
  wood: "#8A5A2B",
  sea: "#1E9DC4",       
  deepSea: "#17384F",
  sun: "#E8A33D",       
};


export const display = { fontFamily: "'Aref Ruqaa', serif" };

export const STORE = {
  name: "الراعي للأعمال اليدوية",
  shortName: "الراعي للأعمال اليدوية",
  owner: "حسن سليمان — حرفي الساحل",
  quote: "من أصالة الجبل، ومن روح البحر... ورثت الحرفة عن أبي، وصنعت منها حكايتي.",
  whatsapp: "https://wa.me/message/ERVIAGS4VZYBI1",
  instagram: "https://www.instagram.com/alraae2025/", 
  facebook:"https://www.facebook.com/hsn.slyman.589535"
};

export const navLinks = [
  { href: "#about", label: "الحكاية" },
  { href: "#crafts", label: "حرفنا" },
  { href: "#gallery", label: "أعمالنا" },
  { href: "#contact", label: "اطلب الآن" },
];

export const crafts = [
  { title: "الحرق على الخشب", text: "رسومات تُحرق بالقلم الحراري على الخشب الطبيعي: لوحات، أطباق، وهدايا بأسماء وصور.", tone: C.wood },
  { title: "الشَّفّ على البلور والزجاج", text: "رسم عكسي ونقش على الكؤوس والبلور بتفاصيل دقيقة، يصلح هدية أو قطعة للعرض.", tone: C.sea },
  { title: "الأعمال الصدفية", text: "صناديق وقطع مزيّنة بالصدف والمحار، مرصّعة يدويًا قطعة قطعة.", tone: C.sun },
];


export const gallery = [
  {id:1 , name: " ليلة ماطره ", price: "750 ل .س", size: "40×30 سم", tone: C.wood, image: "photo1.jpg" },
  { id:2 , name: "وانك على خلق", price: "1250 ل.س", size: "44×14 سم", tone: C.deepSea, image: "photo2.png" },
  { id:3 , name: "اللهم بارك هذا البيت", price: "1250 ل.س", size: "44×14 سم", tone: C.sea, image: "photo3.png" },
  { id:4 , name: "لا فتى الا علي", price: "1500 ل.س", size: "40×23 سم", tone: C.sun, image: "photo4.png" },
  { id:5 , name: " التوحيد", price: "2500 ل.س", size: "32×26 سم", tone: C.burnt, image: "photo5.jpg" },
  {id:6,  name: "التوحيد", price: "2250 ل.س", size: "45×47 سم", tone: C.wood, image: "photo6.jpg" },
  { id:7 , name: "سورة الاخلاص", price: "3000 ل.س", size: "52×30 سم", tone: C.wood, image: "photo7.png" },
  {id:8,  name: "يا رب بارك هذا البيت", price: "2000 ل.س", size: "25×61 سم", tone: C.wood, image: "photo8.png" },
];
