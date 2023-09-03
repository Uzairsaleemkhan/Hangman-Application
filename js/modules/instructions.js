import { sound } from "../data/sound.js"
import Home from "./home.js"

const Instructions = (_=>{



const $hangman = document.querySelector('.hangman')

    const init=_=>{
        render()
        listeners()
    }

    const listeners =_=>{

        document.querySelector('.hangman__trigger').addEventListener('click',()=>{
        sound.click.play()
            Home.init()
        })
    }

    const render=()=>{

        let markup=''
        markup+=`<h1 class="hangman__title">Instructions</h1>
        
        <ul class="how">
        <li>Alright here is how to play!</li>
        <li>When you start a new game the game will automatically choose a random word.</li>
        <li>Your job is to guess that choosen word completely by guessing a letter. </li>
        <li>If you successfully guess the word within 7 tries, you win or else you lose.</li>
        <li>If you lose, you will be hanged without a mercy. </li>
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
        `

        $hangman.innerHTML = markup
    }

    return {
         init
    }
})()

export default Instructions