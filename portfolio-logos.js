document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('global-trusted-logos');
    if (!container) return;

    // LISTA TWOICH PROJEKTÓW
    // Obrazki są pobierane z repozytorium RentMaster (główne źródło plików)
    const projects = [
        {
            name: "Doners Kebab",
            url: "https://www.facebook.com/DonersLomza",
            img: "https://ziggy83pl.github.io/rentmaster/image/logo/doners_kebab.png",
            title: "Doners Kebab Łomża"
        },
        {
            name: "Prodom",
            url: "https://ziggy83pl.github.io/Prodom-budownictwo/",
            img: "https://ziggy83pl.github.io/rentmaster/image/logo/prodom.webp",
            title: "PRODOM BUDOWNICTWO"
        },
        {
            name: "Siepomaga",
            url: "https://www.siepomaga.pl",
            img: "https://ziggy83pl.github.io/rentmaster/image/logo/siepomaga.png",
            title: "Wspieramy Siepomaga.pl"
        },
        {
            name: "Paweł Szczęsny",
            url: "https://ziggy83pl.github.io/PawelSzczesny/index.html",
            img: "https://ziggy83pl.github.io/rentmaster/image/logo/pawel.png",
            title: "CZŁOWIEK, KTÓRY WYKONA WSZYSTKO"
        }
    ];

    const currentUrl = window.location.href;

    let html = '';
    projects.forEach(project => {
        // SPRAWDZANIE: Jeśli aktualny adres zawiera URL projektu, pomiń go
        // Pobieramy część URL po domenie (np. 'Prodom-budownictwo')
        let pathSegment = project.url.replace('https://', '').replace('http://', '').split('/')[1];
        
        // Zabezpieczenie dla domen głównych (np. siepomaga.pl) lub specyficznych przypadków
        if (!pathSegment) pathSegment = project.name;

        if (!currentUrl.includes(pathSegment)) {
            html += `
                <a href="${project.url}" target="_blank" title="${project.title}">
                    <img src="${project.img}" alt="${project.name}" onerror="this.style.display='none'">
                </a>`;
        }
    });

    container.innerHTML = html;
});