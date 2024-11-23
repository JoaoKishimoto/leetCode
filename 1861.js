var rotateTheBox = function (box) {
    const lines = box.length;
    const columns = box[0].length;

    box = rotate(box);

    for(let column = 0; column < lines; column++) {
        box = gravity(box, column);        
    }

    return box;
};

function rotate (box) {
    const lines = box.length;
    const columns = box[0].length;
    let currentColumn = [];
    let rotatedBox = [];

    for(i = 0; i < columns; i++) {
        for(j = lines - 1; j >= 0; j--) {
            currentColumn.push(box[j][i]);
        }
        rotatedBox.push(currentColumn)
        currentColumn = []
        
    }
    return rotatedBox;
}

function gravity (box, column) {
    const lines = box.length;
    let line = lines - 1;

    while(line > 0){
        if(box[line][column] === '.' && box[line-1][column] === '#') {
            box[line][column] = '#';
            box[line - 1][column] = '.';
            line = line + 1 < lines ? line + 1: line;
        } else {line--}
    }
    return box;
}

input = [["#","#","*",".","*","."],["#","#","#","*",".","."],["#","#","#",".","#","."]]
output = rotateTheBox(input)
console.log(output)