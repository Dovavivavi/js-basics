console.log('hello world');

function loadEvent() {
    console.log('loaded');

    let rootElement=(document.getElementById('root'))

    document.getElementById('root').innerHTML="sziasztok"
    /* console.dir(document.getElementById('root'))
    console.dir(document.querySelector('#root')) */

    document.getElementById('root').innerHTML="cso"

}

window.addEventListener('click',loadEvent)