

const button = document.body.querySelector('#postFT')
button.onclick = () => {
    const promise = fetch('/postFT')
    promise.then((resp) => {
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })      
})
}
const button1 = document.body.querySelector('#postCPD')
button1.onclick = () => {
    const promise = fetch('/postCPD') 
    promise.then((resp) => {
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })       
})
}
const button2 = document.body.querySelector('#users')
button2.onclick = () => {
    const promise = fetch('/users') 
    promise.then((resp) => {
        const promise2 = resp.json()
        promise2.then((data) => {
            console.log(data)
            drawUsersTable(data)
        })       
})
}
function drawUsersTable(data) {
    let usersTableElement = document.querySelector('#usersTable')
  
  for (let i = 0; i < data.length; i++){
    let h1Element = document.createElement ('h1')
  h1Element.textContent = (`${data[i].name} ${data[i].age}`)
  usersTableElement.appendChild(h1Element)
  }
    console.log(data)
}


const button3 = document.body.querySelector('#permissions')
button3.onclick = () => {
    const promise = fetch('/permissions') 
    promise.then((resp) => {
        const promise2 = resp.json()
        promise2.then((data) => {
            console.log(data)
            drawpermissionsTable(data)
        })       
})
}
function drawpermissionsTable(data) {
    let permissionsTableElement = document.querySelector('#permissionsTable')

   for (let i = 0; i < data.length; i++){
    let h1element = document.createElement ('h1')
    h1element.textContent = (`${data[i].name}`)
        permissionsTableElement.appendChild(h1element)
   }
   console.log(data)
}

const button4 = document.body.querySelector('#age30')
button4.onclick = () => {
    const promise = fetch('/age30') 
    promise.then((resp) => {
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })       
})
}

const button5 = document.body.querySelector('#salary_more_than_150k')
button5.onclick = () => {
    const promise = fetch('/salary150k') 
    promise.then((resp) => {
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })       
})
}

const button6 = document.body.querySelector('#post_users')
button6.onclick = () => {
    const promise = fetch('/post_users')
    promise.then((resp) => {
        const promise2 = resp.json()
        promise2.then((data) => {
            console.log(data)
            
        })
    })
}



const button7 = document.body.querySelector('#postpermissions')
button7.onclick = () => {
    const promise = fetch('/postpermissions')
    promise.then((resp) =>{
        const promise2 = resp.text()
        promise2.then((data) =>{
            console.log(data)
        })
    })
}



const button8 = document.body.querySelector('#color_background')
function color_background () {
    let result = confirm("???????????????? ???????? ???????? ?????????????????")
    if (result == true){
        let color = prompt('???????????????? ???????????????? ?????????? ???? ????????????????????!')
        let resulttimecolor = confirm('???????????? ???????????? ???????????????? ???????? ?? ???????????????? ???????????????????')
        if (resulttimecolor == true) {
        let timecolor = prompt('?????????? ?? ????????????????')
        document.body.style.background = color;
        setTimeout(() => document.body.style.background = "", Number(timecolor)*1000)
        } else if (resulttimecolor == false) {
        document.body.style.background = color;
        }
    }
} button8.onclick = () => {
    color_background()
}


let newUserBtn = document.querySelector('#new-User-Btn')

newUserBtn.onclick = (e) => {
    e.preventDefault()
    let promise = fetch(
        '/user',
        {
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('#name-field').value,
                age: document.querySelector('#age-field').value
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    )
}