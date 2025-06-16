# Formulário de Inscrição em Cursos FIC

![Banner do Projeto](https://via.placeholder.com/800x200/3498db/ffffff?text=Formul%C3%A1rio+de+Inscri%C3%A7%C3%A3o+FIC)

Um formulário de inscrição moderno e responsivo para os cursos de Formação Inicial e Continuada (FIC), desenvolvido com TypeScript e Vite. O projeto inclui validação avançada com Zod e persistência de dados com JSON Server. Além disso, implementa um sistema de tema claro/escuro (dark mode) com CSS modular.

## 🌟 Demonstração

<p align="center">
  <img src="https://via.placeholder.com/300x500/3498db/ffffff?text=Light+Mode" width="45%" alt="Light Mode Screenshot">
  <img src="https://via.placeholder.com/300x500/2c3e50/ffffff?text=Dark+Mode" width="45%" alt="Dark Mode Screenshot">
</p>

## ✨ Funcionalidades

- ✅ **Formulário Completo**: Coleta de nome, e-mail, sexo, curso e necessidades especiais
- ✅ **Validação Avançada**: Implementação com Zod para validação de campos em tempo real
- ✅ **Persistência de Dados**: Armazenamento de inscrições com JSON Server
- ✅ **Dark Mode**: Sistema de alternância de tema claro/escuro com memória de preferência
- ✅ **Feedback Visual**: Indicações claras de campos obrigatórios e erros de validação
- ✅ **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela
- ✅ **UX Aprimorada**: Mensagens de sucesso e erro para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Tipagem estática para maior segurança do código
- **Vite** - Build tool moderna e rápida para desenvolvimento
- **Zod** - Biblioteca de validação de esquema TypeScript-first
- **JSON Server** - API REST fake para prototipagem e desenvolvimento
- **CSS Modular** - Organização de estilos com separação de responsabilidades
- **LocalStorage API** - Persistência das preferências de tema do usuário

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone este repositório
   ```bash
   git clone https://github.com/seu-usuario/desafio-forms.git
   cd desafio-forms
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

### Execução

1. **Iniciar o Servidor de Desenvolvimento (Vite)**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O servidor de desenvolvimento será iniciado em `http://localhost:5173`

2. **Iniciar o JSON Server (em outro terminal)**
   ```bash
   npm run server
   # ou
   yarn server
   ```
   O JSON Server será iniciado em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
desafio-forms/
├── public/
│   ├── vite.svg
│   └── assets/
│       ├── css/
│       │   ├── form-actions.css       # Estilos para ações do formulário
│       │   ├── form-controls.css      # Estilos para os controles do formulário
│       │   ├── form-groups.css        # Estilos para grupos do formulário
│       │   ├── form-structure.css     # Estrutura básica do formulário
│       │   ├── form-validation.css    # Estilos para feedback de validação
│       │   ├── header.css             # Estilos para cabeçalho
│       │   ├── index.css              # Arquivo principal de importação de CSS
│       │   ├── reset.css              # Reset CSS básico
│       │   ├── theme-dark.css         # Variáveis do tema escuro
│       │   └── theme-light.css        # Variáveis do tema claro
│       └── images/
│           ├── moon-star 1.svg        # Ícone do tema claro (lua)
│           └── sun-moon 1.svg         # Ícone do tema escuro (sol)
├── src/
│   ├── main.ts                        # Lógica principal do formulário
│   ├── vite-env.d.ts                  # Definições de tipos para Vite
│   ├── services/
│   │   └── api.ts                     # Serviços para comunicação com API
│   └── utils/
│       └── form-schema.ts             # Schema Zod para validação
├── db.json                            # Banco de dados para JSON Server
├── index.html                         # HTML principal
├── package.json                       # Dependências e scripts
├── README.md                          # Este arquivo
└── tsconfig.json                      # Configuração do TypeScript
```

## 🎨 Sistema de Temas (Dark Mode)

O projeto implementa um sistema de alternância de temas (claro/escuro) utilizando:

- **Variáveis CSS**: Definidas em arquivos separados para cada tema
- **LocalStorage**: Armazena a preferência do usuário entre sessões
- **JavaScript**: Manipula as classes no DOM para aplicar o tema escolhido
- **Ícones**: Alternância visual entre lua (modo claro) e sol (modo escuro)

### Como Funciona:

1. Ao clicar no ícone no canto superior direito, o tema é alternado
2. O JavaScript adiciona/remove a classe `dark-mode` ao elemento `<body>`
3. As variáveis CSS são sobrescritas com base na presença dessa classe
4. A preferência é salva no localStorage do navegador

## ⚙️ Validação de Formulários

A validação dos dados é realizada usando a biblioteca Zod:

- **Campos obrigatórios**: Nome, e-mail, sexo, curso e aceitação dos termos
- **Validação de e-mail**: Verifica se o formato do e-mail é válido
- **Feedback em tempo real**: Exibe mensagens de erro específicas para cada campo

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## 👨‍💻 Desenvolvido por

Desenvolvido como parte do curso de Front-End do IFRO.

---

📌 **Note**: Este projeto foi desenvolvido como um desafio educacional e não está em produção.
