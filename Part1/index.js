
let xoArray = []
let win = false

function play(cellId){
    let currPlayer = document.getElementById('player')
    let selectedCell = document.getElementById(cellId)
    let testVar = currPlayer.innerText
    
    //Updates the virtual and displayed board

    if(currPlayer.innerText === 'X'){
        xoArray[cellId] = currPlayer.innerText
        selectedCell.innerText = currPlayer.innerText
        currPlayer.innerText = 'O'
    }
    else{
        xoArray[cellId] = currPlayer.innerText
        selectedCell.innerText = currPlayer.innerText
        currPlayer.innerText = 'X'
    }

    //Set the last peice to be tested for win
    if(xoArray[0] === testVar && xoArray[1] === testVar && xoArray[2] === testVar){
        win = true
    }
    else if(xoArray[3] === testVar && xoArray[4] === testVar && xoArray[5] === testVar){
        win = true
    }
    else if(xoArray[6] === testVar && xoArray[7] === testVar && xoArray[8] === testVar){
        win = true
    }
    else if(xoArray[0] === testVar && xoArray[3] === testVar && xoArray[6] === testVar){
        win = true
    }
    else if(xoArray[1] === testVar && xoArray[4] === testVar && xoArray[7] === testVar){
        win = true
    }
    else if(xoArray[2] === testVar && xoArray[5] === testVar && xoArray[8] === testVar){
        win = true
    }
    else if(xoArray[0] === testVar && xoArray[4] === testVar && xoArray[8] === testVar){
        win = true
    }
    else if(xoArray[2] === testVar && xoArray[4] === testVar && xoArray[6] === testVar){
        win = true
    }

    if(win){
        window.alert('The winner is ' + testVar +" !")
    }
    else if(xoArray.length == 9){
        alert("Cat's game!")
    }
    
}

    // //Begins a row win check
    // if(!xoArray[0] || !xoArray[3] || !xoArray[6]){

    //     let 

    //     for(let i = 0; i < 2; i++){

    //         if
    //     }
    //     for(let i = 3; i < 7; i++){
            
    //     }
    //     for(let i = 6; i < 8; i++){
            
    //     }
    // }

    // //Begins a col win check
    // if(!xoArray[0] || !xoArray[1] || !xoArray[2]){
    //     for(let i = 0; i < 9; i+3){

    //     }
    //     for(let i = 1; i < 9; i+3){
            
    //     }
    //     for(let i = 2; i < 9; i+3){
            
    //     }
    // }

    // //Begins a diag win check
    // if(!xoArray[0] || !xoArray[2]){
    //     for(let i = 0; i < 9; i+4){

    //     }
    //     for(let i = 2; i < 7; i+2){
            
    //     }
    // }

    // alert("CAT's game!")

// function checkForWinner(playedCell, playerOCheck){

//     //Variables
//     let seqCountO = 0
//     let seqCountX = 0

//     //O wins
//     if(!document.getElementById(0) || !document.getElementById(3) || !document.getElementById(6)){
        
//         let checkValue = document.getElementById(playedCell)

//         if (document.getElementById(0) == checkValue){

//         }
//         else if (document.getElementById(3) == checkValue)
//     }

//     //Checks sequence and displays winner
//     if(seqCountO == 3){
//         document.getElementById('player').innerText = 'O'
//         document.getElementById('turn-state').innerText = 'wins!'
//     }
//     else if(seqCountX == 3){
//         document.getElementById('player').innerText = 'X'
//         document.getElementById('turn-state').innerText = 'wins!'
//     }

// }

// // // PLAYER O WIN CONDITIONS
// //     //-----O ROWS-----//
// //     //Checks for winner in first row, when O was played
// //     if(playerOCheck && playedCell < 3 ){

// //         //Goes through row own and count's O in sequence
// //         for (i = 0; i < 3; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
// //     }

// //     //Checks for winner in second row, when O was played
// //     else if(playerOCheck && 2 < playedCell < 6 ){

// //         //Goes through row own and count's O in sequence
// //         for (i = 3; i < 6; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
        
// //     }
    

// //     //Checks for winner in third row, when O was played
// //     if (playerOCheck && 5 < playedCell < 9 ){
        
// //         //Goes through row own and count's O in sequence
// //         for (i = 6; i < 9; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
        
// //     }

// //     //-------- O COL ----------//
// //     //Checks for winner in first column, when O was played
// //     else if(playerOCheck && playedCell % 3 == 0 ){

// //         //Goes through row own and count's O in sequence
// //         for (i = 3; i < 6; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
        
// //     }
    

// //     //Checks for winner in third row, when O was played
// //     if (playerOCheck && playedCell % 3 == 0 ){
        
// //         //Goes through row own and count's O in sequence
// //         for (i = 6; i < 9; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
        
// //     }

// //     else if(playerOCheck && playedCell % 3 == 0 ){

// //         //Goes through row own and count's O in sequence
// //         for (i = 3; i < 6; i++){
// //             if (document.getElementById(i).innerText === 'O'){
// //                 seqCountO++
// //             }
// //         }
        
// //     }

// //     // PLAYER X WIN CONDITIONS
// //     //-----X ROWS-----//
// //     //Checks for winner in first row, when X was played
// //     if(!playerOCheck && playedCell < 3 ){

// //         //Goes through row own and count's X in sequence
// //         for (i = 0; i < 3; i++){
// //             if (document.getElementById(i).innerText === 'X'){
// //                 seqCountX++
// //             }
// //         }
// //     }

// //     //Checks for winner in second row, when X was played
// //     else if(!playerOCheck && 2 < playedCell < 6 ){

// //         //Goes through row own and count's X in sequence
// //         for (i = 3; i < 6; i++){
// //             if (document.getElementById(i).innerText === 'X'){
// //                 seqCountX++
// //             }
// //         }
        
// //     }
    

// //     //Checks for winner in third row, when X was played
// //     if (!playerOCheck && 5 < playedCell < 9 ){
        
// //         //Goes through row own and count's X in sequence
// //         for (i = 6; i < 9; i++){
// //             if (document.getElementById(i).innerText === 'X'){
// //                 seqCountX++
// //             }
// //         }
        
// //     }