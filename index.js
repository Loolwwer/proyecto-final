
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

function toggleContent(id) {
    let content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function hideButton(id){
   let hide= document.getElementById("#hiddenSpan");
   if (element) {
    element.innerText = 'Ocultar Información';
    }
}

document.getElementById('#hiddenSpan').addEventListener('click', function() {
    changeName('Mostrar Información', 'Ocultar Información');
});


