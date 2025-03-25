# Scraper Amazon Project

Este projeto é um scraper para buscar informações de produtos na Amazon e exibi-los em uma interface simples.

## Estrutura do Projeto

- `backend/`: Código do servidor Express que faz o scraping da Amazon.
- `frontend/`: Interface de usuário em HTML, CSS e Vanilla JavaScript.

## Requisitos

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) (para o frontend)

## Como Rodar

### Backend

1. Vá para a pasta `backend`:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install  # ou 'bun install' se estiver usando Bun
    ```

3. Inicie o backend:

    ```bash
    npm start  # ou 'bun run start'
    ```

### Frontend

1. Vá para a pasta `frontend`:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    bun install
    ```

3. Inicie o frontend:

    ```bash
    bun run dev
    ```

4. Acesse o frontend no navegador, geralmente em `http://localhost:5173`.

### Usando a Aplicação

1. Digite uma palavra-chave na caixa de busca.
2. Clique no botão para buscar.
3. Veja os resultados dos produtos da Amazon exibidos na tela.
