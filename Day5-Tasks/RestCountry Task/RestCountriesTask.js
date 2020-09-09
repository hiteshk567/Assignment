let request = new XMLHttpRequest();

let url = "https://restcountries.eu/rest/v2/all";
request.open("GET", url, true);
request.send();
request.onload = function() {
    let data = JSON.parse(this.response);

    // 1. Get the countries in asia - filter 
    function countriesInAsia(data) {
        let res = data.filter(item => item.region === "Asia");
    }
    countriesInAsia(data);

    // 2. Get the countries with population less than 2L - fliter
    function populationLessThan2Lac(data) {
        let res = data.filter(item => item.population < 200000);
    }
    populationLessThan2Lac(data);

    // 3. Bumpup the current population  of all the counteirs by 1L - Map 
    function Bumpup(data) {
        let res = data.map(item => item.population += 100000);
    }
    Bumpup(data);

    // 4. convert all the names to capital - map 
    function convertCaps(data) {
        let res = data.map(item => (item.name).toUpperCase());
    }
    convertCaps(data);

    // 5. print follwoig details  name , capital , flag  - foreach,filter
    function printDetails(data) {
        data.forEach(item => {
            // console.log(item.name, item.capital, item.flag);
        })
    }
    printDetails(data);

    // 6. Print the total population of the countries  - reduce
    function totalPopulation(data) {
        let res = data.reduce((sum, item) => {
            return sum += +item.population;
        }, 0);
    }
    totalPopulation(data);

    // 7. Print the total population of the countries in asia - filter & reduce
    function totalPopulationAsia(data) {
        let res = data.filter(item => item.region === "Asia").reduce((sum, item) => sum += +item.population, 0);
        console.log(res);
    }
    totalPopulationAsia(data);
}


