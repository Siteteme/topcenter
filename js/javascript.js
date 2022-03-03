let navigation = document.querySelector('#responsive-nav');
let icon = document.querySelector('.hamberger');
let cancel = document.querySelector('.cancel');

icon.addEventListener('click',function () {
    navigation.classList.toggle('active');
})

cancel.addEventListener('click',function () {
    navigation.classList.remove('active');
})

