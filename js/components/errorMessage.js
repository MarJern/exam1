
function errorMessage(message = "Unknown error") {
    if(!message){
        message = "Unknown error!";
    }
    
    return `<div class="error">${message}</div>`;
}