class Renderer {
    constructor() {

    }
    
    renderBoard(gameBoard) {
        $('#game-board').empty()
        $('#game-board').css(`grid-template-columns`, `repeat(${gameBoard.matrix[0].length}, 1fr)`)
        for (let i = 0; i < gameBoard.matrix.length; i++) {
            for (let j = 0; j < gameBoard.matrix[i].length; j++) {
                const cellClass = this.fetchCellClass(gameBoard.matrix[i][j])
                $('#game-board').append(`<div class='box'><div class='${cellClass}'></div></div>`)
                
            }
        }
    }

    renderScores(gameBoard) {
        $('#score').empty()
        $('#score').append(`<div class='score-box'><div class='player1-score'>Player 1: ${gameBoard.player1.score}</div></div>`)
        $('#score').append(`<div class='score-box'><div class='player2-score'>Player 2: ${gameBoard.player2.score}</div></div>`)

    }

    fetchCellClass(value) {
        switch (value) {
            case 1:
                value ='player1'
                break;
            case 2:
                value = 'player2'
                break;
            case 'c':
                value = 'coin'
                break;
            case 'b':
                value = 'block'
                break;
            case '.':
                value = ''
                break;
        }
        return value
    }

}