
const spaceXUrl = "https://api.spacexdata.com/v4/launches/latest"; 
const schedule =  document.querySelector(".homeSchedule");

async function getSchedule() {
    try {
        const response = await fetch(spaceXUrl);
        const results = await response.json();

        createScheduleHTML(results);
    }

    catch(error) {
        console.log("error");
        schedule.innerHTML = errorMessage("Sorry, something went wrong");
    }

}

getSchedule();

function createScheduleHTML(results) {

    schedule.innerHTML +=
        `<div class="scheduleDate">
            <time><span class="orangeWord">Date:</span> ${results.date_utc}</time>
        </div>
        <div class="scheduleInfo">
            <h3>${results.name}</h3>
            <p>${results.details}</p>
        </div>`;
}


// achieve API
const achieveURL = "https://api.spacexdata.com/v4/history";
const achieve = document.querySelector(".achievements");

async function getAchiev() {
    try {
        const response = await fetch(achieveURL);
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
        
            if(i === 1) {
                break;
            }
            
            results.reverse();

            achieve.innerHTML += 
            `<div>
            <time><span class="orangeWord">Date:</span>${results[0].event_date_utc}</time>
            <h3>${results[0].title}</h3>
            <p>${results[0].details}</p>
            </div>`;
        }
    }

    catch(error) {
        console.log("error");
        achieve.innerHTML = errorMessage("Sorry, something went wrong");
    }

}
getAchiev();



