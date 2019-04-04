var squares = document.querySelectorAll("td");
var restart = document.querySelector("#b");

restart.addEventListener('click', clearBoard);

function clearBoard() {
    for(let i=0; i < squares.length; i++){
           squares[i].textContent = " ";
    }
}

for(let i=0; i < squares.length; i++){
  squares[i].addEventListener('click', changeMarker);
}

function changeMarker() {
  if(this.textContent === ' '){
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = ' ';
  }
}
