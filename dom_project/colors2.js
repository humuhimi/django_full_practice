// restart game button
var restart = document.querySelector('#b');
// Grab all the squares
var squares = document.querySelectorAll('td');
// clear all the squares
function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        
    }
}

restart.addEventListener('click',clearBoard);
// check the sqares marker
var cellOne = document.querySelector('#one')


function changeMaker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O';   
    }else {
        this.textContent = '';    
    }
}

cellOne.addEventListener('click',changeMaker);


// for loop to add

for (let i = 0; i< squares.length; i++) {
  squares[i].addEventListener('click',changeMaker)
    }