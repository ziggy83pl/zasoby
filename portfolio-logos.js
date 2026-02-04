
//https://ziggy83pl.github.io/zasoby/
//To jest kryp do obsługi logo pro V 1.0


document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('global-trusted-logos');
    if (!container) return;

    // 1. WSTRZYKIWANIE STYLI CSS (Aby skrypt był samodzielny na każdej stronie)
    const style = document.createElement('style');
    style.textContent = `
        #global-trusted-logos {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
        #global-trusted-logos a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: inherit;
            position: relative;
        }
        #global-trusted-logos img {
            height: 70px;
            width: 70px;
            object-fit: contain;
            border-radius: 50%;
            background-color: #ffffff;
            padding: 4px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            opacity: 0.9;
            transition: all 0.3s ease;
        }
        #global-trusted-logos img:hover {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.1);
            box-shadow: 0 0 20px var(--hover-color, rgba(0,0,0,0.2));
        }
        .logo-label {
            display: block;
            margin-top: 8px;
            font-size: 0.75rem;
            font-weight: 600;
            text-align: center;
            font-family: sans-serif;
        }
        /* Tooltip (Dymek) */
        .logo-tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%; left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: #333; color: #fff;
            padding: 8px 12px; border-radius: 6px;
            font-size: 0.85rem; white-space: nowrap;
            opacity: 0; visibility: hidden; pointer-events: none;
            transition: 0.3s; z-index: 1000; margin-bottom: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .logo-tooltip:hover::after { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
    `;
    document.head.appendChild(style);

    // LISTA TWOICH PROJEKTÓW
    // Obrazki są pobierane z repozytorium RentMaster (główne źródło plików)
    const projects = [
        {
            name: "Kebab Łomża",
            url: "https://www.facebook.com/DonersLomza",
            img: "https://ziggy83pl.github.io/zasoby/logo/doners_kebab.webp",
            title: "Doners Kebab Łomża",
            color: "#e67e22"
        },
        {
            name: "Budownictwo",
            url: "https://ziggy83pl.github.io/Prodom-budownictwo/",
            img: "https://ziggy83pl.github.io/zasoby/logo/prodom.webp",
            title: "PRODOM BUDOWNICTWO",
            color: "#3498db"
        },
        {
            name: "Pomoc",
            url: "https://www.siepomaga.pl",
            img: "https://ziggy83pl.github.io/zasoby/logo/siepomaga.webp",
            title: "Wspieramy Siepomaga.pl",
            color: "#e74c3c"
        },
        {
            name: "Remonty",
            url: "https://ziggy83pl.github.io/PawelSzczesny/index.html",
            img: "https://ziggy83pl.github.io/zasoby/logo/pawel.webp",
            title: "CZŁOWIEK, KTÓRY WYKONA WSZYSTKO",
            color: "#34495e"
        },
        {
            name: "Strony WWW",
            url: "https://ziggy83pl.github.io/coder/",
            img: "https://ziggy83pl.github.io/zasoby/logo/enterprise.webp", 
            title: "Enterprise - Strony WWW",
            color: "#10b981"
        },
        {
            name: "Wynajem",
            url: "https://ziggy83pl.github.io/rentmaster/",
            img: "https://ziggy83pl.github.io/zasoby/logo/rentmaster.webp",
            title: "RentMaster - Wynajem",
            color: "#1a2a6c"
        },
        // {
        //     name: "Nowy Projekt",
        //     url: "https://twoja-strona.pl",
        //     img: "https://sciezka/do/logo.png",
        //     title: "Opis w dymku",
        //     color: "#000000"
        // },
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
                <a href="${project.url}" target="_blank" class="logo-tooltip" data-tooltip="${project.title}">
                    <img src="${project.img}" alt="${project.name}" style="--hover-color: ${project.color}" onerror="this.style.display='none'">
                    <span class="logo-label">${project.name}</span>
                </a>`;
        }
    });

    container.innerHTML = html;

});


