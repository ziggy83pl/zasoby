document.addEventListener("DOMContentLoaded", function() {
    const versionText = document.getElementById('version-text');
    if (!versionText) return;

    // 1. WSTRZYKIWANIE STYLI CSS (Globalne)
    // Dzięki temu skrypt działa samodzielnie na każdej stronie
    const style = document.createElement('style');
    style.textContent = `
        #version-text {
            display: inline-block;
            text-decoration: none;
            color: inherit;
            font-weight: 600;
            position: relative; /* KLUCZOWE: Naprawia wyświetlanie dymka (tooltip) */
            cursor: pointer;
        }

        #version-text span {
            display: inline-block;
            transition: transform 0.15s ease-out, color 0.15s ease-out, text-shadow 0.15s ease-out;
            will-change: transform;
        }

        /* Efekt powiększenia - kolor pobierany ze zmiennej --accent danej strony */
        #version-text span.magnified {
            transform: scale(1.5);
            color: var(--accent, #333); 
            text-shadow: 0 0 10px var(--accent, rgba(0,0,0,0.2));
        }
    `;
    document.head.appendChild(style);

    // 2. LOGIKA SKRYPTU (Rozbicie na litery)
    const text = versionText.innerText;
    versionText.innerHTML = text.split('').map(char => {
        return char === ' ' ? '<span style="display:inline">&nbsp;</span>' : `<span>${char}</span>`;
    }).join('');
    
    const spans = versionText.querySelectorAll('span');
    let isAnimating = false;

    const runMagnifyAnimation = () => {
        if (isAnimating) return;
        isAnimating = true;
        
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('magnified');
                setTimeout(() => span.classList.remove('magnified'), 150); // Czas trwania powiększenia jednej litery
                
                if (index === spans.length - 1) isAnimating = false;
            }, index * 70); // Prędkość fali (im mniej, tym szybciej)
        });
    };

    // 3. OBSŁUGA ZDARZEŃ
    // Uruchom animację po najechaniu myszką (Hover)
    versionText.addEventListener('mouseenter', runMagnifyAnimation);

    // Uruchom animację cyklicznie, gdy stopka jest widoczna
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            runMagnifyAnimation(); // Uruchom raz na start
            const interval = setInterval(() => {
                // Sprawdź czy element nadal jest w viewport (zabezpieczenie)
                if (entries[0].isIntersecting) {
                    runMagnifyAnimation();
                }
            }, 5000); // Powtarzaj co 4 sekundy
            versionText.dataset.intervalId = interval;
        } else {
            clearInterval(versionText.dataset.intervalId);
        }
    }, { threshold: 0.5 });
    
    observer.observe(versionText);
});