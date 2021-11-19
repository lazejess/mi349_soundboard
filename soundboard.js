const sounds= [
    "Applause",
    "Cheering", 
    "Booing",
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    
    btn.innerText = sound;

    btn.addEventListener("click", playAudio);
    document.getElementById("buttons").appendChild(btn);
});

function playAudio(){
    document.getElementById(sound).play();
}