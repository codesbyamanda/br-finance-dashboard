# BR Finance Dashboard

Dashboard financeiro desenvolvido com **Next.js 15, React, TypeScript, Tailwind CSS e TanStack React Query**, consumindo dados oficiais da **API SGS do Banco Central do Brasil** para visualização da Taxa SELIC e seus indicadores.

O projeto simula uma aplicação real de análise financeira, com foco em consumo de API pública, gerenciamento de estados assíncronos, visualização de dados, filtros por período e organização modular por domínio.

---

## Visão geral

O **BR Finance Dashboard** permite acompanhar dados históricos da Taxa SELIC por meio de uma interface responsiva, com indicadores automáticos, gráfico, tabela detalhada e filtros dinâmicos.

A aplicação foi construída para demonstrar boas práticas de desenvolvimento front-end em um cenário próximo ao mercado, incluindo:

- consumo de API externa;
- cache e revalidação de dados;
- tratamento de estados de interface;
- componentização;
- separação de responsabilidades;
- organização por domínio;
- tipagem com TypeScript;
- construção de dashboard responsivo.

---

## Funcionalidades

- Visualização da Taxa SELIC a partir da API SGS do Banco Central.
- Gráfico para acompanhamento da evolução dos dados.
- KPIs automáticos:
  - último valor registrado;
  - média do período selecionado;
  - variação percentual.
- Filtros dinâmicos por período:
  - 7 dias;
  - 30 dias;
  - 3 meses;
  - 1 ano.
- Tabela histórica com dados detalhados.
- Paginação para navegação entre registros.
- Estados da interface tratados:
  - loading;
  - error;
  - empty;
  - success.
- Interface responsiva para diferentes tamanhos de tela.
- Separação da aplicação por domínio e responsabilidade.

---

## Tecnologias utilizadas

- **Next.js 15** — framework React com App Router.
- **React** — construção da interface.
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento.
- **Tailwind CSS** — estilização responsiva e utilitária.
- **TanStack React Query** — gerenciamento de dados assíncronos, cache e revalidação.
- **API SGS - Banco Central do Brasil** — fonte pública dos dados econômicos.

---

## Decisões técnicas

### Consumo de dados com React Query

A integração com a API foi feita utilizando **TanStack React Query** para centralizar o controle de dados assíncronos.

Essa escolha permite:

- evitar chamadas desnecessárias;
- controlar estados de carregamento e erro;
- manter cache dos dados;
- facilitar revalidações;
- melhorar a experiência do usuário durante a navegação.

### Organização por domínio

O projeto possui uma estrutura orientada por domínio, concentrando a lógica principal da SELIC dentro de `features/sgs`.

Essa abordagem ajuda a manter o código mais organizado, escalável e fácil de evoluir, separando componentes, utilitários, tipos, queries e funções de mapeamento relacionadas ao mesmo contexto.

### Separação de componentes reutilizáveis

Componentes genéricos da interface ficam em `components/ui`, enquanto componentes específicos da funcionalidade ficam dentro de `features/sgs/components`.

Isso evita acoplamento desnecessário e facilita a reutilização de elementos como cards, filtros, paginação e estados visuais.

### Tratamento de estados da interface

A aplicação considera diferentes momentos da experiência do usuário:

- carregamento dos dados;
- falha na requisição;
- ausência de dados;
- exibição bem-sucedida das informações.

Esse cuidado evita telas quebradas e melhora a percepção de qualidade da aplicação.

---

## Estrutura do projeto

```bash
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── components/
│   ├── layout/
│   │   └── AppShell.tsx
│   │
│   └── ui/
│       ├── DataTable.tsx
│       ├── EmptyState.tsx
│       ├── ErrorState.tsx
│       ├── KpiCard.tsx
│       ├── Pagination.tsx
│       ├── PeriodFilter.tsx
│       └── Skeleton.tsx
│
├── features/
│   └── sgs/
│       ├── components/
│       │   ├── SelicChart.tsx
│       │   └── SelicTable.tsx
│       │
│       └── utils/
│           ├── api.ts
│           ├── filterByPeriod.ts
│           ├── index.ts
│           ├── mappers.ts
│           └── metrics.ts
│
├── sgs/
│   ├── api.ts
│   ├── mappers.ts
│   ├── queries.ts
│   └── types.ts
│
└── lib/
    └── http.ts
```

