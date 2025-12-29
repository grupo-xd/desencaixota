<div align="center">

<img src="docs/logo.jpeg" alt="Logo" width="120" height="120">

# Desencaixota

**Estoque organizado, entregas otimizadas**

*Sistema web completo de gerenciamento de estoque e rastreamento de entregas*

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-green?style=for-the-badge&logo=spring-boot&logoColor=white&labelColor=6DB33F&color=white)](https://spring.io/projects/spring-boot)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white&labelColor=000000&color=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white&labelColor=3178C6&color=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=38B2AC&color=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=for-the-badge&logo=postgresql&logoColor=white&labelColor=4169E1&color=white)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=bookstack&logoColor=black&labelColor=F5F5F5&color=black)](LICENSE)

</div>

## 📋 Índice

- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📞 Contato](#-contato)

## 📁 Estrutura do Projeto

O projeto está divido em:

```
.
│
├─ backend/                                        # Backend: Spring Boot + JPA
│   ├─ mvnw                                          # Wrapper do Maven para Linux
│   ├─ mvnw.cmd                                      # Wrapper do Maven para Windows
│   ├─ pom.xml                                       # Configuração do Maven e dependências
│   └─ src/
│       ├─ main/
│       │   ├─ java/com/grupoxd/desencaixota/
│       │   │   ├─ config/                           # Configurações do Spring Boot
│       │   │   ├─ controller/                       # Endpoints da API
│       │   │   ├─ model/                            # Entidades do sistema
│       │   │   ├─ repository/                       # Repositórios JPA (acesso a dados)
│       │   │   ├─ service/                          # Regras de negócio e comunicação com repositórios
│       │   │   └─ DesencaixotaApplication.java      # Classe principal que inicializa a aplicação
│       │   └─ resources/                            # Configurações (application.properties)
│       └─ test/                                     # Testes unitários e de integração
│
├─ frontend/                                       # Frontend: Next.js + React + Tailwind
│   ├─ package.json                                  # Dependências e scripts do frontend
│   ├─ package-lock.json                             # Lockfile do npm
│   ├─ next.config.ts                                # Configuração do Next.js
│   ├─ tsconfig.json                                 # Configuração do TypeScript
│   ├─ postcss.config.mjs                            # Configuração do PostCSS/Tailwind
│   ├─ eslint.config.mjs                             # Configuração do ESLint
│   ├─ public/                                       # Arquivos estáticos (imagens, favicon, etc.)
│   └─ src/
│       └─ app/                                      # Código-fonte da aplicação (componentes, páginas, estilos)
│           ├─ layout.tsx                            # Layout principal da aplicação
│           ├─ page.tsx                              # Página inicial (Home)
│           ├─ globals.css                           # Estilos globais
│           ├─ favicon.ico                           # Ícone da aplicação
│           │
│           ├─ auth/                                 # Grupo de páginas de autenticação
│           │
│           ├─ dashboard/                            # Grupo de páginas do dashboard
│           │
│           ├─ components/                           # Componentes React reutilizáveis
│           │   ├─ ui/                               # Componentes de UI básicos
│           │   ├─ layout/                           # Componentes de layout
│           │   └─ shared/                           # Componentes compartilhados
│           │
│           ├─ lib/                                  # Utilitários e configurações
│           │
│           └─ styles/                               # Estilos adicionais (se necessário)
│               └─ components/                       # Estilos específicos de componentes
│
├─ docs/                                             # Documentação geral do projeto
│
├─ LICENSE                                           # Licença do projeto
├─ .gitignore                                        # Arquivos e pastas ignorados pelo Git
└─ README.md                                         # Documentação geral do projeto

```

## 📞 Contato

**Equipe Desencaixota**  
Eduardo Lopes • Jean Carlo • Samuel Soares
<div align="right">

*Fizemos esse app com muito carinho, mesmo que não esteja pronto para ser disponibilizado ao público*  

<div align="center">

### 🤝 Para contato comercial ou técnico
[![Email](https://img.shields.io/badge/Email-xd0.grupo%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335&color=white)](mailto:xd0.grupo@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-%40xd0.grupo-E4405F?style=for-the-badge&logo=instagram&labelColor=E4405F&logoColor=white&color=white)](https://instagram.com/xd0.grupo)

**Desencaixota © 2025** • **Grupo XD © 2025**

</div>
