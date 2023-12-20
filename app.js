// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript ici
    console.log('La page est chargée !');
    $('body').fadeIn();

});

function test(){
    alert('click bouton');
}

function start(){
    $('#start').fadeOut(); return false;
}