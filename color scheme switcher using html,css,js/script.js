const allbuttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
 
allbuttons.forEach((button) =>{
console.log(button);
button.addEventListener('click', (e) =>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'red'){
        body.style.backgroundColor = 'red'
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor = 'blue'
    }
    if(e.target.id === 'green'){
        body.style.backgroundColor = 'green'
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
    }
}

)
}
)