---

## Organização das principais pastas

### `src/app`

Responsável pela estrutura principal da aplicação com o App Router do Next.js.

Inclui:

- página principal;
- layout global;
- estilos globais;
- providers da aplicação.

### `src/components`

Contém componentes reutilizáveis da interface.

A pasta é dividida em:

- `layout`: componentes estruturais da aplicação;
- `ui`: componentes genéricos reutilizáveis, como cards, tabelas, filtros, paginação e estados visuais.

### `src/features/sgs`

Concentra partes específicas da funcionalidade relacionada à API SGS e à visualização da SELIC.

Inclui:

- componentes específicos da feature;
- funções auxiliares;
- cálculos de métricas;
- filtros por período;
- mapeamento de dados.

### `src/sgs`

Centraliza a camada de dados da integração com a API SGS.

Inclui:

- funções de acesso à API;
- queries com React Query;
- tipos;
- mapeamento dos dados recebidos.

### `src/lib`

Contém utilitários compartilhados, como a configuração base de requisições HTTP.

---

## Fluxo de dados

O fluxo principal da aplicação segue esta ideia:

```txt
API SGS Banco Central
        ↓
Camada de acesso à API
        ↓
React Query
        ↓
Mapeamento e tratamento dos dados
        ↓
Cálculo de métricas e filtros
        ↓
Componentes de UI
        ↓
Dashboard
```

Esse fluxo separa a origem dos dados, a lógica de transformação e a apresentação visual, deixando o projeto mais organizado e fácil de manter.

---

## Indicadores calculados

A partir dos dados retornados pela API, a aplicação calcula automaticamente:

- **último valor registrado** da SELIC;
- **média do período selecionado**;
- **variação percentual** entre o início e o fim do período;
- listagem histórica dos registros.

Esses cálculos ajudam a transformar dados brutos da API em informações mais úteis para o usuário final.

---

## Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/codesbyamanda/br-finance-dashboard.git
```

Acesse a pasta do projeto:

```bash
cd br-finance-dashboard
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

---

## Scripts disponíveis

```bash
npm run dev
```

Executa a aplicação em ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção da aplicação.

```bash
npm run start
```

Executa a versão de produção após o build.

```bash
npm run lint
```

Executa a verificação de lint do projeto.

---

## Deploy

A aplicação está disponível em:

```txt
https://financedashboardselic.vercel.app
```

---

## Repositório

```txt
https://github.com/codesbyamanda/br-finance-dashboard
```

---

## Aprendizados aplicados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes para aplicações front-end modernas:

- integração com API pública;
- consumo de dados com React Query;
- cache e revalidação;
- tratamento de estados assíncronos;
- cálculo de indicadores dinâmicos;
- componentização de interface;
- organização modular;
- separação de responsabilidades;
- tipagem com TypeScript;
- construção de dashboard responsivo;
- preocupação com experiência do usuário.

---

## Próximos passos

Possíveis melhorias futuras:

- adicionar gráficos comparativos com outros indicadores econômicos;
- incluir novos filtros personalizados por data;
- implementar testes unitários para funções de cálculo;
- adicionar testes de interface;
- melhorar acessibilidade dos componentes;
- criar exportação dos dados em CSV;
- incluir modo claro/escuro;
- adicionar seleção de diferentes séries econômicas da API SGS.

---

## Autora

Desenvolvido por **Amanda Ribeiro**.

- Portfólio: `https://codesbyamanda.vercel.app`
- LinkedIn: `https://www.linkedin.com/in/codesbyamanda/`
- GitHub: `https://github.com/codesbyamanda`