import { Diagnostic } from "./Diagnostic";

const metrics = [
  ["Processos manuais", "MENOS", "Automação das tarefas repetitivas"],
  ["Produtividade", "MAIS", "Equipe focada no que realmente importa"],
  ["Crescimento", "ESCALA", "Tecnologia acompanhando sua empresa"],
];

export function Hero() {
  return <section className="hero grid-fine" id="inicio"><div className="shell"><div className="eyebrow status"><span className="live-dot" /> TECNOLOGIA PARA EMPRESAS QUE QUEREM CRESCER</div><h1>AUTOMATIZE PROCESSOS<br /><span>ESCALE</span> SUA EMPRESA.</h1><p className="hero-copy">Transformamos processos manuais em operações mais rápidas, organizadas e eficientes, usando tecnologia sob medida para a realidade da sua empresa.</p><Diagnostic /><div className="metrics">{metrics.map(([label, value, text]) => <div key={value}><small>{label}</small><strong>{value}</strong><span>{text}</span></div>)}</div></div></section>;
}
