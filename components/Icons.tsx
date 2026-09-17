import type { SVGProps } from "react";

type IconName = "arrow" | "chat" | "headset" | "trend" | "wallet" | "sync" | "back" | "check";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /><path d="M8 9h8M8 13h5" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2-2h2v7H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2zM16 19c0 1.1-.9 2-2 2h-2" /></>,
  trend: <><path d="M3 17l6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
  wallet: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M16 12h5v4h-5a2 2 0 0 1 0-4zM7 6V4h11v2" /></>,
  sync: <><path d="M20 7h-5V2" /><path d="M20 7a8 8 0 0 0-13.7-2.7L4 7M4 17h5v5" /><path d="M4 17a8 8 0 0 0 13.7 2.7L20 17" /></>,
  back: <><path d="M19 12H5M11 18l-6-6 6-6" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[name]}</svg>;
}
