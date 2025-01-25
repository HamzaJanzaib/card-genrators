let studentIdData = [
    {
        Image: "https://i.pinimg.com/736x/24/7c/a3/247ca32b70904a6133a7588606b4fc94.jpg", name: "wheat-id", functionName: "wheat"
    },
    {
        Image: "/public/image/card.png", name: "simple-id", functionName: "simple"
    },
    {
        Image: "/public/image/card1.png", name: "grid-id", functionName: "grid"
    },

]




document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('form');

    if (!form) {
        console.error("Error: Form element not found.");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Getting form values
        let formValues = {
            studentName: document.getElementById('student-name')?.value || "",
            studentPhoto: document.getElementById('student-photo')?.value || "",
            studentId: document.getElementById('student-id')?.value || "",
            course: document.getElementById('course')?.value || "",
            dob: document.getElementById('dob')?.value || "",
            contact: document.getElementById('contact')?.value || "",
        };


        // Storing data in local storage
        window.localStorage.setItem('data', JSON.stringify(formValues));
        console.log("Data saved to local storage");

    });
});

function wheat() {
    window.location.href = "/html/result.html"
    wheatcv()
}

function wheatcv() {
    let result = document.getElementById('result-card');
    if (!result) {
        console.error("Error: Element 'result' not found");
        return;
    }

    let data = window.localStorage.getItem('data');
    if (!data) {
        console.error("Error: No data found in local storage.");
        return;
    }

    data = JSON.parse(data);
    console.log(data);

    // Create heading elements 
    let main = document.createElement('div');
    main.classList.add('card-main');
    result.appendChild(main);

    let left = document.createElement('section');
    left.classList.add('left');
    left.innerHTML = `<img src="${data.studentPhoto}" alt=""> `
    main.appendChild(left);

    let right = document.createElement('section');
    right.classList.add('right');
    right.innerHTML = ` <h1 class=""heading>id card</h1>
        <br>
        <h4 cla><span>Name</span> ${data.studentName}</h4>
        <h4><span>studentId</span> ${data.studentId}</h4>
        <h4><span>contact</span> ${data.contact}</h4>
        <h4><span>course</span> ${data.course}</h4> `
    main.appendChild(right);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
}

document.addEventListener("DOMContentLoaded", function () {
    wheatcv();
});
function dowloand() {
    html2canvas(document.querySelector("#result-card")).then(canvas => {
        let link = document.createElement("a");
        link.download = "your_cv.jpg";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

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
    displaydesign.innerHTML = clutter;
});