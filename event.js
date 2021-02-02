// Event object

// Get HTML Element with id 'wrapper'
const $wrapperElement = document.getElementById('wrapper');

// Declare function
const sayHello = (event) => {

    // See the Event details in console
    console.log(event);

    const colorsList = ['green', 'red', 'pink', 'yellow', 'blue', 'orange', 'gold'];
    const randomNumber = Math.random() * colorsList.length;
    const colorRandomIndex = Math.floor(randomNumber);
    $wrapperElement.style.backgroundColor = colorsList[colorRandomIndex];

    const isButton = event.target.localName === 'button';

    if (isButton && event.altKey) {
        console.log('Hello!!');
    }
}

// use function as Callback
$wrapperElement.addEventListener('click', sayHello);
