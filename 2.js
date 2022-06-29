/*  
──────────────────────────────────────────────────────
2.js
────────────────────────────────────────────────────── */

const searchTerm = document.querySelector('.search')
const searchForm = document.querySelector('form')
const submitBtn = document.querySelector('.submit')
const section = document.querySelector('section')

// Quando a janela (guia) terminar de carregar, execute onClientLoad():

window.addEventListener('load', onClientLoad)

// Carregue e inicialize a API, logo em seguida, execute a função onYouTubeApiLoad():

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad)
}

function onYouTubeApiLoad() {

    gapi.client.setApiKey('AIzaSyBbEpySbFRa3RT3kGOtnqhaXVRSGNQryU4')

    searchForm.addEventListener('submit', search)
}

function search(e) {

    // Interrompendo o envio do formulário (sem isso, esta aplicação seria interrompida):

    e.preventDefault()

    // Criar uma solicitação de pesquisa usando Data API:

    const request = gapi.client.youtube.search.list({

        // Definir o tipo de dados que a resposta incluirá:

        part: 'snippet',

        // Definir o número de resultados que serão retornados:

        maxResults: 12,

        // Define a consulta de pesquisa para pesquisar:

        q: searchTerm.value
    })

    // Envia a solicitação, e especifica uma função a ser executada quando a resposta retornar:

    request.execute(onSearchResponse)
}

// Esta função tem automaticamente a resposta passada como parâmetro:

function onSearchResponse(response) {

    console.clear(); console.log(response.items)

    section.innerHTML = ''

    const results = response.items

    for (let i = 0; i < results.length; i++) {

        displayVideo(results[i], i)
    }
}

function displayVideo(result, i) {

    // Criar um div com um ID único para cada vídeo, a YouTube Iframe Player API 
    // substituirá cada um por um <iframe> contendo o vídeo correspondente:

    const div = document.createElement('div')
    var divId = 'div' + i
    div.id = divId
    section.appendChild(div)

    // Usar o construtor YT.Player() para criar um novo objeto de player de vídeo,
    // especificando o ID do elemento a ser substituído por ele (o <div>), uma altura e largura,
    // e um manipulador de eventos para manipular o evento onReady personalizado:

    const player = new YT.Player(divId, {

        width: '640',
        height: '360',
        videoId: result.id.videoId,
        events: {
            'onReady': onPlayerReady
        }
    })

    // O manipulador onPlayerReady() pega o ID de cada vídeo e verifica sua duração,
    // se a duração for 0, o vídeo não pode ser reproduzido, então apenas o excluímos:

    function onPlayerReady(e) {

        console.log(e.target)

        const myId = e.target.id
        const duration = e.target.getDuration()

        if (duration === 0) {

            console.log(`O vídeo ${myId} não pode ser reproduzido, então ele foi deletado.`)
            
            section.removeChild(e.target.a)

        } else {

            console.log(`O vídeo ${myId} está pronto para ser reproduzido.`)
        }
    }
}