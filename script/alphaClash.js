// function play(){
//     // hidden home screen
//    const homeSection =document.getElementById('home-screen')
// //    console.log(homeSection.classList)
// homeSection.classList.add('hidden')
// // show playing
// const playGroundSection=document.getElementById('playground')
// // console.log(playGroundSection.classList)
// playGroundSection.classList.remove('hidden')

// }
function play(){
    const homeSection=hiddenElement('home-screen')
    hiddenElement('score-Section')
    const playGroundSection=showElement('playground')
    getShowElementById('current-life',5)
    getShowElementById('currentScore',0)
    continueGame()
}
function continueGame(){
    const alphabets=getRandomAlphabet() 
    const currentAlphabet=document.getElementById('currentAlphabet')
   currentAlphabet.innerText=alphabets
   console.log(alphabets)
  
    setBackgroundColor(alphabets)
    // console.log(alphabets)
}
document.addEventListener('keyup',handleKeyboardButtonPress)
function handleKeyboardButtonPress(event){
    const playerPressed=event.key
    console.log('you press',playerPressed)

if(playerPressed==='Escape'){
    gameOver()
}
    
    // expectedKey
    const currentelement=document.getElementById('currentAlphabet')
    const currentAlphabet=currentelement.innerText
    const expectedAlphabet=currentAlphabet.toLocaleLowerCase()
    // console.log(playerPressed,expectedAlphabet)
    // check match or not 
    if(playerPressed===expectedAlphabet){
        console.log('you got a point ')

// const currentScore=getElementsTextId('currentScore')
// // console.log(currentScore)
  const currentScore= getElementsNumberById('currentScore')
 const updatedScore=currentScore + 1;
 getShowElementById('currentScore',updatedScore)


        // -------------------------------------
        // // update score
        // const scoreElement=document.getElementById('currentScore')
        // const curentScore=scoreElement.innerText
        // const scoreNumber=parseInt(curentScore)
        // const updateScore=scoreNumber +1;
        // // show update score 
        // scoreElement.innerText=updateScore
        // console.log(scoreNumber)
        // // baground remove
        removeBackgroundColorById(expectedAlphabet)
        // start a new round 
        continueGame()
        
    }
    else{
        console.log('you lost a life')
        const lifeHave= getElementsNumberById('current-life')
        const reduceLife=lifeHave - 1;
        getShowElementById('current-life',reduceLife)
        if(reduceLife===0){
            console.log('Game over!')
            gameOver()
        }




        // ------------------------------
        // get the current life number
// const currentLifeElement=document.getElementById('current-life')
// const currentLifeText=currentLifeElement.innerText
// const currentLifeNumber=parseInt(currentLifeText)

//         // reduce the life number
//         const reduceCount=currentLifeNumber - 1;
        

//         // display the life count

//         currentLifeElement.innerText=reduceCount
    }

    

}