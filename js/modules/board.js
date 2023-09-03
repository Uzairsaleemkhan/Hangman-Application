const Board =(_=>{
let lives = null
let context;
const init=()=>{

    const canvas = document.querySelector('.hangman__board')
     context = canvas.getContext('2d');
        draw(context,10,0,10,150); //the stick
        draw(context,0,10,50,10); // the flat of above
        draw(context,0,140,50,140); // the flat of below 
   }



const draw=(context,startX,startY,endX,endY)=>{
    
    context.beginPath()
    context.lineWidth=2
    context.moveTo(startX,startY)
    context.lineTo(endX,endY)

    context.strokeStyle= 'white'
    context.stroke()
}

const drawCircle=(context,centerX,centerY,radius,filColor,strokeColor,lineWidth)=>{
    context.beginPath()
    context.lineWidth= lineWidth;
    context.arc(centerX,centerY,radius,0,Math.PI*2)
    context.strokeStyle=strokeColor;
    context.stroke()
}

const render=_=>{
    if(lives<7){
        draw(context,40,10,40,30);// the rope
    }
    if(lives<6){
        drawCircle(context,40,40,10,'white','white',2)//draw the head
    }
    if(lives<5){

        draw(context,40,50,40,80) // draw the belly
    }
    if(lives<4){
        
        draw(context,40,55,60,80) // draw the left hand
    }
    if(lives<3){
        draw(context,40,55,20,80) // draw the right hand
    }
    if(lives<2){
        draw(context,40,80,25,120) // draw the left leg
    }
    if(lives<1){
        draw(context,40,80,55,120) // draw the right leg
    }
}
const setState=(val)=>{
lives= val
render()
}

    return {
        init,
        setState
    }
})()


export default Board;