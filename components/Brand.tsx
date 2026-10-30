import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={compact ? "brand brand--compact" : "brand"}><Image src="/brand/flux-logo.jpg" alt="Flux" width={1280} height={640} priority /></span>;
}
