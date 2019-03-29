//Function that get's an array of 5 elements out of 1 to 10 without repetition.
function randomNumber(elements, rangeFromZero){
    //Declare an empty array with number of elements declared above.
    var givenQuestion = new Array(elements);

    //Loops from 0 until the numbers that represents the lenght of the array.
    for(var i=0 ; i < givenQuestion.length ; i++){
        //Creates the random number from 0 until 9 (10 numbers in total) than adds 1 to the result to get from 1 to 10.
        var randomQuestion = Math.floor(Math.random() * rangeFromZero);
        console.log(randomQuestion);

        //Says that if in the generated number is not in the array called givenQuestion to add it in the position "i". 
           if(randomQuestion != givenQuestion[0] && randomQuestion != givenQuestion[1] && randomQuestion != givenQuestion[2] 
                && randomQuestion != givenQuestion[3] && randomQuestion != givenQuestion[4] && randomQuestion != givenQuestion[5]){
                    givenQuestion[i] = randomQuestion;
           
            //If the number is in the array subtract 1 from i.
            }else{
                i--;
            } 
    }
    return givenQuestion;
}