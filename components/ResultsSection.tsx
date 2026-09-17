/* eslint-disable react/jsx-no-comment-textnodes */
const manual = [["Atendimento", "Clientes esperando respostas", 80], ["Operação", "Equipe repetindo tarefas manuais", 70], ["Gestão", "Informações espalhadas", 65]] as const;
const automated = [["Atendimento", "Respostas mais rápidas", 90], ["Operação", "Tarefas automatizadas", 88], ["Gestão", "Processos mais organizados", 92]] as const;

function ResultPanel({ green, rows }: { green?: boolean; rows: readonly (readonly [string, string, number])[] }) {
  return <article className={`result-panel ${green ? "green" : "red"}`}><header><b>{green ? "COM AUTOMAÇÃO" : "COM PROCESSOS MANUAIS"}</b><span>{green ? "Quando a tecnologia trabalha junto com sua equipe" : "Quando sua equipe precisa fazer tudo na mão"}</span></header><div className="bars">{rows.map(([label, value, width]) => <div key={label}><div><span>{label}</span><b>{value}</b></div><i><em style={{ width: `${width}%` }} /></i></div>)}</div><p>{green ? "Sua equipe ganha tempo para cuidar do que realmente faz a empresa crescer." : "Sua equipe perde tempo com tarefas que poderiam ser automatizadas."}</p></article>;
}

export function ResultsSection() {
  return <section className="section" id="resultados"><div className="shell"><div className="section-heading solo"><div><span>// O IMPACTO NA SUA OPERAÇÃO</span><h2>QUANTO SUA EMPRESA PODE GANHAR EM EFICIÊNCIA</h2></div></div><div className="comparison"><ResultPanel rows={manual} /><ResultPanel green rows={automated} /></div></div></section>;
}
