const hr = document.querySelector('.paintGalerry div.hr');
const title = document.querySelector('.video h1');
const quotePartOne =document.querySelector('.paintGalerry h2');
const quotePartTwo =document.querySelector('section.describle p');
const video = document.querySelector('.video video');
const galerry = document.querySelector('section.paintGalerry');
const describle = document.querySelector('section.describle');
const signature = document.querySelector('.my p');
const firstPicture = document.querySelector('.pictures img');
const womanOne = document.querySelector('.womanOne');
const last = document.querySelector('.last');

window.addEventListener("scroll", function() {
    const scrollHight = window.scrollY
    if (scrollHight > 150) {
    hr.classList.add('moveRight') }
});
let arrow = false;
let back = false;
let sign = false;

function addQuote() {
    const scrollHight = window.scrollY;
    const galerryTop = galerry.offsetTop;
    const quotePartOneTop = quotePartOne.offsetTop;
    const describleTop = describle.offsetTop;
    const lastTop = last.offsetTop;

        if (scrollHight < quotePartOneTop) {
        title.style.position = 'fixed';
        }
       else if (scrollHight >= lastTop & !sign) {
        womanOne.style.position = 'fixed';
        womanOne.style.top = '0px';
        womanOne.style.left = '0px';
        sign = true;
       }
       else if (scrollHight < lastTop & sign) {
        womanOne.style.position = 'relative';
        sign = false;
       }
        else if (scrollHight >= galerryTop - 55 & scrollHight < describleTop & !arrow) {
        quotePartOne.style.position = 'fixed';
        quotePartOne.style.top = "49px";
        arrow = true;
       }
       else if (scrollHight < galerryTop - 55 & arrow) {
        quotePartOne.style.position = 'absolute';
        quotePartOne.style.top = "0px";
        quotePartOne.style.left = "0px";
        arrow = false;
       }
       else if (scrollHight >= describleTop & arrow) {
        quotePartTwo.style.position = 'fixed';
        quotePartTwo.style.top = "160px";
        arrow = false;
        back = true;
       }
       else if (scrollHight < describleTop & back) {
        quotePartTwo.style.position = 'absolute';
        quotePartTwo.style.top = "160px";
        quotePartTwo.style.left = "0px";
       }
}

window.addEventListener('scroll', addQuote)
