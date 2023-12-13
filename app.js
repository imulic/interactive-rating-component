let stars = document.querySelectorAll('input.star');
let starSelected;

document.getElementById('submit').addEventListener('click', function() {
    
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            starSelected = 5-i;
        }
    }
    console.log(starSelected);
    document.querySelector('.rating').innerText = starSelected;
    document.querySelector('.thank-you').style='display: flex';
    document.querySelector('.intro').style='display: none';

});