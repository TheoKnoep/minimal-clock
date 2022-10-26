const hours = document.querySelector('.hours'); 
const minutes = document.querySelector('.minutes'); 
const seconds = document.querySelector('.seconds'); 

setInterval(() => {
    applyTime(); 
    applyColor(); 
}, 1000); 


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

    // console.log(secondAngle); 

    return { hourAngle, minuteAngle, secondAngle }; 
}

function applyTime() {
    let d = getAnglesFromTime(); 
    hours.style.transform = `rotate(${d.hourAngle}deg)`; 
    minutes.style.transform = `rotate(${d.minuteAngle}deg)`; 
    seconds.style.transform = `rotate(${d.secondAngle}deg)`; 
}
applyTime(); 



/* template */ 
const container = document.querySelector('#app-container'); 
const template = document.querySelector('#burger-template'); 
const content = template.content.cloneNode(true); 

// container.append(content); 




/**
 * Color setter
 */
function colors() {
    // get the exact current timestamp : 
    const now = new Date(); 
    // console.log(now.getTime()); 

    //get the timestamp of the beginning of the day :
    var d = new Date;
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    // console.log(d.getTime());

    // calculate percentage of the day : 
    let msOfThisDay = now.getTime() - d.getTime(); 
    // console.log("milliseconds of this DAY : ", now.getTime() - d.getTime()); 
    // console.log("day percentage = ", msOfThisDay / (24 * 3600 * 1000)); 
    const dayPercentage = msOfThisDay / (24 * 3600 * 1000); 

    // define colors based on the day percentage :
    let h = 360 * dayPercentage; 
    
    return {
        mainColor: `hsl(${h}, 70%, 40%)`,
        sideColor: `hsl(${h}, 70%, 70%)`,
        lastColor: `hsl(${h}, 50%, 70%)`
    }

}
function applyColor() {
    // hours.style.backgroundColor = colors().mainColor; 
    let overStyle = `<style>
        .hours { background: ${ colors().mainColor }; }
        .minutes::before { background: ${ colors().sideColor }; }
        .seconds::before { background: ${ colors().lastColor }; }
    </style>`; 
    document.head.insertAdjacentHTML('beforeend', overStyle); 
}
applyColor(); 