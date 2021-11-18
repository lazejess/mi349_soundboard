const sounds= ["Applause", "Cheering", "Booing"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener("click", ()=>{
        stopsound();
        document.getElementById(sound).onplay();
    })
    document.getElementByID("buttons").appendChild(btn);
});
function stopsound(){
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime(0);
    });
}