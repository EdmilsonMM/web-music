const play = document.querySelector("#play");
const pause = document.querySelector("#pause")
const music = document.querySelector(".musica")

play.addEventListener("click",()=>{
    music.play()
})

pause.addEventListener("click",()=>{
    music.pause()
})