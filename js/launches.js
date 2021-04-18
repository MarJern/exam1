const calendarURL = "https://api.spacexdata.com/v4/launches/upcoming";
const calendar = document.querySelector(".calendar");

async function getCalendar() {
    try{
        const response = await fetch(calendarURL);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        if(i === 4) {
            break;
        }

        calendar.innerHTML += 
            `<tr>
            <td>${results[i].name}</td>
            <td>${results[i].date_local}</td>
            <td>${results[i].flight_number}</td>
            </tr>`;     
    }
    }
    catch(error){
        console.log("error");
        calendar.innerHTML = errorMessage("Sorry, something went wrong");
        }
}

getCalendar();


const url = "https://api.spacexdata.com/v4/launches/upcoming";
const latest = document.querySelector(".launches");

async function getLatest() {
    try{const response = await fetch(url);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        if(i === 1) {
            break;
        }

        latest.innerHTML += 
            `<h2>Flight Id: ${results[i].name}</h2>
            <ul>
                <li><time><span class="orangeWord">Date Local:</span> ${results[i].date_local}</time></li>
                <li><span class="orangeWord">Mission:</span> ${results[i].flight_number}</li>
                <li><span class="orangeWord">Youtube:</span> <a href="${results[i].links.youtube_id}"> Youtube Link</a></li>
                <li><span class="orangeWord">Read more:</span> <a href="${results[i].links.wikipedia}"> Go to Wikipedia</a></li>
                <p>${results[i].details}</p>`;        
    }
    }
    catch(error){
        console.log("error");
        latest.innerHTML = errorMessage("Sorry, something went wrong");
        }
}

getLatest();

