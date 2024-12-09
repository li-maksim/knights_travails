const knightMoves = function (start, finish) {

    if (!Array.isArray(start) || !Array.isArray(finish)) {
        throw new Error('Incorrect arguments')
    }
    const matrix =
        [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]]

    let startPosition = {x: start[0], y: start[1]}
    let possibleMoves = []
    const getPossibleMoves = function() {
        if (startPosition.x + 2 < 8 && startPosition.y + 1 < 8) {
            possibleMoves.push([startPosition.x + 2, startPosition.y + 1])
        }
        if (startPosition.x + 2 < 8 && startPosition.y - 1 >= 0) {
            possibleMoves.push([startPosition.x + 2, startPosition.y - 1])
        }
        if (startPosition.x - 2 >= 0 && startPosition.y + 1 < 8) {
            possibleMoves.push([startPosition.x - 2, startPosition.y + 1])
        }
        if (startPosition.x - 2 >= 0 && startPosition.y - 1 >= 0) {
            possibleMoves.push([startPosition.x - 2, startPosition.y - 1])
        }

        if (startPosition.x + 1 < 8 && startPosition.y + 2 < 8) {
            possibleMoves.push([startPosition.x + 1, startPosition.y + 2])
        }
        if (startPosition.x + 1 < 8 && startPosition.y - 2 >= 0) {
            possibleMoves.push([startPosition.x + 1, startPosition.y - 2])
        }
        if (startPosition.x - 1 >= 0 && startPosition.y + 2 < 8) {
            possibleMoves.push([startPosition.x - 1, startPosition.y + 2])
        }
        if (startPosition.x - 1 >= 0 && startPosition.y - 2 >= 0) {
            possibleMoves.push([startPosition.x - 1, startPosition.y - 2])
        }
    }

    const visualize = function() {
        let i = 7
        while(i >= 0) {
            let j = 0
            let row = ''
            while (j < matrix[i].length) {
                row = row + `${matrix[i][j]} `
                j++
            }
            console.log(row)
            i--
        }
    }

    const markPossibleMoves = function() {
        matrix[startPosition.y][startPosition.x] = 2
        let i = 0
        while (i < possibleMoves.length) {
            let x = possibleMoves[i][0]
            let y = possibleMoves[i][1]
            matrix[y][x] = 1
            i++
        }
    }

    const visualizePossibleMoves = function() {
        markPossibleMoves()
        visualize()
    }

    getPossibleMoves()
    visualizePossibleMoves()
}

knightMoves([3, 3], [0, 0])