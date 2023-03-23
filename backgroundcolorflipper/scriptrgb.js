
const btn= document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    const rgbRed =  getRandomNumber()
    const rgbGreen= getRandomNumber()
    const rgbBlue = getRandomNumber()
   
    const randomColor= `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
})

function getRandomNumber (){
    return Math.floor(Math.random()* (255-0)+0)
}