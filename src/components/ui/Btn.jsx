import { C } from "../../data/siteData";

export default function Btn({ href, children, dark }) {
  return (
    <a
      href={href}
      className="inline-block rounded-md px-7 py-3 font-bold transition hover:brightness-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/50"
      style={dark ? { background: C.burnt, color: C.parchment } : { background: C.sea, color: "#fff" }}
    >
      {children}
    </a>
  );
}
