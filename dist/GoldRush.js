// const Matrix = require('Matrix')

class GoldRush extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
        // this.rowNum = rowNum
        // this.colNum = colNum
        this.runGame(rowNum, colNum)
        this.player1 = { _id: 1, score: 0 }
        this.player2 = { _id: 2, score: 0 }
    }

    runGame(rowNum, colNum){
        this.generatePlayers(rowNum, colNum)
        this.generateCoins(rowNum, colNum)
        this.generateBlocks(rowNum, colNum)
    }

    generatePlayers(rowNum, colNum) {
        this.alter(0, 0, 1)
        this.alter(rowNum - 1, colNum - 1, 2)
    }

    createRandomItem(item, maxItems, rowNum, colNum, value) {
        while (item < maxItems) {
            let coordY = Math.floor(Math.random() * rowNum)
            let coordX = Math.floor(Math.random() * colNum)
            let inspectCoord = this.getMatrix(coordY, coordX)
            if (inspectCoord === '.') {
                this.alter(coordY, coordX, value)
                item++
            }
        }
    }

    generateCoins(rowNum, colNum) {
        let coin = 0
        let maxCoins = Math.floor((rowNum * colNum) / 2)
        let value = 'c'
        this.createRandomItem(coin, maxCoins, rowNum, colNum, value)
    }

    generateBlocks(rowNum, colNum) {
        let block = 0
        let maxBlocks = Math.floor((rowNum * colNum) / 4)
        let value = 'b'
        this.createRandomItem(block, maxBlocks, rowNum, colNum, value)
    }



    movePlayer(player, direction) {
        let coord = super.findCoordinate(player)
        this.checkMoveValue(player, direction)
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

    moveValue(player, direction){
        let coord = super.findCoordinate(player)
        let checkCoord = {y: coord.y, x: coord.x}
        if(direction === 'down'){
            checkCoord.y++   
        }
        if(direction === 'up'){
            checkCoord.y--
        }
        if(direction === 'left'){
            checkCoord.x--
        }
        if(direction === 'right'){
            checkCoord.x++
        }
        return this.getMatrix(checkCoord.y, checkCoord.x)
        
    }

    checkMoveValue(player, direction) {
        if(this.moveValue(player, direction) == 'c'){
            player === 1 ? player = this.player1 : player = this.player2
            player.score += 10
        }
    }

}


