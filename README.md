# Profile Card Design

Um projeto de cartão de perfil interativo e moderno construído com React, TypeScript e Tailwind CSS.

## Sobre o Projeto

Este projeto apresenta componentes de cartão de perfil com dois designs distintos:
- **Variante 1 (withExpBar)**: Cartão com barra de experiência ao lado do nome
- **Variante 2 (withColorRing)**: Cartão com anel colorido gradiente ao redor do avatar

Cada cartão exibe informações de perfil profissional, estatísticas de engajamento e links para redes sociais.

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset de JavaScript com tipagem estática
- **Vite** - Build tool e dev server de alta performance
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones
- **Supabase** - Backend como serviço (disponível para expansão)

## Estrutura do Projeto

```
src/
├── components/
│   ├── ProfileCard.tsx          # Componente principal do cartão
│   └── ProfileCardEmbed.tsx     # Versão para embed em blogs
├── assets/
│   ├── avatar.png               # Imagem de perfil
│   └── fundo_topo.jpg          # Imagem de fundo do header
├── App.tsx                      # Componente raiz
├── main.tsx                     # Entry point
└── index.css                    # Estilos globais
```

## Funcionalidades

- Design responsivo e moderno
- Dois estilos de cartão personalizáveis
- Barra de experiência com gradiente rainbow
- Anel colorido decorativo opcional
- Links para redes sociais (Instagram, X/Twitter, LinkedIn)
- Estatísticas de engajamento (Likes, Posts, Views)
- Botão "Follow" interativo
- Versão embedável para blogs e sites externos

## Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

## Como Usar o Embed

Para incorporar o cartão de perfil em seu blog ou site:

1. Execute o build do projeto
2. Hospede os arquivos da pasta `dist/` em um servidor web
3. Use o arquivo `embed.html` como referência
4. Adicione um iframe no seu blog apontando para a URL hospedada:

```html
<iframe
  src="https://seu-dominio.com/embed.html"
  width="480"
  height="700"
  frameborder="0"
  style="border: none; overflow: hidden;">
</iframe>
```

## Personalização

Para personalizar o cartão com suas próprias informações:

1. Substitua as imagens em `src/assets/`
2. Edite os dados em `ProfileCard.tsx`:
   - Nome
   - Biografia
   - Estatísticas
   - Links de redes sociais

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Preview da build de produção
- `npm run typecheck` - Verifica tipos TypeScript

## Licença

Este projeto foi desenvolvido para uso pessoal e profissional.
