console.log("nice")
const panels= document.querySelectorAll('.panel')


panels.forEach( panel => {
    panel.addEventListener('click', clickPanel)
}
)
function clickPanel(event){
    // panels.forEach(panel =>{
    //     panel.classList.remove('active')
    // })
    const activeElement= document.querySelector('.active.panel')
    activeElement.classList.remove('active')

    this.classList.add('active')

}


