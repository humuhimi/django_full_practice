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
    console.log('行と列');
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('backgroud-color',color);
}

function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('backgroud-color');
}

function checkButton(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1;row--) {
        colorReport = returnColor(row,colIndex);
        if (colorReport === 'rgb(128,128,128)') {
            return row
        }
    }
}

// ビンゴのカラーチェックな
function colorMatchCheck(one,two,three,four) {
    return (one === two && two === three && three === four && one !== 'rgb(128.128,128)' && one !== undefined);
}



// チェックを4ついれる