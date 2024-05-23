document.getElementById('questionButton').addEventListener('click', function() {
    let response = confirm("Maukah kamu menjadi pacarku?");
    if (response) {
        alert("Hore! Aku sangat bahagia!");
    } else {
        alert("Oh iya gapapa kok,kalo kamu gak mau");
    }
});
