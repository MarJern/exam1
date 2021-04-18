const url = "https://api.spacexdata.com/v4/dragons";
const data = document.querySelector(".dragons");
const backgroundImg = document.querySelector(".dragons-img")

async function getDragons() {
    try{
        const response = await fetch(url);
        const results = await response.json();
        
        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            if(i === 4) {
                break;
            }
            backgroundImg.style.backgroundImage = `URL(${results[i].flickr_images[0]})`; 

            data.innerHTML += 
                `<article class="dragon-div">
                    <h2><span class="orangeWord">Name:</span> ${results[i].name}</h2>
                    <section class="img-container">
                        <figure class="dragon-figure fade"><img src="${results[i].flickr_images[1]}" class="dragon-img" alt="SpaceXs dragon vessel"></figure>
                        <figure class="dragon-figure fade"><img src="${results[i].flickr_images[2]}" class="dragon-img" alt="SpaceXs dragon vessel"></figure>
                        <figure class="dragon-figure fade"><img src="${results[i].flickr_images[3]}" class="dragon-img" alt="SpaceXs dragon vessel"></figure>
                    </section>
                    <section>
                        <ul>
                            <li><span class="orangeWord">Active:</span> ${results[i].active}</li>
                            <li><span class="orangeWord">Type:</span> ${results[i].type}</li>
                            <li><span class="orangeWord">Crew Capacity:</span> ${results[i].crew_capacity}</li>
                            <li><span class="orangeWord">Dev. partner:</span> ${results[i].heat_shield.dev_partner}</li>
                            <li><span class="orangeWord">Diameter:</span> ${results[i].diameter.meters} meters</li>
                            <li><span class="orangeWord">Weight:</span> ${results[i].dry_mass_kg}</li>
                            <li><span class="orangeWord">Height:</span> ${results[i].height_w_trunk.meters} meters</li>
                            <li><span class="orangeWord">First flight:</span> ${results[i].first_flight}</li>
                        </ul>
                    </section>
                    <p>${results[i].description}</p>
                </article>`;        

        }
    }
    catch(error){
    console.log("error");
    data.innerHTML = errorMessage("Sorry, something went wrong");
    }

}

getDragons();
