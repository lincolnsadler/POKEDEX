# Principais Métodos HTTP:

### GET

-   Usado para solicitar dados de um recurso no servidor. É um método seguro (não altera o estado do recurso) e idempotente (a execução múltiplas vezes tem o mesmo efeito que a execução única).

### POST

-   Usado para enviar dados para serem processados pelo servidor, como o envio de um formulário ou a criação de um novo recurso.

### PUT

-   Usado para substituir completamente um recurso existente no servidor. Se o recurso não existir, ele pode ser criado.

### PATCH

-   Utilizado para aplicar modificações parciais a um recurso existente.
    DELETE: Usado para remover um recurso específico do servidor.

## Outros Métodos:

### HEAD

-   Similar ao GET, mas retorna apenas os metadados (cabeçalhos) de um recurso, sem o corpo da resposta.

### OPTIONS

-   Retorna os métodos HTTP suportados e permitidos para um determinado recurso.
    TRACE: Usado para diagnóstico e depuração, permitindo ao cliente ver o caminho que a requisição percorreu até o servidor.

## Aplicações

-   Estes métodos são fundamentais para a comunicação entre um cliente (navegador, aplicação) e um servidor. Para quem trabalha com desenvolvimento web e APIs, entender e aplicar corretamente os métodos HTTP é essencial para criar fluxos eficientes e robustos de troca de informações, permitindo operações como a criação, leitura, atualização e deleção de dados (operações CRUD).
