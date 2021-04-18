const url ="https://api.spacexdata.com/v4/rockets";
const data =document.querySelector(".rockets");

async function getRockets() {
    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            data.innerHTML += 
                `<article class="rockets-div">
                    <h2><span class="orangeWord">Name:</span> ${results[i].name}</h2>
                    <ul>
                        <li><span class="orangeWord">Type:</span> ${results[i].type}</li>
                        <li><span class="orangeWord">Company:</span> ${results[i].company}</li>
                        <li><span class="orangeWord">Country:</span> ${results[i].country}</li>
                        <li><span class="orangeWord">Cost per launch:</span> ${results[i].cost_per_launch}</li>
                        <li><span class="orangeWord">First flight:</span> ${results[i].first_flight}</li>
                        <li><span class="orangeWord">Height:</span> ${results[i].height.meters} meters</li>
                        <li><span class="orangeWord">Diameter:</span> ${results[i].diameter.meters} meters</li>
                        <li><span class="orangeWord">Mass:</span> ${results[i].mass.kg} kg</li>                    </ul>
                    <p>${results[i].description}</p>
                </article>`;
        }
    }
    catch(error) {
        console.log(error);
        data.innerHTML = errorMessage("Sorry, something went wrong");
    }

}

getRockets();
