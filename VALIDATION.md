# Validação

Data da revisão: 17/09/2026.

## Fonte de verdade

- Projeto Stitch: `Flux Soluções Digitais Landing Page` (`11509714687389976002`)
- O resumo da API informa 12 telas; o download atual oferece 8 artefatos
- Somente um artefato é uma landing page: `flux_software_varia_o_a_navega_o_conectada_cta_padronizada`
- Os outros 7 são estudos/variações isoladas da marca e foram usados apenas como referência visual, sem virarem rotas

## Verificações

- Apenas `/` é uma rota de conteúdo; rotas antigas e variações foram removidas
- Página reconstruída em componentes React/Next.js, sem iframe ou HTML bruto servido ao navegador
- Textos, hierarquia, cores, fundos, cards, imagens, diagnóstico e CTAs conferidos contra HTML e screenshot atuais do Stitch
- Imagens e fontes servidas localmente; nenhuma CDN necessária
- Ícones implementados como SVGs React e favicon derivado do monograma oficial
- Animações respeitam `prefers-reduced-motion`
- Comparação visual executada em desktop (1440 px) e mobile (390 px) com Playwright
- ESLint aprovado
- Build de produção aprovado
- Build contém apenas `/`, `/_not-found`, `/icon.png` e a rota de compatibilidade `/favicon.ico`

O snapshot original consultado foi mantido fora do repositório em diretório temporário e não é publicado com a aplicação.
