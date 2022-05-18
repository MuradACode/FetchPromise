let button = document.querySelector(".photoButton");
let body = document.querySelector("body");

button.addEventListener("click", function () {
    let api = fetch("https://restcountries.com/v3.1/subregion/europe");
    api.then(resp => resp.json().then(d => {
        d.forEach(element => {
            let imageHtml = `<div class="country">
                                <div class="info">
                                    <h1>Country Name: ${element.name.common}</h1>
                                    <p>Capital: ${element.capital}</p>
                                    <p>Languages: ${Object.values(element.languages)}</p>
                                    <p>Population: ${element.population}</p>
                                    <p>Currency: ${Object.keys(element.currencies)}</p>
                                    <p>Time zones: ${element.timezones}</p>
                                </div>
                                <img src="${element.flags.png}" alt=""></img>
                            </div>`
            body.innerHTML += imageHtml;
        });
    }));
});