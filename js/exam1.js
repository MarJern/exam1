const spaceXUrl = "https://api.spacexdata.com/v4/launches/latest"; 
const schedule =  document.querySelector(".homeSchedule");

async function getSchedule() {

    try {
        const response = await fetch(spaceXUrl);
        const results = await response.json();
    
        console.log(results);

        createHTML(results);

    }

    catch(error) {
        console.log("error");
        schedule.innerHTML = errorMessage("Sorry, something went wrong");
    }

        // FOR SEVERAL RESULTS NOT INCLUDING"/LATEST"

    // for (let i = 0; i < results.length; i++) {
    //     console.log(results[i]);

    //     schedule.innerHTML +=
    //     `<div class="calendar">
    //         <div class="scheduleDate">
    //         <h2>${results[i].date_utc}</h2>
    //         </div>
    //         <div class="scheduleInfo">
    //         <h2>${results[i].name}</h2>
    //         <blockquote>${results[i].details}</blockquote>
    //         </div>
    //     </div>`;

    // }
}

getSchedule();

function createHTML(results) {

    schedule.innerHTML +=
    `<div class="schedule">
        <div class="scheduleDate">
        <time class="date"> <span class="orangeWord">Date of launch:</span> ${results.date_utc}</time>
        </div>
        <div class="scheduleInfo">
        <h2 class="scheduleName">${results.name}</h2>
        <blockquote class="scheduleDetails">${results.details}</blockquote>
        </div>
    </div>`;
}

// Picture Nasa API

const imgURL = "https://api.nasa.gov/planetary/apod?api_key=R5IcwU86wMG8i32X2a7h4HvZarzGKnlcFklC6huQ";

