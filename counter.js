//Checks whether counter is already in local storage, and creates it if not
if(!localStorage.getItem('counter'))
{
    localStorage.setItem('counter', 0);
}

//Note: 'document' object refers to whichever HTML page the JS code is embedded into

function count()
{
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
    //This saves counter variable in the browser's local storage, so that
    //when a user revisits the page in the browser the counter's value stays the same.
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;

    setInterval(count, 1000); //Calls function count() every 1000 milliseconds (1 second)
});
