/* eslint-disable react/jsx-no-comment-textnodes */
const processes = [
  ["01. ATENDIMENTO", "ÁGIL", "Atenda seus clientes mais rápido", "Automatize respostas, triagem e encaminhamento de clientes para que sua equipe não perca oportunidades por demora no atendimento.", "Mais agilidade no atendimento"],
  ["02. VENDAS", "COMERCIAL", "Não deixe oportunidades para trás", "Organize e automatize o caminho entre o primeiro contato e a venda, ajudando sua equipe a acompanhar cada oportunidade no momento certo.", "Mais oportunidades aproveitadas"],
  ["03. OPERAÇÃO", "EFICIÊNCIA", "Elimine tarefas repetitivas", "Automatize atividades que consomem horas da sua equipe, reduza retrabalho e deixe as pessoas focadas no que realmente precisa de atenção.", "Mais produtividade no dia a dia"],
  ["04. GESTÃO", "CONTROLE", "Tenha mais controle da empresa", "Conecte informações importantes da operação e transforme processos dispersos em uma rotina mais organizada, previsível e fácil de acompanhar.", "Mais controle para decidir melhor"],
];

export function ProcessSection() {
  return <section className="section" id="como-funciona"><div className="shell"><div className="section-heading"><div><span>// COMO A FLUX AJUDA SUA EMPRESA</span><h2>DO TRABALHO MANUAL À AUTOMAÇÃO</h2></div><p>Identificamos tarefas repetitivas, conectamos as ferramentas que sua empresa já utiliza e automatizamos o que pode ser feito de forma mais rápida e inteligente.</p></div><div className="process-grid">{processes.map((p, i) => <article key={p[0]} className={i === 3 ? "featured" : ""}><div className="process-meta"><b>{p[0]}</b><span>{p[1]}</span></div><h3>{p[2]}</h3><p>{p[3]}</p><footer>{p[4]}</footer></article>)}</div></div></section>;
}
