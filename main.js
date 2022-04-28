

// Zmiana koloru tła przy ruchu myszką:::::::::


const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (event) => {
    // pozycja względem okna przeglądarki:
    // console.log(event.clientX, event.clientY );
    // pozycja względem strony:
    // console.log(event.pageX, event.pageY );
    // pozycja względem ekranu:
    // console.log(event.screenX, event.screenY );


    // WERSJA 1:
    // h1.textContent = `${event.clientX}, ${event.clientY}`;
    // document.body.style.backgroundColor = `rgb(${event.clientX},
    //     ${event.clientY}, ${event.clientX/event.clientY *20})`;

    // --------------

    // WERSJA 2:

    const positionX = event.clientX;
    const positionY = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = positionX/width*100;
    const green = positionY/height*100;
    const blue = ((positionX/width*100) + (positionY/height*100)) /2;

    h1.textContent = ` ${positionX}, ${positionY} `;
    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;


})

 

