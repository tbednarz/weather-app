console.log('starting')

setTimeout(()=> {
    console.log('2 second timer')
}, 2000)

setTimeout(() => {
    console.log('instant')
}, 0);


console.log('stopping')