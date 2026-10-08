import { C, STORE } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm" style={{ background: C.burnt, color: C.sand }}>
       احمد علي سليمان©  {new Date().getFullYear()} {STORE.name}
    </footer>
  );
}
