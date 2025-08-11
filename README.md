# Comic Central - Sua Loja Virtual de HQs da Marvel

Bem-vindo ao Comic Central! Este projeto é uma loja virtual moderna e responsiva para fãs de quadrinhos da Marvel, desenvolvida como solução para o desafio de front-end da NeoApp.


## 🚀 Sobre o Projeto

O objetivo foi criar uma experiência de e-commerce fluida e agradável, permitindo aos usuários explorar, visualizar e comprar HQs da Marvel. A aplicação consome a API oficial da Marvel para obter dados em tempo real sobre os quadrinhos.

### A Jornada: Lidando com a Instabilidade da API

Durante uma fase crucial do desenvolvimento, a **API oficial da Marvel ficou instável e inacessível**. Para não interromper o progresso, a estratégia adotada foi desacoplar o front-end da dependência direta da API:

1.  **Criação de Dados Mockados:** Foi criado um conjunto de dados fictícios (`mock data`) que espelhava a estrutura de resposta da API. Isso permitiu que o desenvolvimento da interface e das funcionalidades do carrinho continuasse normalmente.
2.  **Camada de Abstração:** A função de busca (`getComics`) foi adaptada para servir esses dados mockados. A interface do usuário dependia apenas da "forma" dos dados (nossos tipos definidos), e não da sua origem.
3.  **Reconexão Transparente:** Uma vez que a API voltou a funcionar, a camada de abstração foi reconfigurada para fazer as chamadas reais. Como os componentes já esperavam os dados no formato correto, nenhuma alteração na UI foi necessária.

Essa abordagem garantiu a resiliência do processo de desenvolvimento e demonstrou a importância de arquiteturas que não são rigidamente acopladas a serviços externos.

## ✨ Funcionalidades Implementadas

-   **Listagem com "Carregar Mais":** A página inicial apresenta os quadrinhos e permite carregar mais itens sob demanda, utilizando o sistema de `offset` da API.
-   **Feedback de Carregamento e Erro:** A interface exibe *skeletons* enquanto os dados estão sendo buscados e uma mensagem amigável caso a API falhe ou não retorne resultados.
-   **HQs Raras:** 10% dos quadrinhos são marcados como "Raros", com um destaque visual especial nos cards.
-   **Página de Detalhes:** Uma página dedicada para cada HQ, com imagem em destaque, descrição, preço e a opção de adicionar ao carrinho.
-   **Carrinho de Compras Completo:** Gerenciamento de estado global com React Context, permitindo adicionar, remover e alterar a quantidade dos itens.
-   **Sistema de Cupons:** Funcionalidade na página do carrinho para aplicar cupons de desconto, com regras específicas para itens comuns e raros.

## 🛠️ Tecnologias Utilizadas

-   **Next.js:** Para uma base robusta com renderização no servidor (SSR), componentes de cliente e otimizações de performance.
-   **React & TypeScript:** Para a construção de componentes seguros, reutilizáveis e com tipagem forte.
-   **Styled Components:** Para a estilização componentizada e criação de um sistema de design coeso através de um `theme`.
-   **ESLint:** Para garantir a qualidade e a padronização do código.

## ⚙️ Como Rodar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/4MuriloRT/marvel-comics-store.git](https://github.com/4MuriloRT/marvel-comics-store)
    cd marvel-comics-store
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    -   Crie um arquivo `.env.local` na raiz do projeto.
    -   Adicione suas chaves da API da Marvel:
        ```env
        NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY="sua_chave_publica"
        NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY="sua_chave_privada"
        ```

4.  **Autorize o `localhost`:**
    -   No seu [painel de desenvolvedor da Marvel](https://developer.marvel.com/account), adicione `localhost` à lista de domínios autorizados para sua chave de API para evitar erros de `Referer`.

5.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 🎟️ Cupons de Desconto Válidos

Para testar a funcionalidade do carrinho, utilize os seguintes cupons:

-   **`COMMON10`**: 10% de desconto em HQs comuns.
-   **`RARE15`**: 15% de desconto em HQs raras.