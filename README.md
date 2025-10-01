# Teste técnico ecommerce - Agência N1

Para o desenvolvimento desse teste, usei ReactJS juntamente com Typescript, e na parte de estilo, me arrisquei usando tailwind.

## Como rodar o projeto

1. Instale as dependências:
`npm install`

2. Rode o projeto:
`npm run dev`

## Requisitos

- Node.js >= 18
- npm ou yarn

## Estrutura de Pastas

- components = Componentes reutilizáveis (cards, banner, minicart, etc)
- pages = Páginas principais
- context = Contextos globais (carrinho, busca)
- api = Dados mockados para banners, cards e shelf
- styles = Estilos globais 
- utils = Funções utiliárias e helpers que podem ser usadas em diferentes partes do projeto.

## Mobile

No desenvolvimento do layout usei a abordagem mobile-first. Onde o inicio do desenvolvimento parte da versão mobile primeiro.

## Explicações das funcionlidades solicitadas:

Na vitrine toda vez que o usuário clicar no botão adicionar, foi desenvolvida uma lógica para que seja incrementado no icone de carrinho no header.

Na newsletter foi feito um tratamento no campo de input, caso o usuário inserir um email não válido, também foi criado uma lógica para que se o email não for válido, aparecer uma mensagem avisando ao usuário na cor vermelha juntamente com a border do campo de input.
Ainda na newsletter também foi desenvolida uma lógica que se caso o email for válido, o usuário ao clicar no botão "Inscrever" aparecerá uma mensagem de sucesso.

No desafio extra foi solicitado a criação de um contador para black friday, com isso criei uma lógica onde esse contador contém dias, horas, minutos e segundos, e também contém um titulo e um subtitulo, seguindo as cores e fontes do layout fornecido.


## Desenvolvimento que não foi solicitado

Criação de um minicart, onde quando o usuário clicar no icone de carrinho o minicart abre, também foi desenvolvimento botões como "Continuar comprando" e o "Ir para o checkout".

Também foi desenvolvido a lógica onde quando, o usuário clicar no botão de adicionar na vitrine, além de incrementar no icone de carrinho, também o produto é adicionado ao minicart.

No footer na versão mobile, as categorias foram desenvolvidas usando accordeon, onde o usuário clica no menu de categoria e o mesmo expande e se clicar novamente ele fecha.

Criação de contexto para o componente de search para futuras implementações.


## Soluções extras

-> Criar componente de quantidade para as vitrines.
-> Criar lógica para calcular o total de produtos no minicart.
-> Criação de um modal, para quando clicar no icone de usuário esse modal abre para o usuário se cadastrar via google, facebook.
-> Refatorar e organizar mais a estrutura do projeto e arquivos.

### Autor

- Jefferson Braga
- [Linkedin](https://www.linkedin.com/in/jeffersoncorreabraga/ ).


### Licença

Este projeto é apenas para fins de teste técnico.





