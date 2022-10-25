const hours = document.querySelector('.hours'); 
const minutes = document.querySelector('.minutes'); 
const seconds = document.querySelector('.seconds'); 


getAnglesFromTime() ; 
function getAnglesFromTime() {
    const now = new Date();

    let hour = now.getHours(); 
    if (hour > 12) { hour = hour - 12 }; 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 

    let hourAngle = hour / 12 * 360; 
    let minuteAngle = minute / 60 * 360; 
    let secondAngle = second / 60 * 360; 

    console.log(secondAngle); 

    return { hourAngle, minuteAngle, secondAngle }; 
}

function applyTime() {
    let d = getAnglesFromTime(); 
    hours.style.transform = `rotate(${d.hourAngle}deg)`; 
    minutes.style.transform = `rotate(${d.minuteAngle}deg)`; 
    seconds.style.transform = `rotate(${d.secondAngle}deg)`; 
}
applyTime(); 
setInterval(applyTime, 1000); 


/* template */ 
const container = document.querySelector('#app-container'); 
const template = document.querySelector('#burger-template'); 
const content = template.content.cloneNode(true); 

// container.append(content); 