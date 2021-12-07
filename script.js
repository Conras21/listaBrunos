const participants = [{
    img: './assets/bruno.jpg',
    nome: 'Bruno',
    position: 0,
    score: 0,
}, {
    img: './assets/PP.jpg',
    nome: 'PP',
    position: 0,
    score: 0,
}, {
    img: './assets/cinras.jpeg',
    nome: 'Cinras',
    position: 0,
    score: 0,
},  {
    img: './assets/cadila.jpg',
    nome: 'Cadila',
    position: 0,
    score: 0,
},  {
    img: './assets/flax.jpg',
    nome: 'Flax',
    position: 0,
    score: 0,
},  {
    img: './assets/kato.jpg',
    nome: 'Kato',
    position: 0,
    score: 0,
},  {
    img: './assets/leo.jpg',
    nome: 'Leo',
    position: 0,
    score: 0,
},  {
    img: './assets/tigronez.jpg',
    nome: 'Tigrão',
    position: 0,
    score: 0,
},  {
    img: './assets/yan.jpg',
    nome: 'Yan',
    position: 0,
    score: 0,
},  {
    img: './assets/zaga.jpg',
    nome: 'Zaga',
    position: 0,
    score: 0,
},
]

const Participant = {
    all: participants,


    score(index){
        console.log(Participant.all[index].nome)
        Participant.all[index].score += 3
        DOM.updateScore(Participant.all, index)

        App.reload()
    }
}

const DOM = {
    participantsContainer: document.querySelector('#data-table tbody'),

    addParticipant(participant, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLParticipant(participant, index)
        tr.dataset.index = index
        DOM.participantsContainer.appendChild(tr)

    },

    innerHTMLParticipant(participant, index) {
        let CSSclass
        if (participant.position>=1 && participant.position<=3) {
            CSSclass = "podium"
        } else if (participant.position>=8 && participant.position<=10){
            CSSclass = "z4"
        }

        const html = `
            <td><img src="${participant.img}" alt="${participant.nome}"></td>
            <td class=${CSSclass}>${participant.position}</td>
            <td class="name">${participant.nome}</td>
            <td>${participant.score}</td>
            <td>
                <a onclick="Participant.score(${index})" href="#"><button>+3</button></a>
            </td>
        `
        return html
    },

    updateLeader(participant){
        document.querySelector('.card.leader').innerHTML = `
        <h3>
            <span>Mais bruno</span>
        </h3>
        <p>${participant.nome}</p>
    `
    },

    clearParticipants(){
        this.participantsContainer.innerHTML = ""
    },

    updateScore(participant, index) {
        document.querySelector('#last-score').innerHTML = `
        <h3>
            <span>Última pontuação</span>
        </h3>
        <p>${participant[index].nome}</p>
        `
    }
}

const Utils = {
    calcPosition(vector){
        vector.sort(function(a,b){return b.score - a.score})        
    }
}

const App = {
    init(){
        Utils.calcPosition(Participant.all)

        Participant.all.forEach((participant, index) => {
            participant.position = index + 1
            DOM.addParticipant(participant, index)
        })

        DOM.updateLeader(Participant.all[0])


    },

    reload(){
        DOM.clearParticipants()
        App.init()
    }
}


App.init()



