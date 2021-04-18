// about
const url = "https://api.spacexdata.com/v4/company";
const about = document.querySelector(".about-page");

async function getAbout() {
    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        createAbout(results);
    }
    catch(error){
        console.log("error");
        about.innerHTML = errorMessage("Sorry, something went wrong");
    }
}

getAbout();

function createAbout(results) {

    about.innerHTML += 
    `<h1>${results.name}</h1>
    <ul>
        <li><span class="orangeWord">Founded:</span> ${results.founded}</li>
        <li><span class="orangeWord">Founder:</span> ${results.founder}</li>
        <li><span class="orangeWord">Employees:</span> ${results.employees}</li>
        <li><span class="orangeWord">Launch sites:</span> ${results.launch_sites}</li>
        <li><span class="orangeWord">Test sites:</span> ${results.test_sites}</li>
    </ul>
    <p>${results.summary}</p>
    `;
}

// history
const achieveURL = "https://api.spacexdata.com/v4/history";
const achieve = document.querySelector(".achievements-page");

async function getAchieve() {
    try {
        const response = await fetch(achieveURL);
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
        
            if(i === 4) {
                break;
            }
            
            results.reverse();

            achieve.innerHTML += 
            `<h3>${results[0].title}</h3>
            <time><span class="orangeWord">Date:</span>${results[0].event_date_utc}</time>
            <p>${results[0].details}</p>`;
        }
    }

    catch(error) {
        console.log("error");
        achieve.innerHTML = errorMessage("Sorry, something went wrong");
    }

}
getAchieve();