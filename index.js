function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert(){
        alert('I was Clicked!');
    }
    input.addEventListener('click',clickAlert);
}
addingEventListener();

