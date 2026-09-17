import { Brand } from "./Brand";
import { Icon } from "./Icons";

export function Header() {
  return <header className="site-header"><div className="shell header-inner"><a href="#inicio" aria-label="Flux Software - início"><Brand compact /></a><nav aria-label="Navegação principal"><a href="#como-funciona">01. COMO FUNCIONA</a><a href="#solucoes">02. SOLUÇÕES</a><a href="#resultados">03. RESULTADOS</a></nav><a className="button header-cta" href="#conversao"><span>QUERO AUTOMATIZAR MINHA EMPRESA</span><Icon name="arrow" /></a></div></header>;
}
