// <!-- WERSJA 1 & 2 ::: <script src="main.js"></script> -->
//  WERSJA 3: Zmiana koloru tła po kliknięciu w pozycję okna przeglądarki:::
// a: x & y parzysty = kolor czerwony;
// b: x & y nieparzysty = kolor niebieski;
// c: x parzysty & y nieparzysty = kolor zielony;

const h1 = document.querySelector("h1");

// Opcja A::
// const changeColor = function(e) {
//     console.log(e.clientX, e.clientY);
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
    
//     h1.textContent = `${mouseX}, ${mouseY}`;

//     // document.body.style.backgroundColor = "grey";

//     if(mouseX%2 == 0 && mouseY%2 == 0 ){
//         document.body.style.backgroundColor = "red";
//     }
//     else if (mouseX%2 == 1 && mouseY%2 == 1){
//         document.body.style.backgroundColor = "blue";
//     }

//     else if (mouseX%2 == 0 && mouseY%2 == 1) {
//         document.body.style.backgroundColor = "green";
//     }
//     else {
//         document.body.style.backgroundColor = "yellow";
//     }
// }


//  document.body.addEventListener("click", changeColor);


// Opcja B ::: 

document.body.addEventListener("click", (event) => {
    console.log(event.clientX, event.clientY);
    // const color = getColor(event);
    const color = getColor2(event);
    document.body.style.backgroundColor = color;
});

// wersja 1 if(){}:::
const getColor = function (e){

    if(e.clientX%2 == 0 && e.clientY%2 == 0 ){
                document.body.style.backgroundColor = "red";
            }
            else if (e.clientX%2 == 1 && e.clientY%2 == 1){
                document.body.style.backgroundColor = "blue";
            }
        
            else if (e.clientX%2 == 0 && e.clientY%2 == 1) {
                document.body.style.backgroundColor = "green";
            }
            else {
                document.body.style.backgroundColor = "yellow";
            }
        


    // end{}
} 
// wersja 1 if(){}:::
const getColor2 = (e) => {
    if (e.clientX % 2 === 0) {
        if (e.clientY % 2 === 0) {
         return "red";
        } else {
         return "green";
        }
       }
      
       else {
        if (e.clientY % 2 === 0) {
         return "green";
        } else {
         return "blue"
        }
      
       }
       

    //    end{}
}