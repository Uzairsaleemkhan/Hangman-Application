import {sound} from "../data/sound.js"
import Home from "./home.js"
import End from "./end.js"
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
  guesses=[]
  lives=7;
    render()
    listeners()
    } 




const render =()=>{

let html = `
<p class="hangman__stats">Lives:<span class="hangman__lives">${lives}</span></p>
<h1 class="hangman__title">Hangman</h1>
<canvas class="hangman__board" height="150px"></canvas>
<div class="hangman__word">${guessingWord.join("")}</div>
<p class="hangman__instructions">Pick a letter below to guess the whole word</p>
<ul class="hangman__letters">
${(_=>{
  let markup='';
for(let i =0;i<letters.length;i++){
markup+= `<li class="hangman__letter">${letters[i]}</li>`
}
return markup;
})()}
</ul>
<button class="button hangman__trigger">Main Menu</button>
`
$hangman.innerHTML = html

}

const listeners =_=>{
  $hangman.addEventListener('click',(e)=>{
    if(e.target.matches('.hangman__trigger')){
        sound.click.play()
        Home.init()
    }

    if(e.target.matches('.hangman__letter')){
      console.log(e.target.innerHTML)
      check(e.target.innerHTML)
    }


  })
}

const isAlreadyTaken=letter=>{
return  guesses.includes(letter)
}



const check=(letter)=>{
if(isAlreadyTaken(letter)) return;
sound.click.play()
guesses.push(letter);

if(chosenWord.includes(letter)){
  updateGuessingWord(letter)
  console.log(guessingWord)
}
else{
lives--
}
myRender()

gameOver()
}


const won = ()=>guessingWord.join('')===chosenWord
const lost = ()=>lives<=0
const gameOver=()=>{



  if(won()){
    sound.win.play()
    End.setState({
      choseWord:chosenWord,
      result :"Win"
    })
  }
  if(lost()){
    sound.lose.play()
    End.setState({
      choseWord:chosenWord,
      result : "Lose"
    })
  }
}


const updateGuessingWord=(letter)=>{
chosenWord.split('').forEach((element ,index)=> {
  
if(element===letter){
  guessingWord[index]=letter
}

});
}


const myRender=()=>{

document.querySelector('.hangman__lives').innerHTML= lives;
document.querySelector('.hangman__letters').innerHTML= (_=>{
  let markup='';
for(let i =0;i<letters.length;i++){
  const alreadyTaken = isAlreadyTaken(letters[i])?'hangman__letter--active':''
markup+= `<li class="hangman__letter ${alreadyTaken}">${letters[i]}</li>`
}
return markup;
})()

document.querySelector('.hangman__word').innerHTML= guessingWord.join('')
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