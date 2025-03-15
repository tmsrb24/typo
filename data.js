// Data pro grafy a interaktivní prvky

// Umělci podle období
const artistsByPeriod = {
    'Středověk': ['Mistr Theodorik', 'Mistr Vyšebrodského oltáře', 'Mistr Třeboňského oltáře'],
    'Renesance': ['Mistr Litoměřického oltáře', 'Giuseppe Arcimboldo'],
    'Baroko': ['Karel Škréta', 'Petr Brandl', 'Václav Vavřinec Reiner'],
    '19. století': ['Josef Mánes', 'Mikoláš Aleš', 'Antonín Slavíček', 'Josef Václav Myslbek'],
    'Moderna': ['František Kupka', 'Emil Filla', 'Josef Čapek', 'Toyen', 'Jan Zrzavý'],
    'Současnost': ['Mikuláš Medek', 'Jiří Kolář', 'Adriena Šimotová', 'Karel Malich', 'Jiří David']
};

// Významná díla podle umělců
const artworksByArtist = {
    'Mistr Theodorik': ['Sv. Jeroným', 'Sv. Ambrož', 'Sv. Augustin'],
    'Mistr Vyšebrodského oltáře': ['Narození Krista', 'Klanění tří králů', 'Ukřižování'],
    'Mistr Třeboňského oltáře': ['Kristus na hoře Olivetské', 'Zmrtvýchvstání'],
    'Karel Škréta': ['Sv. Karel Boromejský navštěvuje nemocné morem', 'Podobizna muže v brnění'],
    'Petr Brandl': ['Simeon s Ježíškem', 'Sv. Juda Tadeáš'],
    'Josef Mánes': ['Josefina', 'Orloj', 'Líbánky na Hané'],
    'Antonín Slavíček': ['U nás v Kameničkách', 'Červnový den'],
    'František Kupka': ['Amorpha, fugue en deux couleurs', 'Katedrála'],
    'Toyen': ['Spící', 'Střelnice'],
    'Mikuláš Medek': ['Křižovníci', 'Náhlý déšť'],
    'Adriena Šimotová': ['Tvář', 'Blízkost']
};

// Umělecké styly a jejich charakteristiky
const artisticStyles = {
    'Gotika': {
        období: '1200-1500',
        charakteristika: 'Náboženské motivy, plošnost, zlacení, symbolika'
    },
    'Renesance': {
        období: '1500-1600',
        charakteristika: 'Perspektiva, anatomie, světské náměty, portrét'
    },
    'Baroko': {
        období: '1600-1750',
        charakteristika: 'Dramatičnost, šerosvit, dynamika, náboženská tematika'
    },
    'Realismus': {
        období: '1750-1900',
        charakteristika: 'Věrné zobrazení skutečnosti, krajina, žánrové výjevy'
    },
    'Moderna': {
        období: '1900-1950',
        charakteristika: 'Kubismus, surrealismus, abstrakce, experiment'
    },
    'Současné směry': {
        období: '1950-nyní',
        charakteristika: 'Konceptuální umění, instalace, multimédia, postmoderna'
    }
};

// Významné sbírky a galerie
const collections = [
    {
        název: 'Národní galerie v Praze',
        založení: 1796,
        sbírky: ['Středověké umění', 'Staří mistři', 'Umění 19. století', 'Moderní a současné umění']
    },
    {
        název: 'Moravská galerie v Brně',
        založení: 1961,
        sbírky: ['Staré umění', 'Moderní umění', 'Užité umění a design']
    },
    {
        název: 'Galerie hlavního města Prahy',
        založení: 1963,
        sbírky: ['České umění 19. a 20. století', 'Současné umění']
    },
    {
        název: 'Muzeum umění Olomouc',
        založení: 1951,
        sbírky: ['Středoevropské výtvarné umění', 'Architektura']
    }
];

// Přidání CSS třídy pro zvýraznění umělců
document.head.insertAdjacentHTML('beforeend', `
<style>
    .highlight {
        background-color: rgba(231, 76, 60, 0.2);
        font-weight: bold;
        transition: background-color 0.3s;
    }
    
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s, transform 0.8s;
    }
    
    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item {
        cursor: pointer;
        transition: transform 0.3s;
    }
    
    .timeline-item:hover {
        transform: translateY(-5px);
    }
    
    .timeline-item:hover::before {
        background-color: var(--accent-color);
    }
</style>
`);
