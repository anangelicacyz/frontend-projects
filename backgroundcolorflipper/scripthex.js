const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 'A', 'B', 
'C', 'D', 'E', 'F']

const btn= document.getElementById('btn')
const color= document.querySelector('.color')

btn.addEventListener('click', (e)=>{
    const randomColor= `#${hex[getRandomValue()]}${hex[getRandomValue()]}${hex[getRandomValue()]}${hex[getRandomValue()]}${hex[getRandomValue()]}${hex[getRandomValue()]}`
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor
    color.textContent= randomColor
})

function getRandomValue (){
    return Math.floor(Math.random()*hex.length)
}