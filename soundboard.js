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
        const soundsnip = document.getElementById(sound);
        soundsnip.pause();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

