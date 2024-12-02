# ProjectFinalDevWebI# Refeitório do Campus - Projeto Web

## Descrição

Este projeto tem como objetivo criar um sistema web para gerenciar o refeitório do campus, proporcionando uma experiência amigável para os alunos visualizarem o cardápio da semana. Além disso, administradores podem cadastrar pratos e atualizar o cardápio de forma dinâmica.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework minimalista para criação de rotas e serviços backend.
- **Firebase**: Utilizado para autenticação de usuários e Firestore para banco de dados.
- **HTML, CSS, JavaScript**: Tecnologias principais do frontend para criar a interface do usuário.

## Funcionalidades Implementadas

- **Login e Cadastro**: Usuários podem se cadastrar e fazer login, incluindo autenticação com Google.
- **Gestão de Cardápio**: Administradores podem adicionar, editar e atualizar o cardápio semanal.
- **Visualização dos pratos**: Usuários podem visualizar o cardápio e os pratos do refeitório para a semana.

## Instruções para Instalação e Execução do Projeto

### Requisitos

- **Node.js** instalado (versão 14 ou superior).
- **npm** (Node Package Manager), geralmente instalado junto com o Node.js.

### Passo a Passo para Execução

1. **Clone o Repositório do Projeto**

   ```bash
   git clone https://github.com/luiggiaraujo/ProjectFinalDevWebI
   cd ProjectFinalDevWebI //entrar no repositório do projeto
   ```

2. **Instale as Dependências do Projeto**
   Execute o comando abaixo na raiz do projeto para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

4. **Inicialize o Servidor**
   Inicie o servidor Express na raiz do projeto:

   ```bash
   node index.js
   ```

   O servidor estará rodando em `http://localhost:5000`.

5. **Acesse o Projeto no Navegador**

   - Abra o navegador e digite `http://localhost:5000` para acessar a página inicial do projeto.

### Estrutura do Projeto

- **front/**: Contém todos os arquivos de frontend, como HTML, CSS, e JavaScript.
- **config/**: Contém a configuração do Firebase.
- **scripts/**: Contém scripts de JavaScript utilizados no frontend.

## Melhorias Futuras

- **Cadastro e Definição de Rotas para Administradores**: Implementar o cadastro específico para administradores, incluindo rotas protegidas que garantam que apenas administradores possam acessar certas funcionalidades, como a gestão de cardápio. A página dos admn foi implementada e está funcional (acesse por http://localhost:5000/index/admin.html), porém não forem criadas rodas ou cadastrados admnistradores (final de semestre). 
- **Avaliação dos Usuários aos Pratos**: Implementar um sistema de avaliação onde os usuários possam dar uma nota de 1 a 5 estrelas para cada prato, permitindo uma melhor análise de aceitação dos pratos.
- **Feedback dos Usuários**: Implementar um sistema mais detalhado de feedback, onde os usuários possam deixar comentários sobre os pratos e o serviço do refeitório.
- **Melhoria na Autenticação**: Implementar autenticação mais robusta com diferentes métodos de login (Facebook, GitHub, etc).

## Imagens das Telas

### Tela de Login
![image](https://github.com/user-attachments/assets/66a661de-7b28-499a-9cec-cbf19a6d1dc7)


### Tela de menu (visualização de todos os pratos)
![image](https://github.com/user-attachments/assets/ef3daa7e-59f9-4d5d-963d-ffb2cb810c53)


### Tela de cardápio da semana
![image](https://github.com/user-attachments/assets/5d0271b5-0d01-404e-b576-6d204f1e4221)


### Tela de Gestão de Cardápio (Administrador)
![image](https://github.com/user-attachments/assets/b3a3308a-5376-4ce6-9720-f6794ff7b1f6)





