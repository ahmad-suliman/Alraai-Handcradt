export default function Wave({ top, bottom }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className="block h-10 w-full sm:h-14"
      aria-hidden="true"
      style={{ background: top }}
    >
      <path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 V60 H0 Z" fill={bottom} />
    </svg>
  );
}
