
const section = document.querySelector('section')

// Armazenamos os nomes dos vídeos a serem buscados.
const videos = [
    { 'name' : 'crystal' },
    { 'name' : 'elf' },
    { 'name' : 'frog' },
    { 'name' : 'monster' },
    { 'name' : 'pig' },
    { 'name' : 'rabbit' }
]

// Crie uma instância de um objeto db para armazenarmos nosso banco de dados.
let db

function init() {
      
    // Faz um loop pelos diferentes nomes de vídeo, tentando carregar um registro identificado por cada nome do banco de dados 'videos'. Se cada vídeo for encontrado no banco de dados (verificado ao ver se 'request.result' é avaliado em true — se o registro não estiver presente, ele será undefined), seus arquivos de vídeo (armazenados como blobs) e o nome do vídeo são passados ​para a função displayVideo() para colocá-los na IU. Se não, o nome do vídeo é passado para a função fetchVideoFromNetwork() para buscar o vídeo na rede.
    for(const video of videos) {

      // Abre a transação, obtêm o object store, e executa get() no vídeo pelo nome.
      const objectStore = db.transaction('videos_os').objectStore('videos_os')
      const request = objectStore.get(video.name)

      request.addEventListener('success', function() {

        // Se o resultado existir no banco de dados (não for undefined).
        if(request.result) {

            // Pega os vídeos do IDB (banco de dados) e os exibe usando displayVideo().
            console.log('taking video from IDB')
            displayVideo(request.result.mp4, request.result.webm, request.result.name)

        } else {

            console.log('fetching video from network')
            fetchVideoFromNetwork(video)
        }
      })
    }
}

function fetchVideoFromNetwork(video) {

    // fetch() busca as versões MP4 e WebM do vídeo e o método 'Response.blob()' extrai o corpo de cada resposta como um blob, nos dando uma representação de objeto dos vídeos que podem ser armazenados e exibidos.
    const mp4Blob = fetch(`videos/${video.name}.mp4`).then(response => response.blob())
    const webmBlob = fetch(`videos/${video.name}.webm`).then(response => response.blob())

    // Executa o próximo código somente quando ambas as promises são fulfilled (cumpridas).
    Promise.all([mp4Blob, webmBlob]).then(values => {

        // Exibe o vídeo obtido da rede.
        displayVideo(values[0], values[1], video.name)
      
        // Armazena o vídeo no IDB.
        storeVideo(values[0], values[1], video.name)
    })
}

function storeVideo(mp4Blob, webmBlob, name) {

    // Abre uma transação 'readwrite'.  Abre uma transação, obtêm uma referência ao object store 'videos_os'; torna-o um readwrite para que possamos gravar no IDB.
    const objectStore = db.transaction(['videos_os'], 'readwrite').objectStore('videos_os')

    // Cria um registro.
    const record = {
        mp4 : mp4Blob,
        webm : webmBlob,
        name : name
    }

    // IDBObjectStore.add() adiciona o registro ao IDB.
    const request = objectStore.add(record)

    request.addEventListener('success', function() { console.log('Record addition attempt finished') })
    request.addEventListener('error', function() { console.error(request.error) })
}

function displayVideo(mp4Blob, webmBlob, title) {

    // Cria URLs de objeto (URLs internas que apontam para os blobs de vídeos armazenados na memória) a partir dos blobs. Para exibir os blobs de vídeo em um elemento <video>, precisamos criar URLs de objeto usando o método URL.createObjectURL().
    const mp4URL = URL.createObjectURL(mp4Blob)
    const webmURL = URL.createObjectURL(webmBlob)

    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    h2.textContent = title
    const video = document.createElement('video')
    video.controls = true
    const source1 = document.createElement('source')
    source1.src = mp4URL
    source1.type = 'video/mp4'
    const source2 = document.createElement('source')
    source2.src = webmURL
    source2.type = 'video/webm'

    section.appendChild(article)
    article.appendChild(h2)
    article.appendChild(video)
    video.appendChild(source1)
    video.appendChild(source2)
}

// Abre o banco de dados; ele será criado se ainda não existir. (Veja upgradeneeded abaixo.)
const request = window.indexedDB.open('videos_db', 1)

request.addEventListener('error', function() { console.error('Database failed to open') })

request.addEventListener('success', function() {

    console.log('Database opened successfully')

    // Armazena o objeto de banco de dados aberto na variável db. Isso é muito usado abaixo.
    db = request.result
    init()
})

// Configura as tabelas do banco de dados se isso ainda não tiver sido feito.
request.addEventListener('upgradeneeded', function(e) {

    // Pega uma referência ao banco de dados aberto.
    const db = e.target.result

    // Cria um objectStore para armazenar os vídeos (basicamente como uma única tabela), incluindo uma chave de incremento automático.
    const objectStore = db.createObjectStore('videos_os', { keyPath: 'name' })

    // Defina quais itens de dados o objectStore conterá.
    objectStore.createIndex('mp4', 'mp4', { unique: false })
    objectStore.createIndex('webm', 'webm', { unique: false })

    console.log('Database setup complete')
})

// Registra o service worker para controlar o funcionamento do site offline.

if('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('Service Worker Registrado!'))
}