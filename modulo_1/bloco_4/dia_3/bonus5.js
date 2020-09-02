// Pirâmide com n asteriscos de base e vazia no meio.
/*
Exemplo: n = 5

   *   
  * *  
 *   * 
*******

*/

let n = 7;
let linha = [];   // matriz vazia
let basePiramide = [];
let simbolo = '*';
let piramide = [];   // aqui, a junção de todas as matrizes
let esquerda = 1;
let direita = n - 2;

for (i = 0; i < n; i += 1) {
    basePiramide[i] = simbolo;
}

// Alocando a 1a linha da pirâmide:
piramide[0] = basePiramide;

for (j = 1; j < n; j += 1) {        // linha
    for (k = 0; k < n; k +=1) {     // coluna
        if (k === esquerda || k === direita) {
            linha[k] = simbolo;
        } else {
            linha[k] = ' ';
        }
    }
    piramide[j] = linha;
    direita -= 1;
    esquerda += 1;
    linha = [];
    if (esquerda > direita) {
        break;
    }
};

let resultado = '';

// Convertendo a matriz em strings:
for (j = piramide.length - 1; j >= 0; j -= 1) {
    for (k = 0; k < n; k += 1) {
        resultado = resultado + piramide[j][k];
    }
    console.log(resultado);
    resultado = '';
};
