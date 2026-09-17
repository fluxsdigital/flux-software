# Flux Software

Conversão do projeto **Flux Soluções Digitais Landing Page**, criado no Google Stitch, para Next.js + TypeScript.

## Rotas

- `/` — landing principal, navegação conectada e CTA padronizada
- `/logo-vetorial`
- `/logo-esmeralda`
- `/logo-solucoes-digitais`
- `/logo-navbar-light`
- `/logo-navbar-light-v2`
- `/logo-footer-dark`
- `/logo-footer-dark-v2`

Os artefatos HTML e assets de cada tela atual estão empacotados localmente em `public/stitch`. O download original, mantido fora deste repositório, está em `../source-stitch`. Os Material Symbols usados pela landing são servidos por fonte local, sem dependência do Google Fonts.

## Execução

```bash
npm install
npm run dev
```

Projeto preparado para detecção automática como Next.js pela Vercel, com diretório raiz `./` e branch de produção `main`.
