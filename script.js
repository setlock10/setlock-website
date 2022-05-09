

function addingEventListener() {
    const input1 = document.getElementById('arctic');
    input1.addEventListener('click', function() {
     document.getElementById("pageStyle").setAttribute("href","./style.css");
    });

    const input2 = document.getElementById('hungry');
    input2.addEventListener('click', function() {
        document.getElementById("pageStyle").setAttribute("href","./styleFastFood.css");
    });

    const input3 = document.getElementById('hot');
    input3.addEventListener('click', function() {
        document.getElementById("pageStyle").setAttribute("href","./styleHot.css");
    });

    const input4 = document.getElementById('about');
    input4.addEventListener('click', function() {
        alert('The menu bar and the boxes are created in HTML and styled in CSS.\n\nThe click events that change the "vibe" are written in JavaScript.\n\nA modified CSS styleSheet is loaded for each "vibe".');
      
    });

   document.querySelectorAll()

    

}
addingEventListener();
