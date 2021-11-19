const sounds= [
    "Applause",
    "Cheering", 
    "Booing",
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSound();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
    sounds.forEach((sound) => {
        const soundsnip = document.getElementById(sound);
        soundsnip.pause();
    })
}