# Portfólio

🔗 **Site ao vivo:** https://erikhko.github.io/Portfolio/

Site portfólio pessoal de **Erik Ko**, com foco em AI Engineering. Página única, tema dark com visual tech e efeitos em azul, feita apenas com HTML, CSS e JavaScript puros (sem frameworks e sem etapa de build).

## Funcionalidades

- **Hero** com apresentação, cargo (AI Engineering, com Prompt Engineering e Automação com IA logo abaixo) e fundo animado em canvas, com rede de pontos e símbolos de TI.
- **Sobre mim** com texto de apresentação e foto de perfil em moldura circular.
- **Projetos** em cards: To-Do List API e InfoTech, mais um card "Em desenvolvimento" que fica sempre por último, indicando que novos projetos estão a caminho. O carrossel (rotação automática e contínua, loop infinito, setas, indicadores e botão de pausa) entra em ação a partir de 3 projetos, que é o caso atual.
- **Habilidades** em grade: Python, Automação com IA, Prompt Engineering e Git & GitHub.
- **Contato** com botões de E-mail, LinkedIn e GitHub. Ao clicar, o botão fica selecionado e o link aparece embaixo, sem abrir nada automaticamente.
- **Menu responsivo** com versão hambúrguer para telas pequenas.
- **Animações** de entrada das seções ao rolar a página.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox, media queries)
- JavaScript (ES6+, sem bibliotecas), incluindo Canvas 2D e `IntersectionObserver`
- Fontes Inter e JetBrains Mono (Google Fonts)

## Estrutura do projeto

```
Portfolio/
├── index.html        # Estrutura da página
├── css/style.css     # Tema dark, efeitos em azul e responsividade
├── js/main.js        # Menu, animações, carrossel, fundo animado e contato
├── assets/foto.jpg   # Foto de perfil
├── CLAUDE.md         # Regras de trabalho do projeto
└── README.md
```

## Como executar

O site está online no link acima. Para rodar localmente, não há dependências nem build. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/erikhko/Portfolio.git
cd Portfolio
```

As fontes vêm do Google Fonts, então é necessário ter conexão com a internet para vê-las.

## Etapas de desenvolvimento

1. **Definição do projeto:** escolha da stack (HTML, CSS e JS puros), das seções (Hero, Sobre, Projetos, Habilidades e Contato) e da identidade visual (dark, tech, destaques em azul).
2. **Estrutura base (HTML):** página única com as cinco seções, menu de navegação e conteúdo de exemplo.
3. **Estilo (CSS):** paleta e espaçamentos como variáveis CSS, fundo com gradientes, brilho azul em títulos, botões e cards, layout em Grid e Flexbox.
4. **Interatividade (JS):** menu mobile, animação de entrada das seções ao rolar (`IntersectionObserver`) e ano automático no rodapé.
5. **Conteúdo profissional:** cargo e textos adaptados à área de Dados, com os links de contato (e-mail, LinkedIn e GitHub) e ícones SVG nos botões.
6. **Carrossel de projetos:** cards com rolagem horizontal, depois transformados em rotação automática e contínua (40 px/s) com loop infinito, pausa ao passar o mouse, focar ou tocar, e botão de pausa.
7. **Projetos reais:** os cards de exemplo foram substituídos por repositórios do próprio GitHub.
8. **Responsividade:** teste em vários tamanhos de tela e ajustes (setas ocultas no celular, habilidades em duas colunas, botões e alvos de toque maiores, foto acima do texto em telas estreitas).
9. **Conteúdo pessoal:** foto de perfil e texto da seção Sobre mim.
10. **Privacidade:** o botão de WhatsApp foi removido para não expor o telefone no site público.
11. **Publicação inicial:** versionamento com Git, em commits separados por área, e envio ao GitHub.
12. **Fundo do Hero:** fundo animado em canvas (rede de pontos, símbolos de TI e grade sutil), que só anima enquanto está visível.
13. **Redirecionamento para AI Engineering:** o cargo passou a AI Engineering, com Prompt Engineering e Automação com IA em destaque logo abaixo (o efeito de digitação foi removido), nova frase de apoio, texto do Sobre mim reescrito e habilidades atualizadas.
14. **Projetos:** ficou apenas o To-Do List API (Python, FastAPI, SQLAlchemy, SQLite e Docker), mais um card "Em desenvolvimento". Com menos de 3 projetos o carrossel não gira.
15. **Acabamento:** foto em moldura circular e botões de contato que mostram o link embaixo em vez de abrir direto.
16. **Publicação online:** site publicado com GitHub Pages, a partir da branch `main`.
17. **Novo projeto:** adicionado o card InfoTech (landing page de loja fictícia de hardware, em HTML, CSS e JavaScript puros), com links para o GitHub e para a demo no GitHub Pages. O card "Em desenvolvimento" continua sempre por último.

## O que foi verificado

Testes feitos no navegador Brave, com telas simuladas:

- Sem barra de rolagem horizontal em 320, 360, 390, 768, 1024 e 1440 px (etapa de responsividade). As mudanças posteriores foram conferidas em 360 e entre 1280 e 1440 px.
- Menu hambúrguer abre e exibe todos os links.
- O carrossel avançava de forma contínua, a cerca de 40 px/s, quando havia 5 projetos. Com os 3 cards atuais, o carrossel e o card InfoTech foram conferidos pelo autor no site publicado e funcionam.
- O fundo animado é desenhado no Hero em desktop e celular, sem erros de JavaScript.
- Botões de contato: ao clicar, o botão é selecionado, o link muda e nenhuma aba é aberta.

**Não verificado:** funcionamento em aparelhos reais, no Safari, no Firefox e no navegador do Cursor; o clique nas setas, nas bolinhas e no botão de pausa do carrossel; o desempenho do fundo animado em celulares mais simples.

## Pendências e próximos passos

- Adicionar novos projetos de IA (Python, automação, integração com LLMs) conforme forem desenvolvidos, mantendo o card "Em desenvolvimento" sempre por último.

## Contato

- E-mail: erikko2003@hotmail.com
- LinkedIn: [linkedin.com/in/erikhko](https://www.linkedin.com/in/erikhko)
- GitHub: [github.com/erikhko](https://github.com/erikhko)
