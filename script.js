const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
   
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
    
}

const loop = setInterval(()=> {
    const pipePosition = pipe.offsetLeft;
    //captura o bottom atual do mário e converte para int o "+" faz a convertion
    const marioHightJump = +window.getComputedStyle(mario).bottom.replace('px', '');

   
   if (pipePosition <= 120 && pipePosition > 0  && marioHightJump < 80){
    
    pipe.style.animation = 'none';
    pipe.style.left= `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioHightJump}px`

    mario.src = 'resorces/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);
   }
}, 10)

document.addEventListener('keydown', jump);

console.log("carregou o script")