class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = []
        this.generateMatrix(rowNum, colNum)
    }

    generateMatrix(rowNum, colNum) {
        for (let r = 0; r < rowNum; r++) {
            this.matrix.push([])
            for (let c = 0; c < colNum; c++) {
                this.matrix[r].push('.')
            }
        }
        return this.matrix
    }

    getMatrix(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ''
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + '\t')
            }
            console.log(line)
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    alter(rowNum, colNum, newValue) {
        this.matrix[rowNum][colNum] = newValue
    }

    findCoordinate(value) {
        let coordinate
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    coordinate = { x: j, y: i }
                }
            }
        }
        console.log(coordinate);
    }

};

// module.exports = Matrix