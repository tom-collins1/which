

const positionVectors = [[1, 0],[0, 1],[-1, 0],[0, -1]];
const pointer = ['v', '>', '^', '<'];
class Grid {
    constructor(currentPosition=[0,0], vectorIndex=0, remainingGuesses=5) {

        this.grid = this.generateGrid();
        this.previousPosition;
        this.currentPosition = currentPosition;
        this.vectorIndex = vectorIndex;
        this.remainingGuesses = remainingGuesses;
    }

    generateGrid()
    {
        let grid = new Array(5).fill().map(a=>new Array(5).fill(" "))
        grid[Math.ceil(Math.random()*5)-1][Math.ceil(Math.random()*5-1)] = 'X'
        return grid
    }

    printGrid()
    {
        let printGrid = JSON.parse(JSON.stringify(this.grid))
        if (printGrid[this.currentPosition[0]][this.currentPosition[1]]!='X') printGrid[this.currentPosition[0]][this.currentPosition[1]] = pointer[this.vectorIndex]
        let gridStr=''
        for (let row of printGrid) gridStr+=JSON.stringify(row)+'<br/>'
        return gridStr
    }

    proceed()
    {
        try
        {

            const newPosition = this.currentPosition.map((e,index)=>parseInt(positionVectors[this.vectorIndex][index])+e)
            if (!(newPosition[0]>-1 && newPosition[0]<5) || !(newPosition[1]>-1 && newPosition[1]<5)) throw Error('Out of range')
            const evidence = this.grid[newPosition[0]][newPosition[1]]
            this.grid[this.currentPosition[0]][this.currentPosition[1]] = this.vectorIndex==0||this.vectorIndex==2?'|':'-'
            this.currentPosition = newPosition
            return evidence
        }
        catch(e)
        {
            throw e
        }
    }

    checkLocation(direction)
    {
        let currentVectorIndex = this.vectorIndex
        try
        {
            switch (direction)
            {
                case 'forward':
                    break;
                case 'left':
                    this.vectorIndex = ((currentVectorIndex + 1)+4) % 4
                    break;
                case 'right':
                    this.vectorIndex = ((currentVectorIndex - 1)+4) % 4
                    break;
            }
            const evidence = this.proceed()
            return evidence=='X'?"You've found the kittens!":['|','-'].includes(evidence)?"You're walking in circles!":"No evidence found yet!"
        }
        catch(e)
        {
            this.vectorIndex = currentVectorIndex
            throw e
        }
    }
  }

module.exports = Grid;