function getNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

const gridContainer = document.getElementById('grid-container');

const numeriGenerati = [];

console.log(this);

for (let i = 1; i <=100; i++) {

   

    const newCell = createNewCell();
    gridContainer.append(newCell);

}

function createNewCell() {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',

        function () {

            console.log(this);
            console.log(this.classList);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        }

    );

    let randomNumber = getNumber(1, 100);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getNumber(1, 100);
    }

    numeriGenerati.push(randomNumber);

    console.log(numeriGenerati);

    console.log(randomNumber);
    cell.innerHTML = randomNumber;

    if(randomNumber % 2 == 0){
        cell.classList.add('even');
    }
    else {
        cell.classList.add('odd');
    }

    return cell;
    

}
// const inputButton=document.getElementById("play");
//     inputButton.addEventListener("click",
//             function(){
//                 cell.style.display="block";
//             }

//     )





// function getNumberMedio(min, max) {
//     return Math.floor((Math.random()) * (max - min + 1)) + min;
// }

// const gridContainerMedio = document.getElementById('grid-medio');

// const numeriGeneratiMedio = [];

// console.log(this);

// for (let i = 1; i <=81; i++) {

   

//     const newCell = createNewCell();
//     gridContainer.append(newCell);

// }

// function createNewCellMedio() {

//     const cellMedio = document.createElement('div');
//     cellMedio.classList.add('cell');
//     cellMedio.addEventListener('click',

//         function () {

//             console.log(this);
//             console.log(this.classList);

//             if(this.classList.contains('clicked')){
//                 this.classList.remove('clicked');
//             }
//             else{
//                 this.classList.add('clicked');
//             }

//         }

//     );

//     let randomNumberMedio = getNumberMedio(1, 81);

//     while(numeriGeneratiMedio.includes(randomNumberMedio)){
//         randomNumber = getNumberMedio(1, 81);
//     }

//     numeriGeneratiMedio.push(randomNumberMedio);

//     console.log(numeriGenerati);

//     console.log(randomNumber);
//     cell.innerHTML = randomNumberMedio;
    
    

//     if(randomNumberMedio % 2 == 0){
//         cellMedio.classList.add('even');
//     }
//     else {
//         cellMedio.classList.add('odd');
//     }

//     return cell;

// }