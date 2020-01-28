(function(){
    let counter = document.getElementById('counter');
    let container = document.getElementById('container');
    let decreaseButton = document.getElementById('decrease');
    let increaseButton = document.getElementById('increase');
    let buttonContainer = document.getElementById('buttons');
    let counterValue = 0;

    counter.textContent = counterValue;

    buttonContainer.addEventListener('click', (e) =>{
        e.preventDefault();
        changeValue(e.target)
    })

    function changeValue(target){
        if(target === decreaseButton){
            counterValue--;
            counter.textContent = counterValue;
        }
        else if(target === increaseButton){
            counterValue++;
            counter.textContent = counterValue;
        }
    }

})();