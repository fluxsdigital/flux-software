export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? "brand brand--compact" : "brand"} viewBox="0 0 400 90" role="img" aria-label="Flux Software">
      <defs>
        <linearGradient id="flux-green" x1="16" y1="18" x2="68" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E599" /><stop offset=".5" stopColor="#34D399" /><stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <g transform="translate(10 8)">
        <path d="M12 28S26 12 52 14c14 1 20 9 14 17s-22 6-36 7c-8 .5-14 3-18 8V28Z" fill="url(#flux-green)" />
        <path d="M12 44s14-6 34-3c10 1.5 14 7 8 12s-18 3-28 5c-6 1.2-10 4-14 8V44Z" fill="#34D399" />
        <path d="M12 28v40" stroke="#00E599" strokeWidth="4.5" strokeLinecap="round" /><circle cx="12" cy="70" r="5" fill="#00E599" />
      </g>
      <g transform="translate(104 57)"><text fontWeight="900" fontSize="38" letterSpacing="-1.2" fill="#fff">FLUX</text><text x="134" y="-3" fontWeight="800" fontSize="16" letterSpacing="4.5" fill="#00E599">SOFTWARE</text><circle cx="282" cy="-9" r="4.5" fill="#00E599" /></g>
    </svg>
  );
}
