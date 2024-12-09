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
        if (startPosition.x - 2 < 8 && startPosition.y - 1 >= 0) {
            possibleMoves.push([startPosition.x - 2, startPosition.y - 1])
        }
        if (startPosition.x + 1 < 8 && startPosition.y + 2 < 8) {
            possibleMoves.push([startPosition.x + 2, startPosition.y + 1])
        }
        if (startPosition.x + 1 < 8 && startPosition.y - 2 >= 0) {
            possibleMoves.push([startPosition.x + 2, startPosition.y - 1])
        }
        if (startPosition.x - 1 >= 0 && startPosition.y + 2 < 8) {
            possibleMoves.push([startPosition.x - 2, startPosition.y + 1])
        }
        if (startPosition.x - 1 < 8 && startPosition.y - 2 >= 0) {
            possibleMoves.push([startPosition.x - 2, startPosition.y - 1])
        }
    }

    getPossibleMoves()
    console.log(possibleMoves)
}