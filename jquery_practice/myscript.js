// $('input').eq(0).keypress(function(event){
//     // $('h3').toggleClass('turnBlue');
//     // console.log(event);
//     if (event.which == 13) {
//         $('h3').toggleClass('turnBlue');
//     }
// })

// $('h1').on('mouseenter',function(){
//     $(this).toggleClass('turnBlue');
// })

// $('input').eq(1).on('click',function(){
//     $('.container').fadeOut(3000);
//     // $('.container').slideUp(3000);
// })


var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
    console.log('勝利時の行と列');
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
  }

function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
      colorReport = returnColor(row,colIndex);
      if (colorReport === 'rgb(128, 128, 128)') {
        return row
      }
    }
  }



// // ビンゴのカラーチェックな
function colorMatchCheck(one,two,three,four) {
    return (one === two && two === three && three === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}


// // チェックを4ついれる

// // 横チェック
function horizontalWinCheck() {
    for(var row =0; row < 6; row++) {
        for(var col=0;col <4;col++) {
            if (colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))) {
                console.log('horiz');
                reportWin(row,col);
                return true;
            } else{

                continue;
            }
        }
    }
}

function verticalWinCheck() {
    for (let col = 0; col < 7; col++) {
        for (var row=0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))) {
                console.log('vertical');
                reportWin(row,col);
                return true;
            } else {
                continue;
            }
            
        }
        
    }
}

function diagonalWinCheck() {
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 7; row++) {
            if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2), returnColor(row+3,col+3))) {
                console.log('\\diag');
                reportWin(row,col);
                return true;
            } else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
                console.log('/diag');
                reportWin(row,col);
                return true;
              }else {
                continue;
              }
        }
        
    }
}

// // Game End

function gameEnd(winningPlayer) {
    for (let col = 0; col < 7; col++) {
        for (let row  = 0; row < 7; row++) {
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('f1').text(winningPlayer+'が勝者です。ゲームをリスタートしてください。').css("fontSize","50px");
        }
        
    }
}


// 上記のターンを決める

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1+"の番です。青色のチップをコラムに落としてください");

$('.board button').on('click',function() {
    // コラムの抜き出し
    var col = $(this).closest("td").index();
    // console.log(col);
    // 一番下の使用されてないrowを変更する。
    var bottomAvail = checkBottom(col);
    // チップを落とす処理
    changeColor(bottomAvail,col,currentColor);
    // それぞれcheck
    if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
      gameEnd(currentName);
    }

    currentPlayer = currentPlayer * -1;

    if (currentPlayer === 1) {
      currentName = player1;
      $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
      currentColor = player1Color;
    }else {
      currentName = player2
      $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
      currentColor = player2Color;
    }


})

