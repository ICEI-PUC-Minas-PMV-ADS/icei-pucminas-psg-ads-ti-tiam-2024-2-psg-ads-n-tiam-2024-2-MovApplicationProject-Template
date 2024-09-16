
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia escolhida pela equipe para o desenvolvimento do projeto foi o SCRUM, sendo assim, o projeto será divido em sprints. Os ambientes para produção do projeto serão dividos em dev, ambiente para desenvolvimento, e prod, ambiente em que o software será utilizado pelos usuários. A equipe fará reuniões em sala de aula e no Discord para discutir sobre assuntos do projeto. Além disso, será utilizado o quadro Kanban para a separação de tarefas e gestão do Time.

## Relação de Ambientes de Trabalho

| Ambiente | Plataforma | Link       |
|----------|------------|------------|
| Repositório de codigo fonte | GitHub  | https://github.com/ICEI-PUC-Minas-PMV-ADS/psg-ads-n-tiam-2024-2-biblioteca-anunciar)|
| Design de interface  |    Figma | https://www.figma.com |
| Comunicação  | Discord | https://discord.com |
| Gerenciamento do projeto | GitHub    | https://github.com/|

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

```mermaid
gitGraph
   commit id: "v1.0" tag: "v1.0"
   branch develop
   commit id: "Dev Commit 1"
   branch feature1
   commit id: "Feature 1 - Commit 1"
   commit id: "Feature 1 - Commit 2"
   checkout develop
   merge feature1 tag: "Merge Feature 1"
   branch release/v1.1
   commit id: "Release Commit"
   checkout master
   merge release/v1.1 tag: "v1.1"
   branch hotfix/hotfix1
   commit id: "Hotfix Commit"
   checkout develop
   merge hotfix/hotfix1 tag: "Merge Hotfix"
   checkout master
   merge hotfix/hotfix1 tag: "v1.1.1"
   checkout develop
   commit id: "Dev Commit 2"
   branch feature2
   commit id: "Feature 2 - Commit 1"
   commit id: "Feature 2 - Commit 2"
   checkout develop
   merge feature2 tag: "Merge Feature 2"
   branch release/v1.2
   commit id: "Release Commit 2"
   checkout master
   merge release/v1.2 tag: "v1.2"
```

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe será divida de acordo com a metodologia SCRUM, sendo assim, a divisão segue abaixo.
 
- Scrum Master: Arthur Henrique;
- Product Owner: Vitor;
- Equipe de Desenvolvimento: Isabela Bosco, Yule, Luis Gustavo;
- Equipe de Design: Messias Junio.

### Processo

Para a organização do processo de desenvolvimento do projeto, a ferramenta "Projects" do Github nos auxiliará.

  • Backlog: Tarefa que precisa ser realizada.
  
  • Em progresso: Tarefa que está em processo de desenvolvimento.
  
  • Feito: Tarefa já realizada, feita.

![image](https://github.com/user-attachments/assets/8219e23b-7d0d-41b5-a0a7-baabfb0cb3a7)

### Ferramentas

As ferramentas empregadas no projeto são:

  • Editor de código: Visual Studio.
  
  • Ferramenta de comunicação: Discord.
  
  • Ferramenta de design de telas: Figma.
  
  • Controle de Versão: GitHub e Git.

O editor de código, Visual Studio, foi escolhido porque ele possui uma integração com o sistema de versão,Git e GitHub. O discord foi escolhido pela facilidade de utilização de suas ferrametas. Por fim, para criar diagramas utilizamos o Figma por facilitar o desenvolvimento de protótipos gráficos para a solução do projeto.
