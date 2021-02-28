// Cria o mapa
const map = L.map('mapid').setView([-23.6975402,-46.5592202], 16)

//  Cria e adiciona um título
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//  Cria ícone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Cria e adiciona um marcador
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    // Pegar latitude e longitude
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // Remove ícone
    marker && map.removeLayer(marker)
    // Adiciona ícone
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// Adicionar campo de  fotos
function addPhotoField(){
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    // Verificar se o campo está vazio, se nao, adicionar ao container imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1){
        // Limpar o campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove()
}

// Troca do "sim" e "não"
function toggleSelect(event){
    // Pegar o botão clicado
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active')
    )
    // Colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    // Atualizar o input hidden com o valor iniciado
    const input = document.querySelector('[name="open_on_weekends"]')
    // Verificar valor
    input.value = button.dataset.value
}