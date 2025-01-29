const hourEle = document.querySelector(".hour");
const minEle = document.querySelector(".min");
const secEle = document.querySelector(".sec");


setInterval (()=>{
    let date = new Date();

    let hr = date.getHours()*30;

    let min = date.getMinutes()*6;

    let sec = date.getSeconds()*6;

    hourEle.style.transform = `rotateZ(${(hr) + min/12}deg)`

    minEle.style.transform = `rotateZ(${min}deg)`

    secEle.style.transform = `rotateZ(${sec}deg)`
})