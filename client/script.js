

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
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })       
})
}

const button3 = document.body.querySelector('#permissions')
button3.onclick = () => {
    const promise = fetch('/permissions') 
    promise.then((resp) => {
        const promise2 = resp.text()
        promise2.then((data) => {
            console.log(data)
        })       
})
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
        const promise2 = resp.text()
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