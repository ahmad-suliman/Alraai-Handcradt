import { STORE } from "../data/siteData";
import Btn from "./ui/Btn";

export default function Hero() {
  return (
    <>
      <h1 className="sr-only">{STORE.name}</h1>
      <header className="relative hidden h-[90vh] bg-[#3B2216] sm:block">
        <div
          role="img"
          aria-label={STORE.name}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}banner.jpg)` }}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-3 bg-liner-to-t from-[#3B2216] to-transparent px-5 pb-10 pt-24">
          <Btn href="#gallery">شاهد أعمالنا</Btn>
          <Btn href={STORE.whatsapp} dark>اطلب عبر واتساب</Btn>
        </div>
      </header>
    </>
  );
}
