
const renderer = new Renderer()

const startGame = function() {
   const rowNum = $('#rows').val()
   const colNum = $('#cols').val()
   const gameBoard = new GoldRush(rowNum, colNum)
   renderer.renderBoard(gameBoard)
   renderer.renderScores(gameBoard)
   renderer.renderTimer(rowNum, colNum, gameBoard)

   $(document).keydown(function (event){
      if (event.code == 'KeyS') {
         gameBoard.movePlayer(1, 'down')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyW') {
         gameBoard.movePlayer(1, 'up')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyA') {
         gameBoard.movePlayer(1, 'left')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyD') {
         gameBoard.movePlayer(1, 'right')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyK') {
         gameBoard.movePlayer(2, 'down')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyI') {
         gameBoard.movePlayer(2, 'up')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })   

   $(document).keydown(function (event){
      if (event.code == 'KeyJ') {
         gameBoard.movePlayer(2, 'left')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })  

   $(document).keydown(function (event){
      if (event.code == 'KeyL') {
         gameBoard.movePlayer(2, 'right')
         renderer.renderBoard(gameBoard)
         renderer.renderScores(gameBoard)

       }
   })  

}

