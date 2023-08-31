import Game from "./game.js"
import Instructions from "./instructions.js"
import { sound } from "../data/sound.js"
const Home = (_=>{
    
    const $hangman = document.querySelector('.hangman')
    const render=(_)=>{
        let html =''
        html+= `
        <h1 class="hangman__title">Hangman</h1>
        <button class="button start">New Game</button>
        <button class="button instructions">Instructions</button>
        `
        $hangman.innerHTML = html
    }
    
    const listeners =()=>{

        document.querySelector('.start').addEventListener('click',(_)=>{
            sound.click.play()
            Game.init()
        })
        
        document.querySelector('.instructions').addEventListener('click',(_)=>{
            sound.click.play()
            Instructions.init()
        })
    }
    
    const init =(_)=>{
        render()
        listeners()
    }

return{
    init
}

})()
export default Home;