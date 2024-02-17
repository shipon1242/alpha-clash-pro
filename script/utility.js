function hiddenElement(elementId){
    const element= document.getElementById(elementId)
    element.classList.add('hidden')
    
    
}
function showElement(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}
// randomp-alphabet
function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('')
    
    const randomNumber = Math.random()*25
    const index=Math.round(randomNumber)
    const alphabet=alphabets[index]
    const Alphabet=alphabet
    // console.log(Alphabet,index)
    return Alphabet
}
function setBackgroundColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-400')
    return element

}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getElementsNumberById(elementId){
    const element=document.getElementById(elementId)
   const elementText=element.innerText;
   const elementNumber=parseInt(elementText)
   return elementNumber
}
function getShowElementById(elementId,value){
    const element=document.getElementById(elementId)
    const elementText=element.innerText;
    element.innerText=value
}

function getTextElementById(elementId){
    const element=document.getElementById(elementId)
    const text=element.innerText
    return text

}

function gameOver(){
    hiddenElement('playground')
    showElement('score-Section')
    // getShowElementById('current-life',5)
    // getShowElementById('currentScore',0)

    // find final score 
    const finalScore=document.getElementById('currentScore').innerText
    getShowElementById('finnal-Score',finalScore)

  const curientAlphabet= getTextElementById('currentAlphabet')
  removeBackgroundColorById(curientAlphabet)
}
