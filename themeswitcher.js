function setDark() {
    localStorage.setItem("dark-theme", 'true');
    let sheet = document.createElement('style');
    sheet.id = 'dark';
    sheet.innerHTML = "body {background-color: #181818; border-color: #111} p.question, p.privacy-policy {color: #ccc; background-color: #111} p {color: #bbb} h1 {color: #ddd} h2 {color: #ccc} #values p {color: #fff} a:link {color: #fff} a:visited {color: #aaf} .small_button_off {color: #ddd; border: 2px solid #ddd; background-color: #222}"
    document.body.appendChild(sheet);
}

function setLight() {
    localStorage.setItem("dark-theme", 'false');
    document.getElementById("dark").remove();
}

function themeLoad() {
    let theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    try {
        const config = localStorage.getItem('dark-theme');

        if (config) theme = config === 'true' ? 'dark' : 'light';
    } catch (err) {}

    if (theme == "dark") {
        setDark();
    }
}

function switchTheme() {
    let theme = "light";
    try {
        if (localStorage.getItem('dark-theme') == "true") theme = "dark";
    } catch (err) {}
    if (theme == "dark") {
        setLight();
    } else setDark();
}
