 
 
 
 
 
 
 const Game = (_=>{
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const words =['ball','cat','cricket','dog', 'apple']
let chosenWord;
let guessingWord;
let lives;
let guesses;





const $hangman = document.querySelector('.hangman')

const init=_=>{
     chosenWord = chooseWord()
     guessingWord = guessGenerator(chosenWord)
    
    } 

const chooseWord=()=>{
    const randomNumn=Math.floor(Math.random()*words.length)
    return words[randomNumn]
}
const guessGenerator = (string) => {
  let arr = [];
  const length = string.length;
  for (let i = 0; i < length; i++) {
    arr.push("_");
  }
  return arr;
};


    return{
        init
    }

})()


export default Game