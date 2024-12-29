/*#####################################################*/
/* -----------------------------------------------------------------------------*/

function submit() {
    const userName = document.getElementById("userName").value;
    localStorage.setItem('userName', userName);
}

/*#####################################################*/
/* -----------------------------------------------------------------------------*/

const join = document.getElementById("submit");
join.addEventListener('click', function () {
    // Hide the Sign In button
    join.style.display = 'none';

    // Show the loader
    loader.style.display = 'block';

    // Simulate a loading time (5 seconds)
    setTimeout(() => {
        // Hide the loader after the "loading" time
        loader.style.display = 'none';
        //rediting to 3.html
        window.location.href = '3.html';
    }, 5000);
});
/*#####################################################*/
/* -----------------------------------------------------------------------------*/
