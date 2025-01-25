let studentIdData = [
    {
        Image: "https://i.pinimg.com/736x/24/7c/a3/247ca32b70904a6133a7588606b4fc94.jpg", name: "white-id" , functionName:"white"
    },
    {
        Image: "public/image/card.png", name: "simple-id", functionName:"simple"
    },
    {
        Image: "public/image/card1.png", name: "grid-id", functionName:"grid"
    },
    
]

let displaydesign = document.querySelector(".displaydesign"); // Corrected selector
let clutter = "";

studentIdData.forEach((e) => {
  clutter += `<div class="box">
                  <div class="img">
                      <img src="${e.Image}" alt="${e.name}">
                  </div>
                   <div class="button-box">
                  <button onclick="${e.functionName}()">${e.name}</button> 
                </div>
              </div>`;
});

displaydesign.innerHTML = clutter;