//document.createElement(), podenos crear un elemento en html

//const listaCompras= document.querySelector('ul')

//UN ELEMENTO
// const li = document.createElement('li')

// li.textContent= "manzana"

// listaCompras.appendChild(li)

// //CON ARRAY
// const productos= ['leche', 'huevo', 'peras', 'azucar', 'guayabas']
// const productos2= ['leche', 'huevo', 'peras', 'azucar', 'guayabas']

// for(let i= 0; i<productos.length; i++){
//     const li= document.createElement('li')
//         li.textContent= productos[i]

//         listaCompras.appendChild(li)
// }

// productos.forEach(producto => {
//     const li= document.createElement('li')
//     li.textContent= producto

//     listaCompras.appendChild(li)
// })

const toDoWork = document.getElementById('toDoEntry')
const addWork = document.getElementById('btn-add')
const toDolist = document.getElementById('toDoList')
const empty = document.getElementById('empty')
const Alerta = document.getElementById('alert')



addWork.addEventListener('click', (event)=>{
    
    if(toDoWork.value){

    Alerta.classList.add('message')

        let dateInfo= new Date()
        dateInfo= dateInfo.toLocaleDateString()
        
    toDolist.innerHTML = toDolist.innerHTML + `<div class= "taskBox"> 
            <p> ${toDoWork.value} </p>
            <button class= "btn-delete"><img src="./assets/icons8-remove-64.png" ></button>
            <div> ${dateInfo} </div>
        </div>`
    const toDolist2 = document.getElementById('toDoList')

toDolist2.childNodes.forEach(taskBox => {
    taskBox.querySelector('.btn-delete').addEventListener('click', (e) =>{
        taskBox.remove()
    })
    
});

    if(toDolist !== null){
        empty.classList.remove('active')
    }
        toDoWork.value=""
}else{
    Alerta.classList.remove('message')
}

})


        
   



