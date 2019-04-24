// const Matrix = require('Matrix')

class GoldRush extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
        this.generatePlayers(rowNum, colNum)
        this.generateCoins(rowNum, colNum)
        this.generateBlocks(rowNum, colNum)
    }

    generatePlayers(rowNum, colNum) {
        let p1 = super.alter(0, 0, 1)
        let p2 = super.alter(rowNum - 1, colNum - 1, 2)
        return p1, p2
    }

    createRandomItem(item, maxItems, rowNum, colNum, value){
        while(item < maxItems) {
            let coordX = Math.floor(Math.random() * rowNum)
            let coordY = Math.floor(Math.random() * colNum)
            let inspectCoord = this.getMatrix(coordX, coordY)
            if (inspectCoord === '.') {
                this.alter(coordX, coordY, value)
                item++
            }
        }
    }

    generateCoins(rowNum, colNum){
        let coin = 0
        let maxCoins = Math.floor((rowNum * colNum) / 2)
        let value = 'c'
        this.createRandomItem(coin, maxCoins, rowNum, colNum, value)
    }

    generateBlocks(rowNum, colNum){
        let block = 0
        let maxBlocks = Math.floor((rowNum * colNum) / 4)
        let value = 'b'
        this.createRandomItem(block, maxBlocks, rowNum, colNum, value)
    }

    movePlayer(player, direction) {
        let coord = super.findCoordinate(player)

        if (direction === 'down') {
            this.alter(coord.y + 1, coord.x, player)
        } else if (direction === 'up') {
            this.alter(coord.y - 1, coord.x, player)
        } else if (direction === 'left') {
            this.alter(coord.y, coord.x - 1, player)
        } else if (direction === 'right') {
            this.alter(coord.y, coord.x + 1, player)
        }
        this.alter(coord.y, coord.x, '.')
    }

}
        // moveIsLegal(){

    // }

    // checkScoreAfterMove(){

    // }