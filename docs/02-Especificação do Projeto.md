# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ivon                | Lembrete de devolução do livro     | Que eu pare de levar multas da igreja  |
|Ivon                | Vizualizar quais livros estão dispo| Não ir atoa buscar um livro que não tem|
|                    | niveis                             |                                        |
|Angelo              | Reservar o livro antes de ir buscar| Para garantir que ninguem o alugue     |
|Brenda              | Externder o aluguel online         | para não me locomover ate la so para   |
|                    |                                    | externder o aluguel                    |
|Willian             | Avaliar o livro pelo aplicativo    | para os usuarios poderem ver se o livro|
|                    |                                    | vale a pena de ler                     |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

ID     | Descrição do Requisito                                             | Prioridade
-------|--------------------------------------------------------------------|------------
RF-001 | O sistema deve permitir o cadastro e login de usuários.            | ALTA
RF-002 | O sistema deve fornecer um catálogo de livros físicos com busca e filtros por título, autor, ou categorias. | ALTA
RF-003 | O sistema deve permitir que os usuários façam reservas e empréstimos de livros disponíveis. | ALTA
RF-004 | O sistema deve manter um histórico de empréstimos e devoluções por usuário. | ALTA
RF-005 | O sistema deve enviar notificações para lembrar os usuários sobre prazos de devolução, novos livros adicionados, e atualizações importantes. | ALTA
RF-006 | O sistema deve permitir que os usuários avaliem e comentem os livros que leram. | MÉDIA
RF-007 | O sistema deve fornecer um painel administrativo para que os bibliotecários possam gerenciar o catálogo de livros, reservas, e empréstimos. | ALTA
RF-008 | O sistema deve gerar relatórios sobre o número de empréstimos, livros mais e menos emprestados, histórico de empréstimos, e outros dados relevantes. | MÉDIA
RF-009 | O sistema deve recomendar livros aos usuários com base em seus empréstimos anteriores. | MÉDIA
RF-010 | O sistema deve organizar os livros em diversas categorias, como Religião, Estudos Bíblicos, Ficção Cristã, entre outros. | ALTA
RF-011 | O sistema deve permitir que os usuários adicionem livros à lista de desejos para futura leitura ou reserva. | MÉDIA
RF-012 | O sistema deve mostrar a disponibilidade dos livros em tempo real, indicando se estão emprestados ou disponíveis. | ALTA


### Requisitos não Funcionais

ID      | Descrição do Requisito                                                         | Prioridade
--------|-------------------------------------------------------------------------------|------------
RNF-001 | O sistema deve ser responsivo e otimizado para dispositivos móveis.            | ALTA
RNF-002 | O sistema deve processar requisições dos usuários em no máximo 3 segundos.     | MÉDIA
RNF-003 | O sistema deve suportar dispositivos iOS e Android.                            | ALTA
RNF-004 | O sistema deve ter uma interface amigável e intuitiva.                         | ALTA
RNF-005 | O sistema deve garantir a segurança dos dados dos usuários, com criptografia para senhas e outras informações sensíveis. | ALTA
RNF-006 | O sistema deve ser capaz de operar offline, permitindo que os usuários acessem o catálogo de livros baixados previamente. | MÉDIA


## Restrições

ID   | Descrição da Restrição
-----|------------------------
R-01 | A interface do aplicativo deve ser limpa, moderna e intuitiva, garantindo facilidade de uso tanto em dispositivos móveis quanto em desktops.
R-02 | O cadastro e a atualização de novos conteúdos só podem ser realizados por uma equipe de bibliotecários ou voluntários designados pela igreja.
R-03 | O sistema deve incluir funcionalidades específicas, como reserva de livros, gerenciamento de empréstimos e devoluções, e um sistema de notificações para informar sobre novos livros, prazos de devolução, e atualizações importantes no sistema.

## Diagrama de Casos de Uso
![image](https://github.com/user-attachments/assets/d3ef4ab6-7923-4105-a90a-f310d0ff28de)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)

# Estimativa de Custos

Abaixo está uma estimativa de custos para o projeto de desenvolvimento do aplicativo de gerenciamento de biblioteca para a Igreja Batista Anunciar. A estimativa inclui recursos humanos, hardware, software, redes e serviços.

## Estimativa de Custos

# Estimativa de Custos

Abaixo está uma estimativa de custos para o desenvolvimento do aplicativo de gerenciamento de biblioteca para a Igreja Batista Anunciar. O projeto será realizado por 6 alunos, utilizando React Native e um banco de dados Firebase, com um prazo de um semestre e supervisão do professor.

## Estimativa de Custos

| Categoria          | Item                                      | Quantidade | Custo Unitário | Custo Total  |
|--------------------|-------------------------------------------|------------|----------------|--------------|
| **Recursos Humanos** | Desenvolvimento (6 Alunos)                 | 6          | R$ 0 (Estágio) | R$ 0         |
|                    | Supervisão do Professor (6 meses)          | 1          | R$ 2.000/mês   | R$ 12.000    |
| **Subtotal Recursos Humanos**                                |            |                | **R$ 12.000** |
| **Hardware**        | Preparação de Notebooks (já existentes)     | 1          | R$ 500         | R$ 500       |
|                    | Equipamentos de Desenvolvimento (se necessário) | 0          | R$ 0           | R$ 0         |
| **Subtotal Hardware**                                      |            |                | **R$ 500**   |
| **Software**        | Licença Visual Studio                      | 1          | R$ 1.000       | R$ 1.000     |
|                    | Banco de Dados Firebase (Anual)            | 1          | R$ 1.000       | R$ 1.000     |
| **Subtotal Software**                                      |            |                | **R$ 2.000** |
| **Redes**           | Hospedagem em Nuvem (Anual)                | 1          | R$ 600         | R$ 600       |
|                    | Serviços de Backup e Segurança (Anual)     | 1          | R$ 400         | R$ 400       |
| **Subtotal Redes**                                         |            |                | **R$ 1.000** |
| **Serviços**        | Consultoria e Suporte Técnico (por demanda) | 1          | R$ 1.000       | R$ 1.000     |
|                    | Treinamento e Capacitação (por demanda)     | 1          | R$ 500         | R$ 500       |
| **Subtotal Serviços**                                       |            |                | **R$ 1.500** |
| **Total Geral**                                           |            |                | **R$ 17.000** |


