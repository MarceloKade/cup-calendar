
function createGame(player1, hour, player2) {
    return `
            <li>
                <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}" />
                <strong>${hour}</strong>
                <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
            </li>
            `
}

function createCard(date, day, games) {
    return `
            <div class="card">
                <h2>${date} <span>${day}</span></h2>

                <ul>
                    ${games}
                </ul>
            </div>
            `
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Logo NLW" />
</header>
<main id="cards">
${createCard("24/11", "QUINTA",
    createGame('switzerland', '7:00', 'cameroon') +
    createGame('uruguay', '10:00', 'south-korea') +
    createGame('portugal', '13:00', 'ghana') +
    createGame('brasil', '16:00', 'servia')
)}
${createCard("28/11", "QUINTA",
    createGame('cameroon', '7:00', 'servia') +
    createGame('south-korea', '10:00', 'ghana') +
    createGame('brasil', '13:00', 'switzerland') +
    createGame('portugal', '13:00', 'uruguay')
)}
</main>
`	