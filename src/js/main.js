let btn = document.querySelector('.hamburger-btn');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let mobile = document.querySelector('.mobile-nav');
let modal = document.querySelector('.modal');
btn.addEventListener('click', () => {
    modal.classList.toggle('modal2')
    span1.classList.toggle('trans-45');
    span2.classList.toggle('hiddens');
    span3.classList.toggle('trans45');
    mobile.classList.toggle('left-0');
})
let faqLi = document.getElementsByClassName('faq_li');
let fld = document.getElementsByClassName('faq_li_description');
let flimage = document.getElementsByClassName('faqli_img');
for (let i = 0; i < fld.length; i++) {
    faqLi[i].addEventListener('click', () =>{
    fld[i].classList.toggle('max-auto')
    flimage[i].classList.toggle('rotate-180')
})
    
}
