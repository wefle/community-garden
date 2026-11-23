function handleSubmit(event) {
    event.preventDefault();
    
    const eStatus = document.querySelector('.form__status--error');
    const sStatus = document.querySelector('.form__status--success');
    if(!eStatus || !sStatus) return;
    
    eStatus.innerHTML = "";  sStatus.innerHTML = "";
    const data = new FormData(event.target);

    const fname = data.get("fname");
    const lname = data.get("lname");
    const email = data.get("email");

    const patternName = /^([a-zA-Z-äöüß]){2,}$/;
    if(fname === "" || !fname.match(patternName) || lname === "" || !lname.match(patternName)) {
        eStatus.innerHTML += "Bitte gib deinen Vor- und Nachnamen korrekt ein.\n"
    }

    const patternEmail = /^([a-zA-Z-äöüß0-9.-]+)\@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{2,6})$/;
    if(email === "" || !email.match(patternEmail)) {
        eStatus.innerHTML += "Bitte gib eine gültige Email-Adresse ein.\n"
    }

    if(eStatus.innerHTML === "") {
        sStatus.innerHTML = "Vielen Dank für deine Nachricht! Wir melden uns bei dir sobald wie möglich.";
    }
}