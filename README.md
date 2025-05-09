# StreamVibe 🎬 (Projeto em desenvolvimento)

![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?logo=nextdotjs&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> Interface moderna de streaming construída com **Next.js 15** e **Tailwind CSS 4**, consumindo a [TMDB API](https://www.themoviedb.org/documentation/api) para exibir filmes em alta.

[Live demo](https://streamvibe.vercel.app)

---

## 📑 Índice

- [Visão Geral](#visão-geral)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Tecnologias & Ferramentas](#tecnologias--ferramentas)
- [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Licença](#licença)

## Visão Geral

O **StreamVibe** é um projeto front‑end que simula o catálogo de um serviço de streaming. O objetivo é praticar gerenciamento de estado global com **Zustand**, cache de requisições com **TanStack Query**, **Axios** e UI 100 % acessível.

## Principais Funcionalidades

- 🎞️ **Carrossel hero** com filmes/series em alta na semana
- 📂 **Seções por categoria** (Em Cartaz, Populares, Mais Bem Avaliados, Próximos Lançamentos)
- 🔍 **Busca instantânea** de títulos _(em desenvolvimento)_
- ⚡ **Pré‑fetch** e **cache** de requisições (React Query)
- 🗄 **Cache local** para melhor performance
- 📱 **Design responsivo** mobile‑first
- ♿ **Acessibilidade** respeitando WAI‑ARIA
- 🚀 **Deploy 1‑click** na Vercel

## Tecnologias & Ferramentas

| Categoria          | Stack                                              |
| ------------------ | -------------------------------------------------- |
| **Core**           | Next.js 15 (App Router, Server Actions, Turbopack) |
| **Linguagens**     | TypeScript 5, JavaScript ES2023                    |
| **Estilo**         | Tailwind CSS 4, Prettier + eslint‑config‑prettier  |
| **UI**             | Heroicons, Embla Carousel                          |
| **Estado & Dados** | TanStack Query v5, Zustand v5, Axios               |
| **Outros**         | clsx, sonner (toasts)                              |
| **CI/CD**          | GitHub, Vercel                                     |

## Instalação

> Requer **Node.js >= 20** e **Yarn >= 1.22**.

```bash
# Clone o repositório
git clone https://github.com/RobertoDev3/stream-vibe.git
cd stream-vibe

# Instale as dependências
yarn

# Inicie o servidor de desenvolvimento
yarn dev
```

A aplicação estará disponível em **[http://localhost:3000](http://localhost:3000)**.

## Scripts disponíveis

| Comando       | Descrição                                          |
| ------------- | -------------------------------------------------- |
| `yarn dev`    | Inicia o ambiente de desenvolvimento com Turbopack |
| `yarn build`  | Compila o projeto para produção                    |
| `yarn start`  | Sobe o servidor Next.js já compilado               |
| `yarn lint`   | Executa o ESLint                                   |
| `yarn format` | Formata todos os arquivos com Prettier             |

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz seguindo o exemplo abaixo:

```dotenv
# Chave da API do TMDB – obtenha no seu dashboard
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui

# URL base da API
NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
```

## Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE) para mais detalhes.
