# Pokémon List App

A aplicação consiste em explorar uma lista de Pokémons, com funcionalidades de pesquisa e navegação.
O projeto utiliza **React** para a interface de usuário, **Tailwind CSS** para estilização faciliando um design responsivo e interativo utilizando e, por fim, **hooks personalizados** para integração com a API de Pokémons. [Link da aplicação](https://react-challenge-drab-five.vercel.app/)

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em **componentes funcionais**, organizados de forma modular. 

### 📚 Estrutura de Pastas

    src/

        assets/ 
            # Arquivos de imagens e ícones

        components/ 
            # Componenes reutilizáveis

        pages/
            # Páginas da aplicação

        services/
            # API da pokeapi

        hooks/
            # Hooks customiados

### 📦 Principais Componentes


1. **`PokemonListSearch`**: Componente responsável pela barra de pesquisa, permitindo ao usuário buscar Pokémons por nome.
2. **`PokemonList`**: Componente que exibe a lista de Pokémons filtrada com base na pesquisa.
3. **`PokemonListItem`**: Representa cada item individual da lista, incluindo imagem, habilidades e nome do Pokémon.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior).
- **npm** como gerenciador de pacotes.

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Guilherme-Abraao/react-challenge
   cd seu-repositorio

2. **Instale as dependências**

    ```bash
    composer install

3. **Inicie o servidor de desenvolvimento**

    ```bash
    npm run dev

4. **Acesse o aplicativo a aplicação**

    ```bash
    O projeto estará disponível em: http://127.0.0.1:5173/

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **TypeScript**: Linguagem para tipagem estática no JavaScript.
- **PokéAPI**: API para buscar dados sobre Pokémons.
