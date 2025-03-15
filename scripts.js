document.addEventListener('DOMContentLoaded', function() {
    // Animace při scrollování
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Kontrola při načtení stránky
    
    // Interaktivní časová osa
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            const sectionId = period === 'Středověk' ? 'stredovek' :
                             period === 'Renesance' ? 'renesance' :
                             period === 'Baroko' ? 'baroko' :
                             period === '19. století' ? '19stoleti' :
                             period === 'Moderna' ? 'moderna' : 'soucasnost';
            
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Zvýraznění umělců při najetí na jejich díla
    const artworks = document.querySelectorAll('.artwork');
    
    artworks.forEach(artwork => {
        artwork.addEventListener('mouseenter', function() {
            const artist = this.getAttribute('data-artist');
            const artistItems = document.querySelectorAll(`li[data-artist="${artist}"]`);
            
            artistItems.forEach(item => {
                item.classList.add('highlight');
            });
        });
        
        artwork.addEventListener('mouseleave', function() {
            const artist = this.getAttribute('data-artist');
            const artistItems = document.querySelectorAll(`li[data-artist="${artist}"]`);
            
            artistItems.forEach(item => {
                item.classList.remove('highlight');
            });
        });
    });
    
    // Vytvoření grafů
    createArtistsChart();
    createStylesChart();
    createThemesChart();
    createCollectionsChart();
});

// Graf počtu umělců podle období
function createArtistsChart() {
    const ctx = document.getElementById('artistsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Středověk', 'Renesance', 'Baroko', '19. století', 'Moderna', 'Současnost'],
            datasets: [{
                label: 'Počet významných umělců',
                data: [3, 2, 3, 4, 5, 5],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(52, 73, 94, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(52, 73, 94, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const period = context.label;
                            const artists = artistsByPeriod[period];
                            return artists ? 'Umělci: ' + artists.join(', ') : '';
                        }
                    }
                }
            }
        }
    });
}

// Graf vývoje uměleckých stylů
function createStylesChart() {
    const ctx = document.getElementById('stylesChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'],
            datasets: [
                {
                    label: 'Gotika',
                    data: [30, 80, 60, 20, 0, 0, 0, 0, 0],
                    borderColor: 'rgba(231, 76, 60, 1)',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true
                },
                {
                    label: 'Renesance',
                    data: [0, 0, 20, 70, 30, 0, 0, 0, 0],
                    borderColor: 'rgba(241, 196, 15, 1)',
                    backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    fill: true
                },
                {
                    label: 'Baroko',
                    data: [0, 0, 0, 10, 70, 80, 20, 0, 0],
                    borderColor: 'rgba(46, 204, 113, 1)',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    fill: true
                },
                {
                    label: 'Realismus',
                    data: [0, 0, 0, 0, 0, 0, 70, 40, 10],
                    borderColor: 'rgba(52, 152, 219, 1)',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true
                },
                {
                    label: 'Moderna',
                    data: [0, 0, 0, 0, 0, 0, 0, 60, 30],
                    borderColor: 'rgba(155, 89, 182, 1)',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    fill: true
                },
                {
                    label: 'Současné směry',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 60],
                    borderColor: 'rgba(52, 73, 94, 1)',
                    backgroundColor: 'rgba(52, 73, 94, 0.1)',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Relativní zastoupení stylu (%)'
                    }
                }
            }
        }
    });
}

// Graf nejčastějších námětů
function createThemesChart() {
    const ctx = document.getElementById('themesChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Náboženské motivy', 'Portréty', 'Krajiny', 'Historické výjevy', 'Zátiší', 'Abstrakce'],
            datasets: [
                {
                    label: 'Středověk',
                    data: [95, 30, 10, 40, 5, 0],
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)'
                },
                {
                    label: 'Baroko',
                    data: [80, 60, 30, 50, 40, 0],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    pointBackgroundColor: 'rgba(46, 204, 113, 1)'
                },
                {
                    label: '19. století',
                    data: [40, 70, 80, 75, 50, 10],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)'
                },
                {
                    label: 'Moderna',
                    data: [20, 60, 50, 30, 40, 90],
                    backgroundColor: 'rgba(155, 89, 182, 0.2)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    pointBackgroundColor: 'rgba(155, 89, 182, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Graf zastoupení v národních sbírkách
function createCollectionsChart() {
    const ctx = document.getElementById('collectionsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Národní galerie v Praze', 'Moravská galerie v Brně', 'Galerie hlavního města Prahy', 'Muzeum umění Olomouc', 'Ostatní sbírky'],
            datasets: [{
                data: [45, 20, 15, 10, 10],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return label + ': ' + value + '%';
                        }
                    }
                }
            }
        }
    });
}
