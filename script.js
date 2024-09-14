
setInterval(() => {
// ----get time indicator elements-----
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

// ----digits time indicator-----
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

// ----dot time indicator-----
let dotH = document.getElementById(".h_dot");
let dotM = document.getElementById(".m_dot");
let dotS = document.getElementById(".s_dot");

//----getting the current time-----
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ap = h >= 12 ? "PM" : "AM";



    //----Converting to 12-Hour Format-----
    if(h > 12){
        h = h -12;
    };

    //-----Adding Leading Zeros----
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    //---set time and label---
    hours.innerHTML = h ;
    minutes.innerHTML = m ;
    seconds.innerHTML = s ;
    ampm.innerHTML = ap;

    //---Updating Circular Time Indicators---
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //---Updating Dot Time Position Indicators---
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;

}, 1000);