import { notFound } from "next/navigation";
import { StitchScreen } from "@/components/StitchScreen";

const screens = {
  diagnostico: ["flux_software_varia_o_a_diagn_stico_interativo_navbar_fixa", "Flux Software — Diagnóstico"],
  "logo-vetorial": ["flux_software_official_vector_logo", "Logo vetorial Flux Software"],
  "logo-esmeralda": ["logo_oficial_flux_software_verde_esmeralda", "Logo esmeralda Flux Software"],
  "logo-solucoes-digitais": ["flux_solu_es_digitais_logo", "Logo Flux Soluções Digitais"],
  "logo-navbar-light": ["flux_software_logo_hd_navbar_light", "Logo Flux Software — navbar light"],
  "logo-navbar-light-v2": ["logo_flux_software_vers_o_light_navbar", "Logo Flux Software — navbar light v2"],
  "logo-footer-dark": ["flux_software_logo_hd_footer_dark", "Logo Flux Software — footer dark"],
  "logo-footer-dark-v2": ["logo_flux_software_vers_o_dark_rodap", "Logo Flux Software — footer dark v2"],
} as const;

export function generateStaticParams() { return Object.keys(screens).map((screen) => ({ screen })); }

export default async function ScreenPage({ params }: { params: Promise<{ screen: string }> }) {
  const { screen } = await params;
  const data = screens[screen as keyof typeof screens];
  if (!data) notFound();
  return <StitchScreen slug={data[0]} title={data[1]} />;
}
