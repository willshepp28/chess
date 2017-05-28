

// grabs parents
var container = document.getElementById('container');
var column =  document.getElementsByClassName("column");
var rows = document.getElementsByClassName("rows");

// get columns
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');

// get rows
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');
var r5 = document.getElementById('r5');
var r6 = document.getElementById('r6');
var r7 = document.getElementById('r7');
var r8 = document.getElementById('r8');


// creating columns
for (var i = 0; i <= 8; i++) {


// creates 1 row per cycle
  (function createDiv() {
    div = document.createElement('div'); // create div element
    div.className = 'column'; // adds column class to div
    div.id = "c"+ i;  // adds id to div
    console.log(div);
    container.appendChild(div);
    createDiv2(div);
  })();

  function createDiv2(div) {

    var count = 0;
    for (count = 0; count < 8; count++) {
      div2 = document.createElement('div');
      div2.className = 'rows';
      console.log(i);
      div.appendChild(div2);
    }

}


}

// div2 = document.createElement('div'); // create div element
// div2.className = 'rows'; // adds column class to div
// div2.id = "r"+ i;  // adds id to div
// console.log(div2);
// div.appendChild(div2);


//  container.innerHTML += '<div class="column"></ div><br>';



// column[1].style.backgroundColor ='red'
