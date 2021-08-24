const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navLinks");

burgerIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('is-active');
})


const tabs = document.querySelectorAll('.tabs li');
const tabBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active')

        const target = tab.dataset.target;
        // console.log(target);
        tabBoxes.forEach(box =>{
            if(box.getAttribute('id') === target){
                box.classList.remove('is-hidden')
            }
            else{
                box.classList.add('is-hidden');
            }
        })
    })
})

// Modal section
const signUpButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal =  document.querySelector('.modal');

signUpButton.addEventListener('click', ()=>{
    modal.classList.add('is-active')
})

modalBg.addEventListener('click', ()=>{
    modal.classList.remove('is-active');
})