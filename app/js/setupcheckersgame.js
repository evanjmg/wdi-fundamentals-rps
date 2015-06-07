//Setup checkerboard


var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];


function setSquare(player, row, col) {
    checkerboard[row][col] = player
}

function getPieceAt(row, col) {
    console.log(checkerboard[row][col]);
}

function clearBoard() { for (var i = 0; i < checkerboard.length; i += 1) { for (var j = 0; j < 8; j += 1) {
  checkerboard[i][j] = null ;}} 
}

function setUpRed() {
    for (var i = 0; i < 3; i += 2) { for (var j = 0; j < 8; j += 2) {
  checkerboard[i][j] = 'R' ;}
      for (var l = 1; l === 1; l +=2 ) {for (var m = 1; m < 8; m += 2)
    {checkerboard[l][m] = 'R' ;} }}}

function setUpBlack() {
    for (var i = checkerboard.length - 1 ; i > 4; i -= 2) { for (var j = 1; j < 8; j += 2) {
  checkerboard[i][j] = 'B' ;}
      for (var l = 6; l === 6; l -= 2 ) {for (var m = 0; m < 8; m += 2)
    {checkerboard[l][m] = 'B' ;} }}}
  // run functions above and setup board
 setUpBlack();
 setUpRed();

 checkerboard;

 // store pieces in associative array
  pieces = { 'black': [],'red':[] };
 function piece() {
    for (var i = 0; i < 8; i += 1) { for (var j = 0; j < 8; j += 1) {
   if (checkerboard[i][j] == 'B') {
       pieces.black.push([i,j]);}
    else if (checkerboard[i][j] == 'R') {
     pieces.red.push([i,j]); }
    }
    }}
    piece();

 // run tests
  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });
 pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });
//END OF CHECKERGAME