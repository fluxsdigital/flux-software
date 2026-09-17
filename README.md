# Flux Software

Landing page oficial da Flux Software, reconstruída em **Next.js + TypeScript** a partir do estado atual do projeto **Flux Soluções Digitais Landing Page** no Google Stitch.

## Implementação

- Uma única página pública: `/`
- Componentes React reais para header, hero, diagnóstico interativo, processos, soluções, comparativo, CTA e footer
- Tema dark arquitetural fiel ao Stitch, responsivo em desktop e mobile
- Quatro imagens da landing e fontes empacotadas localmente
- Ícones em SVG/React, sem nomes de Material Symbols expostos e sem dependências de CDN
- Favicon derivado do monograma esmeralda oficial, com compatibilidade em `/favicon.ico`
- Sem `iframe`, `srcDoc`, `dangerouslySetInnerHTML` ou HTML bruto em `public`

## Execução

```bash
npm install
npm run dev
```

Para produção:

```bash
npm run lint
npm run build
npm start
```

O projeto está preparado para detecção automática como Next.js pela Vercel, usando diretório raiz `./` e branch de produção `main`.
