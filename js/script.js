const $btnSignIn= document.querySelector('.sign-in-btn'),
$btnSignUp= document.querySelector('.sign-up-btn'),
$SignUp= document.querySelector('.sign-up'),
$SignIn= document.querySelector('.sign-in'),
$free= document.querySelector('.free-account');
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $SignIn.classList.toggle('active');
        $SignUp.classList.toggle('active')
    }
});

document.addEventListener('click', e => {
    if (e.target === $free){
        $SignIn.classList.toggle('active');
        $SignUp.classList.toggle('active')
}
    })


