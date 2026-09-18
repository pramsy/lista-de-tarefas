# Lista de tarefas

Aplicacao web para organizar tarefas do dia a dia. O projeto foi desenvolvido com React e Tailwind CSS, utilizando componentes reutilizaveis e estado local para controlar as tarefas e os filtros.

## Funcionalidades

- Adicionar novas tarefas;
- Marcar tarefas como concluidas ou pendentes;
- Excluir tarefas;
- Filtrar tarefas por:
  - Todas;
  - Pendentes;
  - Concluidas;
- Exibir a quantidade de tarefas pendentes;
- Informar quando nao existem tarefas no filtro selecionado;
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- [React](https://react.dev/);
- [Vite](https://vite.dev/);
- [Tailwind CSS](https://tailwindcss.com/);
- JavaScript;
- ESLint.

## Pre-requisitos

- Node.js instalado;
- npm instalado.

## Como executar

1. Clone o repositorio e acesse a pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd lista-de-tarefas
   ```

2. Instale as dependencias:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponiveis

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualizacao automatica. |
| `npm run build` | Gera a versao de producao do projeto. |
| `npm run preview` | Executa uma previa local da versao de producao. |
| `npm run lint` | Verifica problemas de codigo com ESLint. |

## Estrutura principal

```text
src/
├── App.jsx                  # Componente principal e gerenciamento das tarefas
├── index.css                # Importacao do Tailwind e estilos globais
├── main.jsx                 # Ponto de entrada da aplicacao
└── components/
    ├── TaskFilters.jsx      # Filtros por status
    ├── TaskForm.jsx         # Formulario de criacao
    ├── TaskItem.jsx         # Exibicao e acoes de uma tarefa
    └── TaskList.jsx         # Lista e estado vazio
```

## Observacao

As tarefas sao armazenadas somente no estado da aplicacao. Por isso, os dados nao sao persistidos em banco de dados ou `localStorage` e sao perdidos ao recarregar a pagina.
