function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

function changeTheme() {
    const body = document.body;

    if (body.style.background.includes("black")) {
        body.style.background = "linear-gradient(-45deg, #1e3c72, #2a5298, #11998e, #38ef7d)";
    } else {
        body.style.background = "skyblue";
    }
}
