# Spotify - For de Record

Este repositório apresenta o desenvolvimento de um projeto acadêmico da disciplina Sistemas para Internet II, cujo objetivo foi recriar páginas do Spotify Newsroom e analisar diferentes abordagens de desenvolvimento frontend. O projeto envolve a implementação de páginas utilizando tecnologias web tradicionais e frameworks modernos, explorando estratégias de renderização, organização do código e boas práticas de desenvolvimento.

## Descrição Geral do Projeto e da Migração

Este projeto teve como objetivo recriar a página Company Info do Spotify Newsroom
(https://newsroom.spotify.com/company-info/
).

Na primeira versão, a página foi implementada utilizando HTML, CSS e JavaScript puro, com apoio do plugin HTML.to.Design para a reconstrução visual. Todo o conteúdo era renderizado no lado do cliente, sem uso de frameworks, o que resultava em uma estrutura mais simples, porém menos otimizada em termos de organização e performance.

Na segunda versão, o projeto foi migrado para Next.js, adotando uma arquitetura mais moderna e organizada. Nessa etapa, além da adaptação da página Company Info, foi implementada também a página News
(https://newsroom.spotify.com/news/
), permitindo a aplicação de diferentes tipos de renderização oferecidos pelo framework.

Durante a migração, foi utilizado o Tailwind CSS para estilização, facilitando a criação de componentes reutilizáveis, a manutenção do layout e a padronização visual do projeto. Essa versão trouxe melhorias em performance, escalabilidade e preparação do frontend para uma abordagem desacoplada e orientada a consumo de APIs.

## Lista de Páginas, Tipo de Renderização e Justificativas

- **Company InfoL**  
Página baseada em: https://newsroom.spotify.com/company-info/

Esta página foi implementada utilizando Static Site Generation (SSG). A escolha desse tipo de renderização se deve ao fato de o conteúdo ser institucional e não sofrer alterações frequentes. Com o SSG, a página é gerada estaticamente durante o processo de build, o que resulta em melhor desempenho, menor tempo de carregamento e vantagens em termos de SEO, já que o HTML é entregue pronto ao navegador.

- **News**  
Página baseada em: https://newsroom.spotify.com/news/

A página News utiliza Client Side Rendering (CSR). Nessa abordagem, a renderização inicial ocorre sem os dados completos, que são carregados posteriormente no navegador por meio de uma requisição à API interna do Next.js, realizada dentro de um useEffect. Esse modelo foi escolhido por permitir maior dinamismo no carregamento das informações, sendo mais adequado para conteúdos que podem variar com maior frequência.

## Comparação Lighthouse (antes/depois)
<img width="561" height="132" alt="html" src="https://github.com/user-attachments/assets/cd259a04-ea43-4ab3-84a0-72ed49b04af6" />

Na primeira análise do Lighthouse, realizada sobre a versão do projeto desenvolvida com HTML, CSS e JavaScript puro os resultados foram positivos em geral, com destaque para Performance e SEO. No entanto, a métrica de Best Practices apresentou uma pontuação inferior em relação às demais, indicando possíveis problemas relacionados à organização do código, uso de recursos modernos e boas práticas recomendadas pela ferramenta.

<img width="565" height="125" alt="next" src="https://github.com/user-attachments/assets/ad6f135f-a083-407e-acfc-4fede795253d" />

Na segunda análise, feita após a migração para Next.js foi possível observar uma melhora geral nos resultados. A pontuação de Best Practices atingiu o valor máximo, refletindo a adoção de padrões mais modernos, melhor gerenciamento de recursos e uma estrutura mais alinhada com recomendações atuais de desenvolvimento web. O SEO também apresentou melhora, beneficiado pela arquitetura do Next.js e pelo uso de renderização adequada para cada tipo de página.

Apesar de a métrica de Accessibility ter apresentado uma leve variação entre as versões, os valores permaneceram altos em ambas, indicando que o projeto manteve boas práticas de acessibilidade durante a migração. Já a Performance continuou com resultados elevados, demonstrando que a adoção do Next.js não impactou negativamente o desempenho e, em alguns aspectos, contribuiu para uma entrega mais otimizada do conteúdo.

De forma geral, a comparação evidencia que a migração para o Next.js trouxe ganhos principalmente em padronização, boas práticas e SEO, mantendo um alto nível de performance e qualidade da aplicação.

## Breve reflexão sobre como o projeto representa uma abordagem de frontend desacoplado.

O projeto adota uma abordagem de frontend desacoplado ao separar a camada de apresentação da lógica de obtenção de dados, utilizando requisições a APIs para o carregamento das informações. Essa separação torna o frontend mais flexível e independente, facilitando a manutenção, a reutilização de componentes e futuras evoluções do sistema. Além disso, o uso de diferentes estratégias de renderização reforça essa independência, mantendo o foco do frontend na exibição do conteúdo.
