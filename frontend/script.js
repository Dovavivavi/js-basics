console.log('hello world');

function loadEvent() {
    console.log('loaded');

    document.getElementById('root').innerHTML="sziasztok"
}

window.addEventListener('click',loadEvent)