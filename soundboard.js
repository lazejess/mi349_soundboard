const sounds= ["Applause", "Cheering", "Booing"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerText = sound;
    document.getElementByID("buttons").appendChuld(btn);
});