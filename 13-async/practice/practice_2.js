// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                 }, 1000)
//             }, 1000)
//         },1000)
//     },1000)
// },1000)

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function chageBackgroundColors(){
    await delay(1000)
    document.body.style.backgroundColor = 'red'
    
    await delay(1000)
    document.body.style.backgroundColor = 'orange'

    await delay(1000)
    document.body.style.backgroundColor = 'yellow'

    await delay(1000)
    document.body.style.backgroundColor = 'green'

    await delay(1000)
    document.body.style.backgroundColor = 'blue'
}
chageBackgroundColors();