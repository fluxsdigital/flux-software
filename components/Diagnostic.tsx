"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const processes = [
  ["Atendimento", "headset"], ["Vendas", "trend"], ["Financeiro", "wallet"], ["Operação", "sync"],
] as const;
const intensity = [["Pouco", "~25%"], ["Parcial", "~50%"], ["Muito", "~75%"], ["Quase tudo", "90%+"]];

export function Diagnostic() {
  const [step, setStep] = useState(1);
  const [process, setProcess] = useState("Atendimento");
  const [level, setLevel] = useState("Quase tudo");
  const reset = () => { setStep(1); setProcess("Atendimento"); setLevel("Quase tudo"); };
  return (
    <div className="diagnostic" id="diagnostico">
      <div className="diagnostic__header"><span className="live-dot" /><span>DIAGNÓSTICO DE AUTOMAÇÃO &amp; ESCALA</span><b>{String(step).padStart(2, "0")} / 03</b></div>
      <div className="progress"><span style={{ width: `${step * 33.333}%` }} /></div>
      {step === 1 && <div className="diag-body"><small>PASSO 1</small><h3>Qual processo mais consome seu tempo e equipe hoje?</h3><div className="choices">{processes.map(([label, icon]) => <button key={label} onClick={() => { setProcess(label); setStep(2); }}><Icon name={icon} /><span>{label.toUpperCase()}</span></button>)}</div><p className="diag-hint">● Diagnóstico inicial gratuito • leva menos de 30 segundos</p></div>}
      {step === 2 && <div className="diag-body"><button className="back" onClick={() => setStep(1)}><Icon name="back" /> Voltar</button><small>PASSO 2</small><h3>Quanto desse processo ainda depende de trabalho manual?</h3><div className="choices">{intensity.map(([label, pct]) => <button key={label} onClick={() => { setLevel(label); setStep(3); }}><em>{pct}</em><span>{label.toUpperCase()}</span></button>)}</div><p className="diag-hint">Selecione a intensidade para calibrar a projeção de retorno</p></div>}
      {step === 3 && <div className="diag-result"><div className="result-top"><strong><span className="live-dot" /> DIAGNÓSTICO CONCLUÍDO • ALTO POTENCIAL DE ESCALA</strong><span>{process} • {level} manual</span></div><h3>Gargalo crítico identificado em {process.toLowerCase()}</h3><p>Sua equipe está presa em atividades repetitivas. Com a automação da Flux, você ganha velocidade, organização e escala sem aumentar a carga operacional.</p><div className="projection"><Icon name="check" /><span>PROJEÇÃO DE EFICIÊNCIA:</span><b>Até 70% de tempo economizado • Respostas em segundos</b></div><div className="pillars"><div><b>⚡ Atendimento instantâneo</b><span>Sem filas ou clientes sem resposta.</span></div><div><b>🎯 Automação autônoma</b><span>Processos executados sem esforço manual.</span></div><div><b>📈 Mais oportunidades</b><span>Equipe livre para crescer e vender.</span></div></div><div className="result-actions"><a className="button" href="#conversao">QUERO AUTOMATIZAR <Icon name="arrow" /></a><button onClick={reset}>↺ Refazer diagnóstico</button></div></div>}
    </div>
  );
}
