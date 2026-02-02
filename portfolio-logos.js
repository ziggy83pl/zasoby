document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('global-trusted-logos');
    if (!container) return;

    // LISTA TWOICH PROJEKTÓW
    // Obrazki są pobierane z repozytorium RentMaster (główne źródło plików)
    const projects = [
        {
            name: "Doners Kebab",
            url: "https://www.facebook.com/DonersLomza",
            img: "https://ziggy83pl.github.io/zasoby/logo/doners_kebab.webp",
            title: "Doners Kebab Łomża"
        },
        {
            name: "Prodom",
            url: "https://ziggy83pl.github.io/Prodom-budownictwo/",
            img: "https://ziggy83pl.github.io/zasoby/logo/prodom.webp",
            title: "PRODOM BUDOWNICTWO"
        },
        {
            name: "Siepomaga",
            url: "https://www.siepomaga.pl",
            img: "https://ziggy83pl.github.io/zasoby/logo/siepomaga.webp",
            title: "Wspieramy Siepomaga.pl"
        },
        {
            name: "Paweł Szczęsny",
            url: "https://ziggy83pl.github.io/PawelSzczesny/index.html",
            img: "https://ziggy83pl.github.io/zasoby/logo/pawel.webp",
            title: "CZŁOWIEK, KTÓRY WYKONA WSZYSTKO"
        },
         {
            name: "Enterprise",
            url: "https://ziggy83pl.github.io/PawelSzczesny/index.html",
            img: "https://ziggy83pl.github.io/zasoby/logo/enterprise.webp",
            title: "CZŁOWIEK, KTÓRY WYKONA WSZYSTKO"
        },
         {
            name: "Rentmaster",
            url: "https://ziggy83pl.github.io/PawelSzczesny/index.html",
            img: "https://ziggy83pl.github.io/zasoby/logo/rentmaster.webp",
            title: "CZŁOWIEK, KTÓRY WYKONA WSZYSTKO"
        },
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
