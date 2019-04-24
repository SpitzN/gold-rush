// const Matrix = require('Matrix')

class GoldRush extends Matrix {
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.generatePlayers(rowNum, colNum)
    }

    generatePlayers(rowNum, colNum){
        let player1 = super.alter(0, 0, 1)
        let player2 = super.alter(rowNum -1, colNum -1, 2)
        return player1, player2
    }

    movePlayer(player, direction)
    
}


// module.exports = GoldRush