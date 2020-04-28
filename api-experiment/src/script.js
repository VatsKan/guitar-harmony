function generateRandomNoteSingle(){
    let arr = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]
    let rand = Math.floor(Math.random()*17); //random number between 0 and 16 inclusive
    let randomNote = arr[rand];

    let randNum = Math.floor(Math.random()*4)+2; //random numbeter between 2 and 5 inclusive

    //If we get C2, C#2, Db2, D2, D#2, then recalculate randomNote so that it is another letter (with a 2)
    while(randNum === 2 && rand < 5){ 
        rand = Math.floor(Math.random()*17); 
        randomNote = arr[rand];
    }
    
     //If we get anything in the 5 range above an E then recalculate randomNote so that it is another letter (with a 5)
    while(randNum === 5 && rand > 6){
        rand = Math.floor(Math.random()*17); 
        randomNote = arr[rand];
    }
   //above while loops is not the most elegent solution, and will change the probability of certain notes appearing as often. also am not sure if it is working as expected
    
    let randNumStr = `${randNum}`;
    let concatStr = randomNote + randNumStr;
    console.log(concatStr);

    return concatStr;
}

function generateRandomNoteAll(){
    let arr = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]
    let rand = Math.floor(Math.random()*17); //random number between 0 and 16 inclusive
    return arr[rand];
}

//want to be able to generate a random note within a user specified range.

export { generateRandomNoteAll, generateRandomNoteSingle }; 