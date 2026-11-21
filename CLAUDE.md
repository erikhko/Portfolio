# CLAUDE.md — Portifolio

## Visão geral
- **Projeto:** Portifolio — site portfólio pessoal.
- **Raiz do projeto:** `C:\Users\Erik\Documents\Projetos\Portifolio`
- **Plataforma:** Windows 11 (PowerShell como shell principal).
- Trabalhe sempre dentro da pasta raiz. Não leia nem altere arquivos fora dela sem permissão.

## Regras de comportamento (OBRIGATÓRIAS)
1. **Idioma:** responda sempre em **português pt-BR** (conversas, explicações, mensagens de commit e comentários no código, salvo se eu pedir outro idioma).
2. **Confirmar antes de agir:** antes de qualquer alteração, descreva o que pretende fazer (arquivos afetados e o que muda) e **aguarde minha aprovação explícita**.
3. **Fazer perguntas:** se algo estiver ambíguo ou houver mais de um caminho razoável, pergunte antes de decidir. Prefira perguntas curtas e objetivas.
4. **Seja conciso:** respostas diretas, sem rodeios. Mostre o essencial.

## O que NUNCA fazer
- **Nunca fazer nenhuma alteração sem minha confirmação.** Isso inclui:
  - Criar, editar, mover, renomear ou apagar arquivos e pastas.
  - Instalar, atualizar ou remover dependências.
  - Executar comandos que modifiquem o projeto ou o sistema.
  - Fazer commit, push, deploy ou qualquer ação que publique algo.
- Nunca assumir que uma aprovação anterior vale para uma nova alteração. Cada alteração exige nova confirmação.
- Nunca apagar conteúdo existente sem mostrar antes o que será removido.

## Fluxo de trabalho esperado
1. Entender o pedido (perguntar se necessário).
2. Propor o plano: o que será alterado e por quê.
3. Esperar minha confirmação.
4. Executar somente o que foi aprovado.
5. Resumir o que foi feito e apontar próximos passos possíveis.

Leitura de arquivos e análise (somente leitura) podem ser feitas livremente para embasar a proposta.

## Identidade visual
- **Estilo:** aparência **tech**, moderna e limpa.
- **Tema:** **modo dark** como padrão.
- **Destaque:** efeitos em **azul** (brilhos/glow, gradientes, bordas luminosas, hover e transições suaves).
- **Paleta base (sugestão, confirme comigo antes de fixar):**
  - Fundo: tons escuros (ex.: `#0a0e1a`, `#0f172a`).
  - Texto: claro, com bom contraste (ex.: `#e2e8f0`).
  - Destaque: azuis (ex.: `#3b82f6`, `#60a5fa`, `#38bdf8`).
- **Boas práticas visuais:**
  - Manter contraste acessível (WCAG AA) entre texto e fundo.
  - Animações sutis; respeitar `prefers-reduced-motion`.
  - Layout responsivo (mobile first).
  - Definir cores e espaçamentos como variáveis (CSS custom properties) para facilitar ajustes.

## Convenções de código
- Código limpo, legível e sem duplicação.
- Nomes de arquivos, variáveis e classes consistentes e descritivos.
- HTML semântico e acessível (alt em imagens, labels, hierarquia de títulos).
- Não adicionar bibliotecas ou frameworks sem me consultar antes.
- Seguir o padrão já existente no projeto assim que houver código.

## Estrutura do projeto
A pasta está vazia por enquanto. A estrutura e a stack ainda serão definidas — **pergunte-me** antes de escolher tecnologias (HTML/CSS/JS puro, React, Next.js, etc.) e atualize esta seção quando a estrutura existir.

```
Portifolio/
└── CLAUDE.md
```

## Documentação do projeto (README.md)
- Existe um único arquivo de documentação: **`README.md`** na raiz. Ele serve como documentação do projeto **e** como README do GitHub (perfil: https://github.com/erikhko).
- **Quando criar/atualizar:** ao final de cada etapa concluída, ou quando eu pedir ("atualize a documentação"). Sempre me mostrar o que será escrito e **pedir confirmação** antes de gravar.
- **Conteúdo:** descrever tudo o que foi feito **e o que realmente funcionou**. Registrar apenas o que foi testado/verificado; não documentar tentativas que falharam como se fossem funcionalidades. Se algo não foi testado, marcar como "não verificado".
- **Estrutura sugerida:**
  1. Título e descrição curta do projeto
  2. Prévia (screenshot/GIF, quando houver)
  3. Funcionalidades (somente as que funcionam)
  4. Tecnologias utilizadas
  5. Estrutura de pastas
  6. Como executar localmente
  7. Histórico do que foi feito (por etapa/data)
  8. Decisões e aprendizados (o que deu certo)
  9. Próximos passos
  10. Autor/contato (link do GitHub)
- **Estilo:** pt-BR, Markdown limpo e objetivo, com títulos hierárquicos, listas e blocos de código. Escrito para quem abre o repositório no GitHub pela primeira vez.
- Nunca incluir senhas, tokens, chaves de API ou dados pessoais sensíveis no README.
- Manter o README coerente com o estado real do código; corrigir trechos desatualizados quando propor uma atualização.

## Manutenção deste arquivo
- Proponha atualizações do CLAUDE.md quando a stack, a estrutura ou as convenções mudarem, e peça minha confirmação antes de editar.
