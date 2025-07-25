setInterval(() => {
    //get item indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    //digit time indicator elements
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    //dot time indicator
    let dotH = document.querySelector(".h_dot");
    let dotM = document.querySelector(".m_dot");
    let dotS = document.querySelector(".s_dot");

     // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';

    if(h > 12) {
        h -= 12;
    }

    h = h < 10 ? '0' + h : h ;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerHTML = h + ' Hours';
    minutes.innerHTML = m + ' Minutes';
    seconds.innerHTML = s + ' Seconds';
    ampm.innerHTML = ap;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    // dotH.style.stroke = 'var(--color)';
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
    
}, 1000);