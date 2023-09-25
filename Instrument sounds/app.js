const drumlength = document.querySelectorAll(".drum").length;
console.log(drumlength)
for (let i = 0; i < drumlength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click',
        function (e) {
            makeSound(this.innerHTML);
            animatingButton(this.innerHTML);

        });
}
function makeSound(key) {
    switch (key) {
        case "Flute":
            const flute = new Audio("sounds/flute.mp3");
            flute.play();
            break;

        case "Tabla":
            const Tabla = new Audio("sounds/tabla.mp3");
            Tabla.play();
            break;

        case "Piano":
            const pi = new Audio("sounds/piano.mp3");
            pi.play();
            break;

        case "Violin":
            const vi = new Audio("sounds/violin.mp3");
            vi.play();
            break;

        case "Trumpet":
            const tr = new Audio("sounds/trum.mp3");
            tr.play();
            break;

        case "Saxophone":
            const sax = new Audio("sounds/sax.mp3");
            sax.play();
            break;

        case "Guitar":
            const gui = new Audio("sounds/guitar.mp3");
            gui.play();
            break;
        default:
            console.log(key);

    }
}
function animatingButton(key) {
    const activeButton = document.querySelector(`.${key}`);
    console.log(activeButton);
    activeButton.classList.add("pressed");
  
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 500);
  }
  