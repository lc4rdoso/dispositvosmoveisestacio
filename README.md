🍴 Nosso Canto Receitas

Aplicativo mobile desenvolvido como parte de um projeto de extensão do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de apoiar a gestão e padronização de receitas do microempreendimento "Nosso Canto Petiscos".

📌 Descrição Geral

"Nosso Canto Receitas" é um aplicativo multiplataforma (Android/iOS) desenvolvido com React Native e Expo, voltado à organização e consulta de receitas culinárias de maneira simples, visual e funcional. Criado especialmente para auxiliar o cotidiano da microempreendedora responsável pelo negócio, o app facilita o controle do processo produtivo, a padronização dos pratos e o registro de variações personalizadas.

✨ Principais Funcionalidades

Cadastro de receitas com nome, tempo de preparo, categoria, calorias e nível de dificuldade;

Inclusão de ingredientes e modo de preparo passo a passo;

Upload de imagens a partir da câmera ou galeria;

Edição e exclusão de receitas já cadastradas;

Busca por nome e ingredientes;

Filtragem por categoria (doces, salgados, bebidas, massas, etc);

Armazenamento local com persistência utilizando AsyncStorage.

🧑‍💻 Tecnologias Utilizadas

React Native (com Expo);

AsyncStorage (armazenamento local persistente);

React Navigation (navegação entre telas);

expo-image-picker (captura e seleção de imagens);

Figma (prototipação da interface e fluxo de navegação).

🧩 Estrutura do Projeto

├── /src/screens
│   ├── WelcomeScreen.jsx
│   ├── RecipeListScreen.jsx
│   ├── AddRecipeScreen.jsx
│   └── RecipeDetailScreen.jsx
├── /src/storage
│   └── RecipeStorage.js
├── /assets/images
│   └── default.png, splash.png, imagens das receitas

👥 Integrantes do Projeto

Lucas Campos Muniz Cardoso — Matrícula: 202303471017

Pedro Paulo de Castro de Jesus — Matrícula: 202302687113

Orientador: Prof. Ronaldo Candido dos Santos

📱 Telas do Aplicativo

Tela

Descrição

WelcomeScreen.jpg

Tela de boas-vindas com acesso inicial ao app.

RecipeListScreen.jpg

Lista de receitas com filtros por categoria e barra de busca.

RecipeDetailsScreen.jpg

Tela de visualização da receita, com detalhes, imagem e opções de editar/excluir.

AddRecipeScreen.jpg

Formulário completo para cadastrar ou editar receitas com imagem, categoria e dificuldade.

👁️‍🗨️ Galeria de Telas

🚀 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git

Acesse o diretório do projeto:

cd dispositivosmoveisestacio/receitas-app

Instale as dependências:

npm install

Inicie a aplicação:

npx expo start

Escaneie o QR Code com o aplicativo Expo Go no seu dispositivo móvel.

🎯 Objetivo Social-Comunitário

Este projeto foi concebido dentro do contexto de uma ação extensionista universitária, com o propósito de aplicar soluções tecnológicas em benefício de um microempreendimento local. Ao promover a digitalização e organização dos processos da microempreendedora, o app contribui para a valorização da cultura alimentar, empoderamento feminino e uso consciente da tecnologia no cotidiano de pequenos negócios.

📚 Base Metodológica do Projeto

O desenvolvimento do aplicativo seguiu a metodologia prática prevista na Etapa 4 dos Procedimentos de Ensino-Aprendizagem do Plano de Ensino da disciplina, com as seguintes fases:

Levantamento de Requisitos (entrevistas e escuta ativa com a empreendedora);

Design da Interface com protótipos validados no Figma;

Implementação técnica com React Native e bibliotecas auxiliares;

Testes funcionais com a usuária e ajustes com base em feedback real;

Entrega final com oficina prática de capacitação para uso autônomo.

📝 Licença

Este projeto é destinado exclusivamente a fins acadêmicos e de extensão comunitária, sendo vedado o uso comercial sem autorização prévia.

Projeto desenvolvido para a disciplina de Prática Extensionista IV — CST em Análise e Desenvolvimento de Sistemas, Estácio.

📍 Nosso Canto Petiscos — 2025