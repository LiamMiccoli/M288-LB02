

const countdown = () => {
    //Ziel datum in Millisekunden
    const countDate = new Date('May 5, 2022 00:00:00').getTime();
    //Heutiges Datum in Millisekunden
    const now = new Date().getTime();
    //Unterschied zwischen ziel Datum & heutiges Datum (verbleibende zeit)
    const gap = countDate - now;

    // Milisekunden in Tage, Stunden, Minuten & Sekunden Umrechnen
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    //Ausrechnen (Math.floor = runden)
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    Number.prototype.zeroPad = function () {
        return ('0' + this).slice(-2);
    };

    //HTML Ausgeben
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour.zeroPad();
    document.querySelector(".minute").innerText = textMinute.zeroPad();
    document.querySelector(".second").innerText = textSecond.zeroPad();


};
// Jede Sekunde Aktualisieren
setInterval(countdown, 1000);


function loginButton() {
    var x = document.getElementById("loginButton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Email Adresse Validation
function validation() {

    var mail = document.getElementById("mail").value;
    var text = document.getElementById("feedback");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Wenn E-Mail adresse aufbau einer Email adresse hat dann:
    if(mail.match(pattern))
    {
        text.classList.add("valid");
        text.classList.remove("invalid");
        text.innerHTML = "<i class=\"fas fa-check check\"></i>Your E-Mail Adress is Valid.";
    }

    else
    {
        text.classList.add("invalid");
        text.classList.remove("valid");
        text.innerHTML = "<i class=\"fas fa-times cross\"></i> Please Enter a Valid E-Mail Adress!";
    }
}



