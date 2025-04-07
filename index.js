const Sudoku = document.getElementById("root");
let SudokuArray = Array.from({ length: 9 }, () => Array(9).fill(0));
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    Sudoku.innerHTML += `<input type="text" id="${i}${j}" onkeyup="valid(event,${i},${j})" inputmode="numeric" maxlength="1" class="box" autocomplete="off" />`;
  }
}
function valid(e, i, j, BoxNo) {
  document.getElementById(`${i}${j}`).style.background = "white";
  let IsCorrectCol = (IsCorrectRow = IsCorrectBox = false);
  let num = e.target.value;
  if(num!="0"&&num.charCodeAt(0)<58&&num.charCodeAt(0)>48){
    IsCorrectRow = checkRow(i, j, num);
    if (!IsCorrectRow) {
      IsCorrectCol = checkCol(i, j, num);
    }
    if(!IsCorrectCol){
        IsCorrectBox = Checkbox(i, j, num);
    }
    if (!IsCorrectCol && !IsCorrectRow && !IsCorrectBox) {
      SudokuArray[i][j] = num;
    } else {
      document.getElementById(`${i}${j}`).style.background = "red";
    }
}else{
    document.getElementById(`${i}${j}`).value='';
}
}
function checkRow(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (i != col) {
      if (SudokuArray[row][i] == num) {
        return true;
      }
    }
  }
  return false;
}
function checkCol(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (i != row) {
      if (SudokuArray[i][col] == num) {
        return true;
      }
    }
  }
  return false;
}
function Checkbox(row, col, num){
    let RowStart = GiveStart(row);
    let ColStart= GiveStart(col);
    for(let i=RowStart;i<RowStart+3;i++){
        for(let j=ColStart;j<ColStart+3;j++){
            if(i!=row&&j!=col){
                if(SudokuArray[i][j]==num){
                    return true;
                }
            }
        }
    }
    return false;
}
function GiveStart(a){
    switch(a){
        case 0:
        return 0;
        case 1:
        return 0;
        case 2:
        return 0;
        case 3:
        return 3;
        case 4:
        return 3;
        case 5:
        return 3;
        case 6:
        return 6;
        case 7:
        return 6;
        case 8:
        return 6;
    }
}