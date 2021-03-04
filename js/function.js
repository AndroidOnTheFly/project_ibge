var searchButton = document.getElementById("button-search");

searchButton.addEventListener('click', function () {

    try {

        const cityName = document.getElementById('icon_prefix').value;
        const path = new Request(`http://localhost:3000/getSvg/${cityName}`);
        const viewBox = new Request(`http://localhost:3000/getViewBox/${cityName}`);

    }
    catch(error){
        console.log("Error")
    }
});