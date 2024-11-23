def maxEqualRowsAfterFlips(matrix):
    # aqui vamos começar a fazer uma função recursiva que vai comparar as colunas ajeitando elas
    linhas = len(matrix)
    colunas = len(matrix[0])

    matrixIgual = []
    matrixOposta = []

    if(linhas == 1): return 1
    elif(colunas == 1): return linhas


    # aqui vamos achar as linhas da próxima coluna que são iguais e opostas à primeira linha

    for i in range(linhas):
        if(matrix[i][1] == matrix[i][0]): matrixIgual.append(i)
        else: matrixOposta.append(i)

    # caso a próxima coluna seja igual ou oposta à primeira coluna apagamos essa coluna e chamamos a função novamente

    if(len(matrixIgual) == linhas or len(matrixOposta) == linhas):
        matrix = tirarProxColuna(matrix)
        return maxEqualRowsAfterFlips(matrix)

    # no caso de serem diferentes, vamos chamar a função para as duas possibilidades e pegar o maior resultado

    else:
        possibilidade1 = maxEqualRowsAfterFlips(tirarLinhas(matrix.copy(), matrixIgual))
        possibilidade2 = maxEqualRowsAfterFlips(tirarLinhas(matrix.copy(), matrixOposta))
        maximo = max(possibilidade1, possibilidade2)
        return maximo

def tirarProxColuna(matrix):
    linhas = len(matrix)
    for i in range(linhas):
        matrix[i].pop(1)
    return matrix

def tirarLinhas(matrix, linhas):
    linhasTiradas = 0
    temp = matrix.copy()
    for linha in linhas:
        temp.pop(linha - linhasTiradas)
        linhasTiradas += 1
    return temp

resultado = maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])
print(resultado)