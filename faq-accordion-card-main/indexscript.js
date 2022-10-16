const questions = document.querySelectorAll("menu");
const questionsList = Array.from(questions);
const faq = document.querySelector("h1");
const image = document.querySelector(".image");
const card = document.querySelector(".card");
const box = document.querySelector(".box");

/*function adjust(){
    if(window.innerWidth < 628 ){
        faq.style.marginTop = image.offsetWidth * 0.4 + "px";
    } else {
        faq.style.marginTop = 0 + "px";
    }
    let cardBox = card.getBoundingClientRect();
    let imageBox = image.getBoundingClientRect();
    let imageScale = image.getBoundingClientRect().width;
    box.style.transform = `translate(${cardBox.left-93}px, ${imageBox.top - 270}px) scale(${0.002182 * imageScale}) `;
}

adjust();
window.addEventListener("resize", adjust);*/

questionsList.forEach((question)=>{
    question.addEventListener('click', (e)=>{
        const content = question.nextElementSibling
        question.firstElementChild.classList.toggle('active');
        content.classList.toggle('active');
        if (content.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.margin = "15px 0px 15px 0";
            question.style.fontWeight = "700";
        } else {
            content.style.maxHeight = 0;
            content.style.margin = 0;
            question.style.fontWeight = "400";
        }
    } );
});