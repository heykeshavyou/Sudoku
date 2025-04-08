const Sudoku = document.getElementById("root");
let SudokuArray = Array.from({ length: 9 }, () => Array(9).fill(0));
function valid(e, i, j) {
  document.getElementById(`${i}${j}`).style.background = "white";
  let IsCorrectCol = (IsCorrectRow = IsCorrectBox = false);
  let num = e.target.value;
  if (num != "0" && num.charCodeAt(0) < 58 && num.charCodeAt(0) > 48) {
    IsCorrectRow = checkRow(i, j, num);
    if (!IsCorrectRow) {
      IsCorrectCol = checkCol(i, j, num);
    }
    if (!IsCorrectCol) {
      IsCorrectBox = Checkbox(i, j, num);
    }
    if (!IsCorrectCol && !IsCorrectRow && !IsCorrectBox) {
      SudokuArray[i][j] = num;
    } else {
      document.getElementById(`${i}${j}`).style.background = "red";
    }
  } else {
    document.getElementById(`${i}${j}`).value = "";
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
function Checkbox(row, col, num) {
  let RowStart = GiveStart(row);
  let ColStart = GiveStart(col);
  for (let i = RowStart; i < RowStart + 3; i++) {
    for (let j = ColStart; j < ColStart + 3; j++) {
      if (i != row && j != col) {
        if (SudokuArray[i][j] == num) {
          return true;
        }
      }
    }
  }
  return false;
}
function GiveStart(a) {
  switch (a) {
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
function filler() {
  let IsFilled = true;

    let i = GenerateIndex();
    let j = GenerateIndex();
    let num = GenerateNumber();
    let IsCorrectCol = (IsCorrectRow = IsCorrectBox = false);
    IsCorrectRow = checkRow(i, j, num);
    if (!IsCorrectRow) {
      IsCorrectCol = checkCol(i, j, num);
    }
    if (!IsCorrectCol) {
      IsCorrectBox = Checkbox(i, j, num);
    }
    if (!IsCorrectCol && !IsCorrectRow && !IsCorrectBox) {
      if (SudokuArray[i][j] == 0) {
        SudokuArray[i][j] = num;
        document.getElementById(`${i}${j}`).value = num;
        document.getElementById(`${i}${j}`).disabled = true;
        IsFilled=false;
      }
    }
  
}
function GenerateNumber() {
  return Math.floor(Math.random() * (10 - 1) + 1);
}
function GenerateIndex() {
  return Math.floor(Math.random() * (9 - 0) + 0);
}
document.addEventListener("DOMContentLoaded", function () {
  EasySudoku();
});
function UiMaker() {
  Sudoku.innerHTML=` 
        <div class="borderbox" style="top: 7px;left: 6px;"></div>
        <div class="borderbox" style="top: 7px;left:141px;"></div>
        <div class="borderbox" style="top: 7px;right: 11px;"></div>
        <div class="borderbox" style="top: 143px;left: 6px;"></div>
        <div class="borderbox" style="bottom: 7px;left: 6px;"></div>
        <div class="borderbox" style="bottom: 7px;left: 141px;"></div>
        <div class="borderbox" style="bottom: 7px;right:11px;"></div>
        <div class="borderbox" style="top: 143px;left: 141px;"></div>
        <div class="borderbox" style="top: 143px;right:11px;"></div>`;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      SudokuArray[i][j]=0;
      Sudoku.innerHTML += `<input type="text" id="${i}${j}" onkeyup="valid(event,${i},${j})" inputmode="numeric" maxlength="1" class="box" autocomplete="off" />`;
      document.getElementById(`${i}${j}`).disabled = false;
    }
  }
}
function EasySudoku() {
  UiMaker();
  for (let i = 0; i < 150; i++) {
    filler();
  }
}
function NormalSudoku(){
  UiMaker();
  for (let i = 0; i < 100; i++) {
    filler();
  }
}
function HardSudoku(){
  UiMaker();
  for (let i = 0; i < 50; i++) {
    filler();
  }
}
