# Lista de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **React**, **Vite**, **Tailwind CSS** e **Capacitor**, permitindo cadastrar, organizar, concluir e excluir tarefas através de uma interface simples e responsiva.

O projeto também pode ser executado como aplicativo Android utilizando o Capacitor.

## 📱 Sobre o projeto

O objetivo do projeto é praticar conceitos de desenvolvimento frontend com React, gerenciamento de estado, componentização e desenvolvimento de aplicações multiplataforma.

Atualmente, a aplicação permite:

* Adicionar novas tarefas
* Definir uma categoria opcional
* Definir uma prioridade opcional
* Definir uma data e horário opcionais para realizar a tarefa
* Registrar automaticamente a data e hora de criação
* Marcar tarefas como concluídas
* Excluir tarefas
* Filtrar tarefas por status e prioridade
* Organizar automaticamente as tarefas por prioridade
* Acompanhar o progresso das tarefas concluídas
* Usar a interface responsiva na web e no Android
* Executar a aplicação como aplicativo Android através do Capacitor

## 🚀 Tecnologias utilizadas

* **React**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **Capacitor**
* **Android**
* **Git e GitHub**

## 📋 Informações das tarefas

Cada tarefa possui atualmente a seguinte estrutura:

```text
Tarefa
├── Título        obrigatório
├── Categoria     opcional
├── Prioridade    opcional
├── Data e horário para realizar a tarefa   opcional
├── Data de criação
└── Status        concluída ou pendente
```

### Categorias disponíveis

* Sem categoria
* Trabalho
* Estudos
* Pessoal
* Compras
* Outros

### Prioridades disponíveis

* Sem prioridade
* Baixa
* Média
* Alta

As tarefas são ordenadas automaticamente por prioridade: alta, média, baixa e, por último, sem prioridade. Os filtros de status e prioridade podem ser combinados.

## 💾 Armazenamento e notificações

As tarefas ficam atualmente apenas no estado da aplicação. Elas não são mantidas ao fechar ou atualizar a página. A data e o horário definidos para uma tarefa são armazenados como um valor ISO no objeto da tarefa e exibidos como prazo.

O aplicativo ainda não agenda nem envia notificações. Para adicionar notificações locais no Android, será necessário implementar a persistência das tarefas e integrar um plugin de notificações do Capacitor.

## 🖥️ Executando o projeto

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/pramsy/lista-de-tarefas.git
```

Entre na pasta do projeto:

```bash
cd lista-de-tarefas
```

Instale as dependências:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## 📦 Gerando a versão de produção

Para gerar os arquivos da aplicação:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta:

```text
dist/
```

## 📱 Executando no Android

O projeto utiliza o **Capacitor** para disponibilizar a aplicação como aplicativo Android.

Depois de gerar a versão de produção:

```bash
npm run build
```

Sincronize os arquivos com o projeto Android:

```bash
npx cap sync android
```

Para abrir o projeto no Android Studio:

```bash
npx cap open android
```

No Android Studio, selecione um dispositivo físico ou emulador e execute a aplicação.

### Fluxo de atualização

Sempre que houver alterações no código da aplicação:

```bash
npm run build
npx cap sync android
```

Depois, execute novamente pelo Android Studio.

## 📂 Estrutura do projeto

```text
lista-de-tarefas/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   └── ...
├── public/
├── android/
├── dist/
├── capacitor.config.*
├── package.json
└── README.md
```

## 🔄 Próximas melhorias

Algumas funcionalidades planejadas para as próximas versões:

* [ ] Persistência das tarefas no dispositivo
* [ ] Notificações locais para tarefas com data e horário definidos
* [ ] Filtro por categoria
* [ ] Edição de tarefas
* [ ] Criação de categorias personalizadas
* [x] Filtro e ordenação por prioridade
* [x] Melhorias na experiência mobile

## 🎯 Objetivo de aprendizado

Este projeto faz parte do processo de aprendizado e desenvolvimento frontend, com foco em:

* Componentização com React
* Hooks e gerenciamento de estado
* Formulários controlados
* Manipulação de listas
* Estilização com Tailwind CSS
* Organização de componentes
* Build de aplicações web
* Integração de aplicações web com Capacitor
* Execução de aplicações React em dispositivos Android

## 👨‍💻 Autor

**Ramses Pierre**

Desenvolvedor Full Stack Júnior

GitHub:
https://github.com/pramsy

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
