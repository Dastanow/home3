for (let i = 1; i <= 7; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  function createChessboard(size) {
    let chessboard = '';
    
    
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      }
      chessboard += '\n';
    }
    
    return chessboard;
  }
  
  const boardSize = 8;

  const chessboard = createChessboard(boardSize);
  
  console.log(chessboard);
  
  
  
  
  
  
  
  
  
  
  
  
  