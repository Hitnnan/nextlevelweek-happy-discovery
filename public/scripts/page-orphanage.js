// Argumentos para desabilitar do mapa
const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Cria o mapa
const map = L.map('mapid', options).setView([-23.6975402,-46.5592202], 16)

//  Cria e adiciona um título
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//  Cria ícone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2]
})

// Cria e adiciona um marcador
L.marker([-23.6975402,-46.5592202], { icon })
.addTo(map)

// Galeria de Imagens
function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active');
    }
    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    // Atualizar o container de imagem
    imageContainer.src = image.src
    // Adicionar a classe .active para o botão clicado
    button.classList.add('active')
}