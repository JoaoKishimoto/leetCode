var findChampion = function(n, edges) {
    let weakArray = [];
    let strongArray = [];
    for(let i = 0; i < n - 1; i++){
        if(weakArray.indexOf(edges[i][1]) == -1) {
            weakArray.push(edges[i][1]);
        }
    }
    for (let i = 0; i < n; i++) {
        if(weakArray.indexOf(i) == -1) {
            strongArray.push(i);
        }
    }
    if(strongArray.length > 1) {
        return -1;
    } else {
        return strongArray[0];
    }
};

const n = 4;
const edges = [[0,2],[1,3],[1,2]];
const resultado = findChampion(n, edges);
console.log(resultado);