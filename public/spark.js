const firTr = document.getElementById("tr1");
const secTr = document.getElementById("tr2");
const thrTr = document.getElementById("tr3");
const trs = [firTr, secTr, thrTr];
const tds = [];
let turn = "X";
// turn.style.backgroundColor = "red";
let count = 0;

const marking = function (event) {
  const trNumber = trs.indexOf(event.target.parentNode);
  // console.log(trNumber);
  const tdNumber = tds[trNumber].indexOf(event.target);
  // console.log("tdNumber", tdNumber);
  count++;
  console.log(count);
  if (count % 2 == 0) {
    tds[trNumber][tdNumber].style.color = "red";
  } else {
    tds[trNumber][tdNumber].style.color = "blue";
  }

  if (tds[trNumber][tdNumber].textContent !== "") {
    console.log("Not empty");
  } else {
    console.log("Empty");
    tds[trNumber][tdNumber].textContent = turn;

    let threeTd = false;

    if (
      tds[trNumber][0].textContent === turn &&
      tds[trNumber][1].textContent === turn &&
      tds[trNumber][2].textContent === turn
    ) {
      threeTd = true;
      count = 0;
    } else if (count == 9) {
      alert("무승부입니다.");
      count = 0;
      return Reset();
    }

    if (
      tds[0][tdNumber].textContent === turn &&
      tds[1][tdNumber].textContent === turn &&
      tds[2][tdNumber].textContent === turn
    ) {
      threeTd = true;
      count = 0;
    } else if (count == 9) {
      alert("무승부입니다.");
      count = 0;
      return Reset();
    }

    if (trNumber - tdNumber === 0) {
      if (
        tds[0][0].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][2].textContent === turn
      ) {
        threeTd = true;
        count = 0;
      }
    } else if (count == 9) {
      alert("무승부입니다.");
      count = 0;
      return Reset();
    }

    if (Math.abs(trNumber - tdNumber) === 2) {
      if (
        tds[0][2].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][0].textContent === turn
      ) {
        threeTd = true;
        count = 0;
      }
    } else if (count == 9) {
      alert("무승부입니다.");
      count = 0;
      return Reset();
    }

    if (threeTd) {
      alert(`Player ${turn} win!`);

      turn = "X";
      tds.forEach(function (trs) {
        trs.forEach(function (td) {
          td.textContent = "";
        });
      });
    } else {
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
};

function Reset() {
  turn = "X";
  tds.forEach(function (trs) {
    trs.forEach(function (td) {
      td.textContent = "";
    });
  });
  count = 0;
}

for (let i = 0; i < 3; i++) {
  tds.push([]);
}

for (let j = 0; j < 3; j++) {
  tds[0].push(tr1.querySelectorAll("td").item(j));
  tds[1].push(tr2.querySelectorAll("td").item(j));
  tds[2].push(tr3.querySelectorAll("td").item(j));
}

for (let k = 0; k < 9; k++) {
  const td = document.getElementsByTagName("td").item(k);
  td.addEventListener("click", marking);
}

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", Reset);

console.log(trs.tds);
