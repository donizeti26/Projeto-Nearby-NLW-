# Projeto da 18ª ed. da Next Level Week

## Pocket Mobile - React Native

## 🚀 Introdução teórica, criação da tela e dicas (Aula 01)

Introdução teórica ao **React Native** e **Expo**. Na primeira aula foi iniciado o projeto mobile nearby, em primeiro momento foi alterada a localização de algumas pastas na estrutura criada pelo:

    npx create-expo-app --template
    -navigation(TypeScript)

### 📁 Estrutura criada

Foi criada a pasta **scr** _(**source code** (código-fonte).)_ e definida a seguinte estrutura:
📁src
&nbsp; &nbsp;📁app
&nbsp; &nbsp;&nbsp; &nbsp; **Telas (screens)** e **rotas** do seu app.
&nbsp; &nbsp;📁components
&nbsp; &nbsp;&nbsp; &nbsp;**Componentes reutilizáveis** do projeto
&nbsp; &nbsp;📁assets
&nbsp; &nbsp;&nbsp; &nbsp; **Arquivos estáticos**: imagens, ícones, vídeos,etc.
&nbsp; &nbsp;📁styles
&nbsp; &nbsp;&nbsp; &nbsp; **"Folhas de Estilo"** cores, temas, tipografia, etc.
&nbsp; &nbsp;📁utils
&nbsp; &nbsp;&nbsp; &nbsp; Armazenar funções **auxiliares**, **lógicas**, etc.

## 🔍 Visualizando

**Iniciando o projeto com Expo** e abrindo o ambiente de desenvolvimento.

    npx expo start

O servidor do Expo foi iniciado e junto a ele a opção de visualizar o projeto, seja por meio de emuladores ou por meio do próprio smartphone, com o auxilio do QrCode gerado e do app **Expo Go** (O que eu escolhei :) )

## 🖋️ Fontes

Instalando as fontes no projeto:

    npx expo install expo-font @expo-google-fonts/nomedafonteaqui

Carregando as fontes dentro do app

    import {fontes, useFontes} from @expo-google-fonts/rubik

Usando as fontes no projeto (\_layout.tsx):

    Const [fontsLoad] = useFonts ({coloqueasfontesimmportadasaqui})

> Coloque as fonts no \_layout.tsx, pois antes de carregar o app/index.tsx é carregado o \_layout.tsx. _(é a primeira “rota” carregada pelo Expo Router)_. É necessário adicionar um if para validar se as fontes já foram carregadas, e caso a fonte não foi carregada ele retorna o componente **components/loading**.

## 📁 Components

A pasta components vai conter as " peças" do projeto.
📁Components
&nbsp; &nbsp;&nbsp; &nbsp;⚛️ index.tsx
&nbsp; &nbsp;&nbsp; &nbsp;*️⃣ style.ts
📁loading
&nbsp; &nbsp;&nbsp; &nbsp;⚛️ index.tsx
&nbsp; &nbsp;&nbsp; &nbsp;*️⃣ style.ts
📁step
...
📁steps
...
📁welcome
...

Cada componente contém seu ⚛️**index.tsx** (_estrutura/JSX_) e *️⃣**style.ts** (*estilos próprios\*) independentes. No projeto atual o **app/index.tsx** faz uso dos componetes **componemts/loadig, componemts/welcome** e **componemts/steps**. Já o **componemts/steps** faz uso de **componemts/step** pois **componemts/step** contém toda uma estrutura para criar cada item da lista, e **steps** vai conter cada step passando por declaração o conteúdo de cada step.

## 📁 Step e Steps

Carregando...

## 🧩 Dicas e "Sacadas"

**📁tscongif**

    "paths":{
    "@/*":["./src/*"]
    }

Modifique o atalho da raiz para facilitar a importação de arquivos dentro da sua pasta **src**

**📁Style**
Na pasta style contém os arquivos **colors.ts, front-family.ts** e **theme.ts**. O arquivo **theme.ts,** as a importação no seu interior dos outros dois, ou seja, se quiser usar qualquer um dos dois é só chamar **theme.ts**

# 🔗 Link do projeto base

Este é o repositório original da [Rocketseat](https://github.com/rocketseat-education).
