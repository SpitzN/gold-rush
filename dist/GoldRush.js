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

    movePlayer(player, direction){
        let coord = super.findCoordinate(player)
        console.log(coord)
        
        if(direction === 'down'){
            this.alter(coord.y + 1, coord.x, player)
        } else if(direction === 'up'){
            this.alter(coord.y - 1, coord.x, player)
        } else if(direction === 'left'){
            this.alter(coord.y, coord.x - 1, player)
        } else if(direction === 'right'){
            this.alter(coord.y, coord.x + 1, player)
        }   
        this.alter(coord.y,coord.x, '.')
    }

    generateCoins(){
        let coordX = Math.floor(Math.random() * rowNum)
        let coordY = Math.floor(Math.random() * colNum)
        let newCoin = this.alter(coordX, coordY, 'c')

        

    }

    // moveIsLegal(){

    // }

    // checkScoreAfterMove(){

    // }


}


// module.exports = GoldRush