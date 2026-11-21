# Portifólio

Site portfólio pessoal de **Erik Ko**, com foco em Dados. Página única, tema dark com visual tech e efeitos em azul, feita apenas com HTML, CSS e JavaScript puros (sem frameworks e sem etapa de build).

## Funcionalidades

- **Hero** com apresentação e efeito de digitação no cargo.
- **Sobre mim** com texto de apresentação e foto de perfil.
- **Projetos** em carrossel com rotação automática e contínua, loop infinito, setas, indicadores e botão de pausa.
- **Habilidades** em grade de tecnologias.
- **Contato** com links para e-mail, LinkedIn e GitHub.
- **Menu responsivo** com versão hambúrguer para telas pequenas.
- **Animações** de entrada das seções ao rolar a página.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox, media queries)
- JavaScript (ES6+, sem bibliotecas)
- Fontes Inter e JetBrains Mono (Google Fonts)

## Estrutura do projeto

```
Portifolio/
├── index.html        # Estrutura da página
├── css/style.css     # Tema dark, efeitos em azul e responsividade
├── js/main.js        # Menu, animações, digitação e carrossel
├── assets/foto.jpg   # Foto de perfil
├── CLAUDE.md         # Regras de trabalho do projeto
└── README.md
```

## Como executar

Não há dependências nem build. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/erikhko/Portifolio.git
cd Portifolio
```

As fontes vêm do Google Fonts, então é necessário ter conexão com a internet para vê-las.

## Etapas de desenvolvimento

1. **Definição do projeto:** escolha da stack (HTML, CSS e JS puros), das seções (Hero, Sobre, Projetos, Habilidades e Contato) e da identidade visual (dark, tech, destaques em azul).
2. **Estrutura base (HTML):** página única com as cinco seções, menu de navegação e conteúdo de exemplo.
3. **Estilo (CSS):** paleta e espaçamentos como variáveis CSS, fundo com gradientes, brilho azul em títulos, botões e cards, layout em Grid e Flexbox.
4. **Interatividade (JS):** menu mobile, animação de entrada das seções ao rolar (`IntersectionObserver`), efeito de digitação e ano automático no rodapé.
5. **Conteúdo profissional:** cargo e textos adaptados à área de Dados, com os links de contato (e-mail, LinkedIn e GitHub) e ícones SVG nos botões.
6. **Carrossel de projetos:** cards com rolagem horizontal, depois transformados em rotação automática e contínua (40 px/s) com loop infinito, pausa ao passar o mouse, focar ou tocar, e botão de pausa.
7. **Projetos reais:** os cards de exemplo foram substituídos por três repositórios do próprio GitHub: To-Do List API, CryptoMonitor e Proxy Reverso.
8. **Responsividade:** teste em vários tamanhos de tela e ajustes (setas ocultas no celular, habilidades em duas colunas, botões e alvos de toque maiores, foto acima do texto em telas estreitas).
9. **Conteúdo pessoal:** foto de perfil e texto da seção Sobre mim.
10. **Privacidade:** o botão de WhatsApp foi removido para não expor o telefone no site público.
11. **Publicação:** versionamento com Git, em commits separados por etapa, e publicação no GitHub.

## O que foi verificado

Testes feitos no navegador Brave, com telas simuladas:

- Sem barra de rolagem horizontal em 320, 360, 390, 768, 1024 e 1440 px.
- Menu hambúrguer abre e exibe todos os links.
- O carrossel avança de forma contínua, a cerca de 40 px/s.

**Não verificado:** funcionamento em aparelhos reais, no Safari e no Firefox, e o clique nas setas, nas bolinhas e no botão de pausa do carrossel.

## Pendências e próximos passos

- Adicionar projetos de análise de dados (Excel, Power BI, Python e SQL) conforme forem sendo desenvolvidos.
- Melhorar os READMEs dos repositórios CryptoMonitor e Proxy Reverso.
- Publicar o site online (GitHub Pages) e acrescentar o link neste README.

## Contato

- E-mail: erikko2003@hotmail.com
- LinkedIn: [linkedin.com/in/erikhko](https://www.linkedin.com/in/erikhko)
- GitHub: [github.com/erikhko](https://github.com/erikhko)
