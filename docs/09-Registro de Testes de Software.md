# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.
<br>
<br>

# Documentação de Testes de Tela - Cadastro e Login

Este documento descreve os testes realizados na tela de cadastro e login, com uma série de prints que exibem os diferentes comportamentos esperados do sistema. 

---

### 1. Alert: "Todos os campos são obrigatórios"
- **Descrição:** Mensagem de alerta exibida quando o usuário tenta cadastrar-se sem preencher todos os campos necessários.
- **Objetivo:** Garantir que o sistema exige que todos os campos estejam preenchidos antes de realizar o cadastro.
- **Comportamento Esperado:** O alerta deve aparecer imediatamente após o clique no botão de cadastro, impedindo o envio do formulário enquanto houver campos vazios.
![image](https://github.com/user-attachments/assets/709ad60c-e209-4f77-8153-f3b3a7e3ae7e)

---

### 2. Alert: "As senhas não coincidem"
- **Descrição:** Mensagem de alerta exibida quando as senhas inseridas nos campos "Senha" e "Confirmação de Senha" não correspondem.
- **Objetivo:** Certificar-se de que o usuário insira senhas coincidentes para evitar problemas de login no futuro.
- **Comportamento Esperado:** Exibir o alerta após o clique no botão de cadastro, caso as senhas não correspondam.
![image](https://github.com/user-attachments/assets/b4abacbd-d534-482f-89d5-ef3b3f442918)

---

### 3. Alert: "Tentativa de cadastro com e-mail já usado"
- **Descrição:** Mensagem de alerta exibida quando o usuário tenta cadastrar-se com um e-mail que já existe no sistema.
- **Objetivo:** Prevenir a duplicidade de contas no sistema e orientar o usuário a usar um e-mail diferente.
- **Comportamento Esperado:** Exibir o alerta após a tentativa de cadastro com um e-mail previamente registrado, impedindo a criação de uma nova conta.
![image](https://github.com/user-attachments/assets/cf9968a9-6e52-4d08-8057-82d0190ff8cf)

---

### 4. Alert: "Usuário cadastrado com sucesso"
- **Descrição:** Mensagem de confirmação de cadastro exibida ao concluir o registro do usuário com sucesso.
- **Objetivo:** Confirmar ao usuário que o cadastro foi concluído e que ele pode acessar o sistema.
- **Comportamento Esperado:** O alerta deve ser exibido após a verificação de todos os campos e da correspondência das senhas.
![image](https://github.com/user-attachments/assets/86562d26-001b-4922-a00b-f4cc87856910)

---

### 5. Tela do Firebase: Confirmação do cadastro do usuário
- **Descrição:** Tela exibindo a confirmação do cadastro no Firebase, validando que o usuário foi registrado no banco de dados.
- **Objetivo:** Verificar no backend que o cadastro foi concluído com sucesso e que os dados do usuário foram armazenados corretamente.
- **Comportamento Esperado:** A tela do Firebase deve exibir a confirmação de cadastro do usuário.
![image](https://github.com/user-attachments/assets/bedce847-db14-4435-977f-4e46dbdc2d57)

---

### 6. Alert: "O e-mail é inválido" (Erro do Firebase)
- **Descrição:** Mensagem de alerta exibida quando o e-mail inserido é considerado inválido pelo Firebase.
- **Objetivo:** Garantir que o sistema valide o formato do e-mail antes de completar o cadastro.
- **Comportamento Esperado:** Exibir o alerta imediatamente se o Firebase detectar que o e-mail fornecido não é válido.
![image](https://github.com/user-attachments/assets/754dcdd1-6417-4d53-9957-dd91f02cf9df)

---

### 7. Alert: "Confirmação de login"
- **Descrição:** Mensagem de confirmação de login bem-sucedido após o usuário inserir suas credenciais corretamente.
- **Objetivo:** Informar ao usuário que o login foi realizado com sucesso e que ele pode acessar o sistema.
- **Comportamento Esperado:** Exibir o alerta após o envio de credenciais válidas e redirecionar o usuário à página inicial ou dashboard.
![image](https://github.com/user-attachments/assets/91470430-8271-4c46-9eb2-d3b2bfe2e040)

---

### 8. Alert: "Erro no login, tente novamente"
- **Descrição:** Mensagem de erro exibida quando o usuário insere credenciais incorretas ao tentar fazer login.
- **Objetivo:** Avisar ao usuário que o login falhou devido a dados inválidos e solicitar uma nova tentativa com os dados corretos.
- **Comportamento Esperado:** Exibir o alerta imediatamente após o envio de credenciais inválidas, impedindo o acesso ao sistema.
![image](https://github.com/user-attachments/assets/4adbe6aa-0ec2-4b2e-837f-545012da7dcb)

---


Cenário: Ao clicar em um livro no catálogo de livros o usuário deve ser direcionado para a tela detalhe de livro
Caso o livro esteja disponível: deve aparecer a mensagem 'Disponível para empréstimo'
e o botão empréstimo habilitado
Caso o livro esteja indisponível: deve aparecer a mensagem 'NÃO Disponível para empréstimo' e o botão empréstimo desabilitado

![pag disponivel](https://github.com/user-attachments/assets/0833f943-5000-4de9-8c75-39efd5ae99c3) <br>
Resultado: Mostra a mensagem de disponível e botão habilitado.

![pag indisponivel](https://github.com/user-attachments/assets/72be7d68-f2cd-40d1-8536-53ed32337222)<br>
Resultado: Mostra a mensagem de indisponivel e botão desabilitado.

Tela de Cadastro de Livros

Todos os campos de entrada (Título, Categoria, Resumo, Autor) estão visíveis e o botão de cadastrar livro habilitado

![abf9b33d-70bb-407a-88ae-034f64c73067](https://github.com/user-attachments/assets/50bf3d8d-3790-4f28-9ece-0c9fce951d1f)

Caso o usuario tente cadastrar um livro sem preencher todos os campos, uma mensagem deve ser exibida e o cadastro tem que ser interrompido

![7162a2b0-9aa6-4748-a28a-6c0409c04988](https://github.com/user-attachments/assets/bdfa2d77-8c31-494f-93dd-ac708b6b3558)

Se o usuario seguiu os passos certo e preencheu todos os campos, apos clicar no botão de cadastrar livro uma mensagem tem que ser exibida informando que o livro foi cadastrado. <br>
![8330e0cf-4dd4-4333-a429-edb01f44fc0a](https://github.com/user-attachments/assets/76a01bb2-08ee-401e-9c02-ac4104862778)

Cenário -> Ao entrar na página principal, os livros devem ser carregados dinamicamente com dados recebidos do banco de dados.  
![image](https://github.com/user-attachments/assets/3807f62c-dc88-4e4f-85d7-81c50b1cb6bb)

Cenário -> Ao pesquisar o nome ou parte do nome do título do livro, deve ser aplicado o filtro para o texto digitado.
![image](https://github.com/user-attachments/assets/05ce8b2c-4906-43db-9747-ea423cb30346)
Caso a pesquisa esteja vazia, e o filtro seja aplicado, todos os livros devem ser carregados.
![image](https://github.com/user-attachments/assets/d95a0344-f6d1-4921-924d-848f174bc554)





## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
