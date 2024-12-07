# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

# Documentação do Projeto - Sistema de Cadastro e Login

Esta documentação descreve o modelo do banco de dados de usuários e as implementações das telas de login e cadastro, incluindo imagens de cada funcionalidade para referência visual.

---

## Modelo do Banco de Dados de Usuários
![image](https://github.com/user-attachments/assets/5de1699a-9528-46e4-bb9d-9be30f9a563b)


- **Descrição:** Estrutura do banco de dados utilizada para armazenar informações de cada usuário, como e-mail, senha (criptografada), data de criação e outros dados relevantes.
- **Objetivo:** Garantir a segurança e a integridade dos dados dos usuários ao definir as tabelas e relacionamentos corretos para o sistema de autenticação.

---

## Código da Página de Login
![image](https://github.com/user-attachments/assets/d6e84064-a091-45e1-a172-5e2875a7896f)


- **Descrição:** Código-fonte da página de login em React Native, responsável por validar as credenciais inseridas e autenticar o usuário.
- **Objetivo:** Permitir que o usuário acesse o sistema inserindo suas credenciais e receber feedback em caso de erro ou sucesso.

---

## Print da Tela de Login
![image](https://github.com/user-attachments/assets/44fe82c3-d912-426a-a681-0ce2f1c7085f)


- **Descrição:** Captura de tela da interface de login, exibindo os campos de entrada para e-mail e senha, além dos botões para efetuar login e recuperar a senha.
- **Objetivo:** Demonstrar a aparência da tela para referência visual e validação do design com a equipe de desenvolvimento.

---

## Código da Página de Cadastro
![image](https://github.com/user-attachments/assets/6baa658b-f424-4120-8a4e-6d005e7fb36c)


- **Descrição:** Código-fonte da página de cadastro em React Native, incluindo validações para garantir que os dados do usuário sejam adequadamente coletados e registrados no banco de dados.
- **Objetivo:** Permitir a criação de novas contas de usuários, validando dados como e-mail e senha e assegurando que as informações sejam registradas corretamente.

---

## Print da Tela de Cadastro
![image](https://github.com/user-attachments/assets/ea0657c2-1cb8-4449-be5b-29f2c77218f5)


- **Descrição:** Captura de tela da interface de cadastro, exibindo os campos de entrada para as informações do usuário, como e-mail e senha, e um botão para efetuar o registro.
- **Objetivo:** Mostrar a aparência da tela de cadastro para referência visual, ajudando a identificar possíveis melhorias na experiência do usuário.

---

## Código da Página Detalhe Livro
![image](https://github.com/user-attachments/assets/1d4aabc8-c707-4c3c-bd07-bae3b2d068c9)

## Print da Página Detalhe Livro
![image](https://github.com/user-attachments/assets/3eac0058-e29a-4269-818d-679a41cdd5d0)

- **Descrição:** Captura de tela da interface de detalhe livro, exibindo dados do livro, como titulo, autor e ressumo, além de sua disponibilidade. Um botão para fazer reserva.
- **Objetivo:** Mostrar a aparência da tela de detalhe livro para referência visual, ajudando a identificar possíveis melhorias na experiência do usuário.

Modelo Banco Banco de dados ->  
![image](https://github.com/user-attachments/assets/dc887efc-9ed6-4cc1-853a-b8702bcd91f5)

Relacionamento código e requisito

- Visualização de livros  
![image](https://github.com/user-attachments/assets/86175c2e-4dfe-4b02-9470-88389bb2a268)
![image](https://github.com/user-attachments/assets/060416b0-50df-4145-9e75-453d2b717a1e)
- Filtragem de livros  
![image](https://github.com/user-attachments/assets/bcd6fb7c-b0e5-4817-b7dd-48b8e4e37cca)
![image](https://github.com/user-attachments/assets/7b9790f6-b03a-4bce-8008-4b24806562ce)



Pagina de Cadastro de Livros

- Função de cadastro de livros (post) + validações.
![image](https://github.com/user-attachments/assets/7c7f5e34-ba05-478a-b2e1-fd25f80ba684)
- Montagem da tela. 
![image](https://github.com/user-attachments/assets/f5857fe1-2353-415f-ae8c-706fc338cdc2)
![image](https://github.com/user-attachments/assets/81efb822-0dbc-4c3c-84b0-0f7785ba323c)




> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
