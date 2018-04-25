module.exports = function() {

    let maze;

    let colStart, rowStart;
    let rows;
    let count = 1;

    function resovleMaze(puzzle) {
        maze = puzzle;
        rows = maze.length;
        cols = maze[0].length;
        findStartPoint();    
        resolve(rowStart, colStart, 1);
        return {maze:maze, count:count};
    }

    function findStartPoint() {
        for (let i=0; i < rows; i++) {
            for (j=0; j < cols; j++){
                if (maze[i][j] === 'A'){
                    rowStart = i;
                    colStart = j;
                }
            }
        }
    }

    function resolve(row, col, counter){
        ++counter;
        let right = maze[row][col + 1];
        let left = maze[row][col - 1];
        let up = maze[row -1][col];
        let down = maze[row + 1][col];
        if (right === 'B' || left ==='B'|| up === 'B'|| down === 'B'){
            maze[row][col] = '@'
            count = counter;
            return true;
        }

        let solved = false;
        if (maze[row][col] != 'A'){
            maze[row][col] = '@'
        }

        if (right === '.' && !solved){
            solved = resolve(row, col + 1, counter);
        }

        if (left === '.' && !solved){
            solved = resolve(row, col - 1, counter);
        }

        if (up === '.' && !solved){
            solved = resolve(row - 1, col, counter);
        }

        if (down === '.' && !solved){
            solved = resolve(row + 1, col, counter);
        }

        if (!solved){
            maze[row][col] = '.';
        }

        return solved;
    }



    return {
        resovleMaze
    };

}();
