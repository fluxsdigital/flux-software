/* eslint-disable react/jsx-no-comment-textnodes */
import { Brand } from "./Brand";
import { Icon } from "./Icons";

export function FinalCta() {
  return <section className="final-cta" id="conversao"><div className="final-inner"><span className="eyebrow">// VAMOS CONVERSAR SOBRE SUA EMPRESA</span><h2>QUANTO TEMPO SUA EMPRESA AINDA PERDE COM PROCESSOS MANUAIS?</h2><p>Conte para a gente onde sua empresa mais perde tempo. Vamos identificar o que pode ser automatizado e mostrar como a tecnologia pode ajudar sua operação a crescer.</p><div><a className="button" href="https://wa.me/5538992711406">QUERO AUTOMATIZAR MINHA EMPRESA <Icon name="arrow" /></a><a className="button secondary" href="https://wa.me/5538992711406"><Icon name="chat" /> Falar com um Especialista</a></div><small>Converse com nosso time e descubra por onde começar.</small></div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="shell"><div className="footer-main"><div><Brand compact /><span>| Automação e tecnologia para empresas em crescimento</span></div><nav><a href="#como-funciona">Como Funciona</a><a href="#solucoes">Soluções</a><a href="#resultados">Resultados</a><a href="#conversao">Quero Automatizar</a><b>@flux.software</b></nav></div><div className="footer-bottom"><span>© 2026 Flux Software. Blumenau, SC – Brasil.</span><span>Automação de processos · Tecnologia sob medida · Soluções para empresas</span></div></div></footer>;
}
