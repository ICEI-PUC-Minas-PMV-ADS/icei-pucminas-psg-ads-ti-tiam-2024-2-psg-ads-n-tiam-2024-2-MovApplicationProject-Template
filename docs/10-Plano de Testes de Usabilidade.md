# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

## Teste Tela Detalhe Livro:
Com o desenvolvimento da tela nota-se que a tela do celular é pequena para manter o layout do topo da tela como está no prótotipo, pois a imagem fica muito pequena e os texto ao seu lado muito apertados.
Para o restante da página o layout funcionou como no protótipo. 

## Teste tela Principal
 - Ao clicar no botão de pesquisar, o software deve ser capaz de filtrar os livros com os textos digitados.
 - Ao clicar em um card, o usuario deve ser redirecionado à pagina de detalhes do livro.
## Casos de teste
1. **Verificar input**
   - Caso o input esteja vazio e o filtro for aplicado, todos os livros devem aparecer.
   - Caso tenha algum texto no input, o filtro deve ser aplicado com esse texto.
2. **Clicar no card**
 - Caso o usuario clique no card do livro, ele é redirecionado à pagina de detalhes do livro clicado.

## Testes da Tela de Login

### Objetivo
Avaliar a funcionalidade e a usabilidade da tela de Login, verificando se os usuários conseguem acessar a aplicação sem dificuldades e com boa experiência de uso.

### Descrição
A tela de Login permite ao usuário inserir suas credenciais para acessar a aplicação. Os testes de usabilidade focam em verificar a clareza das instruções, a facilidade de uso e a adequação da interface.

### Casos de Teste

1. **Verificação de Campos Obrigatórios**
   - **Descrição:** Exibir uma mensagem de erro se o usuário tentar fazer login sem preencher todos os campos.
   - **Resultado Esperado:** Exibir o alerta "Todos os campos são obrigatórios".

2. **Verificação de E-mail ou Senha Incorretos**
   - **Descrição:** Exibir uma mensagem de erro se o usuário inserir e-mail ou senha incorretos.
   - **Resultado Esperado:** Exibir o alerta "Erro no login, tente novamente".

3. **Confirmação de Login Bem-sucedido**
   - **Descrição:** Verificar que o sistema redireciona o usuário para a tela inicial após um login bem-sucedido.
   - **Resultado Esperado:** Exibir o alerta "Confirmação de login" e redirecionar para a tela inicial.

### Observações
Durante o desenvolvimento, foram identificados os seguintes pontos de melhoria:
- **Sugestão de ajuste no layout:** Melhorar a disposição dos campos para evitar sobreposição em dispositivos com telas menores.
- **Validação de e-mail:** Certificar-se de que o campo de e-mail aceita apenas formatos válidos.

---

## Testes da Tela de Cadastro

### Objetivo
Verificar a funcionalidade e a usabilidade da tela de Cadastro, garantindo que novos usuários consigam se registrar facilmente e sem erros.

### Descrição
A tela de Cadastro permite que novos usuários criem uma conta. O teste avalia se os campos estão claros, se as mensagens de erro são informativas e se a experiência de cadastro é intuitiva.

### Casos de Teste

1. **Verificação de Campos Obrigatórios**
   - **Descrição:** Exibir uma mensagem de erro se o usuário tentar se cadastrar sem preencher todos os campos.
   - **Resultado Esperado:** Exibir o alerta "Todos os campos são obrigatórios".

2. **Verificação de Senhas Diferentes**
   - **Descrição:** Exibir uma mensagem de erro se o usuário inserir senhas que não coincidem.
   - **Resultado Esperado:** Exibir o alerta "As senhas não coincidem".

3. **Tentativa de Cadastro com E-mail já Usado**
   - **Descrição:** Exibir uma mensagem de erro se o usuário tentar se cadastrar com um e-mail já registrado.
   - **Resultado Esperado:** Exibir o alerta "Este e-mail já está em uso".

4. **Cadastro Bem-sucedido**
   - **Descrição:** Exibir uma mensagem de confirmação e redirecionar o usuário para a tela de Login após um cadastro bem-sucedido.
   - **Resultado Esperado:** Exibir o alerta "Usuário cadastrado com sucesso" e redirecionar para a tela de Login.

### Observações
Durante o desenvolvimento, foram observadas algumas áreas para melhorias:
- **Layout de Campos:** Ajustar a disposição para otimizar a legibilidade em telas pequenas.
- **Validação de E-mail:** Garantir que o campo de e-mail verifique formatos inválidos antes de enviar o formulário.
- **Feedback Visual:** Fornecer feedback visual para indicar que o registro está em progresso, como um ícone de carregamento.

---

## Conclusão e Recomendações
Esses testes e observações fornecem um guia para otimizar a experiência do usuário nas telas de Login e Cadastro, garantindo uma interface acessível e funcional. As recomendações incluem:
- **Ajustes de Layout:** Melhorar a disposição dos campos, principalmente em dispositivos móveis.
- **Mensagens de Erro Claras:** Verificar que todas as mensagens de erro são informativas e orientam o usuário sobre o que fazer em caso de erro.
- **Validação de E-mail e Senha:** Implementar validações que evitem erros comuns, como formato de e-mail incorreto e senhas incompatíveis.

---

## Testes da Tela de Cadastro

## Objetivo
Garantir que a funcionalidade de cadastro de livros está funcionando corretamente, incluindo validações de campos obrigatórios e envio para a API.

### Casos de Teste

1. **Verificação de Campos Obrigatórios**
   - **Descrição:** Exibir uma mensagem de erro se o usuário tentar se cadastrar um livro sem preencher todos os campos.
   - **Resultado Esperado:** Exibir o alerta "Todos os campos são obrigatórios".

2. **Cadastro bem sucedido**
   - **Descrição:** Usuario preenche todos os campos e cadastro o livro.
   - **Resultado Esperado:** Exibi um alerta para o usuario com a mensagem confirmando o cadastro.
  
 ### Observações
Durante o desenvolvimento, foram identificados os seguintes pontos de melhoria:
- **Sugestão de ajuste no layout:** Melhorar a disposição dos campos para evitar sobreposição em dispositivos com telas menores.
- **Cadastro de imagem do livro** Opção de cadastrar a imagem do livro no banco de dados..

  
As referências abaixo irão auxiliá-lo na geração do artefato "Plano de Testes de Usabilidade".

> **Links Úteis**:
> - [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
> - [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
> - [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
