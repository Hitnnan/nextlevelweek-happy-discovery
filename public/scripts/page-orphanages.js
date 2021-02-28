// Cria o mapa
const map = L.map('mapid').setView([-23.6975402,-46.5592202], 17)

//  Cria e adiciona um título
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//  Cria ícone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){
    // Cria um balão sobreposto
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" <img src="/images/arrow-white.svg"> </a>`)
    
    // Cria e adiciona um marcador
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( orphanageElement =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    };

    addMarker(orphanage);
})
