### ID:

`https://pokeapi.co/api/v2/pokemon`

-   ex -> 127.0.0.1 -> DNS (Domain Name System), traduz nomes de domínio (como www.exemplo.com)
    -   `https://pokeapi.co`

### PATH:

-   Caminho do conteúdo da página armazenado e suas condições
    -   `/api/v2/pokemon`

### CARRY STRING?:

-   Usa-se `?` para impor condições no link para a requisição
    -   `offset=0`
    -   & `outra condição` -após o & coloca-se outra condição-
        -   ex -> offset=20&limit=20

### Método MAP:

-   O método map() é uma ferramenta poderosa em JavaScript que permite criar um novo array a partir de um array existente. **Ele percorre cada elemento do array original e aplica uma função a ele**. O resultado dessa função para cada elemento é então **coletado em um novo array**, que é retornado por map(). O array original não é alterado.

`const novoArray = arrayOriginal.map(element);`

A `funcaoDeTransformacao` recebe três argumentos:

`_elemento_`: O elemento atual sendo processado como parâmetro, exemplo, recebe uma lista de números (`const numeros = [1, 2, 3]`) e cada elemento na função map é `numero`.

`_indice_` (opcional): O índice do elemento atual.

`_array_` (opcional): O array sobre o qual o map() foi chamado.

---

ex: Criando um novo array onde cada número é multiplicado por 2

```const numeros = [1, 2, 3, 4];

const numerosDobrados = numeros.map(function(numero) {
return numero \* 2;
});

console.log(numerosDobrados); // Saída: [2, 4, 6, 8]
console.log(numeros); // Saída: [1, 2, 3, 4] - o array original não foi alterado
```

### Métodos de Array e suas Aplicações:

-   `map()`: Cria um novo array a partir de um existente, aplicando uma função a cada elemento. Ideal para transformações de dados. (Ex: Converter temperaturas de Celsius para Fahrenheit).
-   `filter()`: Cria um novo array com elementos que passam em um teste de condição. Útil para selecionar subconjuntos de dados. (Ex: Filtrar produtos em estoque).
-   `reduce()`: Reduz o array a um único valor. Perfeito para cálculos agregados como somas, médias ou para combinar dados. (Ex: Calcular o valor total de um carrinho de compras).
-   `forEach()`: Itera sobre cada elemento do array para executar uma ação, mas não retorna um novo array. (Ex: Imprimir cada item de uma lista no console).
-   **_Vantagens_** de usar esses métodos: Código mais limpo, expressivo e com menos chance de efeitos colaterais, pois eles não alteram o array original (imutabilidade).
